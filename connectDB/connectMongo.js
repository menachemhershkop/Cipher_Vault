import { MongoClient } from "mongodb";

export default async function connectMango({uri, dbName}) {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    console.log("MongoDB connected:", db.databaseName);
    return db
}