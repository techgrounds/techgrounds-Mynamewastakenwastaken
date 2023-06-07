# Processes
[Geef een korte beschrijving van het onderwerp]

## Key-terms
- telnet [hostname/ipaddress] [port number]
- ps
- pmap
- kill
## Opdracht
### Gebruikte bronnen
https://www.cyberciti.biz/faq/how-to-check-running-process-in-ubuntu-linux-using-command-line/  
https://linuxhint.com/check_memory_usage_process_linux/  
https://askubuntu.com/questions/59811/kill-pid-not-really-killing-the-process-why

### Ervaren problemen
- Ik moest even uitzoeken hoe ik het telnet proces kon laten draaien zonder het af te sluiten. Met '?' kon ik gelukkig een lijst zien met opties, en daar stond mijn oplossing tussen:  
![fix](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/6/telnet_fix.png?raw=true)  
- Ik kon het telnet proces niet stoppen met het normale 'kill' command, maar moest 'kill -9' gebruiken zodat mijn command niet genegeerd kon worden.

### Resultaat
Om te beginnen starten we het telnet proces, en kunnen we met 'ps' zien dat het ook een process id (PID) heeft (6092):  
![suspend](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/6/telnet_start_suspend.png?raw=true)  

Met 'pmap' en de PID die we hebben kunnen we vervolgens precies zien hoeveel geheugen het telnet proces gebruikt in kilobytes (5996):  
![mem](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/6/memory.png?raw=true)  

Als laatste kunnen we met 'kill -9' het telnet proces afsluiten:  
![kill](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/6/telnet_kill.png?raw=true)
