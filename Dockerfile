FROM node:4.2

EXPOSE 5000 5001 8080

ADD ./package.json /app/
RUN npm install -q

ADD ./src /app/src

CMD ["node", "/app/src/index.js"]
