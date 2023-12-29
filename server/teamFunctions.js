// teamFunctions.js
import express from 'express';
import Team from './models/teamModel.js';

const router = express.Router();

// Ендпоінт для отримання всіх команд
router.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json({ teams });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Ендпоінт для створення нової команди
router.post('/teams', async (req, res) => {
  const { name } = req.body;

  try {
    // Перевірка, чи команда з такою назвою вже існує
    const existingTeam = await Team.findOne({ name });
    if (existingTeam) {
      return res.status(400).json({ error: 'Team with this name already exists' });
    }

    const newTeam = new Team({ name });
    const savedTeam = await newTeam.save();

    res.json({ team: savedTeam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Ендпоінт для видалення команди за ідентифікатором
router.delete('/teams/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTeam = await Team.findByIdAndDelete(id);
    if (!deletedTeam) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ message: 'Team deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Ендпоінт для редагування команди за ідентифікатором
router.put('/teams/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedTeam = await Team.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedTeam) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ team: updatedTeam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Эндпоинт для получения данных о команде по ID через POST запрос
router.post('/teams/getTeamById', async (req, res) => {
  const { id } = req.body;

  try {
    const team = await Team.findById(id);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;
