import mongoose from "mongoose";
import session from "express-session";
import connectMongo from "connect-mongo";
import dotenv from "dotenv"; // Импортируем пакет dotenv

dotenv.config(); // Загружаем переменные окружения из файла .env


const MongoStore = connectMongo(session);

async function connectToDatabase() {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('Успешное подключение к MongoDB');
  });

  const MongoStoreInstance = new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 30 * 24 * 60 * 60,
  });

  // Возвращаем MongoStoreInstance, если вам нужно использовать его где-то ещё
  return MongoStoreInstance;
}

export { connectToDatabase };


// 'mongodb://localhost:27017/SoccerClub'