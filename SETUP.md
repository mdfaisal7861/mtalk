# Installation Guide

## Prerequisites
- Node.js (v14+)
- MongoDB (locally or MongoDB Atlas)
- npm or yarn

## Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mtalk
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

5. Start the backend server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (optional):
```
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the frontend development server:
```bash
npm start
```

The application will open on `http://localhost:3000`

## Database Setup

### Using Local MongoDB:
1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Update `MONGODB_URI` in backend `.env` to `mongodb://localhost:27017/mtalk`

### Using MongoDB Atlas (Cloud):
1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get your connection string
4. Update `MONGODB_URI` in backend `.env` with your connection string

## API Documentation

### Authentication Endpoints

#### Register
```
POST /api/auth/register
Body: {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  userType: 'doctor' | 'professional' | 'medical_equipment' | 'tech_company',
  specialization: string
}
Response: { token, user }
```

#### Login
```
POST /api/auth/login
Body: { email, password }
Response: { token, user }
```

### Post Endpoints

#### Get Feed
```
GET /api/posts/feed?page=1
Headers: Authorization: Bearer {token}
```

#### Create Post
```
POST /api/posts
Headers: Authorization: Bearer {token}
Body: {
  title: string,
  content: string,
  category: 'medical_insight' | 'equipment' | 'technology' | 'news' | 'discussion'
}
```

#### Like Post
```
POST /api/posts/{id}/like
Headers: Authorization: Bearer {token}
```

#### Add Comment
```
POST /api/posts/{id}/comment
Headers: Authorization: Bearer {token}
Body: { content: string }
```

## Testing the Application

1. Register a new account
2. Create a post
3. Search for other users
4. Follow/unfollow users
5. Like and comment on posts

## Deployment

### Backend Deployment (Heroku Example)
```bash
cd backend
heroku create mtalk-backend
git push heroku main
```

### Frontend Deployment (Vercel Example)
```bash
cd frontend
vercel
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network access if using MongoDB Atlas

### CORS Error
- Ensure frontend URL is allowed in backend CORS configuration
- Update `cors()` in `backend/server.js` if needed

### Port Already in Use
- Change PORT in `.env` file
- Or kill the process using the port

## Support

For issues and questions, open an issue on GitHub.

---

**Enjoy building with Mtalk!** 🏥
