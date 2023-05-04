# FROM node:18-alpine
# ENV PORT 3005
# # RUN mkdir -p /app
# WORKDIR /app
# COPY ./package.json ./yarn.lock /app/
# COPY ./.env /app/
# RUN yarn config set network-timeout 600000 -g && yarn install
# COPY ./ /app
# EXPOSE 3005
# CMD [ "yarn", "dev"]

FROM node:18-alpine as builder
WORKDIR /app

COPY ./frontend/package.json ./yarn.lock ./
RUN yarn install
COPY ./frontend .
COPY .env .env.local

FROM node:18-alpine as runner
WORKDIR /app
COPY --from=builder /app/.env.local .env.local
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/node_modules/ ./node_modules/

COPY --from=builder /app/public/ ./public/
COPY --from=builder /app/app/ ./app/
COPY --from=builder /app/src/ ./src/
EXPOSE 3000
CMD ["yarn", "dev"]