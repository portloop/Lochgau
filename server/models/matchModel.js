// matchModel.js
import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: String,
  src: String,
  text: String,
  images: [String],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Используйте 'User', если это название вашей модели пользователя
    required: true,
  },
}, 
{
  collection: 'gallery',
});

const Match = mongoose.model('Match', matchSchema);

export default Match;
