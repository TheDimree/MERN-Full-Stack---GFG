import jwt from "jsonwebtoken";

const JwtAuthorizationMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ "err": 1, "msg": "Token not found" });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            // const errorMessage = err.name === "TokenExpiredError" ? "Token has expired" : "Token is invalid";
            return res.status(401).json({ "err": 1, "msg": err });
        }
        req.user = user; // Attach the decoded user to the request object
        next(); // Proceed to the next middleware or route handler
    });
};

export default JwtAuthorizationMiddleware;
