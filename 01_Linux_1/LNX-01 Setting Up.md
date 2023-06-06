# Linux setup
Linux is een besturingssysteem zoals Windows of macOS, maar dan open-source.

## Key-terms
- Ubuntu:  
Ubuntu is een specifieke versie (distribution) van Linux.

- AWS:  
AWS is de cloud service van Amazon.

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
- [Verbinding met de VM](https://learn.microsoft.com/en-us/azure/virtual-machines/linux-vm-connect?tabs=Linux)  
- [Juiste port invullen](https://linuxhandbook.com/ssh-alternate-port/)

### Ervaren problemen
- Ik linkte eerst naar de .pem file in mijn downloads map en kreeg een error. De key was correct maar moest blijkbaar in de .ssh map.
- Vervolgens kreeg ik dit bericht:  
 ![error](..\00_includes\Linux_pics\permission_denied.png)
Dit was op te lossen door de juiste port aan te geven:  
![fix](.\00_includes/Linux_pics/port_fixed.png)
### Resultaat
![Dit](..\00_includes\Linux_pics\whoami_final.png)
Ik kan zien dat ik ingelogd ben onder de username: micha_
