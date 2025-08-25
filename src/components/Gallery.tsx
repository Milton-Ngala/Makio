import React, { useState } from 'react';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { InstagramOutlined } from '@ant-design/icons';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  likes: number;
  comments: number;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Lions in Maasai Mara",
    caption: "Majestic lions at sunset in Maasai Mara 🦁",
    likes: 245,
    comments: 18
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751568270/Amboseli_Tsavo_Adventure_dlom5b.jpg",
    alt: "Elephants in Amboseli",
    caption: "Elephant family with Mt. Kilimanjaro backdrop 🐘",
    likes: 312,
    comments: 24
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Flamingos at Lake Nakuru",
    caption: "Pink paradise at Lake Nakuru 🦩",
    likes: 189,
    comments: 12
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Cheetah running",
    caption: "Speed and grace in the savannah 🐆",
    likes: 178,
    comments: 15
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Giraffe family",
    caption: "Gentle giants of the African plains 🦒",
    likes: 267,
    comments: 21
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Safari sunset",
    caption: "Golden hour magic in the wilderness ✨",
    likes: 298,
    comments: 31
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Zebra herd",
    caption: "Stripes across the savannah 🦓",
    likes: 156,
    comments: 9
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Rhino at sunset",
    caption: "Conservation heroes in their natural habitat 🦏",
    likes: 234,
    comments: 28
  }
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
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="font-opensans text-gray-700 mb-3">{image.caption}</p>
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1 text-red-500" />
                    <span className="font-opensans text-sm">{image.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span className="font-opensans text-sm">{image.comments}</span>
                  </div>
                </div>
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
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <p className="font-opensans text-gray-700 mb-3">{selectedImage.caption}</p>
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  <span className="font-opensans text-sm">{selectedImage.likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span className="font-opensans text-sm">{selectedImage.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;