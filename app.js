import express from "express";
import cors from "cors";
import configureDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// DB connection
configureDB();

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to Task Management Application");
});

// Routes
app.use("/api/tasks", taskRoutes);

export default app;