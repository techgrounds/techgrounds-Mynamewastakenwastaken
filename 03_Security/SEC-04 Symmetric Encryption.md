# Symmetric Encryption
Symmetrische encryptie is een methode waarbij dezelfde sleutel wordt gebruikt voor zowel het versleutelen als het decoderen van gegevens. Populaire algoritmen voor symmetrische encryptie zijn Advanced Encryption Standard (AES), Data Encryption Standard (DES) en Triple Data Encryption Standard (3DES). Symmetrische encryptie is snel en efficiënt, maar vereist dat de sleutel veilig wordt gedeeld tussen de communicerende partijen.

Een groot nadeel van Symmetrische encryptie is dat het aantal benodigde sleutels in een netwerk exponentieel toeneemt met het aantal gebruikers.

## Key-terms
- AES:  
AES staat voor Advanced Encryption Standard, wat een symmetrisch encryptie-algoritme is dat wordt gebruikt voor het versleutelen en decoderen van gegevens. Het is een van de meest gebruikte algoritmen voor versleuteling in de moderne cryptografie.  
AES maakt gebruik van een blokcijfer-algoritme, wat betekent dat het gegevens in blokken van een bepaalde grootte versleutelt. De standaard blokgrootte voor AES is 128 bits, en het ondersteunt ook sleutellengtes van 128 bits, 192 bits en 256 bits. Het algoritme maakt gebruik van een reeks transformaties, waaronder substitutie, permutatie en XOR-operaties, om de gegevens te versleutelen.  
Het gebruik van AES vereist een geheime sleutel die zowel bij de verzender als bij de ontvanger bekend moet zijn. Het algoritme is efficiënt en kan snel worden uitgevoerd, zelfs op apparaten met beperkte bronnen zoals mobiele telefoons en IoT-apparaten.

## Opdracht
### Gebruikte bronnen
[Caesar cipher (wikipedia)](https://en.wikipedia.org/wiki/Caesar_cipher)  
[Enigma machine (wikipedia)](https://en.wikipedia.org/wiki/Enigma_machine)  
[AES encryption generator](https://www.javainuse.com/aesgenerator)  

### Resultaat
- Find one more historic cipher besides the Caesar cipher.  

Een bekend voorbeeld is de Enigma-machine die ontwikkeld werd tijdens de Tweede Wereldoorlog door de Duitse strijdkrachten en werd gebruikt voor het versleutelen en decoderen van geheime berichten. Het was destijds een zeer geavanceerd cryptografisch apparaat en werd aanvankelijk ontworpen voor commerciële doeleinden, maar vond later toepassing in militaire communicatie.

De machine werkte op basis van roterende schijven die letters op een toetsenbord elektrisch verbonden met andere letters. Elke rotor bevatte een bedradingsschema dat de lettervervangingen bepaalde. Wanneer een toets op het toetsenbord werd ingedrukt, werd het elektrische signaal via de schijven naar een reflector gestuurd en vervolgens teruggevoerd door de rotoren, wat resulteerde in een gecodeerde letter die oplichtte op een lampenpaneel.

Er waren verschillende instellingen die elke dag werden gewijzigd om de codering te compliceren. Door dagelijkse wijzigingen en de enorme hoeveelheid mogelijke configuraties was het kraken van de Enigma-code een uitdaging. Het heeft de basis gelegd voor moderne cryptografie en veilige communicatie, en het brak een aantal wijdverbreide misvattingen over de onbreekbaarheid van cryptografische systemen.

- Find two digital ciphers that are being used today.  

Asymmetrische encryptie: Ook bekend als public key-cryptografie, maakt gebruik van een paar sleutels - een openbare sleutel voor het versleutelen van gegevens en een privésleutel voor het decoderen ervan. Het voordeel van asymmetrische encryptie is dat de privésleutel geheim kan worden gehouden terwijl de openbare sleutel breed kan worden verspreid.

Transport Layer Security (TLS)/Secure Sockets Layer (SSL): TLS en SSL zijn protocollen voor het versleutelen van gegevens tijdens het transport over een netwerk, zoals het internet. Ze maken gebruik van zowel symmetrische als asymmetrische encryptie om de vertrouwelijkheid, integriteit en authenticiteit van gegevens te waarborgen. TLS/SSL wordt veel gebruikt voor beveiligde communicatie, zoals HTTPS-websites en beveiligde e-mail.

- Send a symmetrically encrypted message to one of your peers via the public Slack channel. They should be able to decrypt the message using a key you share with them.

We kunnen een AES generator gebruiken om een versleuteld bericht te genereren. Als sleutel gebruiken we een getal van 128 bits, oftewel 16 cijfers; '1234567890123456'.  

![](..\00_includes\Security_pics\4\AES_encrypt.png)  

![](..\00_includes\Security_pics\4\encrypted_link.png)  

Het versleutelde bericht 'rEoOIx95hGg68vGOF+TULELXepMsW9/GsUaBushKXHb3fdNSXqAYxfb4Ovk3gXqQ3NIogg7r9gD89krb5cequeZQopbxZD9Ck6LOEZQJjpI=' kan vervolgens met dezelfde sleutel ook weer ontsleuteld worden:

![](https://miro.medium.com/v2/resize:fit:900/1*EtijPOFUlIwsMPTYmgbemA.jpeg)

- Try to think of a way to share this encryption key without revealing it to everyone. You are not allowed to use any private messages or other communication channels besides the public Slack channel. Analyse the shortcomings of symmetric encryption for sending messages.