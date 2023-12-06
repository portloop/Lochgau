// sessionChecker.js
import { verifyToken } from './checker.js';

const sessionChecker = (req, res, next) => {
  const token = req.cookies.token; // Предполагается, что токен хранится в куках

  if (token) {
    const user = verifyToken(token, 'your-secret-key'); // Замените 'your-secret-key' на ваш секретный ключ

    if (user) {
      // Пользователь аутентифицирован, продолжаем выполнение запроса
      req.user = user; // Добавляем пользователя к объекту запроса
      next();
    } else {
      // Токен недействителен, возвращаем ошибку
      res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    // Токен не найден, возвращаем ошибку
    res.status(401).json({ error: 'Token not found' });
  }
};

export default sessionChecker;
