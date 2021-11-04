const { MongoClient } = require('mongodb');
const connection_string = "";
const database_name = "";
const uri = connection_string;
const client = new MongoClient(uri);

async function findAll(pCollection, pQuery, pOptions) {
    try {
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        return await collection.findOne(pQuery, pOptions);

    } finally {
        await client.close();
    }
}

async function insertOne(pCollection, pDocument){
    try {
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        const result = await collection.insertOne(pDocument);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        return result.insertedId;
    } finally {
        await client.close();
    }
}

module.exports = { findAll, insertOne }

