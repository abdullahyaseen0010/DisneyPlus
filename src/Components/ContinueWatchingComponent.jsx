import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

const continueWatchingContent = [
  {
    id: 1,
    title: "The Mandalorian",
    episode: "S2 E5 - The Jedi",
    progress: 65,
    duration: "47 min",
    timeLeft: "16 min left",
    image: "https://m.media-amazon.com/images/M/MV5BN2M5YWFkN2YtMzlhNS00NDAyLWJlMGUtMjAxZTAzMDk4NTJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX500_CR0,0,500,281_.jpg"
  },
  {
    id: 2,
    title: "WandaVision",
    episode: "S1 E8 - Previously On",
    progress: 23,
    duration: "50 min",
    timeLeft: "38 min left",
    image: "https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWE2NzgtZGUxMGI2MDhlOTIzXkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_QL75_UX500_CR0,47,500,281_.jpg"
  },
  {
    id: 3,
    title: "Loki",
    episode: "S1 E4 - The Nexus Event",
    progress: 87,
    duration: "52 min",
    timeLeft: "7 min left",
    image: "https://m.media-amazon.com/images/M/MV5BYjQ3NWQwN2QtZjM0NC00ZWM4LTkzNDYtMjExNTdmNWUxMDFmXkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_QL75_UX500_CR0,47,500,281_.jpg"
  },
  {
    id: 4,
    title: "The Falcon and Winter Soldier",
    episode: "S1 E6 - One World, One People",
    progress: 45,
    duration: "55 min",
    timeLeft: "30 min left",
    image: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGQ0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX500_CR0,47,500,281_.jpg"
  },
  {
    id: 5,
    title: "Moon Knight",
    episode: "S1 E3 - The Friendly Type",
    progress: 12,
    duration: "48 min",
    timeLeft: "42 min left",
    image: "https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTVlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_QL75_UX500_CR0,47,500,281_.jpg"
  },
  {
    id: 6,
    title: "Hawkeye",
    episode: "S1 E2 - Hide and Seek",
    progress: 78,
    duration: "44 min",
    timeLeft: "10 min left",
    image: "https://m.media-amazon.com/images/M/MV5BMTg1NjQwNjE3OF5BMl5BanBnXkFtZTgwMzc1NzE3MzI@._V1_QL75_UX500_CR0,47,500,281_.jpg"
  },
  {
    id: 7,
    title: "What If...?",
    episode: "S1 E7 - What If... Thor Were an Only Child?",
    progress: 34,
    duration: "32 min",
    timeLeft: "21 min left",
    image: "https://m.media-amazon.com/images/M/MV5BMjM3ODMwNDMzN15BMl5BanBnXkFtZTgwNzMzMzA4MzI@._V1_QL75_UX500_CR0,47,500,281_.jpg"
  },
  {
    id: 8,
    title: "Ms. Marvel",
    episode: "S1 E4 - Seeing Red",
    progress: 91,
    duration: "42 min",
    timeLeft: "4 min left",
    image: "https://m.media-amazon.com/images/M/MV5BNjA2NzQzNjY3NF5BMl5BanBnXkFtZTgwMjE2NzQyMzI@._V1_QL75_UX500_CR0,47,500,281_.jpg"
  }
];

const ContinueWatchingComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

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

  const handleRemove = (id, e) => {
    e.stopPropagation();
    console.log(`Removing item ${id} from continue watching`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  return (
    <div className="bg-gray-900 py-4 px-3">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 relative"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Continue Watching
          </h2>
          <div className="h-1 w-16 bg-blue-500 rounded-full" />
          <p className="text-gray-400 text-sm mt-3">
            Pick up where you left off
          </p>
        </motion.div>

        {/* Horizontal Slider */}
        <motion.div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
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
          {continueWatchingContent.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="flex-shrink-0 w-72 group cursor-pointer"
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 500, damping: 30 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Card Container */}
              <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                {/* Landscape Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x450/374151/f9fafb?text=${encodeURIComponent(item.title)}`;
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-8 h-8 text-white fill-white" />
                    </motion.div>
                  </div>

                  {/* Remove Button */}
                  <motion.button
                    onClick={(e) => handleRemove(item.id, e)}
                    className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4 text-white" />
                  </motion.button>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700/80">
                    <motion.div
                      className="h-full bg-blue-500 rounded-r-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-3">
                  <h3 className="text-white font-bold text-base mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2 line-clamp-1">
                    {item.episode}
                  </p>
                  
                  {/* Progress Info */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{item.timeLeft}</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hide scrollbar CSS */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .line-clamp-1 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ContinueWatchingComponent;