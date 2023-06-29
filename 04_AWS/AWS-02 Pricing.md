# AWS Pricing
[Geef een korte beschrijving van het onderwerp]

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
[AWS cost management](https://aws.amazon.com/aws-cost-management/?sc_icampaign=Adoption_Campaign_AWSInsights_HA_CostManagement&sc_ichannel=ha&sc_icontent=awssm-3684&sc_ioutcome=Product_Marketing&sc_iplace=2up&trk=ha_a131L0000083VPUQA2~ha_awssm-3684&trkCampaign=AWSInsights_Website_Key_CostManagement)  
https://aws.amazon.com/cloudwatch/  
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html  

### Ervaren problemen
[Geef een korte beschrijving van de problemen waar je tegenaan bent gelopen met je gevonden oplossing.]

### Resultaat
- Create an alert that you can use to monitor your own cloud costs.  

Create alarm in Cloudwatch;
![[](..\00_includes\04_AWS\2\Cloudwatch.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/2/Cloudwatch.png?raw=true)  
Het alarm gaat af als er verwacht wordt dat ik binnen 6 uur meer dan een dollar uit ga geven;
![[](..\00_includes\04_AWS\2\Estimated_cost.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/2/Estimated_cost.png?raw=true)  
![[](..\00_includes\04_AWS\2\Estimated_dollar.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/2/Estimated_dollar.png?raw=true)  
Ik krijg een mailtje als het alarm afgaat;
![[](..\00_includes\04_AWS\2\Dollar_notification.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/2/Dollar_notification.png?raw=true)  
![[](..\00_includes\04_AWS\2\Dollar_alarm.png)](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/2/Dollar_alarm.png?raw=true)  
Het alarm is succesvol aangemaakt;  
![](https://github.com/techgrounds/techgrounds-Mynamewastakenwastaken/blob/main/00_includes/04_AWS/2/Dollar_alarm_conf.png?raw=true)  

- Understand the options that AWS offers to get insights in your cloud costs.

Cost explorer

Pricing calculator
