# Subnetting
Subnets (subnetwerken) zijn onderverdelingen van een IP-netwerk. Een IP-netwerk bestaat uit een reeks IP-adressen die behoren tot een bepaald bereik. Door het netwerk op te splitsen in meerdere subnets, kunnen netwerkbeheerders het IP-adresbereik op een logische en efficiënte manier gebruiken en beheren.

## Key-terms
- Subnet:  
Elk subnet heeft zijn eigen bereik van IP-adressen dat wordt bepaald door het *subnetmasker*. Het subnetmasker bepaalt welk deel van het IP-adres wordt gebruikt voor het netwerk-ID (aan de linkerkant) en welk deel wordt gebruikt voor de host-ID (aan de rechterkant). Het subnetmasker '255.255.255.0' betekent bv dat de eerste drie blokken van '255' gebruikt worden voor het netwerk-ID, en dat er vervolgens 256 unieke adressen mogelijk zijn voor het laatste blok; 0 t/m 255.  
Over het algemeen worden de eerste en de laatste (0 en 255 in dit geval) gereserveerd voor het netwerk-adres en het broadcast-adres.
- CIDR

## Opdracht
### Gebruikte bronnen
[CIDR notation](https://docs.netgate.com/pfsense/en/latest/network/cidr.html)  
[Internet/NAT gateways](https://www.learnaws.org/2022/06/30/internet-vs-nat-gateway/)  
[Understanding IP Addresses](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking)  
[Subnet calculator](https://www.calculator.net/ip-subnet-calculator.html)  

### Ervaren problemen
De opdracht vraagt onder andere om: "1 private subnet dat internet toegang heeft via een NAT gateway. Dit subnet moet minimaal 30 hosts kunnen plaatsen (de 30 hosts is exclusief de NAT gateway)".  
NAT gateways zijn echter altijd deel van een *public* subnet, dus de opdracht was een beetje verwarrend.

Als oplossing heb ik een apart subnet gemaakt voor de NAT gateway.

### Resultaat
- Maak een netwerkarchitectuur die voldoet aan de volgende eisen:  
1 private subnet dat alleen van binnen het LAN bereikbaar is. Dit subnet moet minimaal 15 hosts kunnen plaatsen.  
1 private subnet dat internet toegang heeft via een NAT gateway. Dit subnet moet minimaal 30 hosts kunnen plaatsen (de 30 hosts is exclusief de NAT gateway).  
1 public subnet met een internet gateway. Dit subnet moet minimaal 5 hosts kunnen plaatsen (de 5 hosts is exclusief de internet gateway).

![[](..\00_includes\Cloud_pics\6\VPC_map.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/6/VPC_map.png?raw=true)

In deze architectuur maken we een publiek virtueel netwerk (192.168.0.0/24) dat verbonden is met het internet via een internet gateway. Dit netwerk gebruikt 256 ip-adressen (192.168.0.0 t/m 192.168.0.255), waarvan er 254 uitgedeeld kunnen worden (192.168.0.1 t/m 192.168.0.254).

Hierin maken we 1 privaat subnet (192.168.0.0/27) met 30 bruikbare ip-adressen (192.168.0.1 t/m 192.168.0.31). Dit netwerk is niet verbonden met de andere subnetten en kan van binnenuit geen verbinding maken naar het internet. In het schema heb ik er een VPC (virtual private cloud) van gemaakt, maar het zou net zo goed een fysiek netwerk kunnen zijn.

Vervolgens maken we een publiek subnet (192.168.0.32/27) met een NAT gateway die verbonden is met de internet gateway. Dit subnet heeft ook 30 bruikbare ip-adressen (192.168.0.33 t/m 63).

Als laatste maken we een privaat subnet (192.168.0.64/27) dat via de NAT gateway verbonden is met het internet. Dit subnet heeft wederom 30 bruikbare ip-adressen (192.168.0.65 t/m 192.168.0.95).

Hiermee hebben we aan alle eisen voldaan.
