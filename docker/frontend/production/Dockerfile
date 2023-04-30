FROM node:18-alpine
ARG NODE_ENV
ENV PORT 3005
RUN mkdir -p /app
WORKDIR /app
COPY ./frontend/package*.json /app/
COPY ./.env /app/
RUN yarn config set network-timeout 600000 -g && yarn install
COPY ./frontend /app
ENV NODE_ENV=${NODE_ENV}
RUN yarn build
EXPOSE 3005
CMD [ "yarn", "start" ]