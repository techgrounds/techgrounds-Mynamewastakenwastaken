import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import {readFileSync} from 'fs';
import * as kms from 'aws-cdk-lib/aws-kms';


export class ProjectStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      // Create the Production VPC
    const vpc = new ec2.Vpc(this, 'ProductionVPC', {
      ipAddresses: ec2.IpAddresses.cidr('10.10.10.0/24'),
      maxAzs: 2,
      subnetConfiguration: [
        {
          name: 'ProductionPublic',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

      // create the Admin VPC
    const vpc2 = new ec2.Vpc(this, 'AdminVPC', {
      ipAddresses: ec2.IpAddresses.cidr('10.20.20.0/24'),
      maxAzs: 2,
      subnetConfiguration: [
        {
          name: 'AdminPublic',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

      // Create the peering connection
    const VPCPeeringConnection = new ec2.CfnVPCPeeringConnection(this, 'Production_Admin_Peering', {
      peerVpcId: vpc.vpcId,
      vpcId: vpc2.vpcId,
    });

      // Loop through each public subnet of Production vpc and add the peering route
    vpc.publicSubnets.forEach(({ routeTable: { routeTableId } }, index) => {
      new ec2.CfnRoute(this, 'AdminPeering' + index, {
      routeTableId,
      destinationCidrBlock: '10.20.20.0/24',
      vpcPeeringConnectionId: VPCPeeringConnection.attrId
      });
    });

      // Loop through each public subnet of Admin vpc and add the peering route
    vpc2.publicSubnets.forEach(({ routeTable: { routeTableId } }, index) => {
      new ec2.CfnRoute(this, 'ProductionPeering' + index, {
      routeTableId,
      destinationCidrBlock: '10.10.10.0/24',
      vpcPeeringConnectionId: VPCPeeringConnection.attrId
      });
    });

      // Create a security group for Production
    const ProductionSG = new ec2.SecurityGroup(this, 'ProductionAccess', {
        vpc: vpc,
        description: 'Allow HTTP access and Admin access'
      });

      // Add an inbound rule to allow SSH traffic from 10.20.20.0/24
    ProductionSG.addIngressRule(ec2.Peer.ipv4('10.20.20.0/24'), ec2.Port.tcp(22), 'Allow SSH from 10.20.20.0/24');

      // Add an inbound rule to allow RDP traffic from 10.20.20.0/24
    ProductionSG.addIngressRule(ec2.Peer.ipv4('10.20.20.0/24'), ec2.Port.tcp(3389), 'Allow RDP from 10.20.20.0/24');

      // Add an inbound rule to allow HTTP/S traffic
    ProductionSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP traffic');
    ProductionSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow HTTPS traffic');

      // Create a security group for Admin
    const AdminSG = new ec2.SecurityGroup(this, 'AdminAccess', {
        vpc: vpc2,
        description: 'Allow public access from select ip'
      });    

      // Add an inbound rule to allow HTTP traffic from 10.20.20.0/24
    AdminSG.addIngressRule(ec2.Peer.ipv4('80.112.80.150/32'), ec2.Port.tcp(80), 'Allow HTTP from 80.112.80.150');

      // Create role for the production instance
    const instanceRole = new iam.Role(this, 'Instance', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      roleName: 'InstanceRole',
    });

      // Create role for the admin instance
    const instanceRole2 = new iam.Role(this, 'Instance2', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      roleName: 'AdminRole',
    });

    instanceRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2FullAccess'));
    instanceRole2.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2FullAccess'));

      // Create production instance
    const instance = new ec2.Instance(this, 'Webserver', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      vpc: vpc,
      securityGroup: ProductionSG,
      role: instanceRole,
    });
    
      // Create admin instance
    const instance2 = new ec2.Instance(this, 'Admninserver', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      vpc: vpc2,
      securityGroup: AdminSG,        
      role: instanceRole2,
    });

    // const userDataScript = readFileSync('./lib/userdata.sh', 'utf8');
    // instance.addUserData(userDataScript);
    // instance2.addUserData(userDataScript);

      // default = general purpose SSD
    const volume = new ec2.Volume(this, 'ProductionEBS', {
      availabilityZone: 'eu-central-1a',
      size: cdk.Size.gibibytes(1),
      encrypted: true,
    });
    
      // default = general purpose SSD
    const volume2 = new ec2.Volume(this, 'AdminEBS', {
      availabilityZone: 'eu-central-1a',
      size: cdk.Size.gibibytes(1),
      encrypted: true,
    });

    // volume.grantAttachVolume(instanceRole, [instance]);
    // volume2.grantAttachVolume(instanceRole2, [instance2]);

    // const encryptionKey = new kms.Key(this, 'ProductionKey', {
    //   enableKeyRotation: true,
    // });

    // const encryptionKey2 = new kms.Key(this, 'AdminKey', {
    //   enableKeyRotation: true,
    // });

  }
}