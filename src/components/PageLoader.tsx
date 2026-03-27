import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader: React.FC = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4">
            {/* Paw print spinner using brand colors */}
            <div className="relative w-16 h-16">
              <motion.span
                className="absolute inset-0 rounded-full border-4 border-safari-green border-t-sunset-gold"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
              />
            </div>
            <p className="font-montserrat text-safari-green text-sm tracking-widest uppercase">
              Loading...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
