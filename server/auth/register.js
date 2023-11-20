// register.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  User.register(new User({ username }), password, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Registration failed' });
    }

    res.json({ message: 'Registration successful' });
  });
});

export default router;
