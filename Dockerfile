# base image
FROM node:18.18.0

# set working directory
WORKDIR /app
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

# start app
CMD npm run start
