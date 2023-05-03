# IMAGE 1.55GB
# FROM node:18-alpine
# # Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev 
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /app/
# COPY ./package.json ./yarn.lock ./
# ENV PATH /app/node_modules/.bin:$PATH
# RUN yarn config set network-timeout 600000 -g && yarn install
# WORKDIR /app/backend
# COPY ./ .
# RUN yarn build
# EXPOSE 1337
# CMD ["yarn", "develop"]



# IMAGE 675MB
FROM node:18-alpine as build
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1 
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app/
COPY ./package.json ./yarn.lock ./
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install --${NODE_ENV}
WORKDIR /app/backend
COPY ./ .
RUN yarn build
FROM node:18-alpine
RUN apk add --no-cache vips-dev

FROM node:18-alpine
RUN apk add --no-cache vips-dev
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app/backend
COPY --from=build /app/node_modules ./node_modules
ENV PATH /app/node_modules/.bin:$PATH
COPY --from=build /app/backend ./
EXPOSE 1337
CMD ["yarn", "develop"]