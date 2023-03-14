FROM node:18.15.0-alpine

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm i && tail -f /dev/null" ]
