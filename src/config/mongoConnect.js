const mongoose = require("mongoose");
require("dotenv").config();

async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("🟢 Conectado ao MongoDB");
    } catch (error) {
        console.error("❌ Erro ao conectar no MongoDB:", error.message);
    }
}

module.exports = connectToMongo;