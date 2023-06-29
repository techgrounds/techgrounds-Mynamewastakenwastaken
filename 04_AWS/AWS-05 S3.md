# S3

AWS S3 (Simple Storage Service) is een schaalbare, veilige en duurzame objectopslagservice die wordt aangeboden door AWS. Het is ontworpen om eenvoudig grote hoeveelheden gegevens op te slaan en op te halen, zoals bestanden, afbeeldingen, video's, back-ups en logboeken.

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html


### Resultaat
- Create new S3 bucket with the following requirements:  
Region: Frankfurt (eu-central-1)  
Upload a cat picture to your bucket.  
Share the object URL of your cat picture with a peer. Make sure they are able to see the picture.

Eerst maken we een nieuwe bucket met de aangegeven specificaties;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/create_bucket.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/bucket_name.png?raw=true)  
Vervolgens uploaden we het plaatje;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/upload.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/upload_conf.png?raw=true)  
In het overzicht kunnen we vervolgens de url naar ons object vinden; https://techgrounds-micha-testbucket.s3.eu-central-1.amazonaws.com/Cat.jpg. Zolang de bucket online blijft is onze kat bereikbaar;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/Cat.jpg?raw=true)  


- Create new bucket with the following requirements:  
Region: Frankfurt (eu-central-1)  
Upload the four files that make up AWS’ demo website.  
Enable static website hosting.  
Share the bucket website endpoint with a peer. Make sure they are able to see the website.  

We maken een nieuwe bucket voor de website, waarvoor we static hosting aanzetten;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/bucket_site.png?raw=true)  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/enable_hosting.png?raw=true)  
We moeten de policy aanpassen zodat de content bereikbaar is voor alle gebruikers;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/bucket_policy.png?raw=true)  
Uiteindelijk is de website bereikbaar met de volgende link; http://techgrounds-micha-static-website.s3-website.eu-central-1.amazonaws.com/.  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/5/endpoint_test.png?raw=true)  




