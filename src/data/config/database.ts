import mongoose, {ConnectOptions} from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;


const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ayo8cdl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
            { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions
        );
        console.log('MongoDB connected');
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;