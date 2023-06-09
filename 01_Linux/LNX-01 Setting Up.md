# Linux setup
Een Linux-distributie is een compleet open-source besturingssysteem dat is gebaseerd op de Linux-kernel en wordt geleverd met verschillende hulpprogramma's, bibliotheken, grafische gebruikersinterfaces en applicaties. Er zijn veel populaire Linux-distributies beschikbaar, waaronder Ubuntu, Fedora, Debian, CentOS, Arch Linux en vele anderen. Elke distributie kan zijn eigen kenmerken, pakketbeheerder en gebruikerservaring hebben, maar ze delen allemaal de Linux-kernel.

## Key-terms
- Ubuntu:  
Ubuntu is een specifieke versie (distribution) van Linux.

- AWS:  
AWS is de cloud service van Amazon.

- CLI:  
Een command line interface (CLI) is een user interface die compleet op tekst gebaseerd is, in tegenstelling tot bv een grafical user interface (GUI). Een CLI is minder gebruiksvriendelijk maar geeft veel directere controle
voor gebruikers die weten wat ze doen.

- Powershell:  
Een programma van Microsoft met een eigen script taal voor oa automatisatie. Kan ook gebruikt worden als CLI voor bv een Ubuntu VM.

- VM:  
Een virtual machine (VM) is een computer-omgeving die draait op software ipv direct op hardware. Er zit dan een laag software (hypervisor) tussen de hardware en de VM's die delen van de hardware toewijst aan elke VM.

- Hypervisor:  
Dit is de software die elke VM een deel van de hardware toebedeeld. Meerdere VM's kunnen ook delen van de hardware tegelijk gebruiken.

- SSH:  
Secure Shell Protocol (SSH) is een manier om netwerkverkeer te versleutelen over onbeveiligde netwerken.

- Key pair:  
SSH gebruikt sleutels (key pairs) om verkeer te beveiligen. Een key pair bestaat uit twee sleutels; een private en public key. Elke gebruiker kan een public key gebruiken om zijn verkeer te versleutelen, en alleen de server heeft de unieke private key om dat verkeer weer te ontsleutelen.

## Opdracht
### Gebruikte bronnen
- [OpenSSH](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell#install-openssh-for-windows)  
- [Linux VM connect](https://learn.microsoft.com/en-us/azure/virtual-machines/linux-vm-connect?tabs=Linux)  
- [SSH port](https://linuxhandbook.com/ssh-alternate-port/)

### Ervaren problemen
- Ik linkte eerst naar de .pem file in mijn downloads map en kreeg een error. De key was correct maar moest blijkbaar in de .ssh map.
- Vervolgens kreeg ik dit bericht:  
 ![error](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/permission_denied.png?raw=true)  
Mijn collega Kaman wees erop dat dit was op te lossen door de juiste port aan te geven:  
![fix](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/port_fixed.png?raw=true)
### Resultaat
![Dit](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/whoami_final.png?raw=true)  
Ik kan zien dat ik ingelogd ben onder de username: micha_
