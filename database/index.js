const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fetcher');
// is this creating a db called fetcher?
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  owner: {
    login: String,
    id: Number,
  },
  private: Boolean,
  Description: String,
  fork: Number,
  url: String,
  created_at: String,
  updated_at: String,
  language: String
});

let Repo = mongoose.model('Repo', repoSchema);


//am I already linked to the db.
let save = (repos, callback) => { //data,
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB.
  // if (err) {
  //   callback(err);
  // } else {
  //console.log(repos)

  reposArray = JSON.parse(repos.body)
  reposArray.forEach(function (repo) {
    var newRepo = new Repo(repo);
    newRepo.save(function (err) {
      if (err) {
        console.log('error');
      } else {
        console.log("succesfully saved Repos")
      }
    })
  });
}



module.exports.save = save;