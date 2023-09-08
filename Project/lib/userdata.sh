yum install httpd mod_ssl -y
echo Empty | cat >> /var/www/html/index.html
systemctl enable httpd && systemctl start httpd