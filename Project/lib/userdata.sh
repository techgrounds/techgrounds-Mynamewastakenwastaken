yum install httpd mod_ssl -y
echo Funny comment | cat >> /var/www/html/index.html
systemctl enable httpd && systemctl start httpd
sudo stress --cpu 1 --timeout 600