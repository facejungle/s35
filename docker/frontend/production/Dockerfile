# FROM node:18-alpine
# ARG NODE_ENV
# ENV PORT 3005
# # RUN mkdir -p /app
# WORKDIR /app
# COPY ./package.json ./yarn.lock /app/
# COPY ./.env /app/
# RUN yarn config set network-timeout 600000 -g && yarn install
# COPY ./ /app
# ENV NODE_ENV=${NODE_ENV}
# RUN yarn build
# EXPOSE 3005
# CMD [ "yarn", "start" ]

FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY ./package.json ./
RUN  npm install --${NODE_ENV}

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV ${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3005

ENV PORT 3005

CMD ["npm", "start"]
