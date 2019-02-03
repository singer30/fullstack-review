const request = require('request');
const config = require('../config.js');
//const save = require('../database/index.js');

let getReposByUsername = function (string, callback) { //callback needed to allow save to go all the way through.
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${string}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
  };
  request(options, function (err, repos) {
    if (err) {
      callback(err);// callback or save or throw error.
    } else {
      callback(null, repos)
    }
  });
}





module.exports.getReposByUsername = getReposByUsername;


//GET /octokit/repos
//https://api.github.com

// request({
//   method: 'GET',
//   uri: 'https://api.github.com',
//   har: options
// })

