import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { FacebookOutlined, InstagramOutlined, TikTokOutlined, WhatsAppOutlined } from '@ant-design/icons';

type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: React.FC<FooterProps> = (props) => {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subError, setSubError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim()) {
      setSubError('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setSubError('Please enter a valid email address.');
      return;
    }

    setSubError('');
    setSubStatus('loading');

    try {
      // Send subscription via WhatsApp with the email captured
      const message = `Hi! I'd like to subscribe to the Makio Tours newsletter. My email is: ${email}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/254774156869?text=${encodedMessage}`, '_blank');

      setSubStatus('success');
      setEmail('');

      setTimeout(() => setSubStatus('idle'), 5000);
    } catch {
      setSubStatus('error');
      setTimeout(() => setSubStatus('idle'), 4000);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/254774156869', '_blank');
  };

  const openSocialMedia = (platform: string) => {
    const urls = {
      instagram: 'https://instagram.com/makio_tours_and_travel',
      facebook: 'https://facebook.com/makiotours',
      tiktok: 'https://www.tiktok.com/@makiotoursandtravel'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer id="site-footer" {...props} className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-safari-green py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-montserrat font-bold mb-4">
              Stay Updated on Safari Adventures
            </h3>
            <p className="text-lg font-opensans mb-8 text-gray-200">
              Subscribe to our newsletter for exclusive safari deals, wildlife photography tips,
              and Africa travel insights.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSubError(''); }}
                placeholder="Enter your email address"
                disabled={subStatus === 'loading' || subStatus === 'success'}
                className="flex-1 px-4 py-3 rounded-lg font-opensans text-gray-900 focus:outline-none focus:ring-2 focus:ring-sunset-gold disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={subStatus === 'loading' || subStatus === 'success'}
                className="bg-sunset-gold hover:bg-yellow-500 text-gray-900 font-opensans font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {subStatus === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2" />
                    Subscribing...
                  </>
                ) : subStatus === 'success' ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {subError && (
              <p className="mt-3 flex items-center justify-center text-sm font-opensans text-red-300">
                <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                {subError}
              </p>
            )}
            {subStatus === 'success' && (
              <p className="mt-3 flex items-center justify-center text-sm font-opensans text-green-300">
                <CheckCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                Thank you! We'll be in touch with safari updates soon.
              </p>
            )}
            {subStatus === 'error' && (
              <p className="mt-3 flex items-center justify-center text-sm font-opensans text-red-300">
                <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                Something went wrong. Please try again.
              </p>
            )}          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-sunset-gold">
                Makio Tours & Travel
              </h3>
              <p className="font-opensans text-gray-400 mb-6 leading-relaxed">
                Experience Africa's incredible wildlife and landscapes with our expertly crafted
                safari adventures. Creating unforgettable memories since 2019.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <button
                  onClick={() => openSocialMedia('instagram')}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
                >
                  <InstagramOutlined className="h-5 w-5 text-white" style={{fontSize: "20px"}} />
                </button>
                <button
                  onClick={() => openSocialMedia('facebook')}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
                >
                  <FacebookOutlined type="icon-facebook" style={{fontSize: "20px"}} />
                </button>
                <button
                  onClick={() => openSocialMedia('tiktok')}
                  className="bg-gray-800 hover:bg-black p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
                >
                  <TikTokOutlined className="h-5 w-5 text-white" style={{fontSize: '20px'}}/>
                </button>
                <button
                  onClick={openWhatsApp}
                  className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
                >
                  <WhatsAppOutlined 
                    className="h-5 w-5 text-white" 
                    style={{fontSize: "20px"}}
                  />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-6 text-white">Quick Links</h4>
              <nav className="space-y-3">
                <Link
                  to="/"
                  className="block font-opensans text-gray-400 hover:text-sunset-gold transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block font-opensans text-gray-400 hover:text-sunset-gold transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/packages"
                  className="block font-opensans text-gray-400 hover:text-sunset-gold transition-colors"
                >
                  Safari Packages
                </Link>
                <Link
                  to="/gallery"
                  className="block font-opensans text-gray-400 hover:text-sunset-gold transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className="block font-opensans text-gray-400 hover:text-sunset-gold transition-colors"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Safari Destinations */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-6 text-white">Popular Destinations</h4>
              <ul className="space-y-3">
                <li className="font-opensans text-gray-400 hover:text-sunset-gold transition-colors cursor-pointer">
                  Maasai Mara National Reserve
                </li>
                <li className="font-opensans text-gray-400 hover:text-sunset-gold transition-colors cursor-pointer">
                  Amboseli National Park
                </li>
                <li className="font-opensans text-gray-400 hover:text-sunset-gold transition-colors cursor-pointer">
                  Lake Nakuru National Park
                </li>
                <li className="font-opensans text-gray-400 hover:text-sunset-gold transition-colors cursor-pointer">
                  Tsavo National Parks
                </li>
                <li className="font-opensans text-gray-400 hover:text-sunset-gold transition-colors cursor-pointer">
                  Lake Naivasha
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-6 text-white">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-sunset-gold flex-shrink-0" />
                  <div>
                    <p className="font-opensans text-gray-400">Phone</p>
                    <a
                      href="tel:+254774156869"
                      className="font-opensans text-white hover:text-sunset-gold transition-colors"
                    >
                      +254 774 156 869
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-sunset-gold flex-shrink-0" />
                  <div>
                    <p className="font-opensans text-gray-400">Email</p>
                    <a
                      href="mailto:info@makiotours.com"
                      className="font-opensans text-white hover:text-sunset-gold transition-colors"
                    >
                      info@makiotours.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-sunset-gold flex-shrink-0" />
                  <div>
                    <p className="font-opensans text-gray-400">Location</p>
                    <p className="font-opensans text-white">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <button
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white font-opensans font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group mt-4"
                >
                  <WhatsAppOutlined 
                    className="mr-2 h-4 w-4" 
                    style={{fontSize: "24px"}}
                  />
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="font-opensans text-gray-400 text-center lg:text-left mb-4 lg:mb-0">
              © {currentYear} Makio Tours & Travel. All rights reserved. Powered by{' '}
              <a
                href="https://www.ngala.co.ke"
                className="text-sunset-gold hover:text-sunset-gold-dark transition-colors"
              >
                Neural Nerd
              </a>
            </p>

            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <Link to="/privacy-policy" className="font-opensans text-gray-400 hover:text-sunset-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="font-opensans text-gray-400 hover:text-sunset-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="font-opensans text-gray-400 hover:text-sunset-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;