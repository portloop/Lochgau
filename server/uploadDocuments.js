import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = 'documents/';

    // Определение папки на основе переданного параметра из маршрута
    if (req.params.folder === 'players') {
      uploadPath += 'players/';
    } else if (req.params.folder === 'gallery') {
      uploadPath += 'gallery/';
    } else if (req.params.folder === 'news') {
      uploadPath += 'news/';
    } else if (req.params.folder === 'videos') {
      uploadPath += 'videos/';
    } else if (req.params.folder === 'media') {
      uploadPath += 'videos/';
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const fileFilter = function (req, file, cb) {
  // Allow all file types
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

router.post('/documents/uploadFile', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  
  const filePath = req.file.path;

  // Обработка пути: убедимся, что путь начинается с '/'
  const correctedPath = filePath.replace(/\\/g, '/'); // замена обратных слешей на прямые
  const absolutePath = correctedPath.startsWith('/') ? correctedPath : `/${correctedPath}`;

  res.json({ filePath: absolutePath });
});

export default router;
