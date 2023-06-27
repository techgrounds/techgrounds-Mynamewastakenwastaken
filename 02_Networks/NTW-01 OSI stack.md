# OSI Stack

Het Open Systems Interconnection (OSI) model is een conceptueel raamwerk dat wordt gebruikt om communicatieprotocollen en netwerkdiensten te begrijpen en te organiseren. Het is ontwikkeld door de International Organization for Standardization (ISO) om een gestandaardiseerde benadering te bieden voor het ontwerpen van netwerkarchitecturen.

Het OSI-model is een referentiemodel dat helpt bij het begrijpen en ontwerpen van netwerken. Het helpt bij het identificeren van de taken en verantwoordelijkheden op elk niveau van communicatie en maakt interoperabiliteit tussen verschillende netwerken mogelijk. Hoewel het OSI-model vaak wordt gebruikt als theoretisch concept, wordt de praktische implementatie van netwerken vaak gebaseerd op het TCP/IP-model, dat een meer gestroomlijnde aanpak heeft en minder lagen bevat.

Het TCP/IP-model (Internet protocol suite) is een netwerkreferentiemodel dat wordt gebruikt om de communicatieprotocollen en -diensten van het internet te beschrijven. Het is vernoemd naar de twee belangrijkste protocollen die het omvat: het Transmission Control Protocol (TCP) en het Internet Protocol (IP). Het TCP/IP-model is ontstaan uit de praktische implementatie van het ARPANET, het voorlopernetwerk van het moderne internet.

## Opdracht
### Gebruikte bronnen
https://en.wikipedia.org/wiki/OSI_model  
https://www.geeksforgeeks.org/tcp-ip-model/
### Resultaat

Het OSI-model verdeelt de processen die plaatsvinden tijdens communicatie tussen computers in zeven lagen:  
![[osi](..\00_includes\Cloud_pics\1\OSI_model.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/1/OSI_model.png?raw=true)

 Elke laag vertegenwoordigt een specifiek aspect van de communicatie en voert specifieke functies uit. De lagen worden hieronder beschreven van onder naar boven:

1 - Fysieke laag: Dit is de onderste laag van het OSI-model. Het omvat de fysieke verbindingen en transmissie van bits over het netwerk. Het definieert de elektrische, mechanische en functionele kenmerken van de fysieke media.

2 - Datalinklaag: Deze laag is verantwoordelijk voor de betrouwbare overdracht van gegevens tussen aangrenzende nodes op het netwerk. Het zorgt voor foutdetectie en -correctie en organiseert gegevens in frames.

3 - Netwerklaag: Deze laag is verantwoordelijk voor het routeren van gegevens door het netwerk. Het bepaalt de optimale route voor gegevensoverdracht tussen bron- en doelcomputers en voert routeringsbeslissingen uit.

4 - Transportlaag: De transportlaag zorgt voor een betrouwbare end-to-end gegevensoverdracht. Het verdeelt gegevens in segmenten en voert foutcontrole en sequentienummering uit.

5 - Sessielaag: Deze laag helpt bij het opzetten, onderhouden en beëindigen van sessies tussen applicaties op het netwerk. Het biedt mechanismen voor sessiebeheer en -synchronisatie.

6 - Presentatielaag: De presentatielaag behandelt gegevensrepresentatie en -uitwisseling. Het converteert gegevens naar een formaat dat begrijpelijk is voor de toepassingslaag en biedt compressie- en versleutelingsmechanismen.

7 - Toepassingslaag: Dit is de bovenste laag van het OSI-model. Het biedt netwerktoepassingen (zoals e-mail, bestandsoverdracht en webbrowsers) rechtstreeks toegang tot de netwerkdiensten. Het biedt gebruikersinterfaces en diensten voor applicaties.


Het TCP/IP-model vormt de basis voor de werking van het moderne internet. Het is een schaalbaar model dat flexibel genoeg is om nieuwe protocollen en technologieën te ondersteunen. Hoewel het OSI-model nuttig is als conceptueel raamwerk, wordt het TCP/IP-model vaak gebruikt als de praktische basis voor netwerkimplementaties, aangezien het nauwer aansluit bij de realiteit van het internet en de hedendaagse netwerkomgevingen.

In tegenstelling tot het zevenlaagse OSI-model bestaat het TCP/IP-model uit vier (vijf in sommige versies) lagen:  
![[vs](..\00_includes\Cloud_pics\1\osi_vs_tcpip.png)  ](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Cloud_pics/1/osi_vs_tcpip.png?raw=true)
De lagen worden hieronder wederom beschreven van onder naar boven:

1 - Netwerktoegangslaag: Deze laag komt overeen met de gecombineerde fysieke en datalinklagen van het OSI-model. Het omvat de fysieke verbindingen, bekabeling, netwerkkaarten, en de protocollen die nodig zijn om gegevens over het lokale netwerk te verzenden, zoals Ethernet. In sommige versies van het TCP/IP-model worden de fysieke en datalink elementen in twee lagen gescheiden.

2 - Internetlaag: Deze laag komt overeen met de netwerklaag van het OSI-model. Het belangrijkste protocol in deze laag is het Internet Protocol (IP), dat verantwoordelijk is voor het adresseren van hosts, het routeren van pakketten en het beheren van de netwerklaag van end-to-end communicatie.

3 - Transportlaag: Deze laag komt overeen met de transportlaag van het OSI-model. Het omvat het Transmission Control Protocol (TCP) en het User Datagram Protocol (UDP). TCP biedt betrouwbare, geordende en foutloze gegevensoverdracht tussen toepassingen, terwijl UDP een eenvoudiger, onbetrouwbaar en niet-geordend transportmechanisme biedt.

4 - Toepassingslaag: Deze laag komt overeen met de gecombineerde sessie-, presentatie- en toepassingslagen van het OSI-model. Het omvat protocollen zoals het Hypertext Transfer Protocol (HTTP) voor webbrowsing, het Simple Mail Transfer Protocol (SMTP) voor e-mail, het File Transfer Protocol (FTP) voor bestandsoverdracht en vele andere protocollen die specifieke toepassingen mogelijk maken.
