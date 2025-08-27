import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/drnm7slkt/image/upload/v1756030199/Makio_45_wyjq1v.jpg"
                alt="Safari guide with wildlife"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-safari-green text-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold">5+</div>
                <div className="text-sm font-opensans">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              About <span className="text-safari-green">Makio Tours</span>
            </h2>
            
            <div className="bg-sunset-gold/20 border-l-4 border-sunset-gold p-6 rounded-r-lg mb-8">
              <p className="text-lg font-opensans font-semibold text-gray-800 italic">
                "Our mission is to create unforgettable safari experiences that connect you with Africa's incredible wildlife while supporting local communities and conservation efforts."
              </p>
            </div>

            <p className="text-gray-700 font-opensans leading-relaxed text-lg mb-8">
              For over 5 years, Makio Tours & Travel has been Africa's premier safari company, specializing in 
              luxury wildlife experiences and cultural immersion. We pride ourselves on intimate knowledge of 
              Africa's national parks, expert local guides, and personalized service that transforms your journey 
              into a lifetime of cherished memories. Our commitment to sustainable tourism ensures that every 
              adventure contributes to wildlife conservation and community development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="bg-safari-green p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-montserrat font-bold text-safari-green">1000+</div>
                  <div className="text-sm font-opensans text-gray-600">Happy Travelers</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-sunset-gold p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-montserrat font-bold text-safari-green">10+</div>
                  <div className="text-sm font-opensans text-gray-600">Safari Packages</div>
                </div>
              </div>
            </div>

            <button className="bg-safari-green hover:bg-green-700 text-white font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center group">
              Learn More About Us
              <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;