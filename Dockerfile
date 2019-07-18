# NOTE - must be connected to brown wifi/vpn...

FROM node:current-alpine as build
RUN apk add --no-cache git
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

# production environment
FROM build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "./build"]
