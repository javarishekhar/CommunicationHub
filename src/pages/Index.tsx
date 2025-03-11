
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnimatedPage from '@/components/AnimatedPage';
import { ArrowRight, Heart, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <AnimatedPage>
      <Navbar />
      
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Why Choose CommunionHub
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Building Bridges Across Communities
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Our platform is designed to help people connect, learn, and grow together through shared experiences.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Discover events that match your interests and connect with like-minded individuals.
            </p>
            <Link 
              to="/events" 
              className="bg-primary hover:bg-primary/90 btn-hover text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
            >
              Browse Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      
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
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link to="/events" className="text-white/80 hover:text-white transition-colors">Events</Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors">About</Link>
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

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Calendar,
    title: "Discover Events",
    description: "Find events that match your interests, faith, and community values."
  },
  {
    icon: Users,
    title: "Connect with Others",
    description: "Meet like-minded individuals and build meaningful relationships."
  },
  {
    icon: Heart,
    title: "Foster Understanding",
    description: "Learn about different faiths and cultures through shared experiences."
  }
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const { icon: Icon, title, description } = feature;
  
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
};

export default Index;
