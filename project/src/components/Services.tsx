import React from 'react';
import { CreditCard, User, Plane, FileText, Building, Car, Heart, GraduationCap, ArrowRight, CheckCircle, Award } from 'lucide-react';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<'english' | 'marathi'>('english');

  const handleGetStarted = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const servicesEnglish = [
    {
      icon: CreditCard,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'PAN Card',
      description: 'Apply for new PAN card, corrections, duplicate card issuance, and Aadhaar-PAN linking',
      features: ['New PAN Application', 'PAN Correction', 'Duplicate PAN', 'आधार पॅन लिंक (Aadhar-PAN Link)']
    },
    {
      icon: FileText,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Income Tax Return',
      description: 'New and revised income tax return filing services',
      features: ['ITR Filing', 'Tax Consultation', 'Document Preparation', 'Revised Returns']
    },
    {
      icon: FileText,
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Certificates',
      description: 'Various government certificates including birth, marriage, income, and caste certificates',
      features: ['Sub Birth Certificate', 'Marriage Certificate', 'Income Certificate', 'Caste Certificate']
    },
    {
      icon: Plane,
      image: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Passport Services',
      description: 'Fresh passport, renewal, tatkal services, and related document assistance',
      features: ['New Passport', 'Passport Renewal', 'Tatkal Service', 'Life, Health & Driving']
    },
    {
      icon: FileText,
      image: 'https://images.pexels.com/photos/6177638/pexels-photo-6177638.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Gazette Correction',
      description: 'Name and date of birth correction through gazette notification',
      features: ['Name Correction', 'DOB Correction', 'State Name Correction', 'Legal Documentation']
    },
    {
      icon: User,
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Voter ID',
      description: 'New voter ID registration and correction services',
      features: ['New Registration', 'Correction', 'Address Change', 'Duplicate Card']
    },
    {
      icon: Heart,
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Ayushman Card',
      description: 'Health insurance card applications and National Health ID services',
      features: ['Ayushman Card', 'National Health ID', 'Health Insurance', 'Medical Certificate']
    },
    {
      icon: Award,
      image: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Non-Creamy Layer',
      description: 'Non-creamy layer certificate for OBC category',
      features: ['Certificate Application', 'Document Verification', 'Renewal Services', 'Income Assessment']
    },
    {
      icon: Car,
      image: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Driving License',
      description: 'Learning license, permanent license, and renewal services',
      features: ['Learning License', 'Permanent License', 'License Renewal', 'Address Change']
    },
    {
      icon: Building,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'EPF/PF Services',
      description: 'Employee Provident Fund services including closure and withdrawal',
      features: ['EPF Closure', 'PF Services', 'Withdrawal Process', 'Account Transfer']
    },
    {
      icon: User,
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'E-Shram Card',
      description: 'Registration for unorganized workers under e-Shram portal',
      features: ['New Registration', 'Document Upload', 'Benefits Access', 'Status Tracking']
    },
    {
      icon: Building,
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Property Documents',
      description: 'Property registration, mutation, 7/12 extract, and document verification',
      features: ['Property Registration', 'Mutation', 'Digital 7/12', 'Title Verification']
    },
    {
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Educational Certificates',
      description: 'Mark sheet verification, degree attestation, and educational documents',
      features: ['Certificate Verification', 'Degree Attestation', 'Transcript', 'Educational Loan Docs']
    },
    {
      icon: CreditCard,
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Mobile/DTH Recharge',
      description: 'Mobile and DTH recharge services for all operators',
      features: ['All Network Recharge', 'DTH Recharge', 'Bill Payment', 'Special Offers']
    },
    {
      icon: User,
      image: 'https://images.pexels.com/photos/6177638/pexels-photo-6177638.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'Aadhaar Card Services',
      description: 'New registration, updates, corrections, mobile linking, and copy services',
      features: ['Address Update', 'Name Correction', 'DOB Update', 'Aadhar Copy']
    }
  ];

  const servicesMarathi = [
    {
      icon: CreditCard,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'पॅन कार्ड',
      description: 'नवीन पॅन कार्ड, दुरुस्ती, डुप्लिकेट कार्ड आणि आधार-पॅन लिंकिंग',
      features: ['नवीन पॅन अर्ज', 'पॅन दुरुस्ती', 'डुप्लिकेट पॅन', 'आधार पॅन लिंक']
    },
    {
      icon: FileText,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'इन्कम टॅक्स रिटर्न',
      description: 'नवीन आणि सुधारित इन्कम टॅक्स रिटर्न फाइलिंग सेवा',
      features: ['आयटीआर फाइलिंग', 'सुधारित रिटर्न', 'कर सल्ला', 'कागदपत्र तयारी']
    },
    {
      icon: FileText,
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'प्रमाणपत्रे',
      description: 'जन्म, विवाह, उत्पन्न आणि जात प्रमाणपत्रांसह विविध सरकारी प्रमाणपत्रे',
      features: ['उपजन्म शुध्दता', 'विवाह शुध्दता', 'इन्कम प्रमाणपत्र', 'जात प्रमाणपत्र']
    },
    {
      icon: Plane,
      image: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'पासपोर्ट सेवा',
      description: 'नवीन पासपोर्ट, नूतनीकरण, तत्काळ सेवा आणि संबंधित कागदपत्र सहाय्य',
      features: ['नवीन पासपोर्ट', 'पासपोर्ट नूतनीकरण', 'तत्काळ सेवा', 'लाईफ, हेल्थ व ड्रायव्हिंग']
    },
    {
      icon: FileText,
      image: 'https://images.pexels.com/photos/6177638/pexels-photo-6177638.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'राजपत्र सुधारणा',
      description: 'राजपत्र अधिसूचनेद्वारे नाव आणि जन्मतारखेची दुरुस्ती',
      features: ['नाव दुरुस्ती', 'जन्मतारखेची दुरुस्ती', 'राज्य नावे दुरुस्ती', 'कायदेशीर कागदपत्रे']
    },
    {
      icon: User,
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'मतदार ओळखपत्र',
      description: 'नवीन मतदार ओळखपत्र नोंदणी आणि दुरुस्ती सेवा',
      features: ['नवीन मतदार नोंदणी', 'दुरुस्तीकरण', 'पत्ता बदल', 'डुप्लिकेट कार्ड']
    },
    {
      icon: Heart,
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'आयुष्मान कार्ड',
      description: 'आरोग्य विमा कार्ड अर्ज आणि राष्ट्रीय आरोग्य आयडी सेवा',
      features: ['आयुष्मान कार्ड', 'नॅशनल हेल्थ आयडी', 'आरोग्य विमा', 'वैद्यकीय प्रमाणपत्र']
    },
    {
      icon: Award,
      image: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'नॉन क्रीमी लेयर',
      description: 'ओबीसी श्रेणीसाठी नॉन-क्रीमी लेयर प्रमाणपत्र',
      features: ['प्रमाणपत्र अर्ज', 'कागदपत्र पडताळणी', 'नूतनीकरण सेवा', 'उत्पन्न मूल्यांकन']
    },
    {
      icon: Car,
      image: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'ड्रायव्हिंग लायसन्स',
      description: 'शिकाऊ परवाना, कायमचा परवाना आणि नूतनीकरण सेवा',
      features: ['शिकाऊ परवाना', 'कायमचा परवाना', 'परवाना नूतनीकरण', 'पत्ता बदल']
    },
    {
      icon: Building,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'ई पी एफ / पी एफ सेवा',
      description: 'कर्मचारी भविष्य निर्वाह निधी सेवा आणि बंद करण्याचे काम',
      features: ['ईपीएफ बंद', 'भविष्य निर्वाह निधी', 'पैसे काढण्याची प्रक्रिया', 'खाते हस्तांतरण']
    },
    {
      icon: User,
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'ई-श्रम कार्ड',
      description: 'ई-श्रम पोर्टलअंतर्गत असंघटित कामगारांची नोंदणी',
      features: ['नवीन नोंदणी', 'कागदपत्र अपलोड', 'फायद्यांचा प्रवेश', 'स्थिती ट्रॅकिंग']
    },
    {
      icon: Building,
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'मालमत्ता कागदपत्रे',
      description: 'मालमत्ता नोंदणी, उत्परिवर्तन, 7/12 अर्क आणि कागदपत्र पडताळणी',
      features: ['मालमत्ता नोंदणी', 'उत्परिवर्तन', 'डिजिटल 7/12', 'शीर्षक पडताळणी']
    },
    {
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'शैक्षणिक प्रमाणपत्रे',
      description: 'गुणपत्रक पडताळणी, पदवी प्रमाणीकरण आणि शैक्षणिक कागदपत्रे',
      features: ['प्रमाणपत्र पडताळणी', 'पदवी प्रमाणीकरण', 'प्रतिलेख', 'शैक्षणिक कर्ज कागदपत्रे']
    },
    {
      icon: CreditCard,
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'मोबाईल/DTH रिचार्ज',
      description: 'सर्व ऑपरेटरसाठी मोबाईल आणि DTH रिचार्ज सेवा',
      features: ['सर्व नेटवर्क रिचार्ज', 'DTH रिचार्ज', 'बिल पेमेंट', 'विशेष ऑफर']
    },
    {
      icon: User,
      image: 'https://images.pexels.com/photos/6177638/pexels-photo-6177638.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      title: 'आधार कार्ड सेवा',
      description: 'नवीन नोंदणी, अपडेट, दुरुस्ती, मोबाईल लिंकिंग आणि कॉपी सेवा',
      features: ['पत्ता अपडेट', 'नाव दुरुस्ती', 'जन्मतारीख अपडेट', 'आधारचे प्रताधिकार']
    }
  ];

  const services = language === 'english' ? servicesEnglish : servicesMarathi;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Complete Service Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle all types of government documentation with expertise and efficiency. 
            Choose from our comprehensive range of services.
          </p>
          
          {/* Language Toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setLanguage('english')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'english'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('marathi')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'marathi'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                मराठी
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Service Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg w-10 h-10 flex items-center justify-center">
                  <service.icon className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handleGetStarted(service)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{language === 'english' ? 'Get Started' : 'सुरुवात करा'}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Don't see what you're looking for?</h3>
            <p className="text-gray-600 mb-6">We handle all types of government documentation. Contact us for custom services.</p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Contact Us for Custom Services
            </button>
          </div>
        </div>

        <ServiceModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          service={selectedService}
        />
      </div>
    </section>
  );
};

export default Services;