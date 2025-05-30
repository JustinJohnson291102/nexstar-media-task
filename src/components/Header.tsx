import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
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

        <nav className="hidden md:flex items-center space-x-2">
          {['Home', 'About', 'Services', 'News', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : item.toLowerCase()}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </div>

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
          <nav className="flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'News', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : item.toLowerCase()}
                className={({ isActive }) =>
                  `text-lg px-4 py-2 ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
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