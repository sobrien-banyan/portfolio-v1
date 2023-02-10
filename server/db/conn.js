const { MongoClient, ServerApiVersion } = require("mongodb");
// const mongoose = require('mongoose');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
// const client = new MongoClient('mongodb+srv://sean-admin:lFwHEyClyxctWJqo@cluster0.v6q3wky.mongodb.net/snake_game?retryWrites=true&w=majority');
 
var _db;

async function run() {
    try {
      await client.connect()
      .then(() =>  console.log("Successfully connected to MongoDB."));
      const database = client.db("snake_game");
    //   const ratings = database.collection("name_score");
    //   const cursor = ratings.find();
    //   console.log(cursor)
    //   console.log(ratings.find());
      _db = database;
    //   await cursor.forEach(doc => console.dir(doc));
    } catch (err) {
        console.error(error.message);
    ''
    }
  }
 
module.exports = {
    connectToServer: function (callback) {
        run();
    },
   
    getDb: function () {
      return _db;
    },
  };