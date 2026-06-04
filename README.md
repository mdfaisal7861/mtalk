# 🏥 Mtalk - Medical Social Network

A professional social network platform designed specifically for doctors, medical professionals, medical equipment companies, and healthcare technology providers.

## Features

### 👥 User Management
- Multiple user types: Doctors, Medical Equipment Companies, Tech Companies, Healthcare Professionals
- Professional profile verification
- Specialization and credentials display
- Profile customization

### 📝 Content & Engagement
- Create, edit, and delete posts
- Share medical insights and innovations
- Like and comment on posts
- Real-time feed updates
- Category-based content organization

### 🔗 Network & Connections
- Follow/unfollow users and companies
- Connection recommendations
- User discovery
- Advanced search functionality

### 🔐 Security
- JWT-based authentication
- Secure password hashing
- Role-based access control
- Data privacy and protection

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Validation**: Joi

### Frontend
- **Framework**: React
- **Styling**: Tailwind CSS
- **State Management**: Redux
- **HTTP Client**: Axios
- **Routing**: React Router

## Project Structure

```
mtalk/
├── backend/                 # Node.js Express API
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── .env.example        # Environment variables template
│   ├── server.js           # Entry point
│   └── package.json        # Dependencies
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux store
│   │   ├── services/       # API services
│   │   ├── styles/         # Tailwind styles
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
│   ├── public/             # Static files
│   └── package.json        # Dependencies
└── docs/                   # Documentation

```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/search?q=term` - Search users

### Posts
- `GET /api/posts` - Get feed
- `POST /api/posts` - Create post
- `GET /api/posts/:id` - Get post details
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Engagement
- `POST /api/posts/:id/like` - Like post
- `POST /api/posts/:id/comment` - Add comment
- `DELETE /api/comments/:id` - Delete comment

### Connections
- `POST /api/users/:id/follow` - Follow user
- `POST /api/users/:id/unfollow` - Unfollow user
- `GET /api/users/:id/followers` - Get followers

## Environment Variables

Create `.env` file in backend directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mtalk
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@mtalk.com or open an issue on GitHub.

---

**Built with ❤️ for the medical community**
