import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const NotFound: React.FC = () => {
  useSEO({ title: 'Page Not Found', description: 'The page you are looking for does not exist.' });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <div
          className="w-full h-48 bg-cover bg-center rounded-2xl mb-8 opacity-80"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://res.cloudinary.com/drnm7slkt/image/upload/f_auto,q_auto,w_800/v1756030223/Makio_47_hbidtd.jpg')`,
          }}
        />
        <h1 className="text-7xl font-montserrat font-bold text-safari-green mb-4">404</h1>
        <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
          Lost in the Savanna?
        </h2>
        <p className="font-opensans text-gray-600 mb-8">
          The page you're looking for has wandered off. Let's get you back on the trail.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-safari-green hover:bg-green-700 text-white font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 group"
        >
          Back to Home
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
