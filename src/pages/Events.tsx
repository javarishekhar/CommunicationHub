
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import EventCard, { Event } from '@/components/EventCard';
import EventForm from '@/components/EventForm';
import AnimatedPage from '@/components/AnimatedPage';
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample events data
const initialEvents: Event[] = [
  {
    id: "1",
    title: "Interfaith Prayer Service",
    date: "March 15, 2025 - 6:00 PM",
    location: "Community Center, New York",
    description: "Join us for a beautiful ceremony celebrating unity among diverse faith traditions. Open to all who wish to participate.",
    category: "Religious"
  },
  {
    id: "2",
    title: "Community Volunteer Day",
    date: "March 18, 2025 - 10:00 AM",
    location: "Central Park, New York",
    description: "Help clean up our community park and make a difference. Tools and refreshments will be provided.",
    category: "Charity"
  },
  {
    id: "3",
    title: "Cultural Exchange Dinner",
    date: "March 22, 2025 - 7:00 PM",
    location: "Unity Hall, Brooklyn",
    description: "Experience cuisines from different cultures around the world while connecting with new friends.",
    category: "Social"
  },
  {
    id: "4",
    title: "Faith Leaders Roundtable",
    date: "March 25, 2025 - 2:00 PM",
    location: "Community Library, Queens",
    description: "A discussion with religious leaders from different faiths on building harmony and understanding.",
    category: "Religious"
  },
  {
    id: "5",
    title: "Charity Fundraising Gala",
    date: "April 2, 2025 - 7:30 PM",
    location: "Grand Ballroom, Manhattan",
    description: "An elegant evening supporting local charities that help the homeless population.",
    category: "Charity"
  },
  {
    id: "6",
    title: "Movie Night: Stories of Faith",
    date: "April 8, 2025 - 8:00 PM",
    location: "Open Air Cinema, Staten Island",
    description: "Watch inspiring documentaries about individuals from different faith backgrounds.",
    category: "Social"
  }
];

const Events = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  // Filter categories
  const categories = ['All', 'Religious', 'Social', 'Charity'];
  
  // Filtered events based on category
  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter);
  
  // Add new event
  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    // Create new event with unique ID
    const event: Event = {
      ...newEvent,
      id: Date.now().toString()
    };
    
    setEvents(prevEvents => [event, ...prevEvents]);
  };
  
  return (
    <AnimatedPage>
      <Navbar />
      
      <div className="min-h-screen pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center mb-12 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              CommunionHub Events
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Discover Events & Connect
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Browse through upcoming events from various communities, or add your own event to share with others.
            </p>
          </motion.div>
          
          {/* Filters & Add Event */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
              <Filter className="h-4 w-4 text-foreground/70 ml-2" />
              
              <div className="flex">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      activeFilter === category
                        ? 'bg-white text-foreground shadow-sm'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <EventForm onAddEvent={handleAddEvent} />
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-primary/70" />
              </div>
              <h3 className="text-xl font-bold mb-2">No events found</h3>
              <p className="text-foreground/70 mb-6">
                There are no events in this category yet.
              </p>
              <EventForm onAddEvent={handleAddEvent} />
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-foreground text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">C</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                CommunionHub
              </span>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="/events" className="text-white/80 hover:text-white transition-colors">Events</a>
              <a href="/" className="text-white/80 hover:text-white transition-colors">About</a>
            </div>
            
            <div className="text-white/60 text-sm">
              © 2025 CommunionHub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </AnimatedPage>
  );
};

const Calendar = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export default Events;
