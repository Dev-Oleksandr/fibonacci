FROM node:18.1.0

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
