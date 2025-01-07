import jwt from "jsonwebtoken"
import appConfig from "../config/appConfig.js"

export default function authenticatingToken (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token === null) 
        return res.status(401).json({ "err":1, "message": "Token not provided" })

    jwt.verify(token, appConfig.TOKEN_SECRET, (err, user) => {
        if(err)
            return res.status(403).json({ error: "Invalid token" })
        
        //* user is the JWT payload created by jwt.sign() and decoded by jwt.verify() :  { name: 'Bhagesh Dimri', role: 'admin', iat: 1735997407, exp: 1736001007 }
        req.user = user // this is used while authorization.    // req.body is used signup but in signin we don't pass entire data.
        next() 
    })
}

function isAdmin (req, res, next) {
    console.log("role: ", req.user.role)
    if(req.user.role !== 'admin') {
        return res.status(403).json({"err": 1, "message": "Invalid role as you are not Admin."})
    }
    next()  // If the user is admin, go to the next middleware or route handler.  Otherwise, reject the request.
}

export {isAdmin}