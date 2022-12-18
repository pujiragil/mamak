import express from "express"
import * as userController from "../controllers/UserController.js"

const router = express.Router()

router.get("/", userController.handleGetUsers)
router.post("/register",userController.handleRegister )

export default router