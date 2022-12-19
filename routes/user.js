import express from "express"
import * as userController from "../controllers/UserController.js"
import verifyToken from "../middleware/verifyToken.js"

const router = express.Router()

router.get("/", verifyToken, userController.handleGetUsers)
router.post("/register",userController.handleRegister )
router.post("/login", userController.handleLogin)

export default router