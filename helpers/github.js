const request = require('request');
const config = require('../config.js');

let getReposByUsername = (string) => { //callback needed to allow save to go all the way through.
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

  function callback(error, response, body) {
    // going to take in save
    //if (!error & response.status == 200) {
    console.log("did i get here");
    //console.log('error will robinson', error);
    //console.log('this is the response', response);
    console.log('this is the body', JSON.parse(body));

  }
  //}

  request(options, callback);

}





module.exports.getReposByUsername = getReposByUsername;


//GET /octokit/repos
//https://api.github.com

// request({
//   method: 'GET',
//   uri: 'https://api.github.com',
//   har: options
// })

