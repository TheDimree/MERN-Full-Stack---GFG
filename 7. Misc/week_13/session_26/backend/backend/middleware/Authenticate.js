import jwt from 'jsonwebtoken'
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.json({"err":1,"msg":"Token not found"})
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return  res.json({"err":1,"msg":"Token not match"})
  
      req.user = user
  
      next()
    })
  }
  function roleAuthenticate(req,res,next){
     if(req.user.role==='admin'){
        next()
     }
     else{
        res.json({"err":1,"msg":"You dont have a right to access the api"})
     }
  }
  export {authenticateToken,roleAuthenticate};