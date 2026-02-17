import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    role: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid email format"
        }
    }
}, {timestamps: true})

const User = mongoose.model("users", userSchema, "users");

export default User;