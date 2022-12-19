import express from "express"
import * as userController from "../controllers/UserController.js"
import * as refreshController from "../controllers/RefreshController.js"
import verifyToken from "../middleware/verifyToken.js"

const router = express.Router()

router.get("/", verifyToken, userController.handleGetUsers)
router.post("/register",userController.handleRegister )
router.post("/login", userController.handleLogin)
router.get("/refresh", refreshController.handleRefreshToken)

export default router