import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { getDestinationData, getTravelSummary } from './services/travelService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'TravelMate API is running.' });
});

app.get('/api/search', (_req, res) => {
  res.json(getTravelSummary());
});

app.get('/api/destination', (req, res) => {
  const { destination = 'Goa', currentLocation = 'Hyderabad', travelers = 2, days = 4, budget = 25000 } = req.query;

  try {
    const response = getDestinationData({ destination, currentLocation, travelers, days, budget });
    res.json(response);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/api/recommendations', (req, res) => {
  const { destination = 'Goa', currentLocation = 'Hyderabad', travelers = 2, days = 4, budget = 25000 } = req.query;
  const response = getDestinationData({ destination, currentLocation, travelers, days, budget });
  res.json({
    success: true,
    recommendations: response.recommendations,
    budgetBreakdown: response.budgetBreakdown,
    itinerary: response.itinerary
  });
});

app.get('/api/trips', (_req, res) => {
  res.json({
    success: true,
    trips: [
      { id: 1, destination: 'Goa', travelers: 2, days: 4, status: 'Planned' },
      { id: 2, destination: 'Paris', travelers: 2, days: 3, status: 'Saved' }
    ]
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
});

connectDB();

app.listen(PORT, () => {
  console.log(`TravelMate server running on http://localhost:${PORT}`);
});
