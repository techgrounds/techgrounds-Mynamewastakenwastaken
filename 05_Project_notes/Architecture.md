# Architecture

## Resources

- ~~S3 bucket for deployment, encrypted~~
- IAM for prod & management
- 1 region
- 2 VPCs (Production & Management)
- 2 AZs each
- 1 subnet per AZ, 4 total
- KMS for encryption in transit & at rest
- AWS backup

Best practice, seperate apps for:

- Infrastructure (such as Amazon S3 buckets, Amazon RDS databases, or an Amazon VPC network)

- Runtime code (such as AWS Lambda functions)

- Configuration code

Alle VM disks moeten encrypted zijn.
De webserver moet dagelijks gebackupt worden. De backups moeten 7 dagen behouden worden.
De webserver moet op een geautomatiseerde manier geïnstalleerd worden.
De admin/management server moet bereikbaar zijn met een publiek IP.
De admin/management server moet alleen bereikbaar zijn van vertrouwde locaties (office/admin’s thuis)
De volgende IP ranges worden gebruikt: 10.10.10.0/24 & 10.20.20.0/24
Alle subnets moeten beschermd worden door een firewall op subnet niveau.
SSH of RDP verbindingen met de webserver mogen alleen tot stand komen vanuit de admin server.
Wees niet bang om verbeteringen in de architectuur voor te stellen of te implementeren, maar maak wel harde keuzes, zodat je de deadline kan halen.
