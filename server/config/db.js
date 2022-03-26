const { MongoClient } = require('mongodb');
const database_name = process.env.CLUSTER_NAME;
const client = new MongoClient(process.env.CONNECTION_STRING);

async function findOne(pCollection, pFilter, pOptions) {
    let result;
    try {
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        result = await collection.findOne(pFilter, pOptions);
    } finally {
        await client.close();
    }
    return result;
}

async function findAll(pCollection, pOptions){
    let result;
    try {
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        const cursor = collection.find({ id: {$exists:true}}, pOptions);
        result = await cursor.toArray();
    } finally {
        await client.close();
    }
    return result;
}

async function find(pCollection, pQuery, pOptions){
    let result;
    try {
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        const cursor = collection.find(pQuery, pOptions);
        result = await cursor.toArray();
    } finally {
        await client.close();
    }
    return result;
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
    let result;
    try{
        await client.connect();
        const database = client.db(database_name);
        const collection = database.collection(pCollection);
        const set = {
            $set: pDocument,
        }
        result = await collection.updateOne(pFilter, set);
    } finally {
        await client.close();
    }
    return result;
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

module.exports = { findOne, find, findAll, insertOne, updateOne, deleteOne }

