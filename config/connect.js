

const { MongoClient } = require("mongodb");
 
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to Mongo server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

module.exports = {
  client
}