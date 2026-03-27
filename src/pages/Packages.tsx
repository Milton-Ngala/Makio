import React, { useState } from 'react';
import { Clock, Star, MapPin, ArrowRight, Users, Check, X } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface Package {
  id: number;
  title: string;
  duration: string;
  image: string;
  highlights: string[];
  price: string;
  originalPrice?: string;
  rating: number;
  location: string;
  description: string;
  included: string[];
  excluded: string[];
  itinerary: { day: number; title: string; description: string }[];
  featured?: boolean;
}

const packages: Package[] = [
  {
    id: 1,
    title: "2 Days Maasai Mara Safari",
    duration: "2 Days / 1 Night",
    image: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751568675/Maasai_Mara_mf5bxp.jpg",
    highlights: ["Big Five Wildlife", "Rift Valley Escarpment", "Maasai Culture"],
    price: "",
    rating: 4.7,
    location: "Maasai Mara",
    description: "A short yet thrilling safari to Maasai Mara, ideal for travelers with limited time but eager to experience the Big Five and Maasai culture.",
    included: [
      "Pick-up and drop-off from Nairobi",
      "All park entry fees",
      "Transport by 4x4 Landcruiser",
      "1 night accommodation",
      "All meals as per itinerary",
      "Game drives",
      "Professional English-speaking guide",
      "Bottled water"
    ],
    excluded: [
      "Drinks (alcohol & soft drinks)",
      "Tips ($10 per person per day)",
      "Lunch on last day & breakfast on first day",
      "Personal items",
      "Visit to Maasai village ($20)",
      "Hot air balloon safari",
      "Anything not mentioned"
    ],
    itinerary: [
      { day: 1, title: "Nairobi to Maasai Mara", description: "Depart 8am via Rift Valley. Lunch at camp. Afternoon game drive or optional cultural activities." },
      { day: 2, title: "Full Day Game Drive & Return", description: "Morning and afternoon safari in Maasai Mara. Picnic lunch. Return to Nairobi." }
    ]
  },
  {
    id: 2,
    title: "3 Days Budget Maasai Mara Safari",
    duration: "3 Days / 2 Nights",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317356/Culture_11_o4dfzn.jpg",
    highlights: ["Big Five Wildlife", "Optional Maasai Activities", "Rift Valley Viewpoint"],
    price: "",
    rating: 4.9,
    location: "Maasai Mara",
    description: "An authentic budget safari combining Maasai culture and wildlife. Optional activities like archery, elephant trekking, and Maasai bead classes.",
    included: [
      "Pick-up and drop-off from hotel/airport",
      "All park entry fees",
      "Transport by Landcruiser",
      "2 nights accommodation",
      "All meals as per itinerary",
      "Game drives",
      "Professional English-speaking guide",
      "Bottled water"
    ],
    excluded: [
      "Drinks (alcohol & soft drinks)",
      "Tips ($10 per person per day)",
      "Lunch on last day & breakfast on first day",
      "Visit to Maasai village ($20)",
      "Optional Maasai activities",
      "Hot air balloon safari ($500)",
      "Anything not mentioned"
    ],
    itinerary: [
      { day: 1, title: "Nairobi to Maasai Mara", description: "Pick-up at 8am. Drive via Rift Valley viewpoint. Lunch at camp. Optional Maasai cultural activities. Dinner & overnight." },
      { day: 2, title: "Full Day Safari", description: "Full day safari in Maasai Mara with picnic lunch inside the park." },
      { day: 3, title: "Return to Nairobi", description: "Breakfast, optional Maasai village visit ($20), drive back to Nairobi." }
    ],
    featured: true
  },
  {
    id: 3,
    title: "3 Days Maasai Mara Midrange Safari",
    duration: "3 Days / 2 Nights",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030192/Makio_36_fzz571.jpg",
    highlights: ["Big Five", "Rift Valley Views", "Midrange Comfort"],
    price: "",
    rating: 4.8,
    location: "Maasai Mara",
    description: "A midrange safari package with comfortable accommodation, incredible wildlife encounters, and cultural immersion.",
    included: [
      "Pick-up and drop-off from hotel/airport",
      "All park entry fees",
      "Transport by Van/Landcruiser",
      "2 nights accommodation",
      "All meals as per itinerary",
      "Game drives",
      "Professional English-speaking guide",
      "Bottled water"
    ],
    excluded: [
      "Drinks (alcohol & soft drinks)",
      "Tips ($10 per person per day)",
      "Lunch on last day & breakfast on first day",
      "Personal items",
      "Visit to Maasai village ($20)",
      "Hot air balloon safari",
      "Anything not mentioned"
    ],
    itinerary: [
      { day: 1, title: "Nairobi to Maasai Mara", description: "Pick-up at 8am. Rift Valley stop. Lunch at camp. Afternoon game drive." },
      { day: 2, title: "Full Day Safari", description: "Full day in Maasai Mara Reserve with picnic lunch. Dinner at camp." },
      { day: 3, title: "Return to Nairobi", description: "Morning game drive. Breakfast. Optional Maasai Village visit ($20). Drive back to Nairobi." }
    ]
  },
  {
    id: 4,
    title: "4 Days Maasai Mara & Lake Nakuru Safari",
    duration: "4 Days / 3 Nights",
    image: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751569195/Lake_Nakuru_Naivasha_trekvq.jpg",
    highlights: ["Big Five", "Lake Nakuru Rhinos", "Flamingos"],
    price: "",
    rating: 4.9,
    location: "Maasai Mara & Lake Nakuru",
    description: "A perfect combination of Maasai Mara’s wildlife and Lake Nakuru’s flamingos and rhinos.",
    included: [
      "Pick-up and drop-off",
      "All park entry fees",
      "Transport by Van/Landcruiser",
      "3 nights accommodation",
      "All meals as per itinerary",
      "Game drives",
      "Professional guide",
      "Bottled water"
    ],
    excluded: [
      "Drinks (alcohol & soft drinks)",
      "Tips ($10 per person per day)",
      "Personal items",
      "Visit to Maasai village ($20)",
      "Hot air balloon safari",
      "Anything not mentioned"
    ],
    itinerary: [
      { day: 1, title: "Nairobi to Maasai Mara", description: "Pick-up, drive to Maasai Mara, Rift Valley stop. Afternoon game drive." },
      { day: 2, title: "Full Day Maasai Mara", description: "Morning and afternoon game drives with picnic lunch." },
      { day: 3, title: "Maasai Mara to Lake Nakuru", description: "Early game drive. Breakfast. Drive to Nakuru. Afternoon game drive." },
      { day: 4, title: "Lake Nakuru to Nairobi", description: "Morning game drive in Lake Nakuru. Return to Nairobi." }
    ]
  },
  {
    id: 5,
    title: "5 Days Amboseli & Maasai Mara Safari",
    duration: "5 Days / 4 Nights",
    image: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751568270/Amboseli_Tsavo_Adventure_dlom5b.jpg",
    highlights: ["Mount Kilimanjaro Views", "Big Five", "Elephants"],
    price: "",
    rating: 4.9,
    location: "Amboseli & Maasai Mara",
    description: "A breathtaking safari combining Amboseli’s elephants with Kilimanjaro backdrop and Maasai Mara’s wildlife.",
    included: [
      "All park entry fees",
      "Transport Nairobi - Amboseli - Maasai Mara - return",
      "4 nights accommodation",
      "All meals (except first breakfast & last lunch)",
      "Game drives",
      "Bottled water",
      "Professional guide"
    ],
    excluded: [
      "Visit to Maasai village ($20)",
      "Drinks",
      "Tips ($10 per person per day)",
      "Hot air balloon safari ($500)",
      "Anything not mentioned"
    ],
    itinerary: [
      { day: 1, title: "Nairobi to Amboseli", description: "Drive to Amboseli. Afternoon game drive with Kilimanjaro backdrop." },
      { day: 2, title: "Morning Game Drive & Return to Nairobi", description: "Morning safari in Amboseli. Return to Nairobi." },
      { day: 3, title: "Nairobi to Maasai Mara", description: "Drive to Maasai Mara. Afternoon game drive." },
      { day: 4, title: "Full Day Maasai Mara", description: "Explore Maasai Mara with picnic lunch." },
      { day: 5, title: "Return to Nairobi", description: "Morning game drive. Breakfast. Return to Nairobi." }
    ]
  },
  {
    id: 6,
    title: "6 Days Maasai Mara, Amboseli & Tsavo Safari",
    duration: "6 Days / 5 Nights",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030346/Makio_117_a80fs2.jpg",
    highlights: ["Big Five", "Red Elephants", "Volcanic Landscapes"],
    price: "",
    rating: 4.9,
    location: "Maasai Mara, Amboseli & Tsavo",
    description: "The ultimate safari covering three of Kenya’s top parks with diverse landscapes and wildlife.",
    included: [
      "Pick-up & drop-off",
      "All entry fees",
      "Transport by Van/Landcruiser",
      "Accommodation",
      "All meals as per itinerary",
      "Game drives",
      "Professional guide",
      "Bottled water"
    ],
    excluded: [
      "Drinks",
      "Tips ($10 per person per day)",
      "Maasai village visit ($20)",
      "Hot air balloon safari",
      "Breakfast on day 1 & lunch on last day",
      "Anything not mentioned"
    ],
    itinerary: [
      { day: 1, title: "Nairobi to Maasai Mara", description: "Drive to Maasai Mara via Rift Valley. Afternoon game drive." },
      { day: 2, title: "Full Day Safari", description: "Explore Maasai Mara Reserve with picnic lunch." },
      { day: 3, title: "Maasai Mara to Nairobi", description: "Morning game drive. Drive to Nairobi." },
      { day: 4, title: "Nairobi to Amboseli", description: "Drive to Amboseli. Afternoon game drive." },
      { day: 5, title: "Amboseli to Tsavo", description: "Drive via safari route. Afternoon game drive in Tsavo." },
      { day: 6, title: "Tsavo to Nairobi", description: "Breakfast. Morning game drive. Return to Nairobi." }
    ]
  },
  {
    id: 7,
    title: "6 Days Samburu, Naivasha & Maasai Mara Safari",
    duration: "6 Days / 5 Nights",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317166/Sopa_1_qtckbu.jpg",
    highlights: ["Samburu Six", "Lake Naivasha", "Big Five"],
    price: "",
    rating: 4.8,
    location: "Samburu, Naivasha & Maasai Mara",
    description: "A diverse safari across Samburu’s unique species, Lake Naivasha’s scenic beauty, and Maasai Mara’s wildlife.",
    included: [
      "Pick-up & drop-off",
      "All park fees",
      "Transport by Van/Landcruiser",
      "Accommodation",
      "All meals as per itinerary",
      "Game drives",
      "Professional guide",
      "Bottled water"
    ],
    excluded: [
      "Drinks",
      "Tips",
      "Maasai village visit ($20)",
      "Hot air balloon safari",
      "Breakfast on first day & lunch on last day",
      "Optional activities at Naivasha",
      "Anything not mentioned"
    ],
    itinerary: [
      { day: 1, title: "Nairobi to Samburu", description: "Drive to Samburu. Afternoon game drive." },
      { day: 2, title: "Full Day Samburu", description: "Explore Samburu National Reserve. Lunch & afternoon safari." },
      { day: 3, title: "Samburu to Naivasha", description: "Drive to Lake Naivasha. Optional boat ride or Crescent Island walk." },
      { day: 4, title: "Naivasha to Maasai Mara", description: "Drive to Maasai Mara. Afternoon game drive." },
      { day: 5, title: "Full Day Safari", description: "Game drives across Maasai Mara with picnic lunch." },
      { day: 6, title: "Return to Nairobi", description: "Morning game drive. Drive back to Nairobi." }
    ]
  },
  {
    id: 8,
    title: "8 Days Maasai Mara, Amboseli, Tsavo & Diani Beach",
    duration: "8 Days / 7 Nights",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030475/Makio_147_uvrm5s.jpg",
    highlights: ["Big Five", "Mount Kilimanjaro", "Diani Beach Relaxation"],
    price: "",
    rating: 5.0,
    location: "Multi-Destination",
    description: "An extended safari from Maasai Mara to Amboseli & Tsavo, ending with beach relaxation at Diani.",
    included: [
      "Pick-up & drop-off",
      "All park fees",
      "Transport by Van/Landcruiser",
      "Accommodation",
      "All meals as per itinerary",
      "Game drives",
      "Professional guide",
      "Bottled water"
    ],
    excluded: [
      "Drinks",
      "Tips",
      "Maasai village visit ($20)",
      "Hot air balloon safari ($500)",
      "Breakfast on first day & lunch on last day",
      "Optional water sports at Diani",
      "Anything not mentioned"
    ],
    itinerary: [
      { day: 1, title: "Nairobi to Maasai Mara", description: "Drive via Rift Valley. Afternoon game drive." },
      { day: 2, title: "Full Day Safari", description: "Game drives in Maasai Mara. Picnic lunch." },
      { day: 3, title: "Return to Nairobi", description: "Morning game drive. Return to Nairobi." },
      { day: 4, title: "Drive to Amboseli", description: "Trip to Amboseli. Afternoon game drive." },
      { day: 5, title: "Amboseli to Tsavo", description: "Game drive enroute. Afternoon safari in Tsavo." },
      { day: 6, title: "Tsavo to Diani", description: "Transfer to Diani. Relax at beach resort." },
      { day: 7, title: "Diani Beach", description: "Optional water sports, snorkeling, Wasini Island tour." },
      { day: 8, title: "Diani to Nairobi", description: "Train transfer to Nairobi. Drop-off at hotel/airport." }
    ]
  },
  // --- DAY TRIPS ---
  {
    id: 9,
    title: "Day Trip - Nairobi National Park",
    duration: "1 Day",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030184/Makio_21_ytes0p.jpg",
    highlights: ["Black Rhinos", "City Skyline Backdrop", "Big Cats"],
    price: "",
    rating: 4.6,
    location: "Nairobi",
    description: "Convenient safari in Nairobi National Park with lions, giraffes, rhinos & more.",
    included: [
      "6-hour game drive",
      "Pick-up & drop-off Nairobi",
      "Tour van/Landcruiser",
      "Park fees",
      "Professional guide"
    ],
    excluded: [
      "Lunch & drinks",
      "Tips ($10 per person)"
    ],
    itinerary: [
      { day: 1, title: "Nairobi National Park", description: "Morning pick-up. 6-hour game drive. Drop-off in Nairobi." }
    ]
  },
  {
    id: 10,
    title: "Day Trip - Amboseli National Park",
    duration: "1 Day",
    image: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751568270/Amboseli_Tsavo_Adventure_dlom5b.jpg",
    highlights: ["Mount Kilimanjaro", "Elephants", "Birdlife"],
    price: "",
    rating: 4.8,
    location: "Amboseli",
    description: "Day safari to Amboseli with spectacular views of Mount Kilimanjaro and large elephant herds.",
    included: [
      "Transport",
      "Park fees",
      "Professional guide",
      "Game drive"
    ],
    excluded: [
      "Lunch & drinks",
      "Tips"
    ],
    itinerary: [
      { day: 1, title: "Amboseli Safari", description: "Early morning departure from Nairobi. Full day game drive. Return in evening." }
    ]
  },
  {
    id: 11,
    title: "Day Trip - Lake Nakuru & Naivasha",
    duration: "1 Day",
    image: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751569195/Lake_Nakuru_Naivasha_trekvq.jpg",
    highlights: ["Flamingos", "Rhinos", "Boat Safari"],
    price: "",
    rating: 4.7,
    location: "Lake Nakuru & Naivasha",
    description: "Flamingos, white rhinos & a boat safari on Lake Naivasha with Crescent Island walk.",
    included: [
      "Transport",
      "Park fees",
      "Professional guide",
      "Game drives"
    ],
    excluded: [
      "Boat ride fees",
      "Lunch & drinks",
      "Tips"
    ],
    itinerary: [
      { day: 1, title: "Lake Nakuru & Naivasha", description: "Morning drive to Nakuru. Game drive. Afternoon boat ride at Naivasha. Return to Nairobi." }
    ]
  },
  {
    id: 12,
    title: "Day Trip - Hell’s Gate & Lake Naivasha",
    duration: "1 Day",
    image: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317046/Mbweha_2_wcfmv8.jpg",
    highlights: ["Cycling Safari", "Gorges", "Boat Safari"],
    price: "",
    rating: 4.6,
    location: "Naivasha",
    description: "Adventure day trip to Hell’s Gate with cycling, gorges, and a boat safari at Lake Naivasha.",
    included: [
      "Transport",
      "Park fees",
      "Professional guide"
    ],
    excluded: [
      "Bike rental ($10)",
      "Boat ride fees",
      "Lunch & drinks",
      "Tips"
    ],
    itinerary: [
      { day: 1, title: "Hell’s Gate Adventure", description: "Morning departure to Hell’s Gate. Cycling safari & gorge walk. Afternoon boat ride at Lake Naivasha. Return to Nairobi." }
    ]
  }
];

