FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./src .

# Build env var only (not in final image)
ARG FLAG

# Reference it in docker env (persist)
ENV FLAG=$FLAG

# Output FLAG to file
RUN echo $FLAG > my_fl4g.lol

# Set fake FLAG env var
ENV FLAG=nope

EXPOSE 8080
CMD [ "node", "index.js" ]