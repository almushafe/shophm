// lib/connectDB.js
// 'use server'
const { MongoClient } = require("mongodb");

const uri = process.env.MONGOURI ; // پورٹ نمبر شامل کریں
const client = new MongoClient(uri);

const main = async () => { // export کے بجائے async فنکشن بنائیں
    try {
        await client.connect();
        console.log("MongoDB connected");
        const db = client.db('shop');
        return db;
    } catch (error) {
        console.error("MongoDB not connected", error);
        throw error;
    }
}
export default main; // فنکشن ایکسپورٹ کریں