import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class ProjectStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'ProductionVPC', {
      ipAddresses: ec2.IpAddresses.cidr('10.10.10.0/24'),
      maxAzs: 2,  // We're using 2 AZ's
      subnetConfiguration: [  // Configuration for the subnets
        {
          name: 'ProductionPublic',
          subnetType: ec2.SubnetType.PUBLIC,  // Public subnet
        },
      ],
    });

    const vpc2 = new ec2.Vpc(this, 'AdminVPC', {
      ipAddresses: ec2.IpAddresses.cidr('10.20.20.0/24'),
      maxAzs: 2,  // We're using 2 AZ's
      subnetConfiguration: [  // Configuration for the subnets
        {
          name: 'AdminPublic',
          subnetType: ec2.SubnetType.PUBLIC,  // Public subnet
        },
      ],
    });

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

      // Create a security group for your instances
    const ProductionSG = new ec2.SecurityGroup(this, 'AdminAccess', {
        vpc,
      });

      // Add an ingress rule to allow SSH traffic only from 10.20.20.0/24
    ProductionSG.addIngressRule(ec2.Peer.ipv4('10.20.20.0/24'), ec2.Port.tcp(22), 'Allow SSH from 10.20.20.0/24');

      // Add an ingress rule to allow RDP traffic only from 10.20.20.0/24
    ProductionSG.addIngressRule(ec2.Peer.ipv4('10.20.20.0/24'), ec2.Port.tcp(3389), 'Allow RDP from 10.20.20.0/24');


  }
}