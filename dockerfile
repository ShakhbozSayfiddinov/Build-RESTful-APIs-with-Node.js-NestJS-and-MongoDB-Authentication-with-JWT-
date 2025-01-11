#  Node.js 18 as the base image
FROM node:18-alpine

# working directory
WORKDIR /app


# RUN apk add --no-cache make gcc g++ python3 py3-pip


RUN ln -sf python3 /usr/bin/python


COPY package*.json ./

RUN npm install
# RUN npm ci





COPY . .


RUN npm run build


# RUN npm install -g prisma


EXPOSE 4001


CMD ["npm", "run", "start:prod"]
