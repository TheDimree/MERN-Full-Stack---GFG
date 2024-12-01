//* Will use this router globally, i.e., application level
const TitleMiddleware = (req, res, next) => {
    req.title = "Geeks For Geeks"
    next(); // must be put after a middleware. So next router/method can be executed.
}

// *  Will use this router at Router Level, i.e. it will be applied to the specific Router only.
const AuthMiddleware = (req, res, next) => {
    let headers = req.headers['name'];
    if(headers!==undefined) {
        if(headers === 'geeks') {
            next();
        } else {
            res.send("Not a authorized user.")
        }
    } else {
        res.send("No data found in the headers.")
    }
}

export {AuthMiddleware, TitleMiddleware};