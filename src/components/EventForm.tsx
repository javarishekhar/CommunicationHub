
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PlusCircle, X } from 'lucide-react';
import { Event } from './EventCard';

interface EventFormProps {
  onAddEvent: (event: Omit<Event, 'id'>) => void;
}

const EventForm = ({ onAddEvent }: EventFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Religious');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onAddEvent({
      title,
      date,
      location,
      description,
      category,
    });
    
    // Reset form
    setTitle('');
    setDate('');
    setLocation('');
    setDescription('');
    setCategory('Religious');
    
    // Close dialog
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="flex items-center gap-2 bg-primary hover:bg-primary/90 btn-hover">
          <PlusCircle className="h-4 w-4" />
          Add Event
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] glassmorphism border border-white/30 p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold">Add New Event</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-5">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Event Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 bg-white/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
              placeholder="Enter event title"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium">
              Date & Time
            </label>
            <input
              id="date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-3 py-2 bg-white/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
              placeholder="E.g., March 15, 2025 - 6:00 PM"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full px-3 py-2 bg-white/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
              placeholder="Enter event location"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-white/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
              <option value="Educational">Educational</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              className="w-full px-3 py-2 bg-white/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
              placeholder="Enter event description"
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="border-border">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90 btn-hover">
              Add Event
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventForm;
