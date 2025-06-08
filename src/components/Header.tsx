import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { services } from '../data/services'; // Import your dynamic services array

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesOpen]);

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.95)']
  );
  const headerHeight = useTransform(scrollY, [0, 100], ['6rem', '4.5rem']);

  return (
    <motion.header
      style={{ background: headerBackground, height: headerHeight }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
            }
          >
            About
          </NavLink>

          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              className="nav-link flex items-center gap-1 text-gray-700 hover:text-primary font-normal focus:outline-none"
              onClick={() => setServicesOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              type="button"
            >
              Services
              <ChevronDown size={18} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {/* Dropdown */}
            <div
              className={`absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-40 transition-all duration-200 ${
                servicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <ul>
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/services"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 font-semibold"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <NavLink
            to="/news"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
            }
          >
            News
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary blinking-btn"
            style={{ animationDuration: '3s' }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg px-4 py-2 ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg px-4 py-2 ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                type="button"
                className="w-full flex items-center justify-between text-lg px-4 py-2 text-gray-700 hover:text-primary focus:outline-none"
                onClick={() => setMobileServicesOpen((o) => !o)}
              >
                <span>Services</span>
                <ChevronDown
                  size={20}
                  className={`ml-1 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`transition-all duration-200 bg-gray-50 rounded-b ${
                  mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <ul>
                  {services.map((service) => (
                    <li key={service.id}>
                      <NavLink
                        to={`/services/${service.id}`}
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {service.title}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      to="/services"
                      className="block px-8 py-2 text-gray-700 font-semibold hover:bg-gray-100"
                      onClick={() => {
                        setIsOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      All Services
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                `text-lg px-4 py-2 ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
              }
              onClick={() => setIsOpen(false)}
            >
              News
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg px-4 py-2 ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary mt-4"
            >
              Get Started
            </motion.button>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}