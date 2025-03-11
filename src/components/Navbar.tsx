
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-12 ${
      scrolled ? 'py-3 glassmorphism' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-10 flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            CommunionHub
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" pathname={location.pathname} />
          <NavLink to="/events" label="Events" pathname={location.pathname} />
          <NavLink to="/" label="About" pathname={location.pathname} />
          
          <Link 
            to="/events" 
            className="bg-primary hover:bg-primary/90 btn-hover text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Explore Events
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
        
        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-background/90 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <NavLink to="/" label="Home" pathname={location.pathname} mobile />
            <NavLink to="/events" label="Events" pathname={location.pathname} mobile />
            <NavLink to="/" label="About" pathname={location.pathname} mobile />
            
            <Link 
              to="/events" 
              className="bg-primary hover:bg-primary/90 btn-hover text-white px-6 py-3 rounded-lg mt-4 font-medium"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  pathname: string;
  mobile?: boolean;
}

const NavLink = ({ to, label, pathname, mobile }: NavLinkProps) => {
  const isActive = pathname === to || 
    (to !== '/' && pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`nav-link ${isActive ? 'nav-link-active' : ''} ${mobile ? 'text-lg py-2' : ''}`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
