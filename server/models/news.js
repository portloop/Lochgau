import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
    // здесь можно указать дополнительные поля, такие как размеры, форматы и т.д.
  }
});

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    required: false,
  },
  previewImg: {
    type: String,
    required: false,
  },
  markdownContent: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: authorSchema,
    required: true
  },
  publishedAt: {
    type: Date,
    default: Date.now
  }
  // Другие поля, если есть
});

const News = mongoose.model('News', newsSchema, 'news'); // 'news' - имя коллекции

export default News;
