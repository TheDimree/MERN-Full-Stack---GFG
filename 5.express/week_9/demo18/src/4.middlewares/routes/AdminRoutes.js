import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Admin Homepage checking title set by global middleware: ' + req.title);
  console.log("You can check the title throughout the app because it is global level middleware as it uses app.use() method")

});
router.get('/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});

export default router;