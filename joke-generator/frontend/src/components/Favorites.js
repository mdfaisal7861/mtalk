import React, { useState, useEffect } from 'react';
import { FiDownload, FiX } from 'react-icons/fi';

export default function Favorites({ isOpen, onClose, favorites, onRemove }) {
  const [downloadFormat, setDownloadFormat] = useState('txt');

  const downloadFavorites = () => {
    let content = '';
    
    if (downloadFormat === 'txt') {
      content = favorites.map((j, i) => `${i + 1}. ${j.joke}`).join('\n\n---\n\n');
    } else if (downloadFormat === 'json') {
      content = JSON.stringify(favorites, null, 2);
    } else if (downloadFormat === 'csv') {
      content = 'Joke,Category,Type\n';
      content += favorites.map(j => 
        `"${j.joke.replace(/"/g, '""')}","${j.category}","${j.type}"`
      ).join('\n');
    }

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `jokes.${downloadFormat === 'json' ? 'json' : downloadFormat === 'csv' ? 'csv' : 'txt'}`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">⭐ Favorite Jokes ({favorites.length})</h2>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition">
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {favorites.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No favorite jokes yet. Start adding some! 🎭</p>
          ) : (
            <>
              {/* Download Options */}
              <div className="mb-6 flex gap-2 flex-wrap">
                <select
                  value={downloadFormat}
                  onChange={(e) => setDownloadFormat(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="txt">Text (.txt)</option>
                  <option value="json">JSON (.json)</option>
                  <option value="csv">CSV (.csv)</option>
                </select>
                <button
                  onClick={downloadFavorites}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                >
                  <FiDownload size={18} />
                  Download
                </button>
              </div>

              {/* Jokes List */}
              <div className="space-y-4">
                {favorites.map((joke, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-semibold text-gray-600">
                        {joke.category} • {joke.type}
                      </span>
                      <button
                        onClick={() => onRemove(index)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <FiX size={18} />
                      </button>
                    </div>
                    <p className="text-gray-800">{joke.joke}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}