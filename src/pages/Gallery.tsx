import React, { useState } from 'react';
import { ExternalLink, Heart, MessageCircle, Camera, MapPin } from 'lucide-react';
import { InstagramOutlined } from '@ant-design/icons';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  likes: number;
  comments: number;
  location: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Lions in Maasai Mara",
    caption: "Majestic lions at sunset in Maasai Mara 🦁",
    likes: 245,
    comments: 18,
    location: "Maasai Mara",
    category: "Wildlife"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751568270/Amboseli_Tsavo_Adventure_dlom5b.jpg",
    alt: "Elephants in Amboseli",
    caption: "Elephant family with Mt. Kilimanjaro backdrop 🐘",
    likes: 312,
    comments: 24,
    location: "Amboseli",
    category: "Wildlife"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Flamingos at Lake Nakuru",
    caption: "Pink paradise at Lake Nakuru 🦩",
    likes: 189,
    comments: 12,
    location: "Lake Nakuru",
    category: "Birds"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Cheetah running",
    caption: "Speed and grace in the savannah 🐆",
    likes: 178,
    comments: 15,
    location: "Maasai Mara",
    category: "Wildlife"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Giraffe family",
    caption: "Gentle giants of the African plains 🦒",
    likes: 267,
    comments: 21,
    location: "Nairobi National Park",
    category: "Wildlife"
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030185/Makio_29_rnbgiq.jpg",
    alt: "Safari sunset",
    caption: "Golden hour magic in the wilderness ✨",
    likes: 298,
    comments: 31,
    location: "Tsavo",
    category: "Landscapes"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Zebra herd",
    caption: "Stripes across the savannah 🦓",
    likes: 156,
    comments: 9,
    location: "Maasai Mara",
    category: "Wildlife"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Rhino at sunset",
    caption: "Conservation heroes in their natural habitat 🦏",
    likes: 234,
    comments: 28,
    location: "Lake Nakuru",
    category: "Wildlife"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Maasai warrior",
    caption: "Traditional Maasai culture and heritage 🏹",
    likes: 201,
    comments: 16,
    location: "Maasai Mara",
    category: "Culture"
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751641666/Makio_Tour_Vehicle_pfj1hq.png",
    alt: "Safari vehicle",
    caption: "Ready for adventure in our 4WD safari vehicles 🚗",
    likes: 143,
    comments: 8,
    location: "Various",
    category: "Safari Life"
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Hippos in water",
    caption: "Hippos enjoying the cool waters 🦛",
    likes: 187,
    comments: 13,
    location: "Lake Naivasha",
    category: "Wildlife"
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030192/Makio_36_fzz571.jpg",
    alt: "Acacia tree silhouette",
    caption: "Iconic African acacia at dawn 🌅",
    likes: 276,
    comments: 19,
    location: "Amboseli",
    category: "Landscapes"
  },
    
  {
    id: 13,
    src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756031299/Accommodation_-_Samburu_Sopa_Lodge_muluwp.jpg",
    alt: "Acacia tree silhouette",
    caption: "Samburu Sopa Lodge",
    likes: 276,
    comments: 19,
    location: "Samburu",
    category: "Accommodation"
  }
];

const categories = ["All", "Wildlife", "Landscapes", "Accommodation", "Birds", "Culture", "Safari Life"];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openInstagram = () => {
    window.open('https://instagram.com/makio-tours_and_travel', '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-safari-green to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
              Safari <span className="text-sunset-gold">Gallery</span>
            </h1>
            <p className="text-xl font-opensans max-w-3xl mx-auto mb-8">
              Get inspired by breathtaking moments captured during our safari adventures. 
              Follow us on Instagram for daily wildlife photography.
            </p>
            
            <button 
              onClick={openInstagram}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
            >
              <InstagramOutlined className="mr-2 h-5 w-5" style={{fontSize: '24px'}} />
              Follow us now
              <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-opensans font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-safari-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            <div>
              <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">500+</div>
              <div className="font-opensans text-gray-600">Photos Captured</div>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">20+</div>
              <div className="font-opensans text-gray-600">Locations Visited</div>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">5+</div>
              <div className="font-opensans text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">10K+</div>
              <div className="font-opensans text-gray-600">Instagram Followers</div>
            </div>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image) => (
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
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-safari-green text-white px-3 py-1 rounded-full text-sm font-opensans font-semibold">
                    {image.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-opensans text-sm">{image.location}</span>
                  </div>
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
      </section>

      {/* Modal for selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-2xl max-w-4xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-safari-green" />
                  <span className="font-opensans font-semibold text-gray-900">{selectedImage.location}</span>
                  <span className="ml-4 bg-safari-green text-white px-3 py-1 rounded-full text-sm font-opensans">
                    {selectedImage.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="font-opensans text-gray-700 mb-4">{selectedImage.caption}</p>
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  <span className="font-opensans">{selectedImage.likes} likes</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span className="font-opensans">{selectedImage.comments} comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;