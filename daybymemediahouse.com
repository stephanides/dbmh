server {

        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;

        server_name v1.daybymemediahouse.com www.v1.daybymemediahouse.com;

        location / {
                proxy_pass http://localhost:3336;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/v1.daybymemediahouse.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/v1.daybymemediahouse.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = v1.daybymemediahouse.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        listen 80;
        listen [::]:80;

        server_name v1.daybymemediahouse.com www.v1.daybymemediahouse.com;
    return 404; # managed by Certbot


}