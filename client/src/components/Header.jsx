import { useState } from 'react';
import { Menu, X, Plane, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Airlines', path: '/airlines' },
    { name: 'Travel', path: '/travel' },
    { name: 'Shipping', path: '/shipping' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'Tea', path: '/tea' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
    
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2rem] px-6">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-2 rounded-xl">
              <Plane size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">
              Katara<span className="text-indigo-600">Group</span>
            </span>
          </Link>
          
          {/* Desktop Navigation - All Pages */}
          <div className="hidden lg:flex space-x-6 font-bold text-[10px] uppercase tracking-widest text-gray-500">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button className="bg-gray-950 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button className="text-gray-950" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-white rounded-[2rem] p-8 shadow-2xl border border-gray-100 flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={closeMenu}
              className="text-sm font-black uppercase tracking-widest text-gray-700 hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}