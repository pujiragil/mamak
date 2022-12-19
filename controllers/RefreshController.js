import jwt from "jsonwebtoken"
import Users from "../models/UserModel.js";

export const handleRefreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.mamak
    if(!refreshToken) return res.sendStatus(401)
    const user = await Users.findOne({ where: { refresh_token: refreshToken }})
    if(!user) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if(err) return res.status(401).json({ message: "Invalid token" })
      const { id, name, email } = user
      const accessToken = jwt.sign({
        id,
        name,
        email
      }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 60
      })
      res.status(200).json({ accessToken })
    })
  } catch (err) {
    console.log(err)
  }
}