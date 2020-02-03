# quiet-time
Devotion website
- deployed on heroku: https://quiet-time-dev.herokuapp.com/
 - add engine and change value for start to deploy on heroku

## Deploying angular app on heroku
- change:
  "start": "ng serve" to   "start": "node server.js" in package.json
  still in scripts add -
  "heroku-postbuild": "ng build --aot --prod"

  then add
  "engines": {
    "node": "13.7.0",
    "npm": "6.13.7"
  }

  run npm -v and node -v to change to the current versions you are running


  - add the server.js file in the root directory
  and in it add this code
  //Install express server
  const express = require('express');
  const path = require('path');

  const app = express();

  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + '/dist/your-project-name'));

  app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/your-project-name/index.html'));
  });

  // Start the app by listening on the default Heroku port
  app.listen(process.env.PORT || 8081);



  run npm install express to add express package

  push your project on github/ make connection 
