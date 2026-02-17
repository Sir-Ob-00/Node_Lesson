import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    }, 
    password: {
        type: String,
        require: true
    }, 
    role: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        unique: true,
        validate: {
        validator: function(v) {
            return v.includes("@");
            },
        message: "Invalid email format"
        }
    }
}, {timestamps: true})

const User = mongoose.model("user", userSchema);

export default User;