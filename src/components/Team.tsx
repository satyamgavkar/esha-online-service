import React from 'react';
import { Mail, Phone, MapPin, Award, Users, Shield, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sanket Shinde',
      role: 'Founder & CEO',
      type: 'owner',
      image: '/sanket_shinde.jpg',
      description: 'With over 7 years of experience in government documentation services, Esha founded the company to simplify bureaucratic processes for common citizens.',
      expertise: ['Government Documentation', 'Business Strategy', 'Client Relations'],
      email: 'eshaonlineservice@gmail.com',
      phone: '+91 79775 91178',
      achievements: ['7+ Years Experience', '5000+ Happy Clients', 'Government Certified']
    },
    {
      name: 'Rajesh Kumar',
      role: 'Senior Document Specialist',
      type: 'team',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Expert in PAN card services, passport applications, and income tax returns with 5+ years of specialized experience.',
      expertise: ['PAN Card Services', 'Passport Applications', 'Tax Documentation'],
      achievements: ['1000+ PAN Cards Processed', 'Passport Expert', 'Tax Consultant']
    },
    {
      name: 'Priya Patel',
      role: 'Certificate Specialist',
      type: 'team',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Specializes in various government certificates including birth, marriage, income, and caste certificates.',
      expertise: ['Birth Certificates', 'Marriage Certificates', 'Income Certificates'],
      achievements: ['Certificate Expert', '3+ Years Experience', 'Fast Processing']
    },
    {
      name: 'Amit Singh',
      role: 'Property & Legal Documents',
      type: 'team',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Handles property documentation, legal paperwork, and complex government procedures with precision.',
      expertise: ['Property Registration', 'Legal Documentation', 'Gazette Corrections'],
      achievements: ['Legal Expert', '4+ Years Experience', 'Property Specialist']
    }
  ];

  return (
    <section id="team" className="py-10 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-600 to-green-600 rounded-full p-3">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of government documentation specialists is here to serve you with
            professionalism, expertise, and commitment to excellence.
          </p>
        </div>

        {/* Owner/Founder Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Leadership</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto rounded-full"></div>
          </div>

          {teamMembers.filter(member => member.type === 'owner').map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-4 border-orange-200 hover:border-orange-300 transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-orange-300 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-600 to-green-600 rounded-full p-2">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-2xl font-bold text-gray-900">{member.name}</h4>
                    <p className="text-orange-600 font-semibold text-lg">{member.role}</p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{member.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Shield className="h-5 w-5 text-orange-600 mr-2" />
                        Expertise
                      </h5>
                      <ul className="space-y-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="h-5 w-5 text-green-600 mr-2" />
                        Achievements
                      </h5>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {member.email && member.phone && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="text-sm font-medium">Email</span>
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span className="text-sm font-medium">Call</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members Section */}
        {
          // <div>
          //   <div className="text-center mb-8">
          //     <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Specialists</h3>
          //     <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto rounded-full"></div>
          //   </div>

          //   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          //     {teamMembers.filter(member => member.type === 'team').map((member, index) => (
          //       <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          //         <div className="text-center mb-4">
          //           <img
          //             src={member.image}
          //             alt={member.name}
          //             className="w-24 h-24 rounded-full object-cover mx-auto border-3 border-orange-200 shadow-md"
          //           />
          //           <h4 className="text-xl font-bold text-gray-900 mt-3">{member.name}</h4>
          //           <p className="text-orange-600 font-semibold">{member.role}</p>
          //         </div>

          //         <p className="text-gray-600 text-sm mb-4 text-center">{member.description}</p>

          //         <div className="mb-4">
          //           <h5 className="font-semibold text-gray-900 mb-2 text-sm flex items-center justify-center">
          //             <Shield className="h-4 w-4 text-orange-600 mr-1" />
          //             Specializations
          //           </h5>
          //           <div className="flex flex-wrap gap-1 justify-center">
          //             {member.expertise.map((skill, skillIndex) => (
          //               <span key={skillIndex} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
          //                 {skill}
          //               </span>
          //             ))}
          //           </div>
          //         </div>

          //         <div className="border-t border-gray-100 pt-4">
          //           <div className="flex flex-wrap gap-1 justify-center">
          //             {member.achievements.map((achievement, achIndex) => (
          //               <span key={achIndex} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
          //                 {achievement}
          //               </span>
          //             ))}
          //           </div>
          //         </div>
          //       </div>
          //     ))}
          //   </div>
          // </div>
        }

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Work with Our Expert Team?</h3>
            <p className="text-orange-100 mb-6">
              Get personalized assistance from our experienced government documentation specialists.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg"
            >
              Contact Our Team Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;