import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Target, TrendingUp, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Page Header - matches Home/News gradient and pattern */}
      <div
        className="relative text-white pt-24 pb-16 md:pt-40 md:pb-24 overflow-visible"
        style={{
          background: `linear-gradient(90deg, #1e90ff 0%, #ffffff 100%)`,
        }}
      >
        {/* Background shapes (same as Home/News) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-16"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold">About Nexstar Media Group</h1>
            <p className="text-xl text-white/90">
              America's largest local television and media company, delivering innovative solutions across multiple platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Nexstar Media Group, Inc. (NASDAQ: NXST) is America's largest local television and media company with 200 owned or partner stations in 116 markets reaching 212 million people and the nation's 13th largest digital media company.
              </p>
              <p className="text-gray-700 mb-4">
                Founded in 1996, Nexstar has grown through strategic acquisitions and innovations to become a leading force in the media industry. Our local-to-national digital media infrastructure delivers news, information, and video across multiple platforms.
              </p>
              <p className="text-gray-700 mb-4">
                We are committed to serving the communities where we operate, providing essential local news and information while helping businesses connect with their target audiences through effective advertising solutions.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Nexstar Media Headquarters"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-accent rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To be the nation's leading provider of local news, entertainment programming, and digital content while serving the communities in which we operate with high-quality journalism and community involvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To transform the media landscape by delivering innovative solutions that help businesses grow and communities thrive while setting new standards for excellence in local news and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              These principles guide our decisions and actions as we work to serve our viewers, clients, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from our journalism to our client services and community engagement.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Community</h4>
              <p className="text-gray-600">
                We are committed to serving and strengthening the communities where we operate through quality journalism and civic involvement.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Globe size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Innovation</h4>
              <p className="text-gray-600">
                We embrace new technologies and approaches to better serve our audiences and advertising partners in an evolving media landscape.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Shield size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Integrity</h4>
              <p className="text-gray-600">
                We uphold the highest standards of journalistic integrity, accuracy, and ethical business practices in all our operations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Diversity</h4>
              <p className="text-gray-600">
                We value diverse perspectives, backgrounds, and experiences that reflect the communities we serve.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Results</h4>
              <p className="text-gray-600">
                We are dedicated to delivering measurable results for our advertisers and meaningful impact for our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Simplified for this example */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg">
              Our experienced leadership team is dedicated to driving innovation and excellence in media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://spglobal.scene7.com/is/image/spglobalcom/perry-sook-headshot:square_1-1?$responsive$"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1">Perry A Sook</h4>
                <p className="text-gray-500 mb-3">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 25 years of media experience, Perry leads Nexstar's strategic vision and growth initiatives.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="COO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1">Samantha Wilson</h4>
                <p className="text-gray-500 mb-3">Chief Operating Officer</p>
                <p className="text-gray-600">
                  Samantha oversees daily operations and ensures efficient execution of Nexstar's business strategies.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/xQu74DvrbMoAwSjzF8g3ZE.jpg"
                  alt="CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1">Brett Jenkins</h4>
                <p className="text-gray-500 mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Brett drives Nexstar's technological innovation and digital transformation initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Join the Nexstar Network</h2>
            <p className="text-white/80 text-lg mb-8">
              Whether you're looking for advertising solutions or career opportunities, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Link>
              <a href="#" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;