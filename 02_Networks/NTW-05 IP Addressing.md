# [Onderwerp]
[Geef een korte beschrijving van het onderwerp]

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
https://www.scaler.com/topics/computer-network/public-and-private-ip-address/
https://www.whatismyip.com/  

### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

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

- Ontdek wat je privé IP adres is van je laptop en mobiel op wifi.

![](..\00_includes\Cloud_pics\2\connected_devices.png)

Laptop: 192.168.178.227
Telefoon: 192.168.178.17

Zijn verschillend, zodat de modem weet welk verkeer naar welk apparaat gestuurd moet worden.

- Verander het privé IP adres van je mobiel naar dat van je laptop. Wat gebeurt er dan?

Werkt nog steeds, maar aanzienlijk trager.
- Probeer het privé IP adres van je mobiel te veranderen naar een adres buiten je netwerk. Wat gebeurt er dan?

Geen verbinding