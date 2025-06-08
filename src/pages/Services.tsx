import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Smartphone, PenTool, BarChart, Users, Radio, Globe, VideoIcon } from 'lucide-react';
import { services } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../utils/types';

const Services: React.FC = () => {
  // Benefits of working with Nexstar
  const benefits = [
    {
      title: 'National Reach',
      description: 'Access to 116 markets reaching 212 million people across the United States.',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of local markets and audience preferences.',
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: 'Integrated Solutions',
      description: 'Seamless integration of broadcast, digital, and content strategies.',
      icon: <Link2 className="w-6 h-6" />,
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge technology platforms for optimal delivery and performance.',
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  return (
    <>
      {/* Page Header - matches Home/News/About/Contact gradient and pattern */}
      <div
        className="relative text-white pt-24 pb-16 md:pt-40 md:pb-24 overflow-visible"
        style={{
          background: `linear-gradient(90deg, #1e90ff 0%, #ffffff 100%)`,
        }}
      >
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-16"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold">Our Media Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive media solutions designed to help your business connect with audiences and achieve measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-6">Comprehensive Media Solutions</h2>
              <p className="text-gray-700 mb-4">
                Nexstar Media Group offers a complete range of media services to help businesses of all sizes reach their target audiences effectively. Our solutions span broadcast, digital, and content production, providing you with integrated strategies that deliver results.
              </p>
              <p className="text-gray-700 mb-4">
                With our national reach and local expertise, we can create customized media plans that align with your specific business goals, whether you're looking to increase brand awareness, drive website traffic, or generate leads and sales.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="btn btn-primary mr-4">
                  Get Started
                </Link>
                <a href="#services-list" className="btn btn-outline">
                  View Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Nexstar Media Services"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Why Choose Nexstar Media</h2>
            <p className="text-gray-600 text-lg">
              Partner with America's largest local media company and gain access to unmatched resources and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services-list" className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive media solutions designed to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-gray-600 text-lg">
              See how our media solutions have helped businesses achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h4 className="text-xl font-bold mb-2">{study.title}</h4>
                  <p className="text-gray-600 mb-4">
                    {study.challenge.slice(0, 100)}...
                  </p>
                  <Link 
                    to={`/case-study/${study.id}`}
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    Read Case Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
      className="relative text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-visible"
  style={{
    background: `linear-gradient(90deg, #1e90ff 0%, #ffffff 100%)`,
  }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Media Strategy?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Contact our media experts today to discuss how Nexstar Media Group can help your business achieve its goals with our comprehensive media solutions.
              </p>
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Request a Free Consultation
              </Link>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-accent mr-2 mt-0.5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Customized media strategies tailored to your business goals</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-accent mr-2 mt-0.5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Integrated broadcast and digital solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-accent mr-2 mt-0.5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Data-driven strategies with measurable results</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-accent mr-2 mt-0.5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Expert guidance from media professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// These components are used in the Services page but not defined elsewhere
const MapPin = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Link2 = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const Cpu = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

export default Services;