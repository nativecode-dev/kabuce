FROM node:alpine3.11 AS BASE
WORKDIR /build
COPY /package-lock.json /build/package-lock.json
COPY /package.json /build/package.json
RUN set -ex \
  && npm ci \
  ;

FROM BASE AS BUILD
WORKDIR /build
COPY /e2e /build/e2e
COPY /src /build/src
COPY /.browserslistrc /build/.browserslistrc
COPY /.editorconfig /build/.editorconfig
COPY /.gitignore /build/.gitignore
COPY /angular.json /build/angular.json
COPY /karma.conf.js /build/karma.conf.js
COPY /package-lock.json /build/package-lock.json
COPY /package.json /build/package.json
COPY /tsconfig.app.json /build/tsconfig.app.json
COPY /tsconfig.json /build/tsconfig.json
COPY /tsconfig.spec.json /build/tsconfig.spec.json
COPY /tslint.json /build/tslint.json
RUN set -ex \
  && npm run build \
  ;

FROM nginx:1.18-alpine AS FINAL
COPY --from=BUILD /build/dist/kabuce-app /usr/share/nginx/html
RUN ls -lah /usr/share/nginx/html
