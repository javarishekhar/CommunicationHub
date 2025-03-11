
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
}

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden card-hover"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-medium bg-secondary px-2 py-1 rounded">
            {event.category}
          </span>
        </div>
        
        <h3 className="font-bold text-xl mb-3">{event.title}</h3>
        
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="flex flex-col space-y-2 text-sm text-foreground/70">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary/70" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary/70" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border p-4">
        <button className="w-full text-center text-primary font-medium text-sm hover:text-primary/80 transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;
