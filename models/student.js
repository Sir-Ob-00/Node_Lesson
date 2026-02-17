import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    age: { 
        type: Number, 
        required: true 
    },
    gpa: { 
        type: Number, 
        required: true 
    }
}, { timestamps: true });

// Explicit collection name to match MongoDB
const Students = mongoose.model("Students", studentSchema, "Students");

export default Students;
