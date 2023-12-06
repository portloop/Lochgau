import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  position: {
    type: String
  },
  nationality: {
    type: String
  },
  // Другие дополнительные данные, если есть
});

const Player = mongoose.model('Player', playerSchema, 'players'); // 'players' - имя коллекции

export default Player;
