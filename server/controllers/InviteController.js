// controllers/InviteController.js

import crypto from 'crypto';
import InviteKey from '../models/InviteKey.js';

async function generateLink() {
  // Генерация уникального ключа
  const key = crypto.randomBytes(16).toString('hex');

  // Сохранение ключа в базе данных
  const inviteKey = new InviteKey({ key });
  await inviteKey.save();

  // Возвращаем ссылку с ключом
  return `http://194.15.113.90/user/register/${key}`;
}

export { generateLink };
