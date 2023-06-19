# [Onderwerp]
[Geef een korte beschrijving van het onderwerp]

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
[nmap](https://www.geeksforgeeks.org/nmap-command-in-linux-with-examples/)  
https://linuxconfig.org/linux-ipconfig-equivalent  

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