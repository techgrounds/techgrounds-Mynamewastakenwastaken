import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class ProjectStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'ProductionVPC', {
      maxAzs: 2,  // We're using 2 AZ's
      subnetConfiguration: [  // Configuration for the subnets
        {
          cidrMask: 24,  // The CIDR notation for a subnet (optional)
          name: 'ProductionPublic',
          subnetType: ec2.SubnetType.PUBLIC,  // Indicates this is a public subnet
        },
        {
          cidrMask: 24,  // The CIDR notation for a subnet (optional)
          name: 'ProductionPrivate',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,  // Indicates this is a private subnet
        },
      ],
    });
  }
}