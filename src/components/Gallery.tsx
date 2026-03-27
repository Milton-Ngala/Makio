import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { InstagramOutlined } from '@ant-design/icons';
import LazyImage from './LazyImage';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030209/Makio_56_hyiezn.jpg", alt: "Safari Life", caption: "Safari Life"},
  { id: 100, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030205/Makio_50_eg6ctn.jpg", alt: "Safari Life", caption: "Safari Life"},
  { id: 101, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030204/Makio_53_e4fbrz.jpg", alt: "Safari Life", caption: "Safari Life"},
  { id: 102, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030196/Makio_41_tsqobz.jpg", alt: "Safari Life", caption: "Safari Life"},
  { id: 103, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030188/Makio_31_ahnn6v.jpg", alt: "Safari Life", caption: "Safari Life"},
  { id: 104, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030192/Makio_32_zf7qer.jpg", alt: "Safari Life", caption: "Safari Life"},
  { id: 105, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030157/Makio_1_r3q6iy.jpg", alt: "Safari Life", caption: "Safari Life"},
  { id: 106, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030161/Makio_2_equhip.jpg", alt: "Safari Life", caption: "Safari Life"},
  { id: 107, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030201/Makio_43_k5pqeb.jpg", alt: "Safari Life", caption: "Safari Life"},
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
        <div className="text-center mb-16">
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
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  wrapperClassName="h-56"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="font-opensans text-gray-700 mb-3">{image.caption}</p>
                {/* <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1 text-red-500" />
                    <span className="font-opensans text-sm">{image.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span className="font-opensans text-sm">{image.comments}</span>
                  </div>
                </div> */}
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

      {/* Modal for selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-2xl max-w-4xl max-h-full overflow-auto">
            <LazyImage
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <p className="font-opensans text-gray-700 mb-3">{selectedImage.caption}</p>
              {/* <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  <span className="font-opensans text-sm">{selectedImage.likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span className="font-opensans text-sm">{selectedImage.comments}</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;