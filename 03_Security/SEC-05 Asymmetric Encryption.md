# Asymmetric Encryption
Asymmetrische encryptie of public key-cryptografie, maakt gebruik van een paar sleutels; een *openbare* sleutel voor het versleutelen van gegevens en een *privésleutel* voor het decoderen ervan. Algoritmen zoals RSA, Diffie-Hellman en Elliptic Curve Cryptography (ECC) worden veel gebruikt voor asymmetrische encryptie.  

Het voordeel van asymmetrische encryptie is dat de privésleutel geheim kan worden gehouden terwijl de openbare sleutel breed kan worden verspreid.

## Key-terms
- RSA

## Opdracht
### Gebruikte bronnen
[RSA encryption generator](https://www.javainuse.com/rsagenerator)


### Resultaat
-Generate a key pair.  

Dit kunnen we simpelweg doen met een RSA generator, waarmee we een public en private key genereren.

![](..\00_includes\Security_pics\5\key_pair.png)

- Send an asymmetrically encrypted message to one of your peers via the public Slack channel. They should be able to decrypt the message using a key. The recipient should be able to read the message, but it should remain a secret to everyone else. You are not allowed to use any private messages or other communication channels besides the public Slack channel. Analyse the difference between this method and symmetric encryption.

De manier waarop key pairs werken is eigenlijk andersom dan de opdracht op eerste gezicht doet lijken; door een public key openbaar te maken kan iedereen versleutelde berichten terug sturen naar degene met de private key. De private key moet nooit gedeeld worden omdat daar alle berichten mee ontsleuteld kunnen worden. 

Oftewel; om een versleuteld bericht te versturen naar een peer volgens de opdracht, moet ik eerst een public key ontvangen van de peer. Als we allebei berichten uit willen wisselen, moeten *beide* partijen eerst een public key delen, waarvan ze de private key geheim houden.

Dus ik ontvang eerst een public key: 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAL9X9+mMV7rDER4EXzvauYDvxpgNyAkm5opiSlYp+4oEyt2A3Nj4ijpo1ziQnileejFq7yluePQdB2DepY7qvM0CAwEAAQ==', waarmee ik mijn bericht kan versleutelen: 

![](..\00_includes\Security_pics\5\encrypt_public.png)

En het geheime bericht 'Y65hCdwEkFiwb/gwvZArJb9Abw74jZmrvdWDqO1iWu4E9T+j8F2qh+X54f2E1hDmRwFZWueL5ngrKVVx2hH3Ag==' kan nu openbaar gedeeld worden, maar alleen de persoon met de geheime private key kan zien wat het betekent;

![](https://tinyurl.com/ycu57vyn)