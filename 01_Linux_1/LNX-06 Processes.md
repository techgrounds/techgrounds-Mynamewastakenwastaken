# Processes
[Geef een korte beschrijving van het onderwerp]

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
![suspend](..\00_includes\Linux_pics\6\inetd_install.png)  

Vervolgens kunnen we met 'ps -aux' zien dat de daemon is gestart:  
![mem](..\00_includes\Linux_pics\6\xinet.png)  

Met 'grep' kunnen we de informatie beter filteren met het process id (PID):  
![](..\00_includes\Linux_pics\6\xinet_grep.png)  
Hier kunnen we zien dat de daemon 2080kb aan fysieke memory gebruikt, en tot 12032kb aan virtuele memory mag gebruiken.

Als laatste kunnen we met 'sudo kill' de daemon stoppen:  
![kill](..\00_includes\Linux_pics\6\xinet_kill.png)
