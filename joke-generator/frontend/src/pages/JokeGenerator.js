import React, { useState, useEffect } from 'react';
import { FiRefreshCw, FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import JokeCard from '../components/JokeCard';
import Favorites from '../components/Favorites';
import jokeService from '../services/jokeApi';

export default function JokeGenerator() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('Any');
  const [categories, setCategories] = useState(['Programming', 'Miscellaneous', 'Knock-Knock', 'General']);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favoriteJokes')) || []);
  const [showFavorites, setShowFavorites] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem('favoriteJokes', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    fetchCategories();
    fetchJoke();
  }, []);

  const fetchCategories = async () => {
    try {
      const cats = await jokeService.getCategories();
      setCategories(cats);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    try {
      const jokeData = category === 'Any' 
        ? await jokeService.getRandomJoke()
        : await jokeService.getJokeByCategory(category);
      setJoke(jokeData);
    } catch (err) {
      setError(err.message || 'Failed to fetch joke');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (joke) {
      const text = joke.type === 'twopart' 
        ? `${joke.setup} ${joke.delivery}`
        : joke.joke;
      
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddToFavorites = () => {
    if (joke) {
      const isFavorite = favorites.some(fav => fav.id === joke.id);
      if (isFavorite) {
        setFavorites(favorites.filter(fav => fav.id !== joke.id));
      } else {
        setFavorites([...favorites, joke]);
      }
    }
  };

  const handleShare = () => {
    if (joke) {
      const text = joke.type === 'twopart' 
        ? `${joke.setup} ${joke.delivery}`
        : joke.joke;
      
      if (navigator.share) {
        navigator.share({
          title: 'Check out this joke!',
          text: text,
          url: window.location.href
        });
      } else {
        alert('Share this joke: ' + text);
      }
    }
  };

  const handleRemoveFavorite = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

  const isFavorite = joke && favorites.some(fav => fav.id === joke.id);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">🎭 Joke Generator</h1>
              <p className="text-blue-100 mt-1">Get a laugh every day!</p>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition"
                title="Toggle theme"
              >
                {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
              </button>

              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-3 rounded-lg transition flex items-center gap-2"
              >
                <FiMenu size={24} />
                <span className="hidden sm:inline">⭐ ({favorites.length})</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-6 max-w-3xl">
          {/* Category Filter */}
          <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">
              📂 Select Category:
            </label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="Any">Any</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin">
                <FiRefreshCw size={48} className="text-blue-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">Fetching a funny joke...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-100 border-2 border-red-400 text-red-700 px-6 py-4 rounded-xl mb-6">
              <p className="font-semibold">❌ {error}</p>
              <p className="text-sm mt-2">Try again or check your internet connection</p>
            </div>
          )}

          {/* Joke Display */}
          {!loading && joke && (
            <>
              <JokeCard
                joke={joke}
                onAddToFavorites={handleAddToFavorites}
                isFavorite={isFavorite}
                onCopy={handleCopy}
                onShare={handleShare}
              />

              {/* Copy Notification */}
              {copied && (
                <div className="bg-green-100 border-2 border-green-400 text-green-700 px-6 py-3 rounded-xl mb-6 text-center">
                  ✓ Copied to clipboard!
                </div>
              )}

              {/* Get New Joke Button */}
              <button
                onClick={fetchJoke}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
              >
                <FiRefreshCw size={24} />
                Get Another Joke
              </button>
            </>
          )}

          {/* Initial State */}
          {!loading && !joke && !error && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">Click "Get Another Joke" to start! 🚀</p>
              <button
                onClick={fetchJoke}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition"
              >
                Start Now!
              </button>
            </div>
          )}
        </main>

        {/* Favorites Modal */}
        <Favorites
          isOpen={showFavorites}
          onClose={() => setShowFavorites(false)}
          favorites={favorites}
          onRemove={handleRemoveFavorite}
        />

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-12">
          <p>Made with ❤️ | Powered by JokeAPI</p>
          <p className="text-sm mt-2">© 2024 Joke Generator. All jokes are for entertainment purposes.</p>
        </footer>
      </div>
    </div>
  );
}