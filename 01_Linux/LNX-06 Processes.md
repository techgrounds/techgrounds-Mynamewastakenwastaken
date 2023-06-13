# Processes
A daemon is also called background processes. It is a UNIX or Linux program that executes inside the background. Almost every daemon contains names that finish with "d" the letter. For example, sshd, this manages connections of SSH remote access, or the httpd daemon that manages the Apache server.

Alles wat op een Linux-systeem gebeurt, is in de vorm van een proces; een taak die door het besturingssysteem gestart wordt en processorcapaciteit claimt.

Er kunnen in principe 2 soorten processen actief zijn:

De processen die door de computer tijdens het opstarten geactiveerd worden zoals init, syslogd, etc. Deze automatisch bij het opstarten geactiveerde processen noemen we deamons.
De tweede soort zijn de interactieve processen die door de gebruikers opgestart worden door een commando in te typen. Elk commando veroorzaakt een proces, het is de enige manier om systeembronnen van de kernel te vragen.
Alle processen hebben een Proces-ID waarmee het bij de kernel bekend is. Ook om procesbeheer, zoals het uitschakelen, uit te voeren moet gebruik gemaakt worden van dit PID. Dit nummer wordt toegekend in de volgorde van opstarten. PID 1 is altijd het proces 'init', de moeder van alle processen, elk ander proces komt namelijk voort uit 'init'. Voor een overzicht van alle active processen is het commando # ps aux of voor een continue update # top .

## Key-terms
- PID
- telnet [hostname/ipaddress] [port number]
- ps
- pmap
- kill
## Opdracht
### Gebruikte bronnen
https://www.baeldung.com/linux/resident-set-vs-virtual-memory-size
https://www.cyberciti.biz/faq/how-to-check-running-process-in-ubuntu-linux-using-command-line/  
https://linuxhint.com/check_memory_usage_process_linux/  
https://askubuntu.com/questions/59811/kill-pid-not-really-killing-the-process-why

### Ervaren problemen
Het was een uitzoekwerk om te vinden dat 'xinetd' de telnet daemon is.

### Resultaat
Om te beginnen installeren we xinet en starten we de service:  
![[suspend](..\00_includes\Linux_pics\6\inetd_install.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/6/inetd_install.png?raw=true)  

Vervolgens kunnen we met 'ps -aux' zien dat de daemon is gestart:  
![[mem](..\00_includes\Linux_pics\6\xinet.png)  ](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/6/xinet.png?raw=true)

Met 'grep' kunnen we de informatie beter filteren met het process id (PID):  
![[](..\00_includes\Linux_pics\6\xinet_grep.png)  ](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/6/xinet_grep.png?raw=true)
Hier kunnen we zien dat de daemon 2080kb aan fysieke memory gebruikt, en tot 12032kb aan virtuele memory mag gebruiken.

Als laatste kunnen we met 'sudo kill' de daemon stoppen:  
![[kill](..\00_includes\Linux_pics\6\xinet_kill.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/6/xinet_kill.png?raw=true)
