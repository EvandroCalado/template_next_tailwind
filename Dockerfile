FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY .husky ./.husky
COPY .eslintrc.json ./.eslintrc.json
COPY .prettierrc.json ./.prettierrc.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
