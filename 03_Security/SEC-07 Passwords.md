# Passwords
[Geef een korte beschrijving van het onderwerp]

## Key-terms
- Salted

## Opdracht
### Gebruikte bronnen
https://www.cyberciti.biz/faq/where-are-the-passwords-of-the-users-located-in-linux/#:~:text=The%20encrypted%20passwords%20and%20other,by%20a%20colon%20(%3A)%20symbol.

### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

### Resultaat
- Find out what hashing is and why it is preferred over symmetric encryption for storing passwords.  

Hashing is een proces waarbij gegevens van willekeurige grootte worden omgezet naar een vaste grootte, meestal een reeks alfanumerieke karakters. De uitvoer van een hash-algoritme wordt een hash-waarde genoemd. Hashing wordt veel gebruikt voor het controleren van de integriteit van gegevens, het opslaan van wachtwoorden en digitale handtekeningen.

Hier zijn enkele belangrijke kenmerken en toepassingen van hashing:

Integriteitscontrole: Hashing wordt vaak gebruikt om de integriteit van gegevens te waarborgen. Door de hash van een bestand of bericht te berekenen, kun je een unieke digitale vingerafdruk creëren die de inhoud ervan vertegenwoordigt. Als de gegevens worden gewijzigd, zal de resulterende hash-waarde ook veranderen, waardoor je kunt detecteren dat de gegevens zijn gemanipuleerd.

Wachtwoordopslag: Hashing wordt gebruikt om wachtwoorden veilig op te slaan. In plaats van wachtwoorden in leesbare tekst op te slaan, worden ze gehasht en wordt alleen de resulterende hash-waarde opgeslagen. Bij het verifiëren van een wachtwoord wordt de ingevoerde waarde opnieuw gehasht en vergeleken met de opgeslagen hash-waarde. Dit biedt veiligheid doordat zelfs als de opgeslagen hashes worden blootgesteld, het moeilijk is om de oorspronkelijke wachtwoorden te achterhalen.

Digitale handtekeningen: Hashing wordt gebruikt in digitale handtekeningen om de integriteit van een bericht of document te waarborgen. Door het bericht te hashen en vervolgens de hash-waarde te versleutelen met de privésleutel van de afzender, kan de ontvanger de handtekening verifiëren door de hash-waarde te hashen met de bijbehorende openbare sleutel van de afzender.  

- Find out how a Rainbow Table can be used to crack hashed passwords.  

Een rainbow table is een geavanceerde techniek die wordt gebruikt bij aanvallen op gehashte wachtwoorden. Het is een vooraf berekende tabel met hash-wachtwoordparen die gebruikt kunnen worden om snel de oorspronkelijke wachtwoorden te achterhalen. Het proces werkt in een paar stappen:

1 - Generatie van ketens

Een initiële wachtwoordwaarde wordt genomen en gehasht met een bepaalde hashfunctie. De resulterende hash-waarde wordt vervolgens opnieuw verwerkt (meestal door middel van een reeks iteraties) om een nieuwe wachtwoordwaarde te verkrijgen. Dit proces wordt herhaald totdat een keten van wachtwoord-hashparen wordt gegenereerd. Elke stap in de keten wordt een "regenboogkolom" genoemd.

2 - Reductiefunctie

Een reductiefunctie wordt toegepast op elke hash in de keten om een verkorte waarde te verkrijgen. Deze verkorte waarde wordt gebruikt als het volgende wachtwoord in de keten. De reductiefunctie moet in staat zijn om van een hash terug te gaan naar een wachtwoordwaarde.

3 - Toevoegen aan de tabel

De laatste hash-wachtwoordcombinatie in elke keten wordt opgeslagen in de rainbow table.

4 - Zoeken naar wachtwoorden

Bij een aanval wordt de gehashte waarde van een onbekend wachtwoord genomen.
De reductiefunctie wordt iteratief toegepast op deze gehashte waarde, gevolgd door een zoekopdracht in de rainbow table. Als de gehashte waarde wordt gevonden in de rainbow table, kan het bijbehorende wachtwoord worden geëxtraheerd uit de keten.   

Het gebruik van rainbow tables versnelt het proces van het achterhalen van wachtwoorden aanzienlijk in vergelijking met brute-force-aanvallen, waarbij elke mogelijke combinatie moet worden geprobeerd. Het belangrijkste beveiligingsmechanisme tegen rainbow-table-aanvallen is het gebruik van zouten en iteraties bij het hashen van wachtwoorden. Door een uniek zout aan elk wachtwoord toe te voegen en het hashen meerdere keren te herhalen, wordt het moeilijker en tijdrovender om effectief gebruik te maken van rainbow tables.


Hash: $6$ZA5snlPMBFIEyfJn$9UM04XX4f.zmWCECPbe5ZEMJuV8JERkIxdIIDDrw9/4jGMdhGzI5M98I4.9Lk09H.40LudRDyrulQimTHKVlC.