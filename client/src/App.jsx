import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Bike,
  BookHeart,
  BriefcaseBusiness,
  Bus,
  CarFront,
  Compass,
  Clock3,
  Heart,
  Home,
  Hotel,
  MapPinned,
  Menu,
  MoonStar,
  Navigation,
  Phone,
  Plane,
  Search,
  Shield,
  SunMedium,
  TrainFront,
  Trees,
  User,
  Utensils,
  Wallet,
  Landmark,
  Building2,
  BellRing
} from 'lucide-react';

const defaultForm = {
  destination: 'Goa',
  currentLocation: 'Hyderabad',
  travelers: 2,
  days: 4,
  budget: 25000
};

const navItems = ['Home', 'Explore', 'My Trips', 'Saved', 'Emergency', 'Profile'];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchForm, setSearchForm] = useState(defaultForm);
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTrip = async (customForm = searchForm) => {
    setLoading(true);
    setError('');

    try {
      const params = new URLSearchParams({
        destination: customForm.destination,
        currentLocation: customForm.currentLocation,
        travelers: customForm.travelers,
        days: customForm.days,
        budget: customForm.budget
      });

      const response = await fetch(`/api/destination?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Unable to generate travel plan right now.');
      }

      const data = await response.json();
      setTrip(data);
    } catch (err) {
      setError(err.message || 'Something went wrong while planning your trip.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrip();
  }, []);

  const filteredPlaces = useMemo(() => {
    if (!trip?.places) return [];
    return trip.places.slice(0, 4);
  }, [trip]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchTrip();
  };

  const handleInputChange = (field, value) => {
    setSearchForm((previous) => ({ ...previous, [field]: value }));
  };

  return (
    <div className={`app-shell ${darkMode ? 'dark' : 'light'}`}>
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">TM</div>
          <div>
            <p className="eyebrow">AI Travel Planner</p>
            <h2>TravelMate</h2>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <button className="nav-item active" type="button">
            <Home size={18} /> Home
          </button>
          <button className="nav-item" type="button">
            <Compass size={18} /> Explore
          </button>
          <button className="nav-item" type="button">
            <BriefcaseBusiness size={18} /> My Trips
          </button>
          <button className="nav-item" type="button">
            <BookHeart size={18} /> Saved
          </button>
          <button className="nav-item urgent" type="button">
            <BellRing size={18} /> Emergency
          </button>
          <button className="nav-item" type="button">
            <User size={18} /> Profile
          </button>
        </nav>

        <div className="sidebar-card">
          <div className="chip success">Safety First</div>
          <h3>Need help now?</h3>
          <p>Call emergency support or view nearby hospitals instantly.</p>
          <button className="primary-button emergency-button" type="button">
            <Phone size={16} /> SOS / Emergency
          </button>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="mobile-menu">
            <Menu size={18} />
          </div>

          <div className="toolbar-actions">
            <button className="icon-button" type="button" onClick={() => setDarkMode((prev) => !prev)}>
              {darkMode ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>
            <div className="user-pill">
              <span className="avatar">CG</span>
              <span>Chand</span>
            </div>
          </div>
        </header>

        <div className="main-scroll">
          <section className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow accent">Smart travel planning</p>
              <h1>Plan every mile, stay, bite, and backup option.</h1>
              <p className="subtle-text">
                Discover the best route, essentials, safety, and experiences for your next adventure.
              </p>
            </div>

            <form className="travel-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="input-group extended">
                  <label>From</label>
                  <input
                    value={searchForm.currentLocation}
                    onChange={(event) => handleInputChange('currentLocation', event.target.value)}
                    placeholder="Current location"
                  />
                </div>
                <div className="input-group extended">
                  <label>To</label>
                  <input
                    value={searchForm.destination}
                    onChange={(event) => handleInputChange('destination', event.target.value)}
                    placeholder="Where do you want to go?"
                  />
                </div>
              </div>

              <div className="field-row two-columns">
                <div className="input-group">
                  <label>Travel date</label>
                  <input type="date" defaultValue="2026-11-10" />
                </div>

                <div className="input-group">
                  <label>Travelers</label>
                  <input
                    type="number"
                    min="1"
                    value={searchForm.travelers}
                    onChange={(event) => handleInputChange('travelers', Number(event.target.value))}
                  />
                </div>

                <div className="input-group">
                  <label>Budget</label>
                  <input
                    type="number"
                    min="1000"
                    value={searchForm.budget}
                    onChange={(event) => handleInputChange('budget', Number(event.target.value))}
                  />
                </div>

                <button type="submit" className="primary-button go-button">
                  <Search size={18} /> GO
                </button>
              </div>
            </form>
          </section>

          {loading ? (
            <div className="loader-panel">
              <div className="loader" />
              <p>Building your destination dashboard...</p>
            </div>
          ) : error ? (
            <div className="state-panel danger">
              <AlertTriangle size={18} />
              <span>{error}</span>
            </div>
          ) : trip ? (
            <>
              <section className="stats-grid">
                <div className="stat-card accent-card">
                  <MapPinned size={18} />
                  <div>
                    <span>Destination</span>
                    <strong>{trip.destination}</strong>
                  </div>
                </div>
                <div className="stat-card">
                  <Shield size={18} />
                  <div>
                    <span>Safety</span>
                    <strong>{trip.safety.rating}</strong>
                  </div>
                </div>
                <div className="stat-card">
                  <Wallet size={18} />
                  <div>
                    <span>Budget</span>
                    <strong>{trip.budgetBreakdown.totalEstimatedCost}</strong>
                  </div>
                </div>
                <div className="stat-card">
                  <Clock3 size={18} />
                  <div>
                    <span>Travel time</span>
                    <strong>{trip.travelTime}</strong>
                  </div>
                </div>
              </section>

              <section className="dashboard-grid top-grid">
                <div className="panel panel-large">
                  <div className="panel-header">
                    <div>
                      <p className="eyebrow">Destination overview</p>
                      <h3>{trip.destination} Travel Plan</h3>
                    </div>
                    <span className="chip">{trip.country}</span>
                  </div>

                  <div className="destination-hero">
                    <div className="destination-image" />
                    <div className="destination-details">
                      <div className="detail-pair">
                        <span>Weather</span>
                        <strong>{trip.weather.condition}</strong>
                      </div>
                      <div className="detail-pair">
                        <span>Temperature</span>
                        <strong>{trip.weather.temperature}</strong>
                      </div>
                      <div className="detail-pair">
                        <span>Best time to visit</span>
                        <strong>{trip.weather.bestTimeToVisit}</strong>
                      </div>
                      <div className="detail-pair">
                        <span>Distance</span>
                        <strong>{trip.distanceFromCurrentLocation}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header">
                    <div>
                      <p className="eyebrow">Weather & safety</p>
                      <h3>Conditions</h3>
                    </div>
                  </div>

                  <ul className="mini-list">
                    <li>
                      <span>Temperature</span>
                      <strong>{trip.weather.temperature}</strong>
                    </li>
                    <li>
                      <span>Humidity</span>
                      <strong>{trip.weather.humidity}</strong>
                    </li>
                    <li>
                      <span>Best time</span>
                      <strong>{trip.weather.bestTimeToVisit}</strong>
                    </li>
                    <li>
                      <span>Safety</span>
                      <strong>{trip.safety.rating}</strong>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="panel">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">Transportation</p>
                    <h3>Compare travel options</h3>
                  </div>
                  <div className="chip-row">
                    {['Cheapest', 'Fastest', 'Comfortable', 'Recommended'].map((tag) => (
                      <span key={tag} className="chip soft">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="transport-grid">
                  <div className="transport-card">
                    <div className="icon-wrap orange"><Bus size={18} /></div>
                    <h4>Bus</h4>
                    {trip.transportation.bus.map((option, index) => (
                      <div key={`${option.operator}-${index}`} className="route-item">
                        <strong>{option.operator}</strong>
                        <span>{option.departure} → {option.arrival}</span>
                        <span>{option.duration}</span>
                        <span>{option.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="transport-card">
                    <div className="icon-wrap blue"><TrainFront size={18} /></div>
                    <h4>Train</h4>
                    {trip.transportation.train.map((option, index) => (
                      <div key={`${option.trainNumber}-${index}`} className="route-item">
                        <strong>{option.trainNumber}</strong>
                        <span>{option.departure} → {option.arrival}</span>
                        <span>{option.duration}</span>
                        <span>{option.fare}</span>
                      </div>
                    ))}
                  </div>

                  <div className="transport-card">
                    <div className="icon-wrap purple"><Plane size={18} /></div>
                    <h4>Flight</h4>
                    {trip.transportation.flight.map((option, index) => (
                      <div key={`${option.airline}-${index}`} className="route-item">
                        <strong>{option.airline}</strong>
                        <span>{option.departure} → {option.arrival}</span>
                        <span>{option.duration}</span>
                        <span>{option.fare}</span>
                      </div>
                    ))}
                  </div>

                  <div className="transport-card">
                    <div className="icon-wrap green"><CarFront size={18} /></div>
                    <h4>Car / Bike</h4>
                    <div className="route-item">
                      <strong>Self-drive</strong>
                      <span>{trip.transportation.car.selfDrive.estimatedDistance}</span>
                      <span>Fuel ₹{trip.transportation.car.selfDrive.fuelCost}</span>
                    </div>
                    <div className="route-item">
                      <strong>Bike rental</strong>
                      <span>{trip.transportation.bike.rental}</span>
                      <span>{trip.transportation.bike.pricePerDay}/day</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="panel">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">Accommodation</p>
                    <h3>Hotels & stays</h3>
                  </div>
                  <button className="link-button" type="button">Filters</button>
                </div>

                <div className="card-grid hotel-grid">
                  {trip.hotels.map((hotel) => (
                    <article key={hotel.name} className="spot-card hotel-card">
                      <img src={hotel.photo} alt={hotel.name} />
                      <div className="card-body">
                        <div className="card-head">
                          <h4>{hotel.name}</h4>
                          <span className="rating">★ {hotel.rating}</span>
                        </div>
                        <p>{hotel.type}</p>
                        <div className="meta-row">
                          <span>{hotel.pricePerNight}/night</span>
                          <span>{hotel.distance}</span>
                        </div>
                        <div className="amenity-list">
                          {hotel.amenities.slice(0, 3).map((item) => (
                            <span key={item}>{item}</span>
                          ))}
                        </div>
                        <div className="card-actions">
                          <button type="button" className="ghost-button">View Hotel</button>
                          <button type="button" className="primary-button small">Book Now</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="two-column-layout">
                <div className="panel">
                  <div className="panel-header">
                    <div>
                      <p className="eyebrow">Emergency</p>
                      <h3>Healthcare & help</h3>
                    </div>
                    <button className="primary-button emergency-button small" type="button">
                      <Phone size={14} /> SOS
                    </button>
                  </div>

                  <div className="list-stack">
                    {trip.emergency.map((item) => (
                      <div key={item.name} className="info-row">
                        <div>
                          <strong>{item.name}</strong>
                          <p>{item.category} • {item.distance}</p>
                          <small>{item.address}</small>
                        </div>
                        <div className="inline-actions">
                          <button type="button" className="ghost-button small">Navigate</button>
                          <button type="button" className="primary-button small">Call</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header">
                    <div>
                      <p className="eyebrow">Food & dining</p>
                      <h3>Best places to eat</h3>
                    </div>
                  </div>

                  <div className="list-stack">
                    {trip.restaurants.map((restaurant) => (
                      <div key={restaurant.name} className="info-row food-row">
                        <div>
                          <strong>{restaurant.name}</strong>
                          <p>{restaurant.cuisine} • {restaurant.priceRange}</p>
                          <small>{restaurant.openingHours}</small>
                        </div>
                        <div className="food-meta">
                          <span>★ {restaurant.rating}</span>
                          <span>{restaurant.distance}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="panel">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">Places to visit</p>
                    <h3>Top attractions</h3>
                  </div>
                </div>

                <div className="card-grid attraction-grid">
                  {filteredPlaces.map((place) => (
                    <article key={place.name} className="spot-card">
                      <img src={place.image} alt={place.name} />
                      <div className="card-body">
                        <div className="card-head">
                          <h4>{place.name}</h4>
                          <span className="rating">★ {place.rating}</span>
                        </div>
                        <p>{place.description}</p>
                        <div className="meta-row compact">
                          <span>{place.distance}</span>
                          <span>{place.openingHours}</span>
                        </div>
                        <div className="card-actions">
                          <button type="button" className="ghost-button">Navigate</button>
                          <button type="button" className="primary-button small">Add to plan</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="two-column-layout">
                <div className="panel">
                  <div className="panel-header">
                    <div>
                      <p className="eyebrow">AI trip planner</p>
                      <h3>{trip.destination} itinerary</h3>
                    </div>
                  </div>

                  <div className="itinerary-stack">
                    {trip.itinerary.map((dayPlan) => (
                      <div key={dayPlan.day} className="itinerary-day">
                        <div className="day-label">Day {dayPlan.day}</div>
                        <ul>
                          <li><strong>Morning:</strong> {dayPlan.morning}</li>
                          <li><strong>Afternoon:</strong> {dayPlan.afternoon}</li>
                          <li><strong>Evening:</strong> {dayPlan.evening}</li>
                          <li><strong>Food:</strong> {dayPlan.food}</li>
                          <li><strong>Transport:</strong> {dayPlan.transportation}</li>
                          <li><strong>Cost:</strong> {dayPlan.cost}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header">
                    <div>
                      <p className="eyebrow">Budget</p>
                      <h3>Estimated trip cost</h3>
                    </div>
                    <span className="budget-pill">{trip.budgetBreakdown.totalEstimatedCost}</span>
                  </div>

                  <ul className="budget-list">
                    {Object.entries(trip.budgetBreakdown).map(([key, value]) => {
                      if (key === 'recommendedBudget') return null;
                      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase());
                      return (
                        <li key={key}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>

              <section className="panel">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">Smart route</p>
                    <h3>Complete journey map</h3>
                  </div>
                  <button className="ghost-button" type="button">Navigation</button>
                </div>

                <div className="route-map">
                  <div className="route-line">
                    {trip.route.stops.map((stop, index) => (
                      <div key={`${stop}-${index}`} className="route-stop">
                        <span className="dot" />
                        <strong>{stop}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="route-meta">
                    <span><ArrowRight size={14} /> {trip.route.distance}</span>
                    <span><Clock3 size={14} /> {trip.route.estimatedTravelTime}</span>
                    <span><MapPinned size={14} /> Nearby services</span>
                  </div>
                </div>
              </section>

              <section className="panel">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">AI recommendations</p>
                    <h3>Best overall trip</h3>
                  </div>
                </div>

                <div className="recommendation-box">
                  <div className="recommendation-badges">
                    <span>🚆 {trip.recommendations.transport}</span>
                    <span>🏨 {trip.recommendations.hotel}</span>
                    <span>🍛 Local restaurants</span>
                    <span>🏝️ 5 attractions</span>
                  </div>
                  <div className="recommendation-footer">
                    <strong>Estimated cost:</strong> {trip.recommendations.estimatedTotalCost}
                  </div>
                </div>
              </section>
            </>
          ) : null}
        </div>

        <nav className="bottom-nav" aria-label="Mobile navigation">
          {['Home', 'Explore', 'Trips', 'Saved', 'Emergency'].map((item) => (
            <button key={item} type="button" className="bottom-nav-item">
              {item}
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
}

export default App;
