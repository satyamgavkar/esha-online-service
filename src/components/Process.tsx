
import { FileText, Upload, CheckCircle, Download, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Choose Service',
      description: 'Select the government document service you need from our comprehensive list.',
      image: 'https://wpblogassets.paytm.com/paytmblog/uploads/2024/01/Blog_Paytm_Passport-Renewal.jpeg'
    },
    {
      icon: Upload,
      title: 'Submit Documents',
      description: 'Send documents on WhatsApp with your requirements, and fill out the form with our guidance.',
      image: 'https://www.shutterstock.com/image-photo/young-women-apply-jobs-submit-600nw-1897495972.jpg'
    },
    {
      icon: CheckCircle,
      title: 'We Process',
      description: 'Our experts review, verify, and submit your application to the relevant authorities.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      icon: Download,
      title: 'Receive Documents',
      description: 'Get your processed documents delivered to your doorstep or collect from our office.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmsWLhFs49ENg2bJCFd96gy5yESWUPEHxoQ&s'
    }
  ];

  return (
    <section id="process" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined 4-step process makes getting your government documents simple and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-600 to-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 border-2 border-white shadow-lg">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg w-10 h-10 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-orange-600" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-6 w-6 text-orange-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-xl p-8 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust us with their document needs.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border-2 border-orange-700"
            >
              Start Your Application Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;