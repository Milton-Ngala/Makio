import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const STORAGE_KEY = 'makio_cookie_consent';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-[9998] bg-gray-900 text-white px-4 py-4 shadow-2xl"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-opensans text-sm text-gray-300 max-w-2xl">
              We use cookies to improve your experience and analyse site traffic. By clicking "Accept", you agree to our{' '}
              <Link to="/cookie-policy" className="text-sunset-gold hover:underline">Cookie Policy</Link>.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="font-opensans text-sm text-gray-400 hover:text-white transition-colors px-3 py-2"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="bg-safari-green hover:bg-green-600 text-white font-opensans font-semibold text-sm px-5 py-2 rounded-full transition-colors"
              >
                Accept
              </button>
              <button onClick={decline} className="text-gray-500 hover:text-white transition-colors ml-1">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
