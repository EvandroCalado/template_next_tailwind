# Use uma imagem base do Ubuntu
FROM ubuntu:22.04

# Instale as dependências necessárias
RUN apt-get update && apt-get install -y \
  curl \
  git \
  build-essential

# Instale Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs

# Defina o diretório de trabalho no contêiner
WORKDIR /workspace

# Copie os arquivos de pacotes para o contêiner
COPY package*.json ./

# Instale as dependências do projeto, incluindo Husky
RUN npm install

# Configure o Husky
RUN npm run prepare

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Defina o comando padrão para executar o contêiner
CMD ["npm", "run", "dev"]

