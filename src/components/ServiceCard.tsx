import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Service } from '../utils/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6">
        <motion.div
          className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl text-primary">{service.icon}</span>
        </motion.div>

        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>

        <div className="space-y-3 mb-6">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <svg
                className="w-5 h-5 text-primary mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center text-primary font-medium hover:underline group"
        >
          Learn More
          <motion.svg
            className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;