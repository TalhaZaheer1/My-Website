import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Preload all images for smooth transitions
  useEffect(() => {
    if (images && images.length > 0) {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="relative w-full aspect-video bg-[#050505] overflow-hidden group flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            loading="lazy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-auto block cursor-pointer transition-[filter] duration-300"
            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(true); }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white border border-[#333] hover:border-primary-500 hover:text-primary-500 transition-colors opacity-100 md:opacity-0 group-hover:opacity-100 z-20"
            >
              <FaChevronLeft size={14} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white border border-[#333] hover:border-primary-500 hover:text-primary-500 transition-colors opacity-100 md:opacity-0 group-hover:opacity-100 z-20"
            >
              <FaChevronRight size={14} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-2 h-2 rounded-none transition-colors ${idx === currentIndex ? 'bg-primary-500' : 'bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            >
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-[210] bg-black/50 p-2 border border-[#333]"
              >
                <FaTimes size={24} />
              </button>

              <div className="absolute top-6 left-6 text-[#aaa] z-[210] bg-black/50 px-4 py-2 border border-[#333] font-mono text-sm tracking-widest">
                [ {currentIndex + 1} / {images.length} ]
              </div>

              <motion.img
                key={`lightbox-${currentIndex}`}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-[filter] duration-300"
                onClick={(e) => e.stopPropagation()}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 text-white border border-[#333] hover:border-primary-500 hover:text-primary-500 transition-colors z-[210]"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 text-white border border-[#333] hover:border-primary-500 hover:text-primary-500 transition-colors z-[210]"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
