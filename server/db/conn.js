const { MongoClient, ServerApiVersion } = require("mongodb");
// const mongoose = require('mongoose');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
 
var _db;

async function run() {
    try {
      await client.connect()
      .then(() =>  console.log("Successfully connected to MongoDB."));
      const database = client.db("snake_game");
      _db = database;
    } catch (err) {
        console.error(err.message);
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