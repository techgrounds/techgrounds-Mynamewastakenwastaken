# Firewalls
Een firewall is een beveiligingsmechanisme dat wordt gebruikt om een netwerk of een individuele computer te beschermen tegen ongeautoriseerde toegang en ongewenst netwerkverkeer. Het fungeert als een barrière tussen een interne vertrouwde netwerkomgeving (bijvoorbeeld een bedrijfsnetwerk) en externe onbetrouwbare netwerken (bijvoorbeeld het internet). Firewalls kunnen zowel in hardware- als in softwarevorm bestaan.

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04  
https://serverspace.io/support/help/osnovnye-komandy-ufw/#:~:text=If%20you%20get%20a%20Status,all%20ports%20on%20the%20server.  

### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

### Resultaat

- Installeer een webserver op je VM.  

Ik had Apache2 al geïnstalleerd in een vorige opdracht, dus die kunnen we meteen gebruiken. Ik controleer eerst of de service al aanstaat:  
![](..\00_includes\Security_pics\2\apache_status.png)  
- Bekijk de standaardpagina die met de webserver geïnstalleerd is.  

We kunnen de server bereiken via het IP adres van de VM (3.121.130.219) die we al weten, en de webport die we via de opdracht krijgen: 'http://3.121.130.219:58000/'.  
![](..\00_includes\Security_pics\2\apache_home.png)  

- Stel de firewall zo in dat je webverkeer blokkeert, maar wel ssh-verkeer toelaat.  

Eerst controleren we wat de status is van de firewall op dit moment, en kijken we welke poorten open staan:  
![](..\00_includes\Security_pics\2\ufw_status.png)  

Omdat ik niet zeker weet wat de firewall gaat doen als ik die aanzet, zorg ik eerst dat de ssh poort open blijft staan met 'ufw allow 22'. Daarna zet ik de firewall aan:  
![](..\00_includes\Security_pics\2\ufw_enable.png)

Nu blokkeren we de http poort die we open zagen staan met 'ufw deny 80' en controleren we de regels van de ufw lijst:

![](..\00_includes\Security_pics\2\ufw_rule_list.png)  

Blijkbaar hebben we eerder al extra regels toegevoegd die alle Apache-verbindingen toelaten, dus die moeten we verwijderen. We houden een korte lijst over die alleen onze ssh verbinding zou moeten toelaten:  

![](..\00_includes\Security_pics\2\ufw_list_final.png)

- Controleer of de firewall zijn werk doet.  

Als we nu de server proberen te bereiken via de browser wordt de verbinding inderdaad geweigerd:  
![](..\00_includes\Security_pics\2\apache_blocked.png)
