// documentsRouter.js

import express from 'express';
import Document from './models/documentModel.js';

const documentsRouter = express.Router();

// Add a document
documentsRouter.post('/add', async (req, res) => {
  try {
    const { title, filePath, creator } = req.body;
    const document = new Document({ title, filePath, creator });
    const savedDocument = await document.save();
    res.json(savedDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get the list of all documents
documentsRouter.get('/list', async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a document by ID
documentsRouter.delete('/:id', async (req, res) => {
  try {
    const deletedDocument = await Document.findByIdAndDelete(req.params.id);
    if (!deletedDocument) {
      return res.status(404).json({ error: 'Document not found' });
    }
    res.json(deletedDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default documentsRouter;
