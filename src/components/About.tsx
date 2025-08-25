import React from 'react';
import { Users, CheckCircle, Clock, Star, Award, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Clients' },
    { icon: CheckCircle, number: '15000+', label: 'Documents Processed' },
    { icon: Clock, number: '7+', label: 'Years Experience' },
    { icon: Star, number: '4.9/5', label: 'Client Rating' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="relative mb-8">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Professional team working"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">7+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Esha Online Service?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a trusted partner for all your government document needs, providing 
              professional assistance with a commitment to accuracy, speed, and customer satisfaction.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-lg p-1.5 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Knowledge</h3>
                  <p className="text-gray-600">Our team stays updated with the latest government procedures and requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-lg p-1.5 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">End-to-End Service</h3>
                  <p className="text-gray-600">From document preparation to final submission, we handle everything for you.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-lg p-1.5 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Transparent Process</h3>
                  <p className="text-gray-600">Regular updates and clear communication throughout the entire process.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-lg p-1.5 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                  <p className="text-gray-600">Fair and transparent pricing with no hidden charges.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Start Your Application
            </button>
          </div>

          {/* Right Column - Stats */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Track Record</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3 group-hover:shadow-md transition-shadow duration-300">
                      <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{stat.number}</div>
                    </div>
                    <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-center space-x-4 mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certified & Trusted</h4>
                  <p className="text-sm text-gray-600">
                    Authorized service provider with government recognition and customer trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;