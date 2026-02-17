import User from "../models/user.j"

//CREATE OPERATION
export const createUser = async(req, res) => {
    try{
        const {username, password, role, email} = req.body;
        const user = new User({username, password, role, email});
        await user.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({ message: "Error creating user" });
    }
};