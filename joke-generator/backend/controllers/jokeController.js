const axios = require('axios');

const JOKEAPI_URL = process.env.JOKEAPI_URL || 'https://v2.jokeapi.dev';

// Get random joke
exports.getRandomJoke = async (req, res) => {
  try {
    const response = await axios.get(`${JOKEAPI_URL}/joke/Any`);
    const joke = formatJoke(response.data);
    res.json(joke);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch joke',
      message: error.message 
    });
  }
};

// Get joke by category
exports.getJokeByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const validCategories = ['Programming', 'Miscellaneous', 'Knock-Knock', 'General'];
    
    if (!validCategories.includes(category)) {
      return res.status(400).json({ 
        error: 'Invalid category',
        validCategories 
      });
    }

    const response = await axios.get(`${JOKEAPI_URL}/joke/${category}`);
    const joke = formatJoke(response.data);
    res.json(joke);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch joke',
      message: error.message 
    });
  }
};

// Get multiple jokes
exports.getMultipleJokes = async (req, res) => {
  try {
    const { count = 5 } = req.query;
    const jokes = [];

    for (let i = 0; i < count; i++) {
      const response = await axios.get(`${JOKEAPI_URL}/joke/Any`);
      jokes.push(formatJoke(response.data));
    }

    res.json({ jokes, count: jokes.length });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch jokes',
      message: error.message 
    });
  }
};

// Get jokes with filters
exports.getFilteredJokes = async (req, res) => {
  try {
    const { type = 'single', category = 'Any' } = req.query;

    const response = await axios.get(`${JOKEAPI_URL}/joke/${category}?type=${type}`);
    
    if (response.data.error) {
      return res.status(404).json({ 
        error: 'No jokes found with these filters' 
      });
    }

    const joke = formatJoke(response.data);
    res.json(joke);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch filtered jokes',
      message: error.message 
    });
  }
};

// Get available categories
exports.getCategories = async (req, res) => {
  try {
    const categories = ['Programming', 'Miscellaneous', 'Knock-Knock', 'General'];
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch categories',
      message: error.message 
    });
  }
};

// Helper function to format joke response
function formatJoke(jokeData) {
  if (jokeData.type === 'twopart') {
    return {
      joke: `${jokeData.setup} ${jokeData.delivery}`,
      setup: jokeData.setup,
      delivery: jokeData.delivery,
      type: 'twopart',
      category: jokeData.category,
      safe: jokeData.safe,
      id: jokeData.id
    };
  } else {
    return {
      joke: jokeData.joke,
      type: 'single',
      category: jokeData.category,
      safe: jokeData.safe,
      id: jokeData.id
    };
  }
}