import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const jokeApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export const jokeService = {
  // Get random joke
  getRandomJoke: async () => {
    try {
      const response = await jokeApi.get('/jokes/random');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to fetch joke');
    }
  },

  // Get joke by category
  getJokeByCategory: async (category) => {
    try {
      const response = await jokeApi.get(`/jokes/category/${category}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to fetch joke');
    }
  },

  // Get multiple jokes
  getMultipleJokes: async (count = 5) => {
    try {
      const response = await jokeApi.get('/jokes/multiple', {
        params: { count }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to fetch jokes');
    }
  },

  // Get filtered jokes
  getFilteredJokes: async (type = 'single', category = 'Any') => {
    try {
      const response = await jokeApi.get('/jokes/filtered', {
        params: { type, category }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to fetch jokes');
    }
  },

  // Get available categories
  getCategories: async () => {
    try {
      const response = await jokeApi.get('/jokes/categories');
      return response.data.categories;
    } catch (error) {
      return ['Programming', 'Miscellaneous', 'Knock-Knock', 'General'];
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await jokeApi.get('/health');
      return response.data;
    } catch (error) {
      throw new Error('API is not available');
    }
  }
};

export default jokeService;