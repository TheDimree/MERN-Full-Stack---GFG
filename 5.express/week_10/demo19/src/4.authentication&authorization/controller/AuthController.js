import jwt from 'jsonwebtoken'
const Signin = (req, res) => {
    let { email, password } = req.body;
    if (email === "dimri@gmail.com" && password === "dimri") {
        let data = { email: email, password: password }
        let token = jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1h' })
        res.json({ "err": 0, "msg": 'Login Successfully', "token": token })
    }
    else
        res.json({ "err": 1, "msg": 'Invalid email or password' })
}

const Signup = (req, res) => {
    let newUserData = req.body;
    if (newUserData) {
        res.json({ "err": 0, "msg": 'User Registered' })
    } else {
        res.json({ "err": 1, "msg": 'Something went wrong' })
    }
}

export { Signin, Signup }