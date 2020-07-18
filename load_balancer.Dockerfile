FROM debian:buster-slim

RUN apt-get update \
    && apt-get install -y nginx \
    && apt-get install -y gettext-base

RUN rm -f /var/log/nginx/access.log \ 
    && ln -s /dev/stdout /var/log/nginx/access.log \
    && rm -f /var/log/nginx/error.log \ 
    && ln -s /dev/stderr /var/log/nginx/error.log

ENV PROXY_PROTOCOL=http PROXY_UPSTREAM=example.com

COPY proxy.conf /etc/nginx/sites-available/default.template
COPY ./scripts/start-nginx.sh /

EXPOSE 80

CMD ["/start-nginx.sh"]
