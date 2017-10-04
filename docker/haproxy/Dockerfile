FROM haproxy:1.7.9-alpine

LABEL maintainer Jaskaranbir Dhillon

ENV HAPROXY_USER haproxy

RUN apk --update add curl

RUN mkdir -p /run/haproxy && \
	mkdir -p /usr/local/etc/default && \
    echo 'ENABLED=1' > /usr/local/etc/default/haproxy

RUN addgroup ${HAPROXY_USER} && adduser -D -G ${HAPROXY_USER} ${HAPROXY_USER} && \
	mkdir -p /var/lib/${HAPROXY_USER} && \
  	chown -R ${HAPROXY_USER}:${HAPROXY_USER} /var/lib/${HAPROXY_USER}

EXPOSE 80 8181

CMD ["haproxy", "-f", "/usr/local/etc/haproxy/haproxy.cfg"]
