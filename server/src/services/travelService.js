import { destinations, destinationSearchOptions } from '../data/mockData.js';

const normalizeDestination = (value) => {
  if (!value) return 'Goa';
  const match = destinationSearchOptions.find((option) => option.toLowerCase() === value.trim().toLowerCase());
  return match || 'Goa';
};

const buildItinerary = ({ days = 4, travelers = 2, budget = 25000, destination }) => {
  const itinerary = destination.itinerary || [];
  const tripLength = Math.max(1, Number(days) || 4);

  const output = Array.from({ length: tripLength }, (_, index) => {
    const base = itinerary[index % itinerary.length] || itinerary[0];
    return {
      day: index + 1,
      morning: base.morning,
      afternoon: base.afternoon,
      evening: base.evening,
      food: base.food,
      transportation: base.transportation,
      cost: base.cost,
      travelers,
      budget
    };
  });

  return output;
};

const calculateBudgetBreakdown = ({ destination, travelers = 2, budget = 25000 }) => {
  const base = destination.recommendations ? destination.recommendations.estimatedTotalCost : '₹18,500';
  const numericBudget = Number(String(budget).replace(/[^\d]/g, '')) || 25000;
  const roughTransport = Math.round(numericBudget * 0.28);
  const hotel = Math.round(numericBudget * 0.3);
  const food = Math.round(numericBudget * 0.15);
  const attractions = Math.round(numericBudget * 0.12);
  const localTransport = Math.round(numericBudget * 0.08);
  const emergencyBuffer = Math.round(numericBudget * 0.07);
  const total = roughTransport + hotel + food + attractions + localTransport + emergencyBuffer;

  return {
    transportation: `₹${roughTransport.toLocaleString('en-IN')}`,
    hotel: `₹${hotel.toLocaleString('en-IN')}`,
    food: `₹${food.toLocaleString('en-IN')}`,
    attractions: `₹${attractions.toLocaleString('en-IN')}`,
    localTransport: `₹${localTransport.toLocaleString('en-IN')}`,
    emergencyBuffer: `₹${emergencyBuffer.toLocaleString('en-IN')}`,
    totalEstimatedCost: `₹${total.toLocaleString('en-IN')}`,
    recommendedBudget: base
  };
};

export const getDestinationData = ({ destination = 'Goa', currentLocation = 'Hyderabad', travelers = 2, days = 4, budget = 25000 } = {}) => {
  const selectedDestination = destinations[normalizeDestination(destination)] || destinations.Goa;

  return {
    destination: selectedDestination.destination,
    country: selectedDestination.country,
    state: selectedDestination.state,
    currentLocation,
    overview: selectedDestination.overview,
    weather: selectedDestination.weather,
    safety: selectedDestination.safety,
    bestTimeToVisit: selectedDestination.weather.bestTimeToVisit,
    distanceFromCurrentLocation: selectedDestination.distanceFromCurrentLocation,
    travelTime: selectedDestination.travelTime,
    transportation: selectedDestination.transportation,
    hotels: selectedDestination.hotels,
    emergency: selectedDestination.emergency,
    restaurants: selectedDestination.restaurants,
    places: selectedDestination.places,
    itinerary: buildItinerary({ days, travelers, budget, destination: selectedDestination }),
    recommendations: selectedDestination.recommendations,
    budgetBreakdown: calculateBudgetBreakdown({ destination: selectedDestination, travelers, budget }),
    route: {
      from: currentLocation,
      to: selectedDestination.destination,
      stops: ['Current Location', 'Transport Hub', 'Destination', 'Hotel', 'Attractions', 'Restaurants', 'Emergency Services'],
      distance: selectedDestination.distanceFromCurrentLocation,
      estimatedTravelTime: selectedDestination.travelTime
    },
    destinationOptions: destinationSearchOptions
  };
};

export const getTravelSummary = () => ({
  destinations: destinationSearchOptions,
  defaultDestination: 'Goa',
  currentLocation: 'Hyderabad'
});
