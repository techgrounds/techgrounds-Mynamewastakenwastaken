# AWS Global Infrastructure
[Geef een korte beschrijving van het onderwerp]

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
https://docs.aws.amazon.com/  
https://aws.amazon.com/blogs/architecture/what-to-consider-when-selecting-a-region-for-your-workloads/  


### Resultaat
- What is an AWS Availability Zone?  

Een Availability Zone (AZ) is een afzonderlijke fysieke locatie binnen een specifieke AWS-regio. Elke AWS-regio bestaat uit meerdere AZ's, die geografisch van elkaar gescheiden zijn, maar toch dicht genoeg bij elkaar liggen om lage latentie en hoge beschikbaarheid te bieden.

Elke AZ in een regio is ontworpen om onafhankelijk te opereren met betrekking tot stroomvoorziening, netwerkverbindingen en koeling. Dit betekent dat als er zich een storing voordoet in één AZ, de andere AZ's in dezelfde regio onaangetast blijven en services blijven leveren.

- What is a Region?  

Een AWS-regio is een geografisch gebied waarin AWS zijn infrastructuur en services host. Elke AWS-regio bestaat uit meerdere Availability Zones. Elke regio is ontworpen om onafhankelijk te opereren en is voorzien van een reeks AWS-datacenters die zijn uitgerust met servers, netwerkapparatuur en andere benodigde infrastructuur. AWS-regio's zijn wereldwijd verspreid en omvatten locaties in verschillende landen en continenten, waardoor klanten over de hele wereld hun workloads en gegevens dichter bij hun eindgebruikers kunnen plaatsen. 

- What is an Edge Location?  

Een Edge Location is een onderdeel van het content delivery network (CDN) van Amazon Web Services (AWS). Het is een fysieke locatie die verspreid is over de wereld, buiten de AWS-regio's en Availability Zones. Het doel van een Edge Location is om gegevens dichter bij eindgebruikers te brengen, waardoor de prestaties en de snelheid van de levering van content verbeteren.

In elke Edge Location bevindt zich een cache van veelgebruikte content, zoals afbeeldingen, video's, JavaScript-bestanden en andere statische en dynamische content. Wanneer een gebruiker een verzoek doet naar een bestand dat is opgeslagen in de cache van een Edge Location, kan het CDN de content snel leveren vanaf de dichtstbijzijnde Edge Location in plaats van de content helemaal vanuit de oorspronkelijke bron te halen. Dit resulteert in lagere latentie en snellere laadtijden voor de gebruikers.

Edge Locations worden ook gebruikt voor andere AWS-services, zoals Amazon CloudFront, AWS WAF (Web Application Firewall) en Amazon Route 53 (DNS-service). Deze services maken gebruik van de wereldwijde aanwezigheid van de Edge Locations om inhoud te verspreiden, beveiliging te bieden en de prestaties te verbeteren.

- Why would you choose one region over another? (e.g. eu-central-1 (Frankfurt) over us-west-2 (Oregon)).  

Bij het kiezen van een AWS-regio zijn er verschillende factoren waar rekening mee gehouden moet worden, waarvan hieronder de 4 meest belangrijke;

Geografische nabijheid: Overweeg waar de eindgebruikers zich bevinden en kies een regio die dicht bij hen in de buurt ligt. Dit helpt bij het verminderen van de latentie en het verbeteren van de prestaties van applicaties.

Naleving van regelgeving: Bepaal welke regelgevingen van toepassing zijn op de data en zorg ervoor dat de gekozen regio voldoet aan die regelgevingen. Dit is vooral belangrijk in het geval van gevoelige gegevens, zoals persoonlijk identificeerbare informatie (PII) of financiële gegevens.

Beschikbaarheid van services: Niet alle AWS-services zijn in elke regio beschikbaar. Controleer of de services die u van plan bent te gebruiken beschikbaar zijn in de regio die u overweegt. Houd er ook rekening mee dat nieuwe services mogelijk niet onmiddellijk in elke regio worden gelanceerd.

Kosten: Prijzen kunnen variëren per regio, dus houd rekening met de kosten van het uitvoeren van uw workloads in verschillende regio's. Controleer ook of er speciale prijzen of kostenbesparende programma's beschikbaar zijn voor de regio die u overweegt.
