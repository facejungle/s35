# FROM node:18-alpine
# RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
# RUN mkdir -p /app
# WORKDIR /app
# COPY ./backend/package*.json ./backend/yarn.lock /app/
# COPY ./.env /app/
# ENV PATH /app/node_modules/.bin:$PATH
# RUN yarn config set network-timeout 600000 -g && yarn install
# COPY ./backend /app
# EXPOSE 1337
# RUN yarn build
# CMD ["yarn", "develop"]


FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./backend/package.json ./backend/yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
WORKDIR /opt/backend
COPY ./backend/ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop"]
