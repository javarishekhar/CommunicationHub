
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-24">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6">
              Welcome to CommunionHub
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight mb-6">
              Connecting People Across Faiths & Interests
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg">
              A platform that brings diverse communities together through meaningful events and gatherings, fostering understanding and connection.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/events" 
                className="bg-primary hover:bg-primary/90 btn-hover text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
              >
                Explore Events
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link 
                to="/" 
                className="bg-secondary hover:bg-secondary/80 text-foreground btn-hover px-6 py-3 rounded-lg font-medium"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl transform rotate-3 blur-sm"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=3540&auto=format&fit=crop"
                alt="People connecting at an event" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse-subtle"></span>
                    <span className="text-sm font-medium text-green-600">Happening Now</span>
                  </div>
                  <span className="text-xs font-medium bg-secondary px-2 py-1 rounded">Faith & Community</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Interfaith Prayer Service</h3>
                <p className="text-sm text-foreground/70 mb-4">Join us for a beautiful ceremony celebrating unity among diverse faith traditions.</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/60">Today, 7:00 PM</span>
                  <span className="text-primary font-medium">Join Now</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
