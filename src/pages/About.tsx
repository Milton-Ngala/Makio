import React from 'react';
import { Award, Users, Heart, Shield, Globe, Camera, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-safari-green to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
              About <span className="text-sunset-gold">Makio Tours</span>
            </h1>
            <p className="text-xl font-opensans max-w-3xl mx-auto">
              Discover the story behind Africa's premier safari company and our commitment 
              to creating unforgettable wildlife experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg font-opensans text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019, Makio Tours & Travel began as a dream to share Africa's incredible 
                  wildlife and natural beauty with the world. What started as a small family business 
                  has grown into one of Africa's most trusted safari operators.
                </p>
                <p>
                  Our founder, James Makio, grew up in the shadow of Mount Africa, developing a deep 
                  connection with wildlife from an early age. His passion for conservation and 
                  hospitality led him to create a company that not only showcases Africa's natural 
                  wonders but also contributes to their preservation.
                </p>
                <p>
                  Today, we're proud to have welcomed over 2,000 travelers from around the globe, 
                  each leaving with memories that last a lifetime and a deeper appreciation for 
                  Africa's magnificent wildlife.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dqokf2vgg/image/upload/v1751567935/Safari_guide_with_wildlife_uxi35i.jpg"
                alt="Safari guide with wildlife"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-sunset-gold text-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold">5+</div>
                  <div className="text-sm font-opensans">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-safari-green p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 font-opensans leading-relaxed">
                To create transformative safari experiences that connect travelers with Africa's 
                incredible wildlife while supporting conservation efforts and local communities. 
                We believe that through responsible tourism, we can protect the natural heritage 
                that makes Africa so special.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-sunset-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 font-opensans leading-relaxed">
                To be recognized as East Africa's leading sustainable safari operator, setting 
                the standard for ethical wildlife tourism. We envision a future where every 
                safari contributes to wildlife conservation and community development, ensuring 
                these natural wonders exist for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl font-opensans text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from planning your safari to our 
              conservation efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-safari-green p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-gray-900 mb-4">Safety First</h4>
              <p className="text-gray-700 font-opensans">
                Your safety and security are our top priorities on every safari adventure.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-safari-green p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-gray-900 mb-4">Conservation</h4>
              <p className="text-gray-700 font-opensans">
                We're committed to protecting Africa's wildlife and supporting conservation initiatives.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-safari-green p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-gray-900 mb-4">Community</h4>
              <p className="text-gray-700 font-opensans">
                Supporting local communities through employment and sustainable tourism practices.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-safari-green p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-gray-900 mb-4">Excellence</h4>
              <p className="text-gray-700 font-opensans">
                Delivering exceptional service and unforgettable experiences on every safari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl font-opensans text-gray-600 max-w-3xl mx-auto">
              Our experienced team of safari guides and travel experts are passionate about 
              sharing Africa's natural wonders with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="James Makio - Founder"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h4 className="text-xl font-montserrat font-bold text-gray-900 mb-2">James Makio</h4>
                <p className="text-safari-green font-opensans font-semibold mb-3">Founder & CEO</p>
                <p className="text-gray-700 font-opensans">
                  With over 5 years in the safari industry, James brings unparalleled knowledge 
                  of Africa's wildlife and a passion for conservation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sarah Wanjiku - Head Guide"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h4 className="text-xl font-montserrat font-bold text-gray-900 mb-2">Sarah Wanjiku</h4>
                <p className="text-safari-green font-opensans font-semibold mb-3">Head Safari Guide</p>
                <p className="text-gray-700 font-opensans">
                  A certified wildlife expert with exceptional tracking skills and deep knowledge 
                  of animal behavior patterns.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="David Kimani - Operations Manager"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h4 className="text-xl font-montserrat font-bold text-gray-900 mb-2">David Kimani</h4>
                <p className="text-safari-green font-opensans font-semibold mb-3">Operations Manager</p>
                <p className="text-gray-700 font-opensans">
                  Ensures seamless safari operations and coordinates with lodges and parks 
                  for the perfect safari experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Awards & Recognition */}
      <section className="py-20 bg-safari-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl font-opensans text-gray-200 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and travelers alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-sunset-gold p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-montserrat font-bold text-white mb-2">
                Best Safari Operator 2023
              </h4>
              <p className="text-gray-200 font-opensans text-sm">Africa Tourism Board</p>
            </div>

            <div className="text-center">
              <div className="bg-sunset-gold p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-montserrat font-bold text-white mb-2">
                Excellence in Wildlife Photography
              </h4>
              <p className="text-gray-200 font-opensans text-sm">African Safari Awards</p>
            </div>

            <div className="text-center">
              <div className="bg-sunset-gold p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-montserrat font-bold text-white mb-2">
                Sustainable Tourism Leader
              </h4>
              <p className="text-gray-200 font-opensans text-sm">East Africa Tourism Association</p>
            </div>

            <div className="text-center">
              <div className="bg-sunset-gold p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-montserrat font-bold text-white mb-2">
                Customer Choice Award
              </h4>
              <p className="text-gray-200 font-opensans text-sm">TripAdvisor Travelers' Choice</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;