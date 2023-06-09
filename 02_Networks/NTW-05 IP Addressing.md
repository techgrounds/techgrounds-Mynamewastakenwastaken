# IP Adressing
IP-adressen (Internet Protocol-adressen) zijn unieke numerieke identificaties die worden gebruikt om apparaten op een netwerk te identificeren en communicatie mogelijk te maken tussen verschillende apparaten via het Internet Protocol (IP).

Een IP-adres is een reeks cijfers die meestal in de vorm van vier getallen wordt weergegeven, gescheiden door punten, zoals '192.168.0.1'. Elk apparaat dat verbinding maakt met een netwerk krijgt een IP-adres toegewezen om uniek geïdentificeerd te kunnen worden binnen dat netwerk.

Er zijn twee versies van IP-adressen in gebruik: IPv4 (Internet Protocol versie 4) en IPv6 (Internet Protocol versie 6). IPv4-adressen bestaan uit 32 bits en worden weergegeven in het dot-decimal formaat, zoals hierboven vermeld. IPv6-adressen zijn 128 bits lang en worden weergegeven in een hexadecimale notatie, bijvoorbeeld '2001:0db8:85a3:0000:0000:8a2e:0370:7334'.

## Key-terms
- DNS:  
DNS staat voor "Domain Name System" en het is een systeem dat wordt gebruikt om domeinnamen om te zetten in IP-adressen. Het fungeert als een soort telefoonboek van het internet, waarbij domeinnamen worden vertaald naar de numerieke IP-adressen die computers gebruiken om met elkaar te communiceren.

## Opdracht
### Gebruikte bronnen
https://www.scaler.com/topics/computer-network/public-and-private-ip-address/
https://www.whatismyip.com/  


### Resultaat
- Ontdek wat je publieke IP adres is van je laptop en mobiel op wifi.
Zijn de adressen hetzelfde of niet? Leg uit waarom.

Mijn apparaten hebben hetzelfde IPv4 adres:
My Public IPv4 is:
213.127.63.117

Verschillende IPv6: 
My Public IPv6 is:
2001:1c04:480b:ef00:284f:3993:6348:c748
2001:1c04:480b:ef00:747b:a764:70b1:3357

In een IPv6-netwerk wordt elk apparaat meestal voorzien van meerdere IPv6-adressen. Een van deze adressen is het zogenaamde "link-local" adres, dat uniek is voor elk apparaat op het lokale netwerksegment. Dit adres begint meestal met "fe80::/10" en wordt automatisch toegewezen aan het apparaat wanneer het verbinding maakt met het netwerk.

Daarnaast kan een apparaat ook één of meerdere "globale" IPv6-adressen hebben, die uniek zijn voor het gehele internet. Deze adressen worden vaak gegenereerd met behulp van een methode zoals Stateless Address Autoconfiguration (SLAAC) of DHCPv6. Deze methoden maken gebruik van informatie van de router om unieke IPv6-adressen toe te wijzen aan de apparaten op het netwerk.

Het is mogelijk dat de router verschillende adressen toewijst aan verschillende apparaten, zelfs als ze op hetzelfde netwerk zijn aangesloten. Dit kan te maken hebben met de manier waarop de router de adressen genereert of beheert. Het kan ook te maken hebben met verschillende netwerkinterfaces of netwerksegmenten waarmee de apparaten zijn verbonden.

Kortom, de router kan verschillende IPv6-adressen toewijzen aan apparaten op basis van verschillende factoren, zoals de netwerkconfiguratie, de manier waarop de adressen worden gegenereerd en het beheer van het adresbereik door de router.

- Ontdek wat je privé IP adres is van je laptop en mobiel op wifi. Zijn de adressen hetzelfde of niet? Leg uit waarom.  

We kunnen op onze modem precies zien welke apparaten verbonden zijn met welke IP adressen:  
![[](..\00_includes\Cloud_pics\2\connected_devices.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/2/connected_devices.png?raw=true)  

Laptop (Flapflop): 192.168.178.227  
Mobiel (POCO): 192.168.178.17

Deze zijn verschillend, zodat de modem weet welke data naar welk apparaat gestuurd moet worden.

- Verander het privé IP adres van je mobiel naar dat van je laptop. Wat gebeurt er dan?  

Ik geef eerst mijn mobiel een statisch IP adres dat identiek is aan dat van mijn laptop. Het internet werkt daarna op beide apparaten nog steeds, maar lijkt wel iets trager. We kunnen op de modem zien wat er ongeveer aan de hand is:

![[](..\00_includes\Cloud_pics\2\connected_devices.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/5/connected_sameip.png?raw=true)  

We kunnen zien dat de laptop nog steeds een IPv4 adres heeft, maar dat mijn mobiel (te herkennen aan het MAC adres) opeens de naam "Unknown" heeft gekregen. Deze heeft geen IPv4 adres meer, maar nog wel een uniek IPv6 adres, wat verklaart waarom beide apparaten nog steeds verbinding hebben.

- Probeer het privé IP adres van je mobiel te veranderen naar een adres buiten je netwerk. Wat gebeurt er dan?  
 
Als ik mijn mobiel een adres buiten het submaster 255.255.255.0 geef valt de verbinding helemaal weg.