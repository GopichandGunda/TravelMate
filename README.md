# TravelMate

TravelMate is a modern AI-powered travel companion and destination planner built with React, Express, and mock data services designed for easy real API integration.

## Features

- Destination search and travel planning dashboard
- Transportation comparison (bus, train, flight, car, bike)
- Hotels, restaurants, attractions, emergency services, and safety center
- AI-inspired itinerary generation and budget estimation
- Responsive design with dark/light mode
- REST API-ready architecture for future live integrations

## Stack

- Frontend: React + Vite + CSS
- Backend: Node.js + Express
- Database: MongoDB-ready with graceful mock fallback

## Getting started

1. Install dependencies:

```bash
npm install
npm install --prefix server
npm install --prefix client
```

2. Start the app in development mode:

```bash
npm run dev
```

3. Build the frontend:

```bash
npm run build
```

4. Start the production API:

```bash
npm run start
```

## Environment variables

Create `.env` files in the root or `server` folder as needed:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travelmate
```

## GitHub repository

This app is configured to work with the GitHub repo at:
https://github.com/GopichandGunda/TravelMate

