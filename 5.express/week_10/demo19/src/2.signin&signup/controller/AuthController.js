const Signin = (req, res) => {
    let { email, password } = req.body;
    if (email === "dimri@gmail.com" && password === "dimri")
        res.json({ "err": 0, "msg": 'Login Successfully' })
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