const express = require('express');
const jokeController = require('../controllers/jokeController');

const router = express.Router();

// Get random joke
router.get('/random', jokeController.getRandomJoke);

// Get joke by category
router.get('/category/:category', jokeController.getJokeByCategory);

// Get multiple jokes
router.get('/multiple', jokeController.getMultipleJokes);

// Get filtered jokes
router.get('/filtered', jokeController.getFilteredJokes);

// Get available categories
router.get('/categories', jokeController.getCategories);

module.exports = router;