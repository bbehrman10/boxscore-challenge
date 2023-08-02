const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/mydatabase";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnect = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");
        return client;
    } catch (err) {
        console.error(`Failed to connect to MongoDB: ${err}`);
    }
}

module.exports = dbConnect;
