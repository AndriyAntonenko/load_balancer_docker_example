FROM node:14.5.0-alpine3.10

WORKDIR /app

COPY ./*.js .
COPY package.json .

RUN npm i
RUN apk add --no-cache --upgrade bash

CMD npm run start
