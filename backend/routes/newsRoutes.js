const express = require('express');
const router = express.Router();
const News = require('../models/newsModel');

router.get('/', async (req, res) => {
  try {
    const { query, language, category } = req.query;
    const filter = {};

    if (language) filter.language = language;
    if (category) filter.category = category;
    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } }
      ];
    }

    const newsList = await News.find(filter).sort({ date: -1 });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, image, content, date, language, category } = req.body;
    const newArticle = new News({ title, author, image, content, date, language, category });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching article' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    if (!deletedNews) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json({ message: 'News deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
