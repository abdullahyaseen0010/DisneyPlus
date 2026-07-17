import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productionHouses = [
  {
    id: 1,
    name: "Disney",
    logo: (
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <text x="60" y="35" textAnchor="middle" className="fill-white text-2xl font-bold drop-shadow-lg" style={{ fontFamily: 'serif' }}>
          Disney
        </text>
      </svg>
    ),
    background: "linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)",
    hoverVideo: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4"
  },
  {
    id: 2,
    name: "Pixar",
    logo: (
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <text x="60" y="35" textAnchor="middle" className="fill-white text-2xl font-bold tracking-wider drop-shadow-lg">
          PIXAR
        </text>
      </svg>
    ),
    background: "linear-gradient(135deg, rgba(31, 41, 55, 0.3) 0%, rgba(55, 65, 81, 0.3) 100%)",
    hoverVideo: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-pixar.mp4"
  },
  {
    id: 3,
    name: "Marvel",
    logo: (
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <rect x="20" y="20" width="80" height="20" rx="2" className="fill-red-600 drop-shadow-lg" />
        <text x="60" y="34" textAnchor="middle" className="fill-white text-lg font-bold drop-shadow-lg">
          MARVEL
        </text>
      </svg>
    ),
    background: "linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(153, 27, 27, 0.3) 100%)",
    hoverVideo: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-marvel.mp4"
  },
  {
    id: 4,
    name: "Star Wars",
    logo: (
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <text x="60" y="25" textAnchor="middle" className="fill-white text-lg font-bold drop-shadow-lg">
          STAR
        </text>
        <text x="60" y="42" textAnchor="middle" className="fill-white text-lg font-bold drop-shadow-lg">
          WARS
        </text>
      </svg>
    ),
    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(31, 41, 55, 0.4) 100%)",
    hoverVideo: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-starwars.mp4"
  },
  {
    id: 5,
    name: "National Geographic",
    logo: (
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <rect x="15" y="18" width="4" height="24" className="fill-yellow-400 drop-shadow-lg" />
        <text x="25" y="28" className="fill-white text-xs font-bold drop-shadow-lg">
          NATIONAL
        </text>
        <text x="25" y="40" className="fill-white text-xs font-bold drop-shadow-lg">
          GEOGRAPHIC
        </text>
      </svg>
    ),
    background: "linear-gradient(135deg, rgba(250, 204, 21, 0.3) 0%, rgba(234, 179, 8, 0.3) 100%)",
    hoverVideo: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-natgeo.mp4"
  }
];

const DisneyProductionHousesSlider = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle touch/mouse drag
  const handleStart = (e) => {
    setIsDragging(true);
    const x = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
    setStartX(x - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    const walk = (x - sliderRef.current.offsetLeft - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && !isDragging) {
        const cardWidth = sliderRef.current.children[0].offsetWidth + 16; // card width + gap
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        
        if (sliderRef.current.scrollLeft >= maxScroll) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Grid - Hidden on mobile */}
        <motion.div
          className="hidden lg:grid grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {productionHouses.map((house) => (
            <motion.div
              key={house.id}
              variants={cardVariants}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer backdrop-blur-xl"
              onMouseEnter={() => setHoveredCard(house.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Gradient Background */}
              <motion.div
                className="absolute inset-0 opacity-40"
                style={{ background: house.background }}
                animate={{
                  opacity: hoveredCard === house.id ? 0.6 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content Container */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                {/* Logo */}
                <motion.div
                  className="w-full h-8 flex items-center justify-center"
                  animate={{
                    scale: hoveredCard === house.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {house.logo}
                </motion.div>
              </div>

              {/* Enhanced Glass Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  borderColor: hoveredCard === house.id ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
                  boxShadow: hoveredCard === house.id 
                    ? "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.3)"
                    : "0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover Glass Overlay */}
              <AnimatePresence>
                {hoveredCard === house.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>

              {/* Animated Glass Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full rounded-2xl"
                animate={{
                  translateX: hoveredCard === house.id ? "200%" : "-100%",
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slider - Visible on mobile and tablet */}
        <div className="lg:hidden relative">
          <motion.div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {productionHouses.map((house) => (
              <motion.div
                key={house.id}
                variants={cardVariants}
                className="group relative flex-shrink-0 w-64 sm:w-72 aspect-video rounded-2xl overflow-hidden cursor-pointer backdrop-blur-xl"
                onTouchStart={() => setHoveredCard(house.id)}
                onTouchEnd={() => setHoveredCard(null)}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Gradient Background */}
                <motion.div
                  className="absolute inset-0 opacity-40"
                  style={{ background: house.background }}
                  animate={{
                    opacity: hoveredCard === house.id ? 0.6 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content Container */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {/* Logo */}
                  <motion.div
                    className="w-full h-8 flex items-center justify-center"
                    animate={{
                      scale: hoveredCard === house.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {house.logo}
                  </motion.div>
                </div>

                {/* Enhanced Glass Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    borderColor: hoveredCard === house.id ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
                    boxShadow: hoveredCard === house.id 
                      ? "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.3)"
                      : "0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover Glass Overlay */}
                <AnimatePresence>
                  {hoveredCard === house.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>

                {/* Animated Glass Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full rounded-2xl"
                  animate={{
                    translateX: hoveredCard === house.id ? "200%" : "-100%",
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Subtle bottom spacing */}
        <div className="mt-8" />

        {/* Hide scrollbar CSS */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default DisneyProductionHousesSlider;