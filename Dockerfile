FROM node:18.19.0-alpine3.18

WORKDIR /usr/src/app


ENV NODE_ENV=production \
    DEBUG=true \
    PORT=8080

COPY . .

RUN npm install -g @nestjs/cli typescript

RUN npm install

RUN npm run build

RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

EXPOSE 8080

CMD [ "node", "dist/main.js" ]

HEALTHCHECK --interval=2m --timeout=3s \
  CMD curl -f http://localhost:8080/ || exit 1
