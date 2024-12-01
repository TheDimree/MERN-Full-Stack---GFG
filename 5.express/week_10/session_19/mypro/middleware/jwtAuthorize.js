import jwt from 'jsonwebtoken';
const jwtAuthorization=(req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.json({"err":1,"msg":"Token not found"})
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.json({"err":1,"msg":"Token is not match"})
      req.user = user
      next()
    })
}
export default jwtAuthorization;