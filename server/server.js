import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import cors from 'cors';
import loginRouter from './auth/login.js';
import registerRouter from './auth/register.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/SoccerClub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Успешное подключение к MongoDB');
});

const MongoStoreInstance = MongoStore(session);

app.use(
  session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    store: new MongoStoreInstance({
      mongooseConnection: mongoose.connection,
      ttl: 30 * 24 * 60 * 60, // срок действия сессии в секундах (30 дней)
    }),
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

import User from './models/User.js';

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/auth', loginRouter);
app.use('/auth', registerRouter);

app.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});

app.get('/admin', (req, res) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    res.json({ message: 'Welcome, Admin!' });
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
