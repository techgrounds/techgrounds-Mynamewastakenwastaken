# [Onderwerp]
[Geef een korte beschrijving van het onderwerp]

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
[nmap](https://www.geeksforgeeks.org/nmap-command-in-linux-with-examples/)  
https://linuxconfig.org/linux-ipconfig-equivalent  
https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/  

### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

### Resultaat
- Scan the network of your Linux machine using nmap. What do you find?  

Om de linux omgeving te scannen kunnen we 'nmap' gebruiken, wat we eerst moeten installeren;  
![](..\00_includes\Security_pics\1\nmap_install.png)  

Vervolgens kunnen we met 'ip r' eerst ons subnet bekijken. Daarnmee kunnen zien dat we ons in het subnet 10.105.175.0/24 bevinden, met het IP adres '10.105.175.202'. Met die informatie kunnen nmap gebruiken met een wildcard '*' om het hele subnet te scannen;  

![](..\00_includes\Security_pics\1\nmap_scan.png)  

In dat overzicht zien we alle Ubuntu VM's van de hele studiegroep, waaronder ook die van mij;

![](..\00_includes\Security_pics\1\nmap_micha.png)  

- Open Wireshark in Windows/MacOS Machine. Analyse what happens when you open an internet browser.  

Als eerste filteren we in Wireshark op het IP adres van mijn pc, zodat we de rest van het internetverkeer niet zien. Ik gebruik Zoom op een laptop, anders zou ik met 'not udp' dat verkeer er ook uit moeten filteren.

![](..\00_includes\Security_pics\1\IP_src.png)

Als we dan een browser opstarten zien we meerdere keren 'Client Hello' berichten waar meerdere reacties op volgen;

![](..\00_includes\Security_pics\1\client_handshake.png)  

Dit is hoe o.a. beveiligde HTTPS verbindingen op start worden gebracht. De client (mijn pc) geeft een 'Hello' aan de server waarmee die probeert te verbinden, en krijgt een 'Hello' van de server terug. Vervolgens worden er versleutelde 'handshakes' verstuurd om een symmetrisch beveiligde verbinding tot stand te brengen.