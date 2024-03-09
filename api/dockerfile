#base-image
FROM node:18-alpine
#create a app-directory
WORKDIR /app
#install app dependencies
COPY package*.json ./
#Run npm insatll
RUN npm install
#Bundle app source
COPY . .

EXPOSE 8000

CMD ["npm","start"]