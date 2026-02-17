import User from "../models/user.js"
import bcrypt from "bcrypt";

//CREATE OPERATION
export const createUser = async(req, res) => {
    try{
        const {username, password, role, email} = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        const user = new User({username, password: hashedPassword, role, email});
        await user.save();
        res.status(201).json(user);
    }catch(err){
        console.error("error creating user:", err);
        res.status(500).json({ message: "Error creating user" });
    }
};

//READ ALL USERS

export const getUser = async(req, res) => {
    try{
        const user = await User.find();
        res.json(user);
    }catch(err){
        res.status(500).json({ message: "Error fetching user" });
    }
}