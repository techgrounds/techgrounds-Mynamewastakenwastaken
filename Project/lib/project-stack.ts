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
      peerVpcId: vpc.node.addr,
      vpcId: vpc2.node.addr,
    });
  }
}