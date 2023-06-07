# Users and groups
[Geef een korte beschrijving van het onderwerp]

## Key-terms
- sudo
- adduser
- usermod

## Opdracht
### Gebruikte bronnen
https://zach-gollwitzer.medium.com/how-to-manage-users-and-groups-on-ubuntu-linux-e036f4503107  
https://www.cyberciti.biz/faq/add-new-user-account-with-admin-access-on-linux/

### Ervaren problemen
Usernames mogen in Linux blijkbaar geen hoofdletters bevatten.  
![Up case](..\00_includes\Linux_pics\4\tester_error.png)  

### Resultaat
Ik maak met 'adduser' een nieuwe gebruiker (tester) aan met het wachtwoord '1234':  
![add user](..\00_includes\Linux_pics\4\add_tester.png)  
Vervolgens gebruik ik 'usermod' om de nieuwe gebruiker een admin te maken:  
![admin](..\00_includes\Linux_pics\4\tester_admin.png)  
Ik log in als de nieuwe gebruiker om te bevestigen dat ik 'sudo' kan gebruiken:  
![](..\00_includes\Linux_pics\4\tester_admin_conf.png)  
Alle gegevens over gebruikers en groepen zijn te vinden in /etc:  
![etc](..\00_includes\Linux_pics\4\etc.png)  
Met 'grep' kan ik zien dat de nieuwe gebruiker inderdaad toegevoegd is aan de admin groep:  
![grep](..\00_includes\Linux_pics\4\grep_groups.png)