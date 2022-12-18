import express from "express"
import { getUsers } from "../controllers/UserController"

const router = express.Router()

router.get("/", getUsers)

export default router