FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build && npm prune --omit=dev

FROM node:22-alpine AS runtime

ENV NODE_ENV=production
WORKDIR /app

RUN addgroup -S spendsmart && adduser -S spendsmart -G spendsmart \
  && mkdir -p uploads/avatars \
  && chown -R spendsmart:spendsmart /app

COPY --from=build --chown=spendsmart:spendsmart /app/package.json ./package.json
COPY --from=build --chown=spendsmart:spendsmart /app/node_modules ./node_modules
COPY --from=build --chown=spendsmart:spendsmart /app/dist ./dist

USER spendsmart
EXPOSE 8000

CMD ["node", "dist/index.js"]
