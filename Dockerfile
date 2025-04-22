#Use uma imagem Node.js oficial como base
FROM node:16 AS build

#Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Instale o pacote mongodb
RUN npm install mongodb --save

# Copie o restante do código-fonte
COPY . .

# Compile a aplicação para o diretório dist
RUN npm run build

# Defina o ambiente de produção
ENV NODE_ENV=production

# Exponha a porta em que a aplicação será executada
EXPOSE 3000

# Defina o comando para rodar a aplicação
CMD ["npm", "run", "start"]