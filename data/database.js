const mongodb = require('mongodb');

const MongoCient = mongodb.MongoClient;

let database;

async function connect () {
  const client = await MongoCient.connect('mongodb://localhost:27017');
  database = client.db('blog');
}

function getDb() {
if (!database) {
  throw {message: "Database connection is not set!"};
}
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb
};