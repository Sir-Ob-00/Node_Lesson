import express from "express"
import {createUser,
        getUser,
} from "../controllers/userController.js"

const router = express.Router();

//CRUD OPERATIONS
router.post("/", createUser);
router.get("/", getUser);



export default router;