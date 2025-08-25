import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { WhatsAppOutlined } from '@ant-design/icons';

const FOOTER_ID = 'site-footer';   

const FloatingActionButton = () => {
 
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const footer = document.getElementById(FOOTER_ID);
    if (!footer) return;                       

    const observer = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { root: null, threshold: 0.1 }           
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  const openWhatsApp = () => {
    const message = "Hi! I'm interested in booking a safari with Makio Tours. Could you please help me with more information?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254774156869?text=${encodedMessage}`, '_blank');
  };

  const handleClick = () => (atFooter ? scrollToTop() : openWhatsApp());

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.button
        key={atFooter ? 'scroll' : 'whatsapp'}
        onClick={handleClick}
        aria-label={atFooter ? 'Scroll to top' : 'Chat on WhatsApp'}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg z-40
                    transition-colors duration-300
                    ${atFooter
                      ? 'bg-safari-green hover:bg-primary-700 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0, rotate: 180 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {atFooter
          ? <ChevronUp size={24} />
          : <WhatsAppOutlined style={{ fontSize: 24 }} />}
      </motion.button>
    </AnimatePresence>
  );
};

export default FloatingActionButton;
