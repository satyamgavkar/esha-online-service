import React from 'react';
import { Shield, Clock, Award, ArrowRight, Flag, Building2 } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-6 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-white/30 to-green-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200/30 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Government Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full px-6 py-3 shadow-lg border-2 border-orange-200 flex items-center space-x-3">
            <Flag className="h-6 w-6 text-orange-600" />
            <span className="text-orange-800 font-semibold">Authorized Government Document Service Provider</span>
            <Building2 className="h-6 w-6 text-green-600" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-orange-600">सरकारी</span> Document Services
              <span className="text-green-600 block">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Expert assistance with all your government document needs. From pan card updates to passport applications,
              we handle the paperwork so you don't have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToServices}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 border-2 border-orange-700"
              >
                <span>View Our Services</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="https://wa.me/917977591178"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Fast Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">7+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-orange-200 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-600 rounded-lg w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">100% Secure Process</h3>
                  <p className="text-gray-600 text-sm">Your documents and personal information are completely safe with us</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-green-200 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 rounded-lg w-12 h-12 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Fast Processing</h3>
                  <p className="text-gray-600 text-sm">Quick turnaround times with regular status updates</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-orange-200 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-600 rounded-lg w-12 h-12 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Expert Support</h3>
                  <p className="text-gray-600 text-sm">Professional guidance through every step of the process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;