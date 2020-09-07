FROM node:alpine3.11 AS BASE
WORKDIR /usr/kabuce-appui
COPY package.json /usr/kabuce-appui/package.json
COPY package-lock.json /usr/kabuce-appui/package-lock.json
RUN set -ex \
  && npm ci --production \
  ;



#******************************************************************************
# BUILD
#******************************************************************************
FROM BASE AS BUILD
WORKDIR /usr/kabuce-appui
# Directories
COPY .devcontainer /usr/kabuce-appui/.devcontainer
COPY .storybook /usr/kabuce-appui/.storybook
COPY bundlers /usr/kabuce-appui/bundlers
COPY cypress /usr/kabuce-appui/cypress
COPY public /usr/kabuce-appui/public
COPY src /usr/kabuce-appui/src
# Files
COPY .editorconfig /usr/kabuce-appui/
COPY .eslintrc.json /usr/kabuce-appui/
COPY .prettierrc.json /usr/kabuce-appui/
COPY .stylelintrc.json /usr/kabuce-appui/
COPY commitlint.config.js /usr/kabuce-appui/
COPY cypress.json /usr/kabuce-appui/
COPY tsconfig.json /usr/kabuce-appui/
COPY *.config.js /usr/kabuce-appui/
# Build
RUN set -ex \
  && npm ci \
  && npm run build \
  ;



#******************************************************************************
# FINAL
#******************************************************************************
FROM BASE AS FINAL
COPY --from=BUILD /usr/kabuce-appui/__sapper__/build /usr/kabuce-appui/
EXPOSE 3000
CMD ["/usr/local/bin/node", "index.js"]
