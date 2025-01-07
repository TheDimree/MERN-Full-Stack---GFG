import jwt from 'jsonwebtoken';
const TOKEN_SECRET="09f26e402586e2faa8da4c98a35f1b20d6b033c6";
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.json({"err":1,"msg":"token is null or not found"})

  jwt.verify(token,TOKEN_SECRET, (err, user) => {
 
    if (err) return res.json({"err":1,"msg":"Invalid token"})
    req.role = user.role
    next()
  })
}
function isAdmin(req,res,next){
    if(req.role!=='admin'){
        res.json({"err":1,"msg":"you dont have access to this route"})
    }
    next();
}
export {authenticateToken,isAdmin};