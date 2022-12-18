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