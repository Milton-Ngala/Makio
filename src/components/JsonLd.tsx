import React from 'react';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Makio Tours and Travel',
  url: 'https://www.makiotours.com',
  logo: 'https://res.cloudinary.com/dqokf2vgg/image/upload/e_improve,e_sharpen/v1751643644/Makio_Logo_jmdq5e.png',
  description: 'Kenya-based safari and travel company offering expertly crafted African wildlife experiences.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  telephone: '+254774156869',
  email: 'info@makiotours.com',
  sameAs: [
    'https://instagram.com/makio_tours_and_travel',
    'https://facebook.com/makiotours',
    'https://www.tiktok.com/@makiotoursandtravel',
  ],
  areaServed: 'Kenya',
  priceRange: '$$',
};

const JsonLd: React.FC = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export default JsonLd;
