# VPC
[Geef een korte beschrijving van het onderwerp]

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html  
https://docs.aws.amazon.com/directoryservice/latest/admin-guide/gsg_create_vpc.html  
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html  

### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

### Resultaat

- Allocate an Elastic IP address to your account.  

![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/Elastic_IP.png?raw=true)  

- Create a new VPC with the following requirements:  
Region: Frankfurt (eu-central-1)  
VPC with a public and a private subnet  
Name: Lab VPC  
CIDR: 10.0.0.0/16  
Requirements for the public subnet:  
Name: Public subnet 1  
CIDR: 10.0.0.0/24  
AZ: eu-central-1a  
Requirements for the private subnet:  
Name: Private subnet 1  
CIDR: 10.0.1.0/24  
AZ: eu-central-1a  

Eerst maken we de nieuwe VPC aan;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/VPC_create1.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/VPC_create2.png?raw=true)  
In de preview kunnen we controleren of het er goed uit ziet;
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/VPC_preview.png?raw=true)  

- Create an additional public subnet with the following requirements:  
VPC: Lab VPC  
Name: Public Subnet 2  
AZ: eu-central-1b  
CIDR: 10.0.2.0/24  
Create an additional private subnet with the following requirements:  
VPC: Lab VPC  
Name: Private Subnet 2  
AZ: eu-central-1b  
CIDR: 10.0.3.0/24  

Onder 'subnets' kunnen we extra subnets aanmaken;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/VPC_extra_subs.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/Subnet_map.png?raw=true)  

- View the main route table for Lab VPC. It should have an entry for the NAT gateway. Rename this route table to Private Route Table.  
Explicitly associate the private route table with your two private subnets.  
View the other route table for Lab VPC. It should have an entry for the internet gateway. Rename this route table to Public Route Table.  
Explicitly associate the public route table to your two public subnets.  

De publieke subnets zijn te herkennen aan de route met destination '0.0.0.0/0' en target 'igw';
![]([..\00_includes\04_AWS\10\Subnet_route.png](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/Subnet_route.png?raw=true))  
We geven de nieuwe subnets de correcte route tables en passen de naamgeving aan;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/Subnet_route_edit.png?raw=true)  
We kunnen in het overzicht zien dat het klopt;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/Subnet_map_final.png?raw=true)  

- Create a Security Group with the following requirements:
Name: Web SG  
Description: Enable HTTP Access  
VPC: Lab VPC  
Inbound rule: allow HTTP access from anywhere  
Outbound rule: Allow all traffic  

![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/Security_rules.png?raw=true)  

- Launch an EC2 instance with the following requirements:
AMI: Amazon Linux 2  
Type: t3.micro  
Subnet: Public subnet 2  
Auto-assign Public IP: Enable  
User data:  
\#!/bin/bash  
\# Install Apache Web Server and PHP  
yum install -y httpd mysql php  
\# Download Lab files  
wget https://aws-tc-largeobjects.s3.amazonaws.com/CUR-TF-100-RESTRT-1/80-lab-vpc-web-server/lab-app.zip  
unzip lab-app.zip -d /var/www/html/  
\# Turn on web server  
chkconfig httpd on  
service httpd start  
Tag:  
Key: Name  
Value: Web server  
Security Group: Web SG  
Key pair: no key pair  

We starten een EC2 instance met de aangegeven specificaties en wachten tot die opgestart is;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/EC2_create.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/EC2_launch.png?raw=true)  

- Connect to your server using the public IPv4 DNS name.

Als laatste kunnen we met het publieke IP adres via http verbinding maken;
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/10/EC2_connected.png?raw=true)  
