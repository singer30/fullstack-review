const express = require('express');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');

let app = express();


app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  let username = req.body.username
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var data = getReposByUsername(username, save(err, data)); // delete the console.log and see if it consoles
  //res.send(getReposByUsername(username)); // delete the send and see if it consoles
  // being ran twice, confimed
  save(err, data);
  console.log((req.body.username));
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log("I am recieving get requests!");
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

