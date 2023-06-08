# Cron jobs

Cronjobs zijn geautomatiseerde taken die op regelmatige basis worden uitgevoerd op een Linux-systeem. Het woord "cron" verwijst naar het cron-systeem, dat een tijdgebaseerde jobplanner is in Linux en andere Unix-achtige besturingssystemen.

## Key-terms
- Crontab

## Opdracht
### Gebruikte bronnen
https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804  
https://www.linuxfoundation.org/blog/blog/classic-sysadmin-how-to-check-disk-space-on-linux-from-the-command-line#:~:text=That%20command%20is%20df%20%2DH,your%20system%20(Figure%201)  

### Ervaren problemen
- had geen permission om in de /log map te schrijven, dus ik moest mezelf eerst die permission geven:  
![permission](..\00_includes\Linux_pics\8\permission_fix.png)  
- Er was nog geen crontab om cronjobs in te schrijven, dus die moest ik eerst aanmaken:
![crontab](..\00_includes\Linux_pics\8\make_crontab.png)

### Resultaat
- Create a Bash script that writes the current date and time to a file in your home directory.  

Ik gebruik 'date' om een timestamp te krijgen, en schrijf dit naar een txt bestand:  
![date](..\00_includes\Linux_pics\8\timestamper.png)  
- Register the script in your crontab so that it runs every minute.  

Eerst start ik het cron proces op:
![enable](..\00_includes\Linux_pics\8\enable_cron.png)  
Vervolgens schrijf ik met 'crontab -l' een taak die elke minuut uitgevoerd zou moeten worden:    
![timestamper](..\00_includes\Linux_pics\8\cronjob_timestamp.png)  
Na een kleine pauze kan ik zien dat het werkt:  
![stamp2](..\00_includes\Linux_pics\8\cronjob_timestamp2.png)  
- Create a script that writes available disk space to a log file in ‘/var/logs’. Use a cron job so that it runs weekly.  

Eerst zoek ik uit hoe ik de available disk space kan isoleren:  
![grep](..\00_includes\Linux_pics\8\df_grep.png)  
Dan schrijf ik het scriptje:    
![grep](..\00_includes\Linux_pics\8\df_logger.png)  
Vervolgens voeg ik de taak toe aan de crontab:  
![grep](..\00_includes\Linux_pics\8\df_log_cronjob.png)  
De taak zou elke zondag om 00:00 uitgevoerd moeten worden, maar ik voer het handmatig uit om te bevestigen dat het script werkt:  
![grep](..\00_includes\Linux_pics\8\df_log_cronjob_conf.png)