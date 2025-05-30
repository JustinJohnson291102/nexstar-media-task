import React, { useState, useEffect } from 'react';
import { fetchNews, getNewsCategories } from '../utils/newsApi';
import NewsCard from '../components/NewsCard';
import NewsFilter from '../components/NewsFilter';
import { NewsArticle } from '../utils/types';

const News: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredArticle, setFeaturedArticle] = useState<NewsArticle | null>(null);

  const categories = getNewsCategories();
  
  const sortOptions = [
    { value: 'publishedAt', label: 'Most Recent' },
    { value: 'relevancy', label: 'Most Relevant' },
    { value: 'popularity', label: 'Most Popular' },
  ];

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        
        const params: any = { 
          sortBy: sortBy as 'relevancy' | 'popularity' | 'publishedAt',
          pageSize: 10,
        };
        
        // Only add category if not 'All'
        if (selectedCategory !== 'All') {
          params.category = selectedCategory.toLowerCase();
        }
        
        // Add search query if present
        if (searchQuery) {
          params.q = searchQuery;
        }
        
        const response = await fetchNews(params);
        
        if (response.articles.length > 0) {
          // Set the first article as featured
          setFeaturedArticle(response.articles[0]);
          // Set the rest as regular articles
          setArticles(response.articles.slice(1));
        } else {
          setFeaturedArticle(null);
          setArticles([]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getNews();
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4">Latest Media News</h1>
            <p className="text-xl text-white/90">
              Stay updated with the latest news and developments in the media industry from Nexstar Media Group.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* News Filters */}
        <NewsFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortOptions={sortOptions}
          selectedSort={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Featured Article */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600">Loading news articles...</p>
          </div>
        ) : (
          <>
            {featuredArticle && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
                <NewsCard article={featuredArticle} featured={true} />
              </div>
            )}

            {/* News Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No articles found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSortBy('publishedAt');
                      setSearchQuery('');
                    }}
                    className="mt-4 btn btn-outline"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination - simplified for this example */}
            {articles.length > 0 && (
              <div className="flex justify-center mt-12">
                <nav className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-l-md"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-primary border border-primary text-sm font-medium text-white hover:bg-primary-dark"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-r-md"
                  >
                    Next
                  </a>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default News;