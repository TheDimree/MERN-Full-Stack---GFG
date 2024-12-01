import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
  res.send('User Homepage');
});

router.get('/dashboard', (req, res) => {
  res.send('User Dashboard');
});

export default router;