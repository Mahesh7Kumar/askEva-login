# Authentication Frontend

A TypeScript-based React frontend for the authentication module, built with Vite, ShadCN, and Tailwind CSS in a light green theme.

## Setup Instructions

### Prerequisites
- Node.js (v18+)

### Installation
1. Navigate to `/frontend`.
2. Run `npm install`.
3. Run `npm run dev` (runs on port 5173 by default).

### Usage
- Register: `http://localhost:5173/register`
- Login: `http://localhost:5173/login`
- Profile: `http://localhost:5173/profile` (protected)

## Notes
- Uses TypeScript for type-safe code.
- Vite for fast development.
- ShadCN components for UI, styled with Tailwind CSS in a light green theme.
- JWT stored in localStorage.
- Responsive design with error handling and loading states.