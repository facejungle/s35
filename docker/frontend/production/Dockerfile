# FROM node:18-alpine as builder
# WORKDIR /app

# COPY ./frontend/package.json ./frontend/yarn.lock ./
# RUN yarn install
# COPY ./frontend .
# COPY .env .env.local
# RUN yarn build

# FROM node:18-alpine as runner
# WORKDIR /app
# COPY --from=builder /app/.env.local .env.local
# COPY --from=builder /app/node_modules/ ./node_modules/
# COPY --from=builder /app/package.json .
# COPY --from=builder /app/yarn.lock .
# COPY --from=builder /app/ .
# EXPOSE 3000
# CMD ["yarn", "start"]


FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN  yarn install --production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./frontend .

ENV NEXT_TELEMETRY_DISABLED 1
ENV API_URL ${BUILD_API_URL}
RUN yarn build
ENV API_URL ${API_URL}

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
