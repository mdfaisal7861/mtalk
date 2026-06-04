# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Backend Setup

```bash
cd joke-generator/backend
npm install
cp .env.example .env
npm run dev
```

Backend runs on `http://localhost:5000`

### Frontend Setup

```bash
cd joke-generator/frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`

## 📋 Features

✅ **Random Joke Generator** - Get random jokes with one click
✅ **Category Filter** - Filter by Programming, General, Knock-Knock jokes
✅ **Favorites** - Save your favorite jokes
✅ **Copy to Clipboard** - Easily copy jokes
✅ **Dark Mode** - Toggle between light and dark themes
✅ **Download Jokes** - Export favorites as TXT, JSON, or CSV
✅ **Responsive Design** - Works on all devices
✅ **Share** - Share jokes on social media

## 🎯 Usage

1. Select a category or leave it as "Any"
2. Click "Get Another Joke" button
3. Click "Like" to add to favorites
4. Click "Copy" to copy the joke
5. Click "Share" to share with friends
6. View all favorites in the sidebar

## 🔌 API Endpoints

```
GET /api/jokes/random
GET /api/jokes/category/:category
GET /api/jokes/multiple?count=5
GET /api/jokes/filtered?type=single&category=Programming
GET /api/jokes/categories
GET /api/health
```

## 📁 File Structure

```
joke-generator/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
└── README.md
```

## 🛠️ Technologies

- **Backend**: Express.js, Axios, CORS
- **Frontend**: React, Tailwind CSS, React Icons
- **API**: JokeAPI (https://jokeapi.dev)

## 📝 Example API Call

```bash
curl http://localhost:5000/api/jokes/random
```

Response:
```json
{
  "joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
  "category": "Programming",
  "type": "single",
  "safe": true,
  "id": 123
}
```

## 🎨 Customization

### Change API Source
Edit `backend/controllers/jokeController.js` to use different joke APIs

### Styling
Modify `frontend/src/index.css` for custom Tailwind styling

### Categories
Update `joke-generator/backend/controllers/jokeController.js` line 44

## 🚨 Troubleshooting

**API Connection Error:**
- Ensure backend is running on port 5000
- Check CORS settings in `backend/server.js`

**Favorites Not Saving:**
- Check localStorage is enabled
- Clear browser cache and try again

**Category Not Working:**
- Verify category name matches API (case-sensitive)

## 🎉 Enjoy!

Have fun generating laughs! 😂

---

For more info, check the main README.md