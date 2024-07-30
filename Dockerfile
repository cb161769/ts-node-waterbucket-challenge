FROM node:lts

WORKDIR /usr/src/app


ENV NODE_ENV=development \
    DEBUG=true \
    PORT=8080

COPY . .

RUN npm install -g @nestjs/cli typescript @types/node

RUN npm install

RUN npm run build

RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

EXPOSE 8080

CMD [ "node", "dist/main.js" ]

HEALTHCHECK --interval=2m --timeout=3s \
  CMD curl -f http://localhost:8080/ || exit 1
