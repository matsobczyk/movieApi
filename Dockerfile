FROM node:14.15-alpine

WORKDIR /api

COPY ./package.json ./package-lock.json /api/
RUN npm install

COPY . /api

EXPOSE 8080

CMD ["npm", "start"]