# EC2
[Geef een korte beschrijving van het onderwerp]

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules.html  
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html  
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html  


### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

### Resultaat
- Navigate to the EC2 menu.  
- Launch an EC2 instance with the following requirements:  
AMI: Amazon Linux 2 AMI (HVM), SSD Volume Type  
Instance type: t2.micro  
Default network, no preference for subnet  
Termination protection: enabled  
User data:  
#!/bin/bash  
yum -y install httpd  
systemctl enable httpd  
systemctl start httpd  
echo '\<html>\<h1>Hello From Your Web Server!\</h1>\</html>' >   /var/www/html/index.html  
Root volume: general purpose SSD, Size: 8 GiB
New Security Group:  
Name: Web server SG  
Rules: Allow SSH, HTTP and HTTPS from anywhere  

We starten eerst de EC2 instance met de aangegeven specificaties;
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/6/EC2_ami.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/6/EC2_userdata.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/6/EC2_secgroup.png?raw=true)  

- Wait for the Status Checks to get out of the initialization stage. When you click the Status Checks tab, you should see that the System reachability and the Instance reachability checks have passed.  

We kunnen zien dat de instance klaar is voor gebruik;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/6/EC2_conf.png?raw=true)  

- Log in to your EC2 instance using an ssh connection.
Terminate your instance.

Als laatste log ik met de sleutel en het publieke IP adres in via powershell;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/6/EC2_login.png?raw=true)  
Om de instance te kunnen verwijderen moeten we eerst een beveiliging weghalen;
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/6/remove_prot.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/6/terminate.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/6/terminate_conf.png?raw=true)  
