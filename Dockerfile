FROM node:10.16.0
COPY . . 
RUN npm i 
EXPOSE 9091
ENTRYPOINT node index.js

