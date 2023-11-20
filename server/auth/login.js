// login.js
import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful', user: req.user });
});

export default router;
