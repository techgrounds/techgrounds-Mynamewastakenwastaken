yum install httpd mod_ssl -y
sudo amazon-linux-extras install epel -y
sudo yum install stress -y
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
systemctl enable httpd && systemctl start httpd
sudo stress --cpu 4 --timeout 800