# STAGE 1: Build the frontend
FROM node:20-alpine AS client_builder
WORKDIR /app
COPY ./client/package*.json /app/
RUN npm install
COPY ./client/ /app/
RUN npm run build

# STAGE 2: Build the FullStack

FROM node:20-alpine AS server_builder
WORKDIR /app
COPY ./server/package*.json /app/
RUN npm install
COPY ./server/ /app/
COPY --from=client_builder /app/dist /app/public
CMD [ "node", "server.js" ]