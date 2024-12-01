import express from 'express'

export const Router = express.Router();

Router.route('/')
.all((req, res, next) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
})
.post((req, res, next) => {
    res.end('When a POST request is made, then this '
            + 'is the response sent to the client!');
})
.put((req, res, next) => {
    res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!');
})
.delete((req, res, next) => {
    res.end('When a DELETE request is made, then this '
            + 'is the response sent to the client!');
});