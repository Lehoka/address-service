FROM node:18-bullseye
WORKDIR /usr/syscode/address-service

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY src ./src
COPY test ./test
RUN npm install
RUN npm audit fix
RUN npm run build

CMD ["node", "./build/src/app.js"]

EXPOSE ${SERVER_PORT} 8081