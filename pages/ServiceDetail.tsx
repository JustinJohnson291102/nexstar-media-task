import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container">
          <h1>Service not found</h1>
          <Link to="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4">{service.title}</h1>
            <p className="text-xl text-white/90">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Full Description */}
            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-gray-600">{service.fullDescription}</p>
            </div>

            {/* Features */}
            {service.features && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0"
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
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process Section */}
            {service.process && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Our Process</h2>
                <div className="space-y-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            {service.pricing && (
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Pricing Plans</h3>
                <div className="space-y-4">
                  {service.pricing.map((plan, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="text-lg font-bold mb-2">{plan.title}</h4>
                      <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0"
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
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="btn btn-primary w-full text-center">
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-12 border-t">
          <Link to="/services" className="inline-flex items-center text-primary font-medium hover:underline">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
