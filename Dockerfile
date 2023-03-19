FROM node:18.15.0-slim

RUN apt update && apt install -y \
    git \
    ca-certificates \
    default-jre \
    zsh \
    curl \
    wget

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm i && tail -f /dev/null" ]
