import Task from "../models/taskModel.js";

// Create Task
export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get All Tasks
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json({
            count: tasks.length,
            data: tasks
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Single Task
export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Task
export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Task
export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({
            message: "Task deleted successfully",
            data: deletedTask
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};