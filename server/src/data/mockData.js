export const destinations = {
  Goa: {
    destination: 'Goa',
    country: 'India',
    state: 'Goa',
    currentLocation: 'Hyderabad',
    region: 'Western Coast',
    overview: 'A vibrant coastal destination with beaches, nightlife, heritage, and adventure.',
    weather: {
      condition: 'Partly cloudy',
      temperature: '29°C',
      humidity: '74%',
      bestTimeToVisit: 'November to February'
    },
    safety: {
      rating: 'Excellent for tourists',
      notes: 'Popular for family travel and group tours with generally safe public areas.',
      emergencyNumbers: {
        police: '100',
        ambulance: '108',
        fire: '101'
      }
    },
    distanceFromCurrentLocation: '1,495 km',
    travelTime: 'Approx. 9h by flight / 28h by train',
    transportation: {
      bus: [
        { operator: 'Orange Travels', departure: '21:30', arrival: '08:45', duration: '11h 15m', price: '₹1,800', station: 'MGBS Hyderabad' },
        { operator: 'Pune Goa Travels', departure: '18:00', arrival: '06:40', duration: '12h 40m', price: '₹1,650', station: 'Kukatpally' }
      ],
      train: [
        { trainNumber: '12780', departure: '22:10', arrival: '11:45', duration: '13h 35m', fare: '₹1,220', station: 'Secunderabad' },
        { trainNumber: '22649', departure: '20:50', arrival: '08:20', duration: '11h 30m', fare: '₹1,480', station: 'Hyderabad Deccan' }
      ],
      flight: [
        { airline: 'Indigo', departure: '05:45', arrival: '08:15', duration: '2h 30m', fare: '₹3,450', airport: 'Rajiv Gandhi Intl Airport' },
        { airline: 'Air India', departure: '19:20', arrival: '21:50', duration: '2h 30m', fare: '₹4,200', airport: 'Hyderabad Airport' }
      ],
      car: {
        selfDrive: { estimatedDistance: '1,520 km', fuelCost: '₹3,800', tolls: '₹1,250' },
        rentalCar: { pricePerDay: '₹2,800', included: 'Insurance + Unlimited KM' },
        taxi: { estimatedCost: '₹12,500', travelTime: '1 day' }
      },
      bike: {
        rental: 'Scooty / Activa',
        pricePerDay: '₹500',
        pickupLocations: ['Panaji', 'Mapusa', 'Baga']
      }
    },
    hotels: [
      {
        name: 'The Leela Goa',
        type: 'Resort',
        rating: 4.8,
        pricePerNight: '₹9,500',
        distance: '8 km',
        amenities: ['Pool', 'Spa', 'Wi-Fi', 'Beach Access'],
        reviews: 422,
        photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Zuri White Sands',
        type: 'Resort',
        rating: 4.7,
        pricePerNight: '₹7,200',
        distance: '6 km',
        amenities: ['Pool', 'Sea View', 'Restaurant', 'Gym'],
        reviews: 376,
        photo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Hotel Goa Heritage',
        type: 'Hotel',
        rating: 4.4,
        pricePerNight: '₹3,300',
        distance: '3 km',
        amenities: ['Free Parking', 'AC', 'Breakfast'],
        reviews: 210,
        photo: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80'
      }
    ],
    emergency: [
      { name: 'Goa Medical College', category: 'Hospital', distance: '4.2 km', address: 'Near Bambolim', openStatus: 'Open 24/7', phone: '+91 832 245 9999' },
      { name: 'Mapusa Clinic', category: 'Clinic', distance: '2.8 km', address: 'Mapusa Market Road', openStatus: 'Open 24/7', phone: '+91 832 225 1100' },
      { name: 'South Goa Police Station', category: 'Police', distance: '6 km', address: 'Margao', openStatus: 'Open 24/7', phone: '100' },
      { name: 'Fire Station Panaji', category: 'Fire', distance: '3 km', address: 'Panaji City', openStatus: 'Open 24/7', phone: '101' },
      { name: 'Goa Chemists', category: 'Pharmacy', distance: '1.5 km', address: 'Baga', openStatus: 'Open till 10 PM', phone: '+91 832 566 4488' }
    ],
    restaurants: [
      { name: 'Mum’s Kitchen', rating: 4.8, priceRange: '₹500-₹1,000', distance: '1 km', cuisine: 'Goan / Indian', openingHours: '9 AM - 11 PM', reviews: 312 },
      { name: 'Tito’s Pub', rating: 4.7, priceRange: '₹1,200-₹2,200', distance: '2 km', cuisine: 'Continental / Bar', openingHours: '12 PM - 1 AM', reviews: 540 },
      { name: 'Cafe Lout', rating: 4.6, priceRange: '₹600-₹1,200', distance: '1.6 km', cuisine: 'Cafe / Italian', openingHours: '8 AM - 10 PM', reviews: 410 },
      { name: 'The Fisherman’s Wharf', rating: 4.9, priceRange: '₹800-₹1,700', distance: '4 km', cuisine: 'Seafood / Goan', openingHours: '12 PM - 11 PM', reviews: 689 }
    ],
    places: [
      { name: 'Baga Beach', description: 'Popular beach with nightlife and water sports.', category: 'Beach', rating: 4.7, distance: '6 km', openingHours: 'Open all day', entryFee: 'Free', visitTime: '2-3 hours', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80' },
      { name: 'Fort Aguada', description: 'Historic fort with panoramic beaches and lighthouse views.', category: 'Historical', rating: 4.8, distance: '11 km', openingHours: '9 AM - 6 PM', entryFee: '₹50', visitTime: '1-2 hours', image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80' },
      { name: 'Dudhsagar Falls', description: 'Scenic waterfall surrounded by lush forest trails.', category: 'Nature', rating: 4.9, distance: '55 km', openingHours: '8 AM - 5 PM', entryFee: '₹50', visitTime: '3-4 hours', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80' },
      { name: 'Old Goa Churches', description: 'A UNESCO heritage area with grand churches and architecture.', category: 'Historical', rating: 4.8, distance: '15 km', openingHours: '9 AM - 6 PM', entryFee: 'Free', visitTime: '2 hours', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80' }
    ],
    itinerary: [
      {
        day: 1,
        morning: 'Beach walk at Baga and breakfast by the shore',
        afternoon: 'Water sports and lunch at a beach shack',
        evening: 'Sunset at Calangute and casual nightlife',
        food: 'Goan fish curry and local seafood platter',
        transportation: 'Taxi / bike rental',
        cost: '₹2,900'
      },
      {
        day: 2,
        morning: 'Visit Fort Aguada and lighthouse',
        afternoon: 'Explore Old Goa churches and cafes',
        evening: 'Dinner in Panaji with live music',
        food: 'Prawn balchao and sorpotel',
        transportation: 'Rental car',
        cost: '₹2,450'
      },
      {
        day: 3,
        morning: 'Nature trip to Dudhsagar Falls',
        afternoon: 'Lunch near forest reserve and scenic photography',
        evening: 'Relax at a beach resort',
        food: 'Vegetarian thali and fresh juices',
        transportation: 'Private taxi',
        cost: '₹3,200'
      },
      {
        day: 4,
        morning: 'Shopping at Mapusa Market',
        afternoon: 'Beach club and spa session',
        evening: 'Final sunset dinner at a waterfront restaurant',
        food: 'Goan curry and coconut-based desserts',
        transportation: 'Bike rental',
        cost: '₹2,700'
      }
    ],
    recommendations: {
      hotel: 'Hotel Goa Heritage',
      transport: 'Train / Flight',
      attractions: ['Baga Beach', 'Fort Aguada', 'Dudhsagar Falls'],
      restaurants: ['Mum’s Kitchen', 'The Fisherman’s Wharf'],
      bestTimeToVisit: 'November to February',
      estimatedTotalCost: '₹18,500'
    }
  },
  Paris: {
    destination: 'Paris',
    country: 'France',
    state: 'Île-de-France',
    currentLocation: 'Hyderabad',
    region: 'Europe',
    overview: 'Classic European romance with art, culture, cafés, and iconic landmarks.',
    weather: {
      condition: 'Mild and breezy',
      temperature: '18°C',
      humidity: '66%',
      bestTimeToVisit: 'April to June'
    },
    safety: {
      rating: 'Very safe in central neighborhoods',
      notes: 'Use common travel precautions in crowded tourist spots and metro stations.',
      emergencyNumbers: {
        police: '112',
        ambulance: '112',
        fire: '112'
      }
    },
    distanceFromCurrentLocation: '6,980 km',
    travelTime: 'Approx. 10h flight',
    transportation: {
      bus: [{ operator: 'FlixBus', departure: '10:30', arrival: '16:00', duration: '29h', price: '€70', station: 'Paris Bercy' }],
      train: [{ trainNumber: 'TGV 936', departure: '08:00', arrival: '11:45', duration: '3h 45m', fare: '€90', station: 'Gare du Nord' }],
      flight: [{ airline: 'Air France', departure: '01:20', arrival: '05:50', duration: '4h 30m', fare: '€420', airport: 'Charles de Gaulle' }],
      car: { selfDrive: { estimatedDistance: '7,200 km', fuelCost: '€620', tolls: '€160' }, rentalCar: { pricePerDay: '€55', included: 'Unlimited KM' }, taxi: { estimatedCost: '€180', travelTime: '1.5h' } },
      bike: { rental: 'Vélib / scooter', pricePerDay: '€25', pickupLocations: ['Marais', 'Montparnasse', 'Châtelet'] }
    },
    hotels: [
      { name: 'Hotel du Louvre', type: 'Boutique Hotel', rating: 4.7, pricePerNight: '€220', distance: '2 km', amenities: ['Breakfast', 'Wi-Fi', 'Restaurant'], reviews: 444, photo: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
      { name: 'Le Meurice', type: 'Luxury', rating: 4.9, pricePerNight: '€520', distance: '1 km', amenities: ['Spa', 'Pool', 'Concierge'], reviews: 690, photo: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80' },
      { name: 'Ibis Paris Centre', type: 'Budget', rating: 4.3, pricePerNight: '€110', distance: '3 km', amenities: ['Wi-Fi', 'Breakfast', 'Metro Access'], reviews: 215, photo: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80' }
    ],
    emergency: [
      { name: 'Hôpital Saint-Antoine', category: 'Hospital', distance: '3 km', address: '12 Rue du Faubourg Saint-Antoine', openStatus: 'Open 24/7', phone: '+33 1 49 28 30 00' },
      { name: 'Centre Médical du 9e', category: 'Clinic', distance: '1.2 km', address: 'Rue de Maubeuge', openStatus: 'Open daily', phone: '+33 1 47 70 21 58' },
      { name: 'Police Station 9th Arrondissement', category: 'Police', distance: '2.1 km', address: '17 Rue de la Victoire', openStatus: 'Open 24/7', phone: '112' }
    ],
    restaurants: [
      { name: 'Le Comptoir du Relais', rating: 4.8, priceRange: '€35-€60', distance: '1 km', cuisine: 'French', openingHours: '12 PM - 2:30 PM / 7 PM - 10:30 PM', reviews: 298 },
      { name: 'Boulangerie Laurent', rating: 4.6, priceRange: '€10-€25', distance: '1.4 km', cuisine: 'Bakery / Café', openingHours: '7 AM - 8 PM', reviews: 420 },
      { name: 'Chez Aline', rating: 4.7, priceRange: '€25-€45', distance: '0.8 km', cuisine: 'French Bistro', openingHours: '11 AM - 10 PM', reviews: 360 }
    ],
    places: [
      { name: 'Eiffel Tower', description: 'The iconic tower with evening light shows and city views.', category: 'Tourist', rating: 4.9, distance: '4 km', openingHours: '9 AM - 11:45 PM', entryFee: '€26', visitTime: '2 hours', image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=900&q=80' },
      { name: 'Louvre Museum', description: 'World-class art museum with iconic collections and glass pyramid.', category: 'Museum', rating: 4.8, distance: '2 km', openingHours: '9 AM - 6 PM', entryFee: '€22', visitTime: '3 hours', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' },
      { name: 'Seine River Cruise', description: 'Relaxing cruise through central Paris and historic bridges.', category: 'Attractions', rating: 4.7, distance: '1 km', openingHours: '10 AM - 9 PM', entryFee: '€18', visitTime: '1.5 hours', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80' }
    ],
    itinerary: [
      {
        day: 1,
        morning: 'Visit the Louvre and Tuileries Garden',
        afternoon: 'Walk through Rue de Rivoli and café stop',
        evening: 'Seine cruise and dinner in Le Marais',
        food: 'French onion soup and steak frites',
        transportation: 'Metro',
        cost: '€95'
      }
    ],
    recommendations: {
      hotel: 'Hotel du Louvre',
      transport: 'Flight + Metro',
      attractions: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
      restaurants: ['Le Comptoir du Relais'],
      bestTimeToVisit: 'April to June',
      estimatedTotalCost: '€640'
    }
  }
};

export const destinationSearchOptions = Object.keys(destinations);
