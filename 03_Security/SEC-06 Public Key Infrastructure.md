# Public Key Infrastructure
PKI staat voor Public Key Infrastructure, wat een set technologieën, beleidsregels en procedures omvat die zorgen voor veilige communicatie en authenticatie over netwerken. PKI maakt gebruik van cryptografische technieken om de uitwisseling van informatie tussen partijen te beveiligen.

Het hart van PKI is het gebruik van asymmetrische encryptie, waarbij een paar cryptografische sleutels wordt gebruikt: een openbare sleutel en een privésleutel. De openbare sleutel wordt breed beschikbaar gesteld aan anderen, terwijl de privésleutel vertrouwelijk blijft bij de eigenaar van de sleutel. Deze sleutels zijn wiskundig gerelateerd, zodat gegevens die zijn versleuteld met één sleutel alleen kunnen worden ontsleuteld met de bijbehorende sleutel uit het paar.

## Key-terms
- X.509:  

De X.509-standaard is een specificatie voor de opmaak en structuur van digitale certificaten die worden gebruikt in een Public Key Infrastructure (PKI). Het definieert de standaardindeling van certificaten en de informatie die ze bevatten.

De X.509-standaard is ontwikkeld door de International Telecommunication Union (ITU) en wordt breed toegepast in verschillende beveiligingsinfrastructuurtoepassingen, zoals Secure Socket Layer/Transport Layer Security (SSL/TLS)-communicatie, virtuele privénetwerken (VPN's), digitale handtekeningen en meer.

Belangrijke onderdelen van de X.509-standaard zijn onder andere:

Subject: Het gedeelte van het certificaat dat de entiteit identificeert waarvoor het certificaat is uitgegeven, zoals een persoon, een organisatie of een apparaat. Dit omvat meestal informatie zoals de naam, het e-mailadres en andere identificerende gegevens van de entiteit.

Public Key: Dit is de openbare sleutel van de entiteit die wordt gecertificeerd. Het certificaat bevat de openbare sleutel van de entiteit, zodat anderen deze kunnen gebruiken om versleutelde berichten naar de entiteit te sturen of om de handtekeningen van de entiteit te verifiëren.

Issuer: Dit is de entiteit (Certification Authority - CA) die het certificaat uitgeeft en ondertekent. De uitgever is verantwoordelijk voor het waarborgen van de geldigheid en betrouwbaarheid van het certificaat.

Validity: Het certificaat bevat informatie over de geldigheidsperiode van het certificaat, zoals de begindatum en de vervaldatum. Hiermee kunnen andere partijen bepalen of het certificaat nog steeds geldig is.

Signature: Het certificaat wordt digitaal ondertekend door de uitgever (CA) met behulp van diens privésleutel. Hierdoor kan een ontvanger van het certificaat de geldigheid en integriteit ervan verifiëren door de handtekening te controleren met behulp van de openbare sleutel van de uitgever.

De X.509-standaard biedt een gestandaardiseerde en interoperabele manier om digitale certificaten te maken, uit te geven, te verspreiden en te valideren in verschillende beveiligingsomgevingen. Het maakt het mogelijk om vertrouwen en veilige communicatie tot stand te brengen binnen een PKI-infrastructuur.

## Opdracht
### Gebruikte bronnen
https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-22-04  
https://www.digicert.com/help/

### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

### Resultaat
- Create a self-signed certificate on your VM.  

- Analyze some certification paths of known websites (ex. techgrounds.nl / google.com / ing.nl).  



- Find the list of trusted certificate roots on your system (bonus points if you also find it in your VM).
