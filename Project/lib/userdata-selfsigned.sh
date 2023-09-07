yum -y install httpd
systemctl enable httpd
systemctl start httpd
echo '<html><h1>Hello From Your Web Server!</h1></html>' > /var/www/html/index.html
openssl req -newkey rsa:4096 -x509 -sha256 -days 3650 -nodes -out /etc/ssl/certs/selfsigned.crt -keyout /etc/ssl/certs/selfsigned.key -subj "/C=SI/ST=Ljubljana/L=Ljubljana/O=Security/OU=IT Department/CN=www.example.com"
cat <<EOF > /etc/httpd/conf/apachessl.conf
<VirtualHost *:443>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html
    SSLEngine on
    SSLCertificateFile /etc/ssl/certs/selfsigned.crt
    SSLCertificateKeyFile /etc/ssl/certs/selfsigned.key
</VirtualHost>
EOF
systemctl restart httpd