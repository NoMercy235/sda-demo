FROM nginx

WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 1006

ENTRYPOINT ["nginx", "-g", "daemon off;"]