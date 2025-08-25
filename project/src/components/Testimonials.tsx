import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Satyam Gavkar',
      location: 'New Mumbai, Maharashtra',
      image: '/satyamgavkar.jpg',
      rating: 5,
      text: 'Excellent service! They helped me get my passport renewed in just 15 days. The team was very professional and kept me updated throughout the process.',
      service: 'Passport Renewal'
    },
    {
      name: 'Pratik Hare',
      location: 'New Mumbai, Maharashtra',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Professional and reliable service. They handled my PAN card correction efficiently and at a very reasonable price.',
      service: 'PAN Card Services'
    },
    {
      name: 'Kiara Tayade',
      location: 'New Mumbai, Maharashtra',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Very satisfied with their income certificate service. Quick processing and regular updates made the experience stress-free.',
      service: 'Income Certificate'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">({testimonial.rating}.0)</span>
              </div>

              <div className="relative mb-4">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-1" />
                <p className="text-gray-700 pl-6 italic">"{testimonial.text}"</p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Join 5000+ Satisfied Customers</h3>
            <p className="text-blue-100 mb-6">
              Experience hassle-free government document services with our expert team.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Your Application Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;