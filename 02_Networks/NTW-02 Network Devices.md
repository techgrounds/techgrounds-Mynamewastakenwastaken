# Network Devices

Netwerkapparaten zijn fysieke of virtuele apparaten die worden gebruikt om communicatie en gegevensoverdracht mogelijk te maken in computernetwerken. Deze apparaten bieden de basisinfrastructuur voor netwerkconnectiviteit en het verzenden van gegevens tussen verschillende nodes in een netwerk.

## Key-terms
- DHCP (Dynamic Host Configuration Protocol):  
DHCP is een netwerkprotocol dat wordt gebruikt om automatisch IP-adressen en andere netwerkconfiguraties aan netwerkapparaten toe te wijzen. Wanneer een apparaat verbinding maakt met een netwerk, kan het een DHCP verzoek verzenden om een IP-adres te verkrijgen. De DHCP server ontvangt dit verzoek en reageert door een uniek IP-adres toe te wijzen aan dat apparaat, samen met andere configuratiegegevens zoals het subnetmasker, de default gateway en de DNS-servers.

## Opdracht
### Gebruikte bronnen
ipconfig: De terminal command om mijn default gateway te vinden. Met dat IP-adres kan ik vervolgens op mijn modem inloggen.

### Resultaat
- Benoem en beschrijf de functies van veel voorkomend netwerkapparatuur:

Router:  
Een router is een apparaat dat pakketten van gegevens tussen verschillende netwerken kan doorsturen. Het neemt beslissingen op basis van IP-adressen en bepaalt de optimale route voor gegevensoverdracht.

Switch:  
Een switch is een apparaat dat netwerkverkeer regelt binnen een lokaal netwerk (LAN). Het stuurt gegevenspakketten alleen naar de specifieke bestemmingsnode in het netwerk, waardoor de netwerkprestaties worden geoptimaliseerd.

Modem:  
Een modem is een apparaat dat een computer of een netwerk verbindt met een internetprovider via een communicatiekanaal, zoals een telefoonlijn, kabel of glasvezelverbinding. Het converteert digitale gegevens van de computer naar een formaat dat via het communicatiekanaal kan worden verzonden en vice versa.

Access Point:  
Een access point (AP) is een apparaat dat draadloze netwerkverbindingen mogelijk maakt. Het fungeert als een centraal punt waarmee draadloze apparaten, zoals laptops, smartphones en tablets, verbinding kunnen maken met een bedraad netwerk.

Network Interface Card (NIC):  
Een netwerkinterfacekaart is een hardwarecomponent die in een computer wordt geplaatst en zorgt voor de fysieke verbinding met een netwerk. Het maakt de communicatie tussen de computer en het netwerk mogelijk en heeft een uniek MAC-adres dat de identiteit van de computer in het netwerk identificeert.

Deze apparaten werken samen om gegevens te verzenden, te ontvangen en te routeren in een netwerkomgeving, waardoor communicatie mogelijk wordt tussen verschillende nodes, apparaten en gebruikers binnen het netwerk.

- De meeste routers hebben een overzicht van alle verbonden apparaten, vind deze lijst. Welke andere informatie heeft de router over aangesloten apparatuur?

Met de webbrowser kunnen we via de default gateway (192.168.178.1) op de modem inloggen. Vervolgens kunnen we een lijst opvragen met alle verbonden apparaten:  
![[](..\00_includes\Cloud_pics\2\connected_devices.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/2/connected_devices.png?raw=true)

- Waar staat je DHCP server op jouw netwerk? Wat zijn de configuraties hiervan?  

Onder 'Advanced settings' kunnen we de DHCP server vinden. Hier is te zien dat in mijn geval de DHCP server IP adressen uitdeeld tussen 192.168.178.10 en 192.168.178.255:  
![[](..\00_includes\Cloud_pics\2\dhcp.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/2/dhcp.png?raw=true)
