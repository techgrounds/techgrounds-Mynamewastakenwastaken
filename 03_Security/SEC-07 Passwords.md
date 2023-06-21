# Passwords
[Geef een korte beschrijving van het onderwerp]

## Key-terms
- Salted

## Opdracht
### Gebruikte bronnen
https://crackstation.net/  
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

- Below are two MD5 password hashes. One is a weak password, the other is a string of 16 randomly generated characters. Try to look up both hashes in a Rainbow Table.  03F6D7D1D9AAE7160C05F71CE485AD31  
03D086C9B98F90D628F2D1BD84CFA6CA

- Create a new user in Linux with the password 12345. Look up the hash in a Rainbow Table.

Hash: $6$ZA5snlPMBFIEyfJn$9UM04XX4f.zmWCECPbe5ZEMJuV8JERkIxdIIDDrw9/4jGMdhGzI5M98I4.9Lk09H.40LudRDyrulQimTHKVlC.  

- Despite the bad password, and the fact that Linux uses common hashing algorithms, you won’t get a match in the Rainbow Table. This is because the password is salted. To understand how salting works, find a peer who has the same password in /etc/shadow, and compare hashes.  

Hashing met zout (hash salting) is een techniek die wordt gebruikt om de beveiliging van gehashte wachtwoorden te verbeteren. Het houdt in dat er een extra willekeurige waarde (het zout) wordt toegevoegd aan het wachtwoord voordat het gehasht wordt.

Hier is een uitleg van hoe hash salting werkt:

Stap 1: Zoutgeneratie

Voor elk gebruikerswachtwoord wordt een uniek, willekeurig zout gegenereerd. Het zout kan een lange reeks willekeurige bytes zijn.
Stap 2: Combinatie van zout en wachtwoord

Het wachtwoord van de gebruiker wordt gecombineerd met het zout. Dit kan worden gedaan door het zout en het wachtwoord aan elkaar te plakken.
Stap 3: Hashberekening

De gecombineerde waarde (zout + wachtwoord) wordt gehasht met behulp van een hashfunctie, zoals MD5, SHA-256, bcrypt, of Argon2.
Stap 4: Opslag van het gehashte wachtwoord en zout

Het gehashte wachtwoord en het zout worden samen opgeslagen in de gebruikersdatabase. Beide waarden zijn nodig om het wachtwoord te verifiëren tijdens het inlogproces.
Bij het verifiëren van een wachtwoord tijdens het inlogproces worden dezelfde stappen gevolgd:

Het ingevoerde wachtwoord wordt gecombineerd met het opgeslagen zout.
De gecombineerde waarde wordt gehasht.
Het resulterende gehashte waarde wordt vergeleken met het opgeslagen gehashte wachtwoord.
Als de twee gehashte waarden overeenkomen, wordt het wachtwoord geaccepteerd.
Door gebruik te maken van hash salting wordt de veiligheid van wachtwoorden vergroot. Het zout zorgt ervoor dat zelfs als twee gebruikers hetzelfde wachtwoord hebben, de gehashte waarden verschillend zullen zijn vanwege het unieke zout. Dit bemoeilijkt het gebruik van vooraf berekende tabellen, zoals rainbow tables, omdat ze specifiek moeten worden aangepast aan elk uniek zout. Het verhoogt ook de complexiteit en tijdsduur van brute-force-aanvallen, omdat elke gok moet worden gecombineerd met het zout en gehasht voordat deze kan worden vergeleken met het opgeslagen gehashte wachtwoord.