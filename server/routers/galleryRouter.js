// galleryRouter.js
import express from 'express';
import Match from '../models/matchModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const matches = await Match.find().populate({
      path: 'author',
      model: 'User',
      select: 'username',
    });
    const transformedMatches = matches.map(match => ({
      images: match.images,
      _id: match._id,
      id: match.id,
      title: match.title,
      src: match.src,
      text: match.text,
      username: match.author ? match.author.username : null,
    }));
    console.log('Matches:', transformedMatches);
    res.json(transformedMatches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

export default router;
