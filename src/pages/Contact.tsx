import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
      });
    }, 1500);
  };

  return (
    <>
      {/* Page Header - matches Home/News/About gradient and pattern */}
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
            <h1 className="mb-4 text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with our team to discuss how Nexstar Media Group can help your business grow.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                      <p className="text-gray-600">
                        545 E John Carpenter Freeway<br />
                        Suite 700<br />
                        Irving, TX 75062
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+12145555555" className="hover:text-primary transition-colors">
                          (214) 555-5555
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:info@nexstar.com" className="hover:text-primary transition-colors">
                          info@nexstar.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-3">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>

                {submitted ? (
                  <div className="bg-success/10 border border-success rounded-lg p-6 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-success mb-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                    <p className="text-gray-700">
                      Your message has been sent successfully. One of our team members will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service of Interest*
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a service</option>
                          <option value="broadcast">Broadcast Solutions</option>
                          <option value="digital">Digital Advertising</option>
                          <option value="content">Content Production</option>
                          <option value="analytics">Media Analytics</option>
                          <option value="audience">Audience Development</option>
                          <option value="radio">Radio Broadcasting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9 h-96 bg-gray-200">
              <iframe
    title="Nexstar Headquarters Location"
    src="https://www.google.com/maps?q=545+E+John+Carpenter+Freeway+Irving+TX+75062&output=embed"
    width="100%"
    height="100%"
    allowFullScreen
    loading="lazy"
    className="w-full h-full border-0 rounded-lg"
    style={{ minHeight: "100%" }}
  ></iframe>

              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations - Simplified for this example */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Locations</h2>
            <p className="text-gray-600 text-lg">
              With offices across the United States, we're never far from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Irving, TX</h4>
              <p className="text-gray-600 mb-4">
                545 E John Carpenter Freeway<br />
                Suite 700<br />
                Irving, TX 75062
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> (214) 555-5555
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">New York, NY</h4>
              <p className="text-gray-600 mb-4">
                685 Third Avenue<br />
                Suite 2100<br />
                New York, NY 10017
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> (212) 555-5555
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Los Angeles, CA</h4>
              <p className="text-gray-600 mb-4">
                5700 Wilshire Boulevard<br />
                Suite 120<br />
                Los Angeles, CA 90036
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> (323) 555-5555
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our services and partnership process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">What types of businesses do you work with?</h4>
                <p className="text-gray-600">
                  We work with businesses of all sizes across various industries, from local small businesses to national corporations. Our media solutions can be customized to meet the specific needs and budget of your organization.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">How do I know which media services are right for my business?</h4>
                <p className="text-gray-600">
                  Our team of media experts will work with you to understand your business goals, target audience, and budget to recommend the most effective media strategy. We offer a free consultation to discuss your needs and provide tailored recommendations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">What is the typical timeline for implementing a media campaign?</h4>
                <p className="text-gray-600">
                  The timeline varies depending on the complexity of the campaign. Simple digital campaigns can be implemented within 1-2 weeks, while more comprehensive multi-channel campaigns may take 4-6 weeks to develop and launch.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">How do you measure the success of media campaigns?</h4>
                <p className="text-gray-600">
                  We provide detailed analytics and reporting for all campaigns, tracking key performance indicators (KPIs) aligned with your business goals. These may include reach, engagement, website traffic, lead generation, or sales metrics, depending on your objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;