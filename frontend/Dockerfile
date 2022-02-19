FROM node:12-alpine as build

WORKDIR /frontend

COPY package.json package-lock.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]