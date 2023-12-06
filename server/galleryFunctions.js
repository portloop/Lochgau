import Gallery from './models/gallery.js'
import mongoose from 'mongoose';
async function getAllGalleryItems(req, res) {
  try {
    const galleryItems = await Gallery.find().select('title team previewImg images videos description').lean();
    res.json(galleryItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


async function getGalleryItemById(req, res) {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (galleryItem == null) {
      return res.status(404).json({ message: 'Cannot find gallery item' });
    }
    res.json(galleryItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createGalleryItem(req, res) {
  const galleryItem = new Gallery({
    _id: new mongoose.Types.ObjectId(), // Генерируем новый _id
    title: req.body.title,
    images: req.body.images,
    team: req.body.team,
    previewImg: req.body.previewImg,
    videos: req.body.videos,
    description: req.body.description
  });

  try {
    const newGalleryItem = await galleryItem.save();
    res.status(201).json(newGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function updateGalleryItem(req, res) {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (galleryItem == null) {
      return res.status(404).json({ message: 'Cannot find gallery item' });
    }

    if (req.body.title != null) {
      galleryItem.title = req.body.title;
    }
    if (req.body.images != null) {
      galleryItem.images = req.body.images;
    }

    const updatedGalleryItem = await galleryItem.save();
    res.json(updatedGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteGalleryItem(req, res) {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (galleryItem == null) {
      return res.status(404).json({ message: 'Cannot find gallery item' });
    }
    await galleryItem.remove();
    res.json({ message: 'Deleted Gallery Item' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


export {
    getAllGalleryItems,
    getGalleryItemById,
    createGalleryItem,
    updateGalleryItem,
    deleteGalleryItem
}