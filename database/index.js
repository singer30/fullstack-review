const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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

let save = (err, Repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // if (err) return console.error(err);
  // new Repo;
}

module.exports.save = save;