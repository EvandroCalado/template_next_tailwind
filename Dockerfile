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

# Copie o restante dos arquivos do projeto
COPY . .

# Instale o Lefthook localmente no projeto
RUN npm install lefthook

# Exponha a porta 3000
EXPOSE 3000

# Defina o comando padrão para executar o contêiner
CMD ["npm", "run", "dev"]

