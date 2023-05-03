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

FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN  yarn install --${NODE_ENV}

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=${NODE_ENV}

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3005
ENV PORT 3005

CMD ["yarn", "dev"]