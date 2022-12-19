import Users from "../models/UserModel.js"

export const handleLogout = async (req, res) => {
  const refreshToken = req.cookies.mamak
  if(!refreshToken) return res.sendStatus(204)
  const user = await Users.findOne({ where: { refresh_token: refreshToken }})
  if(!user) return res.sendStatus(204)
  const { id } = user
  try {
    await Users.update({ refresh_token: null }, { where: { id }})
    res.clearCookie("mamak")
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }  
}