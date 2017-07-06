FROM oraclelinux:7-slim

MAINTAINER Jaskaranbir Dhillon

ENV PACKAGE_URL https://repo.mysql.com/yum/mysql-5.7-community/docker/x86_64/mysql-community-server-minimal-5.7.18-1.el7.x86_64.rpm

# Install server
RUN rpmkeys --import http://repo.mysql.com/RPM-GPG-KEY-mysql \
  && yum install -y $PACKAGE_URL \
  && yum install -y libpwquality \
  && rm -rf /var/cache/yum/*
RUN mkdir /docker-entrypoint-initdb.d

COPY docker-entrypoint.sh /entrypoint.sh

EXPOSE 3306 33060

ENTRYPOINT ["/entrypoint.sh"]

CMD ["mysqld"]
