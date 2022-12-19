import jwt from "jsonwebtoken"

const verifyToken = async (req, res, next) => {
  const authHeader = req.get("Authorization")
  if(!authHeader) return res.sendStatus(401)
  const [header, token] = authHeader.split(" ")
  if(header !== "Bearer") return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if(err) return res.status(403).json({ message: "Invalid token" })
    req.email = decoded.email
    next()
  })
}

export default verifyToken