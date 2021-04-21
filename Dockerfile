FROM node:latest

ENV LANG="en_US.UTF-8"
ENV LC_ALL="C.UTF-8"
ENV LANGUAGE="en_US.UTF-8"
ENV TERM="xterm"
ENV PATH="./node_modules/.bin/:/home/node/.npm-global/bin:$PATH"
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN mkdir -p /home/node/.npm-global/lib
RUN mkdir -p /usr/src/app
RUN rm -rf /home/node/.npm-global/lib/*
RUN rm -rf /home/node/src/*

WORKDIR /usr/src/app
COPY . ./

RUN npm set progress=false
RUN npm --unsafe-perm install --prefer-offline
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
