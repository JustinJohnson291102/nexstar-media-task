import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const CaseStudy: React.FC = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find(cs => cs.id === Number(id));

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container">
          <h1>Case study not found</h1>
          <Link to="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-white/90">
              Learn how we helped {caseStudy.client} achieve remarkable results
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-2">Client</h3>
              <p className="text-gray-600">{caseStudy.client}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Industry</h3>
              <p className="text-gray-600">{caseStudy.industry}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h5>The Challenge</h5>
            <p className="text-gray-600">{caseStudy.challenge}</p>
          
          
            <h5>Our Solution</h5>
            <p className="text-gray-600">{caseStudy.solution}</p>
            

            <h5>Results</h5>
            <ul>
              {caseStudy.results.map((result, index) => (
                <li key={index} className="text-gray-600">{result}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12 pt-12 border-t">
            <Link
              to="/services"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;