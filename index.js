import express from "express"
import db from "./config/Database.js"
import * as dotenv from "dotenv"
dotenv.config()

const app = express()

try {
  await db.authenticate()
  console.log("Connection has been established successfully")
} catch (error) {
  console.error("Unable to connect to the database : "+ error)
}

app.listen(process.env.PORT, () => {
  console.log("Server running at port " + process.env.PORT)
})