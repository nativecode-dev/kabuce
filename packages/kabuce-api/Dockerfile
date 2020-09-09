FROM node:alpine3.11 AS BASE
WORKDIR /usr/kabuce-api
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN set -ex \
  && apk update \
  && npm ci --production \
  ;



#******************************************************************************
# BUILD
#******************************************************************************
FROM BASE AS BUILD
WORKDIR /usr/kabuce-api
COPY env env
COPY spec spec
COPY src src
COPY .editorconfig .editorconfig
COPY .prettierrc.json .prettierrc.json
COPY build.js build.js
COPY tsconfig.json tsconfig.json
COPY tsconfig.prod.json tsconfig.prod.json
COPY tslint.json tslint.json
RUN set -ex \
  && npm ci \
  && npm run build \
  ;


#******************************************************************************
# FINAL
#******************************************************************************
FROM BASE AS FINAL
WORKDIR /usr/kabuce-api
COPY --from=BUILD /usr/kabuce-api/dist dist
CMD ["/usr/local/bin/node", "dist/index.js"]
