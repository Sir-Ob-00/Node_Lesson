import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        require: true
    }, 
    password: {
        type: string,
        require: true
    }, 
    role: {
        type: string,
        require: true
    }, 
    email: {
        type: string,
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