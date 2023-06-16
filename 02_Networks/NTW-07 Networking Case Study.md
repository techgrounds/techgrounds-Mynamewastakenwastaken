# Network Architecture
Netwerkarchitectuur verwijst naar het ontwerp en de structuur van een computernetwerk. Het omvat de principes, protocollen, technologieën en standaarden die worden gebruikt om een netwerk te organiseren, te beheren en te communiceren met verschillende apparaten en systemen.

Netwerkarchitectuur richt zich op het creëren van een raamwerk dat de basis legt voor de communicatie en gegevensoverdracht in een netwerk. Het definieert de algemene structuur en functionaliteit van het netwerk, inclusief de hiërarchie, de onderlinge verbindingen en de services die worden aangeboden.

## Key-terms
- DMZ:  
De DMZ (Demilitarized Zone) fungeert als een bufferzone die externe en onbetrouwbare netwerken scheidt van interne en vertrouwde netwerken. Het wordt vaak gebruikt om een aantal diensten en bronnen beschikbaar te stellen voor externe gebruikers, zoals web- en e-mailservers, terwijl de interne netwerkomgeving wordt beschermd tegen directe externe toegang.
- Firewall:  
Een firewall is een beveiligingsapparaat of een softwaretoepassing die wordt gebruikt om een netwerk te beschermen tegen ongeautoriseerde toegang en schadelijk verkeer. Het controleert het inkomende en uitgaande netwerkverkeer op basis van vooraf gedefinieerde regels. Deze regels bepalen welk verkeer wordt toegestaan en welk verkeer wordt geblokkeerd.
- Least-privilege permissions:  
Dit is een beleid waarin elke gebruiker in een systeem alleen het kleinste aantal permissions krijgt die absoluut noodzakelijk zijn om hun taken uit te kunnen voeren. Meestal worden die permissions in bepaalde "rollen" vastgelegd, en gebruikers kunnen een of meerdere rollen toegewezen krijgen.

## Opdracht
### Gebruikte bronnen
[Secure network architecture](https://medium.com/@nakah_/recommended-design-for-a-secure-network-architecture-15612e17ece4)  
[What is DMZ](https://www.fortinet.com/resources/cyberglossary/what-is-dmz)  


### Resultaat
- Design a network architecture for the following use case where security is very important:  
A web server where our webshop is hosted  
A database with login credentials for users on the webshop  
5 workstations for the office workers  
A printer  
An AD server  
A file server containing internal documents  

Ik heb de architectuur ontworpen met de aanname dat het bedrijf een redelijk beveiligde fysieke omgeving heeft voor de servers en werkomgeving. Indien dat niet het geval is, zou een vergelijkbare architectuur werken in een cloud omgeving: zolang de DMZ omgeving maar logisch afgescheiden blijft van het interne netwerk. Daarnaast heb ik de AD server behandeld als een server om advertenties aan te leveren; als er een Active Directory server bedoeld wordt zou ik aanraden om die te combineren met de Documents server.  

![[](..\00_includes\Security_pics\1\Network_map.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Security_pics/1/Network_map_AD.png?raw=true)

We sluiten eerst een router aan om verbinding te maken met het internet, met een externe firewall die zoveel mogelijk schadelijk verkeer blokkeert.  

Vervolgens plaatsen we een switch met een firewall voor de DMZ, waarin we alle servers plaatsen die voor externe gebruikers toegankelijk moeten zijn. Zelfs als er schadelijk verkeer door de firewalls heen is gekomen, kan er niet veel schade aangericht worden.  

Achter de DMZ komt de intranet switch voor het interne netwerk met een eigen firewall. Hier kunnen alle werkcomputers aangesloten worden met de printer en de server voor documenten. Het is wel belangrijk om op het interne netwerk een beleid van "least-privilege permissions" aan te houden; oftewel gebruikers alleen het kleinste aantal privileges te geven die noodzakelijk zijn voor hun taken.
