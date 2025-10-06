# Authentication Module

A full-stack authentication application built with TypeScript + React (Vite + ShadCN + Tailwind CSS) for the frontend and Node.js + Express + MongoDB for the backend. This project provides user registration, login, and profile management with JWT-based authentication.

## Project Structure
- `/backend`: Node.js + Express + MongoDB backend with API endpoints for authentication.
- `/frontend`: TypeScript + React frontend with Vite, ShadCN components, and Tailwind CSS styling.
- `.env.example`: Template for environment variables.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local instance or cloud service like MongoDB Atlas)
- npm (comes with Node.js)

### Backend
1. Navigate to `/backend`.
2. Run `npm install` to install dependencies.
3. Create a `.env` file based on `.env.example` and configure:
   - `MONGO_URI=mongodb://localhost:27017/authdb` (or your MongoDB URI)
   - `JWT_SECRET=your_jwt_secret_here` (a strong, unique secret)
   - `PORT=5000` (optional, defaults to 5000)
4. Start the backend server:
   ```bash
   npm start
