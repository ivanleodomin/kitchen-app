FROM node as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:slim

ENV NODE_ENV production
USER node

# Create app directory
WORKDIR /usr/src/app

USER root

# Install app dependencies
COPY package.json yarn.lock .env ./

RUN yarn install --production

USER node

COPY --from=builder /usr/src/app/build ./build

EXPOSE 3000
CMD [ "yarn", "start" ]
