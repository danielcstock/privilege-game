const { MongoClient, ObjectId} = require('mongodb');
const connection_string = "";
const database_name = "cluster0";
const uri = connection_string;
const client = new MongoClient(uri);

async function findOne(pCollection, pFilter, pOptions) {
    try {
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        return await collection.findOne(pFilter, pOptions);
    } finally {
        await client.close();
    }
}

async function find(pCollection, pOptions){
    try {
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        // return await collection.find({ }, pOptions);
        const cursor = collection.find({ id: {$exists:true}}, pOptions);
        // replace console.dir with your callback to access individual elements
        const items = await cursor.toArray();
        return items;
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
        return result.insertedId;
    } finally {
        await client.close();
    }
}

async function updateOne(pCollection, pFilter, pDocument){
    try{
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        const set = {
            $set: pDocument,
        }
        const result = await collection.updateOne(pFilter, set);
    } finally {
        await client.close();
    }
}

async function deleteOne(pCollection, pFilter){
    try {
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        const result = await collection.deleteOne(pFilter);
        return result.deletedCount;
    } finally {
        await client.close();
    }
}

module.exports = { findOne, find, insertOne, updateOne, deleteOne }

