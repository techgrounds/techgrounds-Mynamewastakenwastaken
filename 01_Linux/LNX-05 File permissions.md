# File permissions
De handelingen die een gebruiker of groep mag uitvoeren op een file worden 'permissions' genoemd. Deze zijn belangrijk om de integriteit en veiligheid van een systeem te kunnen waarborgen. In Linux worden permissions onderverdeeld in 3 handelingen (read, write, exectute), verdeeld over drie soorten gebruikers (owner, group, other).

## Key-terms
- ls -l:  
Dit command geeft een lijst van alles in de huidige directory inclusief de permissions, zoals bv: '-rwxrw-r--'. Het eerste teken geeft aan of het een file (-) of een directory (d) is, en daarop volgen drie blokken met ieder drie tekens. De blokken geven opeenvolgend aan wat de permissions zijn voor de owner, dan de group, en als laatste 'other', wat staat voor alle andere gebruikers. De drie tekens zijn opeenvolgend 'r' (read), 'w' (write) en 'x' (execute), of '-' als die gebruiker de permission *niet* heeft.
- chmod:  
Met dit command kunnen de permissions van een file aangepast worden voor specifieke gebruikers, indien de gebruiker van het command de permission heeft om dat te doen.
- chown:  
Hiermee kan de owner van een file veranderd worden.
- chgrp:  
Hiermee kan de group van een file veranderd worden.

## Opdracht
### Gebruikte bronnen
[Check permissions](https://learnubuntu.com/check-file-permissions/#:~:text=The%20ls%20command%20is%20generally,command%20with%20the%20%2Dl%20option)  
[Change permissions](https://www.pluralsight.com/blog/it-ops/linux-file-permissions)  


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
