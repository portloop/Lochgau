// User.js
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  avatar: String,
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  password: String,
  role: String
  // Другие поля вашей схемы пользователя
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'username' });

// Создание модели пользователя
const User = mongoose.model('User', userSchema);

export default User;
