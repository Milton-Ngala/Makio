import React, { useState } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { InstagramOutlined } from '@ant-design/icons';
import LazyImage from './LazyImage';
import AnimatedSection from './AnimatedSection';
import { optimizeImage } from '../utils/cloudinary';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  location: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030209/Makio_56_hyiezn.jpg",
    alt: "Safari jeep overlooking a waterhole",
    caption: "Scanning the Savanna",
    location: "Kenya",
    description: "Tourists in an open-top safari vehicle scanning the vast savanna as a herd of animals grazes in the golden distance.",
  },
  {
    id: 100,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030205/Makio_50_eg6ctn.jpg",
    alt: "Woman photographing wildlife from a safari vehicle",
    caption: "Wind in Her Hair",
    location: "Kenya",
    description: "A joyful woman in a white hat leans out of the safari jeep, wind in her hair, soaking in the wild beauty of the African plains.",
  },
  {
    id: 101,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030204/Makio_53_e4fbrz.jpg",
    alt: "Hot air balloon floating over the savannah",
    caption: "Red Balloon Over the Savanna",
    location: "Maasai Mara National Reserve",
    description: "A majestic red hot air balloon drifts gracefully across the endless blue sky above the sun-drenched savanna.",
  },
  {
    id: 102,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030196/Makio_41_tsqobz.jpg",
    alt: "River winding through a dry African landscape",
    caption: "River Through Golden Grasslands",
    location: "Kenya",
    description: "Breathtaking aerial view of a shimmering river snaking through golden grasslands, with a colorful hot air balloon hovering nearby.",
  },
  {
    id: 104,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030192/Makio_32_zf7qer.jpg",
    alt: "Group of guests smiling during a safari stop",
    caption: "Sunny Safari Selfie",
    location: "Kenya",
    description: "Radiant woman in a cap flashes a bright smile for a sunny selfie with her fellow safari companions beside the vehicle.",
  },
  {
    id: 105,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030157/Makio_1_r3q6iy.jpg",
    alt: "Safari jeep with pop-up roof open for game viewing",
    caption: "Eyes Wide with Wonder",
    location: "Kenya",
    description: "Group of excited travelers riding high in a sturdy green safari vehicle, eyes wide with wonder during an unforgettable game drive.",
  },
  {
    id: 106,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030161/Makio_2_equhip.jpg",
    alt: "Passengers viewing wildlife from a safari jeep",
    caption: "Cruising the Plains",
    location: "Kenya",
    description: "Iconic green safari jeep cruising through the plains, packed with passengers eagerly spotting animals on the horizon.",
  },
  {
    id: 107,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030201/Makio_43_k5pqeb.jpg",
    alt: "Family posing beside a safari vehicle",
    caption: "Celebrating the Wild Adventure",
    location: "Kenya",
    description: "Posing at the entrance of a luxurious safari lodge, celebrating their wild adventure.",
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openInstagram = () => {
    window.open('https://www.instagram.com/makio_tours_and_travel', '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Safari <span className="text-safari-green">Gallery</span>
          </h2>
          <p className="text-xl font-opensans text-gray-600 max-w-3xl mx-auto mb-8">
            Get inspired by breathtaking moments captured during our safari adventures. 
            Follow us on Instagram for daily wildlife photography.
          </p>
          
          <button 
            onClick={openInstagram}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
          >
            <InstagramOutlined className="mr-2 h-5 w-5" style={{fontSize: '24px'}}/>
            Follow us now
            <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </button>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative">
                <LazyImage
                  src={optimizeImage(image.src, 600)}
                  alt={image.alt}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  wrapperClassName="h-56"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
                {/* Location badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <div className="flex items-center text-white">
                    <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="font-opensans text-xs truncate">{image.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-gray-900 mb-1">{image.caption}</h3>
                <p className="font-opensans text-gray-500 text-sm leading-relaxed line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-safari-green to-green-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Want to See More Amazing Wildlife Photos?
          </h3>
          <p className="text-lg font-opensans mb-6 max-w-2xl mx-auto">
            Follow our Instagram for daily safari updates, wildlife photography tips, 
            and behind-the-scenes content from our adventures.
          </p>
          <button 
            onClick={openInstagram}
            className="bg-sunset-gold hover:bg-yellow-500 text-gray-900 font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
          >
            <InstagramOutlined className="mr-2 h-5 w-5" style={{fontSize: '24px'}}/>
            Follow us now
            <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <LazyImage
              src={optimizeImage(selectedImage.src, 1200)}
              alt={selectedImage.alt}
              className="w-full h-72 sm:h-96 object-cover rounded-t-2xl"
              wrapperClassName="h-72 sm:h-96 rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-1">{selectedImage.caption}</h3>
              <div className="flex items-center text-safari-green mb-3">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="font-opensans text-sm">{selectedImage.location}</span>
              </div>
              <p className="font-opensans text-gray-600 leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
