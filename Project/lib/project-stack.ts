import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as asg from 'aws-cdk-lib/aws-autoscaling';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as cdw from 'aws-cdk-lib/aws-cloudwatch';
import * as iam from 'aws-cdk-lib/aws-iam';
import {readFileSync} from 'fs';
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as rds from 'aws-cdk-lib/aws-rds'
import * as backup from 'aws-cdk-lib/aws-backup';
import { VpcSubnetGroupType } from 'aws-cdk-lib/cx-api';
import { HealthCheck } from 'aws-cdk-lib/aws-appmesh';
import { truncate } from 'fs/promises';


export class ProjectStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      // Create a bucket for post deployment scripts
    const postbucket = new s3.Bucket(this, 'PostDeployment', {
      bucketName: 'post-deployment-scripts-1utlas52',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.KMS_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

      // Create key pairs for secure connections
    const cfnKeyPair = new ec2.CfnKeyPair(this, 'ProdKeyPair', {
      keyName: 'ProductionKey',
    });
    const cfnKeyPair2 = new ec2.CfnKeyPair(this, 'AdminKeyPair', {
      keyName: 'AdminKey',
    });    

    //   // Create the Production VPC
    // const vpc = new ec2.Vpc(this, 'ProductionVPC', {
    //   ipAddresses: ec2.IpAddresses.cidr('10.10.10.0/24'),
    //   maxAzs: 2,
    // });

    //   // create the Admin VPC
    // const vpc2 = new ec2.Vpc(this, 'AdminVPC', {
    //   ipAddresses: ec2.IpAddresses.cidr('10.20.20.0/24'),
    //   maxAzs: 2,
    //   subnetConfiguration: [
    //     {
    //       name: 'AdminSubnet',
    //       subnetType: ec2.SubnetType.PUBLIC,
    //     },
    //     {
    //       name: 'DBSubnet',
    //       subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
    //     },
    //   ],
    // });

    //   // Create the peering connection
    // const VPCPeeringConnection = new ec2.CfnVPCPeeringConnection(this, 'Production_Admin_Peering', {
    //   peerVpcId: vpc.vpcId,
    //   vpcId: vpc2.vpcId,
    // });

    //   // Loop through each subnet of Production vpc and add the peering route
    // vpc.publicSubnets.forEach(({ routeTable: { routeTableId } }, index) => {
    //   new ec2.CfnRoute(this, 'PublicPeering' + index, {
    //   routeTableId,
    //   destinationCidrBlock: '10.20.20.0/24',
    //   vpcPeeringConnectionId: VPCPeeringConnection.attrId
    //   });
    // });

    // vpc.privateSubnets.forEach(({ routeTable: { routeTableId } }, index) => {
    //   new ec2.CfnRoute(this, 'PrivatePeering' + index, {
    //   routeTableId,
    //   destinationCidrBlock: '10.20.20.0/24',
    //   vpcPeeringConnectionId: VPCPeeringConnection.attrId
    //   });
    // });

    //   // Loop through each public subnet of Admin vpc and add the peering route
    // vpc2.publicSubnets.forEach(({ routeTable: { routeTableId } }, index) => {
    //   new ec2.CfnRoute(this, 'ProductionPeering' + index, {
    //   routeTableId,
    //   destinationCidrBlock: '10.10.10.0/24',
    //   vpcPeeringConnectionId: VPCPeeringConnection.attrId
    //   });
    // });

    //   // Create a security group for Production
    // const ProductionSG = new ec2.SecurityGroup(this, 'ProductionAccess', {
    //     vpc: vpc,
    //     description: 'Allow Balancer and Admin access',
    //   });

    //   // Create a security group for Admin
    // const AdminSG = new ec2.SecurityGroup(this, 'AdminAccess', {
    //   vpc: vpc2,
    //   description: 'Allow public access from select ip'
    // });   

    // const BalancerSG = new ec2.SecurityGroup(this, 'ServerAccess', {
    //   vpc: vpc,
    //   description: 'Allow public access'
    // });  

    //   // Add an inbound rule to allow SSH traffic from 10.20.20.0/24
    // ProductionSG.addIngressRule(ec2.Peer.ipv4('10.20.20.0/24'), ec2.Port.tcp(22), 'Allow SSH from 10.20.20.0/24');
    // ProductionSG.addIngressRule(ec2.Peer.ipv4('10.20.20.0/24'), ec2.Port.tcp(3389), 'Allow RDP from 10.20.20.0/24');
    // // ProductionSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow inbound HTTPS traffic');
    // // ProductionSG.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow outbound HTTPS traffic');
    // ProductionSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow inbound HTTP traffic');
    // ProductionSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow inbound HTTP traffic');

    //   // Add an inbound rule to allow HTTP traffic from 10.20.20.0/24
    // AdminSG.addIngressRule(ec2.Peer.ipv4('80.112.80.150/32'), ec2.Port.allTraffic(), 'Allow all connections from 80.112.80.150');

    // BalancerSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP traffic');
    // BalancerSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow HTTPS traffic');

    //   // Create role for the production instance
    // const instanceRole = new iam.Role(this, 'Instance', {
    //   assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    //   roleName: 'InstanceRole',
    // });

    //   // Create role for the admin instance
    // const instanceRole2 = new iam.Role(this, 'Instance2', {
    //   assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    //   roleName: 'AdminRole',
    // });

    //   // instanceRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2FullAccess'));
    // instanceRole2.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));

    // const userDataScript = ec2.UserData.forLinux();
    // userDataScript.addCommands(
    //   readFileSync('./lib/userdata.sh', 'utf8')
    // );

    //   // Create admin instance
    // const instance2 = new ec2.Instance(this, 'Admninserver', {
    //   instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
    //   machineImage: ec2.MachineImage.latestWindows(ec2.WindowsVersion.WINDOWS_SERVER_2019_ENGLISH_FULL_BASE),
    //   vpc: vpc2,
    //   vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
    //   securityGroup: AdminSG,        
    //   role: instanceRole2,
    //   keyName: 'AdminKey',
    // });

    // const ScalingGroup = new asg.AutoScalingGroup(this, 'ASGWebServer', {
    //   vpc: vpc,
    //   keyName: 'ProductionKey',
    //   vpcSubnets: {
    //     subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
    //   },
    //   instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
    //   machineImage: ec2.MachineImage.latestAmazonLinux2(),
    //   securityGroup: ProductionSG,
    //   userData: userDataScript,
    //   maxCapacity: 3,
    //   minCapacity: 1,
    //   defaultInstanceWarmup: cdk.Duration.minutes(2),
    //   healthCheck: asg.HealthCheck.elb({
    //     grace: cdk.Duration.minutes(3),
    //   })
    // });
    
    // ScalingGroup.scaleOnCpuUtilization('CpuScaling', {
    //   targetUtilizationPercent: 80,
    // });

    // const LoadBalancer = new elb.ApplicationLoadBalancer(this, 'WebBalancer', {
    //   vpc: vpc,
    //   internetFacing: true,
    //   securityGroup: BalancerSG,
    // });

    // const SelfCertificate = elb.ListenerCertificate.fromArn('arn:aws:acm:eu-central-1:477007237229:certificate/5994a68b-24a2-4789-abb7-a7813f551ab2');

    // const listener = LoadBalancer.addListener('Listener', {
    //   port: 443,
    //   certificates: [SelfCertificate]
    // });

    // LoadBalancer.addListener('HttpListener', {
    //   port: 80,
    //   open: true,
    //   defaultAction: elb.ListenerAction.redirect({
    //     protocol: 'HTTPS',
    //     port: '443',
    //   }),
    // });

    // listener.addTargets('WebServerFleet', {
    //   port: 443,
    //   targets: [ScalingGroup]
    // });

    //   // Create IAM roles for production/admin staff
    // const productiongroup = new iam.Group(this, 'ProductionGroup');
    // const admingroup = new iam.Group(this, 'AdminGroup');
  
    //   // Allow production full ec2 access in the production VPC
    // productiongroup.addToPolicy(
    //   new iam.PolicyStatement({
    //     effect: iam.Effect.ALLOW,
    //     resources: ['arn:aws:ec2:eu-central-1:477007237229:vpc/' + vpc.vpcId],
    //     actions: ['ec2:*']
    //   })
    // );
      
    //   // Allow admin full access to everything
    // admingroup.addToPolicy(
    //   new iam.PolicyStatement({
    //     effect: iam.Effect.ALLOW,
    //     resources: ['arn:aws:ec2:eu-central-1:477007237229:vpc/*'],
    //     actions: ['*']
    //   })
    // );

    //   // Create an Aurora DB cluster
    // const cluster = new rds.DatabaseCluster(this, 'Database', {
    //   engine: rds.DatabaseClusterEngine.auroraMysql({ 
    //     version: rds.AuroraMysqlEngineVersion.VER_3_04_0 }),
    //   writer: rds.ClusterInstance.provisioned('writer', {
    //     publiclyAccessible: false,
    //   }),
    //   readers: [
    //     rds.ClusterInstance.provisioned('reader1', { promotionTier: 1 }),
    //     rds.ClusterInstance.serverlessV2('reader2'),
    //   ],
    //   vpc: vpc2,
    //   vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
    // });

    //   // Create production instance
    // const instance = new ec2.Instance(this, 'Webserver', {
    //   instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
    //   machineImage: ec2.MachineImage.latestAmazonLinux2(),
    //   vpc: vpc,
    //   securityGroup: ProductionSG,
    //   role: instanceRole,
    //   keyName: 'ProductionKey',
    // });
    
    // const WebVault = new backup.CfnBackupVault(this, 'BackupVault', {
      //   backupVaultName: 'WebserverBackups',
      // });

    // const Backup = new backup.BackupPlan(this, 'WebBackup')

    //   // Create a backup plan
    //   Backup.addRule(new backup.BackupPlanRule ({
    //   completionWindow: cdk.Duration.hours(2),
    //   startWindow: cdk.Duration.hours(1),
    //   deleteAfter: cdk.Duration.days(7),
    //   scheduleExpression: cdk.aws_events.Schedule.cron({
    //     day: '*',
    //     hour: '0',
    //     minute: '0',
    //   }),
    // }));

    // Backup.addSelection('Selection', {
    //   resources: [
    //     backup.BackupResource.fromEc2Instance(instance)
    //   ]
    // })



    //   // default = general purpose SSD
    // const volume = new ec2.Volume(this, 'ProductionEBS', {
    //   availabilityZone: 'eu-central-1a',
    //   size: cdk.Size.gibibytes(1),
    //   encrypted: true,
    //   volumeName: 'ProductionEBS',
    // });
    
    //   // default = general purpose SSD
    // const volume2 = new ec2.Volume(this, 'AdminEBS', {
    //   availabilityZone: 'eu-central-1a',
    //   size: cdk.Size.gibibytes(1),
    //   encrypted: true,
    // });

    // volume.grantAttachVolume(instanceRole)
    // // volume2.grantAttachVolume(instanceRole2)

    // const ProdVolumeAttachment = new ec2.CfnVolumeAttachment(this, 'ProdVolumeAttachment', {
    //   instanceId: instance.instanceId,
    //   volumeId: volume.volumeId,
    // });

  }
}