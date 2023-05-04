FROM node:18-alpine as builder
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1 
ENV NODE_ENV=development
WORKDIR /app/
COPY .env ./backend/package.json ./backend/yarn.lock ./
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install --development
WORKDIR /app/backend
COPY ./backend/ .
RUN yarn build

FROM node:18-alpine as runner
RUN apk add --no-cache vips-dev
ENV NODE_ENV=development
WORKDIR /app/backend
COPY --from=builder /app/node_modules ./node_modules
ENV PATH /app/node_modules/.bin:$PATH
COPY --from=builder /app/backend ./
EXPOSE 1337
ENTRYPOINT ["yarn", "develop"]

# IMAGE 675MB
# FROM node:18-alpine as build
# RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1 
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /app/
# COPY ./package.json ./yarn.lock ./
# ENV PATH /app/node_modules/.bin:$PATH
# RUN yarn config set network-timeout 600000 -g && yarn install --development
# WORKDIR /app/backend
# COPY ./ .
# RUN yarn build
# FROM node:18-alpine
# RUN apk add --no-cache vips-dev

# FROM node:18-alpine
# RUN apk add --no-cache vips-dev
# ENV NODE_ENV=development
# WORKDIR /app/backend
# COPY --from=build /app/node_modules ./node_modules
# ENV PATH /app/node_modules/.bin:$PATH
# COPY --from=build /app/backend ./
# EXPOSE 1337
# CMD ["yarn", "develop"]