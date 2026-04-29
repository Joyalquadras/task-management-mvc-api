import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title should not be empty'], // FIXED typo
    },
    description: String,
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed']
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;