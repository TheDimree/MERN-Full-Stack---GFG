import express from 'express'

import {AuthMiddleware} from '../custom_middlewares/MyMiddlewares.js';
const router = express.Router();

// * AuthMiddleware is router level middleware so it is used in the route not in use() method.
router.post('/login', AuthMiddleware, (req, res) => {
  res.send('Loggedin successfully.');
});



export default router;