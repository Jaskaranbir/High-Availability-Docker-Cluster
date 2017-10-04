FROM nginx:1.13.5-alpine

LABEL maintainer Jaskaranbir Dhillon

RUN apk --update add curl

RUN mv /etc/nginx/conf.d/default.conf \
       /etc/nginx/conf.d/default.conf.bak

COPY nginx.conf /etc/nginx/

EXPOSE 80
