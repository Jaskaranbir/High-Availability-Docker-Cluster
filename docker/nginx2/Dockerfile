FROM nginx_base

MAINTAINER Jaskaranbir Dhillon

COPY node2 /etc/nginx/sites-available/

RUN mkdir -p /etc/nginx/sites-enabled && \
    ln -sf /etc/nginx/sites-available/* /etc/nginx/sites-enabled/
