import React from 'react';
import { FiCopy, FiHeart, FiShare2 } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

export default function JokeCard({ joke, onAddToFavorites, isFavorite, onCopy, onShare }) {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl p-8 mb-6 text-white transform transition hover:scale-105">
      {/* Category Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
          {joke.category}
        </span>
        <span className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">
          {joke.type === 'twopart' ? '2-Part' : 'Single'}
        </span>
      </div>

      {/* Joke Content */}
      <div className="mb-6">
        {joke.type === 'twopart' ? (
          <>
            <p className="text-lg font-semibold mb-3">{joke.setup}</p>
            <p className="text-2xl font-bold text-yellow-200">{joke.delivery}</p>
          </>
        ) : (
          <p className="text-2xl font-bold">{joke.joke}</p>
        )}
      </div>

      {/* Safety Indicator */}
      <div className="mb-6">
        {joke.safe ? (
          <span className="text-sm text-green-200">✓ Family Friendly</span>
        ) : (
          <span className="text-sm text-yellow-200">⚠ Contains Adult Humor</span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={onCopy}
          className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition"
        >
          <FiCopy size={18} />
          Copy
        </button>

        <button
          onClick={onAddToFavorites}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            isFavorite
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-white bg-opacity-20 hover:bg-opacity-30'
          }`}
        >
          {isFavorite ? <FaHeart size={18} /> : <FiHeart size={18} />}
          {isFavorite ? 'Liked' : 'Like'}
        </button>

        <button
          onClick={onShare}
          className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition"
        >
          <FiShare2 size={18} />
          Share
        </button>
      </div>

      {/* Joke ID */}
      <div className="mt-4 text-xs text-white text-opacity-60">
        ID: {joke.id}
      </div>
    </div>
  );
}