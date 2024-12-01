import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const salt = bcrypt.genSalt(10);
let hashPassword;
const Signin = (req, res) => {
    let { email, password } = req.body;
    if(!hashPassword) { // undefined
        console.log("You are not registered.")
        return res.json({ "err": 1, "msg": "You are not registered"})
    }
    if (email === "dimri@gmail.com" && bcrypt.compareSync(password, hashPassword)) {
        let data = { email: email, password: password }
        let token = jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1h' })
        res.json({ "err": 0, "msg": 'Login Successfully', "token": token })
    }
    else
        res.json({ "err": 1, "msg": 'Invalid email or password' })
}

const Signup = (req, res) => {
    let newUserData = req.body;
    hashPassword = bcrypt.hashSync(newUserData.password, parseInt(salt))
    if (newUserData) {
        res.json({ "err": 0, "msg": 'User Registered with hashPassword: ' + hashPassword })
    } else {
        res.json({ "err": 1, "msg": 'Something went wrong' })
    }
}

export { Signin, Signup }