// User.js
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Другие поля вашей схемы пользователя
});

// Подключение passport-local-mongoose к схеме пользователя
userSchema.plugin(passportLocalMongoose);

// Создание модели пользователя
const User = mongoose.model('User', userSchema);

export default User;
