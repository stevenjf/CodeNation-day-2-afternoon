const {MongoClient} = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc,dataObj, filter) => {
    try {
        await client.connect();
        console.log("connection successful")
        const db = client.db("myFirstDatabase");
        const collection = db.collection("music");
        await crudFunc(collection, dataObj);
        console.log(dataObj)
        client.close();
    } catch (error) {
        console.log(error);
    }
};



module.exports = connection;
