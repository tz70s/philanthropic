FROM node:latest

RUN mkdir -p /app
ADD . /app
EXPOSE 8999
ENTRYPOINT node /app/route.js
