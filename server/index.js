const express = require('express');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');
const { save } = require('../database/index.js');

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
  getReposByUsername(username, (err, repos) => {
    save(repos, function (err, results) {
      res.send(err, results);
    })
  })

  console.log((req.body.username));
});



app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should access the database
  // make a query for the 25 repos, then
  // send back the results of the query.
  // res.send();
  query(25, function (err, response) {
    console.log("am I making a get request to the right place?")
    res.send(JSON.parse(response));
  })
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

