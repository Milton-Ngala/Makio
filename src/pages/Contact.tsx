import React from 'react';
import Booking from '../components/Booking';
import Testimonials from '../components/Testimonials';
import { Phone, Mail } from 'lucide-react';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Contact: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/254774156869', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/makio_tours_and_travel', '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-safari-green to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
              Contact <span className="text-sunset-gold">Us</span>
            </h1>
            <p className="text-xl font-opensans max-w-3xl mx-auto">
              Ready to embark on your dream safari? Get in touch with our expert team
              and let us help you plan the perfect African adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-safari-green p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="font-opensans text-gray-600 mb-2">Speak directly with our safari experts</p>
              <a
                href="tel:+254774156869"
                className="font-opensans font-semibold text-safari-green hover:text-green-700 transition-colors"
              >
                +254 774 156 869
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-safari-green p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="font-opensans text-gray-600 mb-2">Send us your safari inquiries</p>
              <a
                href="mailto:info@makiotours.com"
                className="font-opensans font-semibold text-safari-green hover:text-green-700 transition-colors"
              >
                info@makiotours.com
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-safari-green p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <WhatsAppOutlined
                  className="h-8 w-8 text-white"
                  style={{ fontSize: "30px" }}
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">WhatsApp</h3>
              <p className="font-opensans text-gray-600 mb-2">Quick responses via WhatsApp</p>
              <button
                onClick={openWhatsApp}
                className="font-opensans font-semibold text-safari-green hover:text-green-700 transition-colors"
              >
                Chat with us
              </button>
            </div>

            <div className="text-center group">
              <div className="bg-safari-green p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <InstagramOutlined className="h-8 w-8 text-white" style={{ fontSize: "30px" }} />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">Message Us</h3>
              <p className="font-opensans text-gray-600 mb-2">DM us for instant help!</p>
              <button
                onClick={openInstagram}
                className="font-opensans font-semibold text-safari-green hover:text-green-700 transition-colors"

              >
                Follow us now
              </button>
            </div>
          </div>

          {/* Office Hours */}
          {/* <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-safari-green mr-3" />
              <h3 className="text-2xl font-montserrat font-bold text-gray-900">Office Hours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <h4 className="font-opensans font-semibold text-gray-900 mb-2">Monday - Friday</h4>
                <p className="font-opensans text-gray-600">8:00 AM - 6:00 PM (EAT)</p>
              </div>
              <div>
                <h4 className="font-opensans font-semibold text-gray-900 mb-2">Saturday - Sunday</h4>
                <p className="font-opensans text-gray-600">9:00 AM - 4:00 PM (EAT)</p>
              </div>
            </div>
            <p className="font-opensans text-gray-600 mt-4">
              Emergency support available 24/7 during safari tours
            </p>
          </div> */}
        </div>
      </section>

      {/* Booking Form */}
      <Booking />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl font-opensans text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our safari packages and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                What's the best time to visit Africa for a safari?
              </h3>
              <p className="font-opensans text-gray-700">
                Africa offers excellent wildlife viewing year-round. The dry seasons (June-October and December-March)
                are ideal for game viewing as animals gather around water sources. The Great Migration in Maasai Mara
                typically occurs from July to October.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                What should I pack for a safari?
              </h3>
              <p className="font-opensans text-gray-700">
                Pack neutral-colored clothing, comfortable walking shoes, a hat, sunglasses, sunscreen,
                binoculars, camera with extra batteries, and any personal medications. We'll provide
                a detailed packing list upon booking.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                Are your safaris suitable for children?
              </h3>
              <p className="font-opensans text-gray-700">
                Yes! We offer family-friendly safari packages suitable for children of all ages.
                Our guides are experienced in engaging young travelers and ensuring their safety
                and enjoyment throughout the safari.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                What's included in your safari packages?
              </h3>
              <p className="font-opensans text-gray-700">
                Our packages typically include accommodation, all meals, game drives, park fees,
                professional guide services, and transportation in 4WD safari vehicles. Specific
                inclusions vary by package - check individual package details for complete information.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                How far in advance should I book my safari?
              </h3>
              <p className="font-opensans text-gray-700">
                We recommend booking at least 3-6 months in advance, especially for peak seasons
                (July-October and December-January). This ensures availability at preferred accommodations
                and allows time for proper trip planning.
              </p>
            </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                Can I be expect to see all the wild animals on my bucket list during the safari?
              </h3>
              <p className="font-opensans text-gray-700">
                Please note that while our parks are home to an incredible variety of wildlife, these animals roam freely in their natural environment, they cannot be scripted. Sightings are based on nature's timing, and though we do our best to help you spot as many as possible, we cannot guarantee seeing every animal on the wishlist. Each safari is unique - every drive holds its own special surprises. 
                That's the beauty of a true, wild safari experience.

              </p>
            </div>

                                    <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                Can I extend my trip or combine it with other destinations?
              </h3>
              <p className="font-opensans text-gray-700">
               Absolutely! We can help you extend/increase number of days of your safari or combine it with other destinations, such as the Kenyan coast, Mount Kenya, or neighboring countries like Tanzania and Uganda. Just let us know your interests and preferred travel dates, and we’ll customize an itinerary that fits your schedule and budget

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Contact;