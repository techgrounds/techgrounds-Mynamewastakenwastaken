import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class ProjectStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'ProductionVPC', {
      maxAzs: 2,  // We're using 2 AZ's
      cidr: '10.10.10.0/24',
      subnetConfiguration: [  // Configuration for the subnets
        {
          name: 'ProductionPublic',
          subnetType: ec2.SubnetType.PUBLIC,  // Public subnet
        },
      ],
    });
  }
}