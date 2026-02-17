import express from "express"
import {createUser} from "../controllers/userController.js"

const router = express.Router();

//CRUD OPERATIONS
router.post("/", createUser);



export default router;