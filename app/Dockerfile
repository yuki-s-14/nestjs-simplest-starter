FROM node:22-alpine

WORKDIR /app

# Install OpenSSL and other dependencies
RUN apk add --no-cache openssl

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"] 