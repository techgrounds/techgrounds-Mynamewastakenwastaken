# File permissions
[Geef een korte beschrijving van het onderwerp]

## Key-terms
- ls -l:
-rwxrw-r--
read (r)
write (w)
execute (x)
- chmod
- chown
- chgrp
## Opdracht
### Gebruikte bronnen
https://learnubuntu.com/check-file-permissions/#:~:text=The%20ls%20command%20is%20generally,command%20with%20the%20%2Dl%20option  
https://www.pluralsight.com/blog/it-ops/linux-file-permissions

### Ervaren problemen
Ik had geen problemen.

### Resultaat
Ik heb nog bestanden staan van de vorige opdrachten, en met 'ls -l' kan ik de permissions zien:  
![ls](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/5/long_list.png?raw=true)
Aan de tekstbestanden is te zien dat ze read/write permissions hebben voor de user en de group 'micha_', en dat andere gebruikers alleen een read permission hebben.  

Vervolgens voeg ik een execute permission (x) toe voor alle gebruikers:  
![chmod_x](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/5/chmod_x.png?raw=true)  
Daarna verwijder ik read/write (rw) permissions voor de group (g) en others (o), maar niet voor de user:  
![chmod_remove](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/5/chmod_remove.png?raw=true)  
Ik kan als de huidige user met 'cat' nog steeds het bestand lezen.  

Nu verander ik de eigenaar van 'techgrounds.txt' van 'micha_' naar de user 'tester' met 'chown':  
![chown](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/5/chown.png?raw=true)  
Er is te zien dat het eigenaarschap is veranderd, en ik kan het bestand alleen uitlezen met 'sudo'.  

Als laatste verander ik de group ook naar 'tester' met 'chgrp':
![chgrp](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/5/chgrp.png?raw=true)
