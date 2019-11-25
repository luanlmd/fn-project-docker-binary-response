FROM node:12-slim as build-stage
WORKDIR /function
ADD package.json /function/
RUN npm install

FROM node:12-slim
WORKDIR /function
ADD . /function/
COPY --from=build-stage /function/node_modules/ /function/node_modules/
ENTRYPOINT ["node", "func.js"]