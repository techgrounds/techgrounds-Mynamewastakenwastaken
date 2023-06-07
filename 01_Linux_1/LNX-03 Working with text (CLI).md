# Linux text
[Geef een korte beschrijving van het onderwerp]

## Key-terms
- stdin
- stdout
- pipe

## Opdracht
### Gebruikte bronnen
https://www.cyberciti.biz/faq/ubuntu-create-file-using-cat-command/  
https://linuxhint.com/linux-pipe-command-examples/

### Ervaren problemen
Ik had geen problemen.

### Resultaat
Voor de setup maak ik een .txt bestand met twee zinnen tekst:  
![setup](..\00_includes\Linux_pics\3\setup.png)  
Ik gebruik 'echo' met een pipe om een zin met het woord 'Techgrounds' toe te voegen:  
![echo](..\00_includes\Linux_pics\3\echo_write.png)  
Vervolgens gebruik ik 'grep' om alleen de zin met het woord 'Techgrounds' uit de tekst te laten zien:  
![grep](..\00_includes\Linux_pics\3\grep.png)  
Als laatste sla ik de gefilterde zin op in een nieuw txt bestand:    
![new_txt](..\00_includes\Linux_pics\3\techgrounds_txt.png)