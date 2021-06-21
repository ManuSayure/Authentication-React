# versão do node que será instalada
FROM node:alpine 

# diretorio principal de execução
WORKDIR /usr/app

# fazer uma cópia de todos os arquivos que começam com  palavra package e teminam com json
#para dentro do WORDIR no container Docker
COPY package*.json  ./

#instalar as depedências
RUN yarn install

#copia todo o restante dos arquivos pra dentro do container
COPY . .

# qual porta querendo expor no container
EXPOSE 3000

# apenas um por dockerfile e ele vai executar as intruções que estão dentro do array
CMD ["yarn", "start"]