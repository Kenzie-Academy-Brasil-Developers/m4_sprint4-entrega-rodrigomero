FROM  node:16

RUN apt-get update

EXPOSE 3333

WORKDIR /app

COPY ["package.json", "yarn.lock"] .

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]