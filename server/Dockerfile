FROM NODE:18-alphine


WORKDIR /app


COPY package*.json ./


RUN npm install



COPY . .



RUN  npm run build


EXPOSE 5000


CMD ["node","dist/server/server.js"]