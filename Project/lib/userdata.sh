yum install httpd mod_ssl -y
sudo amazon-linux-extras install epel -y
sudo yum install stress -y
echo Funny comment | cat >> /var/www/html/index.html
systemctl enable httpd && systemctl start httpd
sudo stress --cpu 4 --timeout 800

