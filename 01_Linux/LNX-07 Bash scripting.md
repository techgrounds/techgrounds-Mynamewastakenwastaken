# Bash scripting

Linux Bash ("Bourne Again SHell") is een commandoregelinterface (CLI) en een scriptingtaal die wordt gebruikt in besturingssystemen gebaseerd op Linux. Met Bash-scripting kun je reeksen opdrachten en logica in een scriptbestand plaatsen zodat ze met 1 handeling uitgevoerd kunnen worden. Het is daarom een krachtige tool voor het beheren en automatiseren van taken op een Linux systeem.

## Key-terms
- Bash:  
Een bash script begint meestal met '#!/bin/bash'; een regel waarmee we aangeven hoe het bestand gelezen moet worden door het systeem. Vervolgens kunnen alle handelingen die normaal uitgevoerd mogen worden door de gebruiker in het script verwerkt worden. Het voordeel is dat er ook logica in verwerkt kan worden met variabelen die door de gebruiker gedefinieerd worden.
- PATH variable:  
Dit is een geordende lijst met alle paden waar executable commands te vinden zijn. Als een command door de gebruiker wordt ingevoerd zoekt Linux via de PATH variable naar de file met de naam van dat command om het uit te voeren. Gebruikers kunnen zelf paden toevoegen aan de PATH, zodat commands uitgevoerd kunnen worden zonder telkens het complete pad naar de file te specificeren.


## Opdracht
### Gebruikte bronnen
[Add directory to PATH](https://phoenixnap.com/kb/linux-add-to-path#:~:text=PATH%20is%20an%20environment%20variable,command%20without%20specifying%20a%20path.)  
[HTTPD daemon](https://www.javatpoint.com/install-httpd-ubuntu#:~:text=Introduction%20to%20httpd,the%20Hypertext%20Transfer%20Protocol%20daemon)  
[Systemctl](https://adamtheautomator.com/ubuntu-systemctl/)
[Generate random numbers](https://www.tutorialspoint.com/guide-to-generate-random-numbers-in-linux#:~:text=To%20generate%20a%20random%20number,minimum%20value%20of%20the%20range)  
[Bash scripting basics](https://help.ubuntu.com/community/Beginners/BashScripting)  
[Bash cheatsheet](https://devhints.io/bash)

### Ervaren problemen
- vergeten chmod:  
![[chmod](..\00_includes\Linux_pics\7\txt_script.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/txt_script.png?raw=true)  
- ik had spaties gebruikt:  
![[foutje](..\00_includes\Linux_pics\7\foutje.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/foutje.png?raw=true)
- Omdat ik python gewend ben had ik '>' als operator gebruikt in mijn script en dat werkte niet zoals verwacht. Ik moest '-gt' gebruiken.

### Resultaat
- Create a directory called ‘scripts’. Place all the scripts you make in this directory.  
![[mkdir](..\00_includes\Linux_pics\7\mkdir_scripts.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/mkdir_scripts.png?raw=true)
- Add the scripts directory to the PATH variable.  
![[bash](..\00_includes\Linux_pics\7\cat_bash.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/cat_bash.png?raw=true)  
![[path](..\00_includes\Linux_pics\7\echo_path.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/echo_path.png?raw=true)  
- Create a script that appends a line of text to a text file whenever it is executed.  
![[txt script](..\00_includes\Linux_pics\7\txt_script_werkt!.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/txt_script_werkt!.png?raw=true)  
- Create a script that installs the httpd package, activates httpd, and enables httpd. Finally, your script should print the status of httpd in the terminal.  
![[httpd install](..\00_includes\Linux_pics\7\httpd_script.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/httpd_script.png?raw=true)
![[httpd status](..\00_includes\Linux_pics\7\httpd_script_werkt!.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/httpd_script_werkt!.png?raw=true)

- Create a script that generates a random number between 1 and 10, stores it in a variable, and then appends the number to a text file.  
![[random](..\00_includes\Linux_pics\7\random_generator.png)\](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/random_generator.png?raw=true)
- Create a script that generates a random number between 1 and 10, stores it in a variable, and then appends the number to a text file only if the number is bigger than 5. If the number is 5 or smaller, it should append a line of text to that same text file instead.  
![[random5](..\00_includes\Linux_pics\7\random_generator_5.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/Linux_pics/7/random_generator_5.png?raw=true)
