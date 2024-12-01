const Signin = (req, res)=> {
    res.json({
        "err": 0, "msg": 'Login Successfully'
    })
}

const Signup = (req, res)=> {
    res.json({
        "err": 0, "msg": 'User Registered'
    })
}

export {Signin, Signup}