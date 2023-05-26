import mongoose from "mongoose";
import config from "../../config";
import "./collections/Ingredients";
import "./collections/Recipe";
import "./collections/Orders";

async function connectDB(): Promise<void> {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(config.mongodbUri);

		const db = mongoose.connection;

		db.on('error', console.error.bind(console, '[ERROR] Fallo la conexion:'));
		console.log(' ✅ Connected to MongoDB')
	} catch (err) {
		console.log(' ⛔ Error to MongoDB connection')
	}
}

export default connectDB;

