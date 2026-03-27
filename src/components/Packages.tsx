import React from 'react';
import { Clock, Star, ArrowRight, Users } from 'lucide-react';
import LazyImage from './LazyImage';
import AnimatedSection from './AnimatedSection';
import { optimizeImage } from '../utils/cloudinary';

interface Package {
  id: number;
  title: string;
  duration: string;
  image: string;
  highlights: string[];
  price: string;
  rating: number;
  location: string;
  description: string;
}

const packages: Package[] = [
 {
    id: 1,
    title: "Day Trip - Nairobi National Park",
    duration: "1 Day",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030184/Makio_21_ytes0p.jpg",
    highlights: ["Black Rhinos", "City Skyline Backdrop", "Big Cats"],
    price: "",
    rating: 4.6,
    location: "Nairobi",
    description: "Convenient safari in Nairobi National Park with lions, giraffes, rhinos & more."
  },
  {
    id: 2,
    title: "Day Trip - Amboseli National Park",
    duration: "1 Day",
    image: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751568270/Amboseli_Tsavo_Adventure_dlom5b.jpg",
    highlights: ["Mount Kilimanjaro", "Elephants", "Birdlife"],
    price: "",
    rating: 4.8,
    location: "Amboseli",
    description: "Day safari to Amboseli with spectacular views of Mount Kilimanjaro and large elephant herds."
  },
  {
    id: 3,
    title: "Day Trip - Lake Nakuru & Naivasha",
    duration: "1 Day",
    image: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751569195/Lake_Nakuru_Naivasha_trekvq.jpg",
    highlights: ["Flamingos", "Rhinos", "Boat Safari"],
    price: "",
    rating: 4.7,
    location: "Lake Nakuru & Naivasha",
    description: "Flamingos, white rhinos & a boat safari on Lake Naivasha with Crescent Island walk."
  },
  {
    id: 4,
    title: "Day Trip - Hell’s Gate & Lake Naivasha",
    duration: "1 Day",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317046/Mbweha_2_wcfmv8.jpg",
    highlights: ["Cycling Safari", "Gorges", "Boat Safari"],
    price: "",
    rating: 4.6,
    location: "Naivasha",
    description: "Adventure day trip to Hell’s Gate with cycling, gorges, and a boat safari at Lake Naivasha."    
  }
];

const Packages: React.FC = () => {
  const handleBookNow = (packageTitle: string) => {
    const message = `Hi! I'm interested in booking the ${packageTitle} package. Could you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254774156869?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Safari <span className="text-safari-green">Packages</span>
          </h2>
          <p className="text-xl font-opensans text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated safari experiences, each designed to showcase 
            Africa's incredible wildlife and landscapes.
          </p>
        </AnimatedSection>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.id} delay={index * 0.05}>
            <div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <LazyImage
                  src={optimizeImage(pkg.image, 800)}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  wrapperClassName="h-64"
                />
                <div className="absolute top-4 left-4 bg-safari-green text-white px-3 py-1 rounded-full text-sm font-opensans font-semibold">
                  {pkg.location}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-opensans font-semibold">{pkg.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-montserrat font-bold text-gray-900 group-hover:text-safari-green transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center text-safari-green">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm font-opensans font-medium">{pkg.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 font-opensans mb-4">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-opensans font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-sunset-gold/20 text-safari-green px-3 py-1 rounded-full text-sm font-opensans"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  {/* <div>
                    <span className="text-2xl font-montserrat font-bold text-safari-green">
                      {pkg.price}
                    </span>
                  </div> */}
                  <button 
                    onClick={() => handleBookNow(pkg.title)}
                    className="bg-safari-green hover:bg-green-700 text-white font-opensans font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center group"
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="bg-gradient-to-r from-safari-green to-green-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Need a Custom Safari Experience?
          </h3>
          <p className="text-lg font-opensans mb-6 max-w-2xl mx-auto">
            Let us create a personalized safari package tailored to your preferences, budget, and timeline.
          </p>
          <button 
            onClick={() => handleBookNow("Custom Safari Package")}
            className="bg-sunset-gold hover:bg-yellow-500 text-gray-900 font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
          >
            Plan My Safari
            <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;