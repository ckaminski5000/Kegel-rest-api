const mongoose = require("mongoose");
const logger = require("./logger");

const url = process.env.MONGO_URI;
const port = process.env.PORT;

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then(() => console.log("Connected to Mongo"))
  .catch((e) => console.log(e));

/*const { MongoClient } = require("mongodb");
 
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
};*/
