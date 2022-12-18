import bcrypt from "bcrypt"
import Users from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.status(200).json(users)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: err.message })
  }
}

export const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  if(!name || !email || !password || !confirmPassword) return res.status(400).json({ message: "Name, email, password and confirm password are required." })
  if(password !== confirmPassword) return res.status(400).json({ message: "Password and confirm password doesn't match."})
  const user = await Users.findOne({ where: { email }})
  if(user) return res.status(400).json({ message: "User already exist." })
  const hashedPassword = await bcrypt.hash(password, 10)
  try {
    await Users.create({ name, email, password: hashedPassword })
    res.status(201).json({ message: "Register successfully"})
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error.message })
  }  
}