FROM node:17-alpine

ENV SERVER_PORT=3000

WORKDIR /app

COPY package*.json ./
RUN npm install --loglevel verbose
COPY . .

HEALTHCHECK CMD curl --fail http://localhost:${SERVER_PORT} || exit 1

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "serve"]