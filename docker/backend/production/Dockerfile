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
# ENV NODE_ENV=${NODE_ENV}
# RUN yarn build

# CMD ["yarn", "start"]

FROM node:18-alpine as build
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./backend/package.json ./backend/yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install --production
WORKDIR /opt/backend
COPY ./backend/ .
RUN yarn build
FROM node:18-alpine
RUN apk add --no-cache vips-dev

FROM node:18-alpine
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/backend
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
COPY --from=build /opt/backend ./
EXPOSE 1337
CMD ["yarn", "start"]
