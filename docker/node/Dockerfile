FROM node:8.6.0-alpine

LABEL maintainer Jaskaranbir Dhillon

RUN npm install -g pm2 \
    && mkdir -p /usr/src/app

WORKDIR /usr/src

COPY run.sh .

RUN chmod +x run.sh

EXPOSE 8080

CMD ["./run.sh"]