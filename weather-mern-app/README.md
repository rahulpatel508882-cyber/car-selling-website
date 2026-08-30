# Weather MERN App

A full-stack weather application built with MongoDB, Express, React, and Node.js.

## Features
- Search weather by city
- Show current conditions and 7-day forecast
- Store recent searches in MongoDB
- Responsive weather dashboard UI
- Automatic MongoDB fallback to an in-memory database in development

## Local setup

1. Install dependencies:
   npm install
   npm install --prefix server
   npm install --prefix client

2. Run the app:
   npm run dev

3. Open:
   - Frontend: http://localhost:5173
   - API: http://localhost:5000/api/health

## Production build

npm run build
npm start

## Environment

Create a server `.env` file if you want to use a real MongoDB instance:

MONGO_URI=mongodb://127.0.0.1:27017/weatherapp
PORT=5000
