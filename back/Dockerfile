FROM node:17-alpine

ENV SERVER_PORT=5000

WORKDIR /app

# COPY package*.json ./
COPY . .
RUN npm install --loglevel verbose

HEALTHCHECK CMD curl --fail http://localhost:${SERVER_PORT} || exit 1

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "start"]