const locations = ['All', ...Array.from(new Set(packages.map(p => p.location)))];

const Packages: React.FC = () => {
  useSEO({
    title: 'Safari Packages',
    description: 'Explore Makio Tours safari packages — from day trips to multi-day adventures across Maasai Mara, Amboseli, Tsavo, and more.',
  });
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [activeLocation, setActiveLocation] = useState('All');

  const filtered = activeLocation === 'All'
    ? packages
    : packages.filter(p => p.location === activeLocation);

  const handleBookNow = (packageTitle: string) => {
    const message = `Hi! I'm interested in booking the ${packageTitle} package. Could you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254774156869?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-safari-green to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
              Safari <span className="text-sunset-gold">Packages</span>
            </h1>
            <p className="text-xl font-opensans max-w-3xl mx-auto">
              Choose from our carefully curated safari experiences, each designed to showcase 
              Africa's incredible wildlife and landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Location Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {locations.map(loc => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`px-5 py-2 rounded-full font-opensans font-semibold transition-all duration-300 ${
                  activeLocation === loc
                    ? 'bg-safari-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {filtered.map((pkg) => (
              <div 
                key={pkg.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group relative ${
                  pkg.featured ? 'ring-2 ring-sunset-gold' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-sunset-gold text-white px-3 py-1 rounded-full text-sm font-opensans font-semibold z-10">
                    Most Popular
                  </div>
                )}
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
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

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm font-opensans">{pkg.location}</span>
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
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-montserrat font-bold text-safari-green">
                          {pkg.price}
                        </span>
                        {pkg.originalPrice && (
                          <span className="text-lg font-montserrat text-gray-400 line-through">
                            {pkg.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-opensans text-gray-600">per person</span>
                    </div> */}
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedPackage(pkg)}
                        className="bg-gray-100 hover:bg-gray-200 text-safari-green font-opensans font-semibold px-4 py-2 rounded-full transition-all duration-300"
                      >
                        Details
                      </button>
                      <button 
                        onClick={() => handleBookNow(pkg.title)}
                        className="bg-safari-green hover:bg-green-700 text-white font-opensans font-semibold px-6 py-2 rounded-full transition-all duration-300 flex items-center group"
                      >
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto">
            <div className="relative">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                {selectedPackage.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-safari-green mb-4">Included</h3>
                  <ul className="space-y-2">
                    {selectedPackage.included.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-600 mr-2" />
                        <span className="font-opensans text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-montserrat font-bold text-safari-green mb-4 mt-8">Not Included</h3>
                  <ul className="space-y-2">
                    {selectedPackage.excluded.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <X className="h-4 w-4 text-red-600 mr-2" />
                        <span className="font-opensans text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-safari-green mb-4">Itinerary</h3>
                  <div className="space-y-4">
                    {selectedPackage.itinerary.map((day, index) => (
                      <div key={index} className="border-l-2 border-sunset-gold pl-4">
                        <h4 className="font-opensans font-semibold text-gray-900">
                          Day {day.day}: {day.title}
                        </h4>
                        <p className="font-opensans text-gray-600 text-sm">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                {/* <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-montserrat font-bold text-safari-green">
                      {selectedPackage.price}
                    </span>
                    {selectedPackage.originalPrice && (
                      <span className="text-xl font-montserrat text-gray-400 line-through">
                        {selectedPackage.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-opensans text-gray-600">per person</span>
                </div> */}
                <button 
                  onClick={() => handleBookNow(selectedPackage.title)}
                  className="bg-safari-green hover:bg-green-700 text-white font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center group"
                >
                  Book This Package
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;