# Elastic Block Store (EBS)
EBS (Elastic Block Store) is een opslagservice die wordt aangeboden door AWS. Het is een blokopslagoplossing die ontworpen is om persistent en duurzaam opslaggeheugen te bieden aan EC2-instances (Elastic Compute Cloud) in de AWS-cloudomgeving.

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
https://www.simplified.guide/linux/disk-mount  
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html  


### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

### Resultaat
- Navigate to the EC2 menu.
Create a t2.micro Amazon Linux 2 machine with all the default settings.
Create a new EBS volume with the following requirements:
Volume type: General Purpose SSD (gp3)
Size: 1 GiB
Availability Zone: same as your EC2
Wait for its state to be available.  

![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_create.png?raw=true)  


- Attach your new EBS volume to your EC2 instance.  
Connect to your EC2 instance using SSH.  
Mount the EBS volume on your instance.  
Create a text file and write it to the mounted EBS volume.  

![]([..\00_includes\04_AWS\7\EBS_attach.png](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_attach.png?raw=true))  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EC2_login.png?raw=true)  
Met 'lsblk' kunnen we het EBS volume zien (xvdf), en we maken een directory om het volume aan te mounten;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EC2_makedir.png?raw=true)  
We moeten het nieuwe volume wel eerst formateren;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_format.png?raw=true)  
Dan kunnen we eindelijk mounten, en met 'lsblk' bevestigen dat het gelukt is;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_mount.png?raw=true)  
Als laatste moeten we eerst de permissies aanpassen, en dan schrijven we een tekstbestandje in de nieuwe directory;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_chmod.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_cat.png?raw=true)  

- Create a snapshot of your EBS volume.  
Remove the text file from your original EBS volume.  
Create a new volume using your snapshot.  
Detach your original EBS volume.  
Attach the new volume to your EC2 and mount it.  
Find your text file on the new EBS volume.  

Eerst maken we een snapshot met het ID van het EBS volume;
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_backup.png?raw=true)  
Dan kunnen we het orginele tekstbestandje verwijderen, en het EBS volume detachen;
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/txt_remove.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_detach.png?raw=true)  
In de instance kunnen we bevestigen dat het volume inderdaad detached is;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/detach_conf.png?raw=true)  

Vervolgens maken we een EBS volume met de het ID van de snapshot, en attachen we die aan de instance;
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/EBS_snapshot.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/Snap_attach.png?raw=true)  
De backup van ons eerste volume mount automatisch op dezelfde directory, en daar kunnen we ons bestandje weer vinden;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/7/backup_txt.png?raw=true)  

