FROM node:alpine3.11 AS BUILD
WORKDIR /build
COPY /src /build/src
COPY /.gitignore /build/.gitignore
COPY /appsettings.json /build/appsettings.json
COPY /package-lock.json /build/package-lock.json
COPY /package.json /build/package.json
COPY /tsconfig.json /build/tsconfig.json
RUN set -ex \
  && npm ci \
  && npm run build \
  ;

FROM node:alpine3.11 AS FINAL
WORKDIR /app
COPY /package-lock.json /app/package-lock.json
COPY /package.json /app/package.json
RUN set -ex \
  && npm ci --production \
  ;
COPY --from=BUILD /build/dist /app/dist
EXPOSE 8080
CMD ["/usr/local/bin/node", "/app/dist"]
