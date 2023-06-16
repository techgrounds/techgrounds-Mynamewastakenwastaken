# Processes

Alles wat op een Linux-systeem gebeurt, is in de vorm van een proces; een taak die door het besturingssysteem gestart wordt en processorcapaciteit claimt.

Er kunnen in principe 2 soorten processen actief zijn:

De processen die door de computer tijdens het opstarten geactiveerd worden zoals init, syslogd, etc; dit soort processen noemen we *deamons*.  
De tweede soort zijn de interactieve processen die door de gebruikers opgestart worden door een commando in te typen. Elk commando veroorzaakt een proces dat systeembronnen van de kernel opvraagt.  

Alle processen hebben een Proces-ID (PID) waarmee het bij de kernel bekend is. Om processen te beheren maken we ook gebruik van dit PID. PID 1 is altijd het proces 'init', de moeder van alle processen, en elk ander proces komt voort uit 'init'. Voor een overzicht van alle active processen kunnen we het commando 'ps aux' gebruiken.


## Key-terms
- Daemon:  
Een daemon kan ook beschreven worden als een 'achtergrond proces', aangezien ze altijd uitgevoerd worden op de achtergrond. Daemons kunnen meestal herkend worden aan het feit dat de naam eindigt met een 'd'. De daemon die SSH connecties mogelijk maakt heet bv 'sshd'.
- PID:  
Elk proces heeft een eigen unieke PID waarmee Linux de processen kan beheren. De PID's worden toegekend in de volgorde waarmee elk proces gestart wordt. 
- kill (PID):  
Met dit command kunnen de meeste processen gestopt worden als het PID bekend is.

## Opdracht
### Gebruikte bronnen
[Understanding memory size](https://www.baeldung.com/linux/resident-set-vs-virtual-memory-size)  
[Check running processes](https://www.cyberciti.biz/faq/how-to-check-running-process-in-ubuntu-linux-using-command-line/)  
[Memory usage](https://linuxhint.com/check_memory_usage_process_linux/)  

### Ervaren problemen
Het was een uitzoekwerk om er achter te komen dat de telnet daemon 'xinetd' genoemd wordt. 

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
