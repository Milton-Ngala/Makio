import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { WhatsAppOutlined } from '@ant-design/icons';

const Hero: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/254774156869', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/drnm7slkt/image/upload/v1756030223/Makio_47_hbidtd.jpg')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Makio Tours and Travel
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-light mb-8 text-sunset-gold">
            Experience Africa!
          </h2>
          <p className="text-lg sm:text-xl font-opensans mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the untamed beauty of Africa's wildlife, breathtaking landscapes, and rich culture 
            with our expertly crafted safari experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/packages"
              className="bg-sunset-gold hover:bg-yellow-500 text-gray-900 font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center group"
            >
              Explore Packages
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center group"
            >
              <WhatsAppOutlined 
              className="mr-2 h-5 w-5" 
              style={{fontSize: "24px"}}
              />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;