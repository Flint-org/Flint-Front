FROM node:14-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g expo-cli

COPY . .

EXPOSE 19000

CMD npm start