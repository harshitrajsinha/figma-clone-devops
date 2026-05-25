FROM node:24.16.0-alpine3.23 AS builder

WORKDIR /app

ARG NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY
ENV NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=$NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

# Build
RUN npm run build

# ---------- Runner Stage ----------
FROM node:24.16.0-alpine3.23

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN apk add --no-cache libc6-compat

# Copy required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]