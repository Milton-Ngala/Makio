import React from 'react';
import { UserCheck, MapPin, Car, Headphones } from 'lucide-react';

interface TrustElement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const trustElements: TrustElement[] = [
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: "Expert Guides",
    description: "Certified local guides with deep knowledge of wildlife behavior and Africa's rich cultural heritage."
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Custom Itineraries",
    description: "Personalized safari experiences tailored to your interests, timeline, and budget preferences."
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: "Premium Fleet",
    description: "Well-maintained 4WD safari vehicles with pop-up roofs and charging ports for optimal comfort."
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support before, during, and after your safari adventure."
  }
];

const TrustElements: React.FC = () => {
  return (
    <section className="py-20 bg-safari-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Why Choose <span className="text-sunset-gold">Makio Tours</span>
          </h2>
          <p className="text-xl font-opensans text-gray-200 max-w-3xl mx-auto">
            With over 5 years of experience, we deliver exceptional safari experiences 
            that exceed expectations and create lasting memories.
          </p>
        </div>

        {/* Trust Elements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustElements.map((element, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-sunset-gold p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <div className="text-white">
                  {element.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-sunset-gold transition-colors duration-300">
                {element.title}
              </h3>
              <p className="text-gray-200 font-opensans leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-sunset-gold mb-2">5+</div>
            <div className="text-white font-opensans">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-sunset-gold mb-2">2000+</div>
            <div className="text-white font-opensans">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-sunset-gold mb-2">20+</div>
            <div className="text-white font-opensans">Safari Packages</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-sunset-gold mb-2">98%</div>
            <div className="text-white font-opensans">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;