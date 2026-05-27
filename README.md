# Blog Platform with Comments

## Project Description
This is a full-stack blog platform built using the MERN stack.

Users can:
- Register and login
- Create blog posts
- Edit and delete posts
- Add comments
- View all posts

## Technologies Used
- React
- Node.js
- Express.js
- MongoDB
- Axios
- JWT Authentication

## Features
- User Authentication
- CRUD Operations for Posts
- Comment System
- Responsive UI
- REST API Integration

## Installation

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Posts
- GET /api/posts
- POST /api/posts
- PUT /api/posts/:id
- DELETE /api/posts/:id

### Comments
- GET /api/comments/:postId
- POST /api/comments

## Author
Madhuri
