import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("🟢 Conectado ao MongoDB");
    } catch (error) {
        console.error("❌ Erro ao conectar no MongoDB:", error.message);
    }
}

export default connectToMongo;
