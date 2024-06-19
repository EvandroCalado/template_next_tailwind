FROM node:20-alpine

WORKDIR /workspace

COPY package*.json /workspace/

RUN npm run prepare

RUN npm install

COPY . /workspace/

EXPOSE 3000

CMD ["npm", "run", "dev"]
