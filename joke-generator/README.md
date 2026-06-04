# 🎭 Random Joke Generator

A fun and interactive web application that fetches random jokes from external APIs. Built with React, Node.js, and integrates with the JokeAPI.

## Features

✨ **Core Features:**
- Fetch random jokes from external API
- Display jokes in a beautiful UI
- Filter jokes by category
- Dark/Light theme toggle
- Share jokes on social media
- Favorite jokes (saved locally)
- Copy jokes to clipboard
- Loading animations
- Error handling

## Tech Stack

### Backend
- **Node.js** + Express
- **Axios** - HTTP client for API calls
- **CORS** - Cross-origin requests
- **Dotenv** - Environment variables

### Frontend
- **React** - UI framework
- **Axios** - API calls
- **Tailwind CSS** - Styling
- **React Icons** - Beautiful icons
- **React Copy to Clipboard** - Copy functionality

## Project Structure

```
joke-generator/
├── backend/
│   ├── routes/
│   │   └── jokeRoutes.js
│   ├── controllers/
│   │   └── jokeController.js
│   ├── config/
│   │   └── config.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   └── JokeGenerator.js
│   │   ├── components/
│   │   │   ├── JokeCard.js
│   │   │   ├── CategoryFilter.js
│   │   │   └── Favorites.js
│   │   ├── services/
│   │   │   └── jokeApi.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## API Endpoints

### Backend Routes

```
GET /api/jokes/random
  - Fetch a single random joke
  - Response: { joke, category, type }

GET /api/jokes/category/:category
  - Fetch jokes by category
  - Params: programming, general, knock-knock
  - Response: Array of jokes

GET /api/jokes/search?query=term
  - Search jokes by keyword
  - Response: Filtered jokes
```

## External APIs Used

1. **JokeAPI** - https://jokeapi.dev
   - Free API with no authentication
   - Multiple joke categories
   - Clean JSON responses

2. **Joke API** - https://api.api-ninjas.com/v1/jokes
   - Alternative source
   - Various categories

## Getting Started

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`

## Usage

1. **Get a Random Joke:** Click "Get Joke" button
2. **Filter by Category:** Select from dropdown menu
3. **Copy Joke:** Click copy icon
4. **Add to Favorites:** Click heart icon
5. **View Favorites:** Click favorites section
6. **Toggle Theme:** Switch between dark/light mode

## Example API Calls

### Using cURL

```bash
# Get random joke
curl http://localhost:5000/api/jokes/random

# Get programming joke
curl http://localhost:5000/api/jokes/category/programming

# Search jokes
curl http://localhost:5000/api/jokes/search?query=developer
```

### Using JavaScript

```javascript
import { jokeService } from './services/jokeApi';

// Get random joke
const joke = await jokeService.getRandomJoke();

// Get by category
const joke = await jokeService.getJokeByCategory('programming');

// Search
const results = await jokeService.getFilteredJokes('single', 'Programming');
```

## Features in Detail

### 🎯 Random Joke Generator
- Click button to get random joke
- Auto-refresh functionality
- Display multiple formats (text, category, type)

### 🏷️ Category Filter
- Programming jokes
- General jokes
- Knock-knock jokes
- Dark jokes

### ⭐ Favorites System
- Save favorite jokes
- Stored in localStorage
- View all favorites
- Delete from favorites

### 📋 Copy to Clipboard
- One-click copy
- Toast notification on success
- Works across browsers

### 🌓 Theme Toggle
- Dark mode support
- Light mode
- Persisted preference

### 📱 Responsive Design
- Mobile friendly
- Desktop optimized
- Tablet support

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
JOKEAPI_URL=https://v2.jokeapi.dev
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Joke Categories

- **Programming** - Tech and coding jokes
- **General** - Everyday humor
- **Knock-knock** - Classic knock-knock jokes
- **Dark** - Dark humor

## Error Handling

- Network error handling
- API timeout handling
- Fallback messages
- User-friendly error displays

## Performance

- Caching implemented
- Debounced API calls
- Lazy loading components
- Optimized re-renders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] User authentication
- [ ] Share on social media
- [ ] Joke ratings
- [ ] Custom joke submission
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Mobile app version

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/joke-feature`)
3. Commit changes (`git commit -m 'Add joke feature'`)
4. Push to branch (`git push origin feature/joke-feature`)
5. Open Pull Request

## License

MIT License - feel free to use this project

## Support

Have questions? Open an issue or contact us!

---

**Have fun with jokes!** 😂🎭