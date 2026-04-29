import mongoose from "mongoose";

const configureDB = async () => {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/task-db');
        console.log(" DB Connected:", db.connection.name);
    } catch (err) {
        console.error(" DB Connection Failed:", err.message);
    }
};

export default configureDB;