FROM node:18.19.0

WORKDIR /app
COPY . .
RUN npm install

ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm", "run", "start"]