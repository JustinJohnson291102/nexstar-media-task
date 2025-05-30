import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { NewsArticle } from '../utils/types';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleReadMore = () => {
    window.open(article.url, '_blank');
  };

  return (
    <motion.div
      className="h-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={article.urlToImage || 'https://via.placeholder.com/400x300'}
          alt={article.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {article.source.name}
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={16} className="mr-2" />
          <span>{formatDate(article.publishedAt)}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.description}
        </p>

        <motion.button
          onClick={handleReadMore}
          className="mt-auto inline-flex items-center text-primary font-medium hover:underline"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Read Full Article
          <svg
            className="w-4 h-4 ml-2"
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
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NewsCard;