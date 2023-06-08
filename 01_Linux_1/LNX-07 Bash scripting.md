# Bash scripting

Bash is een opdrachtregelinterpreter die interactieve opdrachten accepteert en scripts kan uitvoeren. Met Bash-scripting kun je reeksen opdrachten en logica in een scriptbestand plaatsen, zodat ze als een enkele eenheid kunnen worden uitgevoerd.

## Key-terms
- Path variable

## Opdracht
### Gebruikte bronnen
https://phoenixnap.com/kb/linux-add-to-path#:~:text=PATH%20is%20an%20environment%20variable,command%20without%20specifying%20a%20path.  
https://www.javatpoint.com/install-httpd-ubuntu#:~:text=Introduction%20to%20httpd,the%20Hypertext%20Transfer%20Protocol%20daemon  
https://adamtheautomator.com/ubuntu-systemctl/
https://www.tutorialspoint.com/guide-to-generate-random-numbers-in-linux#:~:text=To%20generate%20a%20random%20number,minimum%20value%20of%20the%20range  
https://help.ubuntu.com/community/Beginners/BashScripting  
https://devhints.io/bash
### Ervaren problemen
- vergeten chmod:  
![chmod](..\00_includes\Linux_pics\7\txt_script.png)  
- ik had spaties gebruikt:  
![foutje](..\00_includes\Linux_pics\7\foutje.png)
- Omdat ik python gewend ben had ik '>' als operator gebruikt in mijn script, en het werkte niet zoals verwacht. Ik moest blijkbaar '-gt' gebruiken.

### Resultaat
- Create a directory called ‘scripts’. Place all the scripts you make in this directory.
![mkdir](..\00_includes\Linux_pics\7\mkdir_scripts.png)
- Add the scripts directory to the PATH variable.  
![bash](..\00_includes\Linux_pics\7\cat_bash.png)  
![path](..\00_includes\Linux_pics\7\echo_path.png)  
- Create a script that appends a line of text to a text file whenever it is executed.  
![txt script](..\00_includes\Linux_pics\7\txt_script_werkt!.png)  
- Create a script that installs the httpd package, activates httpd, and enables httpd. Finally, your script should print the status of httpd in the terminal.  
![httpd install](..\00_includes\Linux_pics\7\httpd_script.png)
![httpd status](..\00_includes\Linux_pics\7\httpd_script_werkt!.png)

- Create a script that generates a random number between 1 and 10, stores it in a variable, and then appends the number to a text file.  
![random](..\00_includes\Linux_pics\7\random_generator.png)\
- Create a script that generates a random number between 1 and 10, stores it in a variable, and then appends the number to a text file only if the number is bigger than 5. If the number is 5 or smaller, it should append a line of text to that same text file instead.  
![random5](..\00_includes\Linux_pics\7\random_generator_5.png)