FROM node:12-alpine

WORKDIR /build
COPY . /build
RUN npm i
RUN npm run build

FROM node:12-alpine 
WORKDIR /app
COPY --from=0 /build/dist /app/dist
COPY swagger /app/swagger
COPY package.json package-lock.json /app/
RUN npm i --production
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]
