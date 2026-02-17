import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoute from "./routes/studentRoute.js";
import userRoute from "./routes/userRoute.js"


dotenv.config();
const app = express();

// handles Middleware
app.use(express.json());

// Routes for students
app.use("/students", studentRoute);

//Routes for users
app.use("./user", userRoute)

// Connect to DB and then start server
const PORT = process.env.PORT || 4000; //
const MONGOURL = process.env.MONGO_URL || "mongodb://localhost:27017/school";

const startServer = async () => {
    await connectDB(MONGOURL); // <-- wait for DB connection first
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer(); // <-- this is the last call in the file



