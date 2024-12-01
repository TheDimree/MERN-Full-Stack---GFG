import jwt from "jsonwebtoken";
const JwtAuthorizationMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token === null) return res.json({"err": 1, "msg": "Token not found"})

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        console.log(err)
        if(err) return res.json({"err": 1, "msg": "Token does not match"})
        req.user = user
        next();
    })
}

export default JwtAuthorizationMiddleware
