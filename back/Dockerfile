FROM node:17-alpine

# ENV DB_PASSWORD=${DB_PASSWORD}
# ENV DB_NAME=${DB_NAME}
# ENV HOSTNAME=${DB_CONTAINER_NAME}
ENV SERVER_PORT=5000

WORKDIR /app

# COPY package*.json ./
COPY . .
RUN npm install --loglevel verbose

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "start"]