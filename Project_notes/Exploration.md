# Exploration Epics

## - Als team willen wij duidelijk hebben wat de eisen zijn van de applicatie.

Er zijn al een paar eisen duidelijk:
- Alle VM disks moeten encrypted zijn.
- De webserver moet dagelijks gebackupt worden. De backups moeten 7 dagen behouden worden.
- De webserver moet op een geautomatiseerde manier geïnstalleerd worden.
- De admin/management server moet bereikbaar zijn met een publiek IP.
- De admin/management server moet alleen bereikbaar zijn van vertrouwde locaties (office/admin’s thuis)
- De volgende IP ranges worden gebruikt: 10.10.10.0/24 & 10.20.20.0/24
- Alle subnets moeten beschermd worden door een firewall op subnet niveau.
SSH of RDP verbindingen met de webserver mogen alleen tot stand komen vanuit de admin server.
- Wees niet bang om verbeteringen in de architectuur voor te stellen of te implementeren, maar maak wel harde keuzes, zodat je de deadline kan halen.

Onduidelijkheden:
- Welk type sleutel moet gebruikt worden voor de versleuteling?
- Specificaties van de VM hardware?
- Waar moeten precies backups van gemaakt worden? Alleen de gekoppelde volumes of ook de AMI?
- Informatie om de webserver automatisch te kunnen installeren
- Wat zijn de vertrouwde IP locaties?
- Geen scaling group?
- Geen failover/recovery?


## - Als team willen wij een duidelijk overzicht van de aannames die wij gemaakt hebben.



## - Als team willen wij een duidelijk overzicht hebben van de Cloud Infrastructuur die de applicatie nodig heeft.

- VPC (peering)
- AWS Network Firewall
- AWS Backup
- KMS
- S3
- IAM
- EC2 (user data)
- EBS