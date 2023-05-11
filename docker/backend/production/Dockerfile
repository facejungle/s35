FROM node:18-alpine as build
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=production
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
ENV NODE_ENV=production
WORKDIR /opt/backend
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
COPY --from=build /opt/backend ./
EXPOSE 1337
ENV PORT 1337
CMD ["yarn", "start"]