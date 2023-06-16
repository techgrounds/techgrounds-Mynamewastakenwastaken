# Protocols
Internetprotocollen zijn een set regels en procedures die worden gebruikt om gegevens uit te wisselen en te communiceren over computernetwerken, zoals het internet. Ze vormen de basis voor de communicatie tussen verschillende apparaten en systemen die zijn verbonden met het internet.

De belangrijkste internetprotocollen zijn het Internet Protocol (IP) en het Transmission Control Protocol (TCP). Het Internet Protocol zorgt voor het adresseren en routeren van gegevenspakketten over het netwerk. TCP is verantwoordelijk voor het beheren van de betrouwbare overdracht van gegevens tussen computers, waarbij het ervoor zorgt dat de gegevens in de juiste volgorde aankomen en eventuele fouten worden gedetecteerd en hersteld.

Daarnaast zijn er nog andere protocollen die op verschillende niveaus van de netwerkarchitectuur opereren, zoals het Hypertext Transfer Protocol (HTTP) voor het ophalen van webpagina's, het Simple Mail Transfer Protocol (SMTP) voor het verzenden van e-mails, het File Transfer Protocol (FTP) voor het overdragen van bestanden, en het Domain Name System (DNS) voor het vertalen van domeinnamen naar IP-adressen.

Al deze protocollen werken samen om de verschillende soorten communicatie en gegevensoverdracht op het internet mogelijk te maken. Ze stellen apparaten in staat om met elkaar te communiceren en maken het internet tot een wereldwijd netwerk van netwerken.

## Key-terms
- packet

## Opdracht
### Gebruikte bronnen
https://en.wikipedia.org/wiki/List_of_network_protocols_(OSI_model)  
https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force  
https://www.comptia.org/content/articles/what-is-wireshark-and-how-to-use-it#:~:text=Wireshark%20is%20a%20network%20protocol,packet%20sniffer%20in%20the%20world.  
https://www.youtube.com/watch?v=U9i7rWV-Gxo  

### Resultaat
- Identify several other protocols and their associated OSI layer. Name at least one for each layer:

1 - Fysieke laag: 
USB  (Universal Serial Bus)  
DSL  (Digital Subscriber Line)  

2 - Datalinklaag:
PPP (Point-to-Point Protocol)  
Ethernet

3 - Netwerklaag:  
IP (Internet Protocol)  
NAT (Network Address Translation)  

4 - Transportlaag:  
TCP (Transmission Control Protocol)  
UDP (User Datagram Protocol)  

5 - Sessielaag:  
SDP (Sockets Direct Protocol)  
NCP (NetWare Core Protocol)  

6 - Presentatielaag:  
SSL (Secure Socket Tunneling)  
NCP (NetWare Core Protocol)  

7 - Toepassingslaag:  
HTTP (HyperText Transfer Protocol)  
DHCP (Dynamic Host Configuration Protocol)

- Figure out who determines what protocols we use and what is needed to introduce your own protocol:

Het IETF (Internet Engineering Task Force) is een open internationale gemeenschap van technische experts, ingenieurs en andere belanghebbenden die betrokken zijn bij de ontwikkeling en standaardisatie van internetprotocollen en -technologieën. Het is een vrijwillige organisatie die tot doel heeft het  functioneren van het internet te bevorderen.

De IETF opereert op basis van de principes van openheid, inclusiviteit en consensus. Iedereen kan deelnemen aan de activiteiten van de IETF, ongeacht hun organisatie of achtergrond. Beslissingen worden genomen op basis van consensus, waarbij gestreefd wordt naar het bereiken van een brede overeenstemming onder de betrokkenen.

- Look into wireshark and install this program. Try and capture a bit of your own network data. Search for a protocol you know and try to understand how it functions:

Eerst verzamelen we wat netwerkverkeer:  
![[](..\00_includes\Cloud_pics\3\shark_packets.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/3/shark_packets.png?raw=true)

Er staan meteen al wat protocollen tussen die we herkennen, zoals TCP en UDP van de OSI-laag 4. Als we op een van de TCP packets klikken zien we meer informatie:  
![[](..\00_includes\Cloud_pics\3\shark_packets_info.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/3/shark_packets_info.png?raw=true)

We zien eerst dat dit de 1327e packet is die Wireshark voor ons heeft opgevangen. Verder kunnen we zien hoeveel bytes er verstuurd zijn in die packet, met welk protocol, wat de oorsprong en bestemming waren, en hoeveel tijd dat verkeer heeft gekost.
