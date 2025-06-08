import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import ColorfulGlobe from './ColorfulGlobe';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  videoBtnText?: string;
  videoBtnLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  videoBtnText,
  videoBtnLink,
  backgroundImage,
}) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  // Use a custom very light gradient for the right side
  const customGradient = {
    background: `linear-gradient(90deg, #1e90ff 0%, #ffffff 100%)`,
    ...bgStyle,
  };

  return (
    <div
      className="relative text-white pt-24 pb-16 md:pt-40 md:pb-24 overflow-visible"
      style={customGradient}
    >
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 rounded-bl-[200px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-16"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>

      {/* === Animated Circle Region (bottom-right) === */}
      <div className="pointer-events-none">
        <svg
          className="hero-animated-circle"
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1,
            opacity: 0.6,
          }}
        >
          <circle cx="90" cy="90" r="75" fill="url(#circleGradient)" />
          <defs>
            <radialGradient id="circleGradient" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
              <stop offset="90%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* === End Animated Circle === */}

      {/* === Colorful 3D Globe (middle right) === */}
      {/* Place Globe here for proper overlap */}
      <ColorfulGlobe />

      <div className="container relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-xl text-white/90 mb-8 leading-tight">{subtitle}</p>
          <div className="flex flex-wrap gap-4 mt-12">
            <Link to={ctaLink} className="btn bg-white text-primary hover:bg-gray-100">
              {ctaText}
            </Link>
            {videoBtnText && videoBtnLink && (
              <a
                href={videoBtnLink}
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 inline-flex items-center"
              >
                <Play size={20} className="mr-2" />
                {videoBtnText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;