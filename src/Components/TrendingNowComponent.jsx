import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Star, Eye } from "lucide-react";

const trendingContent = [
  {
    id: 1,
    title: "Stranger Things",
    rank: 1,
    views: "12.5M",
    rating: 9.1,
    type: "Series",
    episode: "S4 E9",
    image: "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyODk5NDUyNjU@._V1_FMjpg_UX1000_.jpg",
    trendingScore: 98
  },
  {
    id: 2,
    title: "The Batman",
    rank: 2,
    views: "10.8M",
    rating: 8.9,
    type: "Movie",
    episode: "2022 • Action",
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNzE1MjNiXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_FMjpg_UX1000_.jpg",
    trendingScore: 95
  },
  {
    id: 3,
    title: "Euphoria",
    rank: 3,
    views: "9.2M",
    rating: 8.4,
    type: "Series",
    episode: "S2 E8",
    image: "https://m.media-amazon.com/images/M/MV5BZjJjNzI5MDctY2Y4YS00NmM4LWJkMjEtYzUyZDFkYWFmMTVhXkEyXkFqcGdeQXVyNDY5MjMyNTY@._V1_FMjpg_UX1000_.jpg",
    trendingScore: 92
  },
  {
    id: 4,
    title: "Spider-Man 3",
    rank: 4,
    views: "8.7M",
    rating: 9.3,
    type: "Movie",
    episode: "2021 • Action",
    image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    trendingScore: 89
  },
  {
    id: 5,
    title: "The Witcher",
    rank: 5,
    views: "7.9M",
    rating: 8.7,
    type: "Series",
    episode: "S2 E8",
    image: "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
    trendingScore: 87
  },
  {
    id: 6,
    title: "Encanto",
    rank: 6,
    views: "7.3M",
    rating: 8.8,
    type: "Movie",
    episode: "2021 • Animation",
    image: "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
    trendingScore: 84
  },
  {
    id: 7,
    title: "Ozark",
    rank: 7,
    views: "6.8M",
    rating: 8.5,
    type: "Series",
    episode: "S4 E14",
    image: "https://m.media-amazon.com/images/M/MV5BM2NiOThhNDItMDViMS00MzJjLTg3NzUtNmVhNmQyNDY2MjQ5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    trendingScore: 82
  },
  {
    id: 8,
    title: "Dune",
    rank: 8,
    views: "6.1M",
    rating: 8.9,
    type: "Movie",
    episode: "2021 • Sci-Fi",
    image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    trendingScore: 80
  },
  {
    id: 9,
    title: "Wednesday",
    rank: 9,
    views: "5.9M",
    rating: 8.6,
    type: "Series",
    episode: "S1 E8",
    image: "https://m.media-amazon.com/images/M/MV5BM2ZmYjEwOGUtZjQzNS00MDM0LWE3YWMtZWQwNTZmNjdhNDNiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    trendingScore: 78
  },
  {
    id: 10,
    title: "Top Gun: Maverick",
    rank: 10,
    views: "5.4M",
    rating: 9.0,
    type: "Movie",
    episode: "2022 • Action",
    image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjNjMjNlODdlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
    trendingScore: 76
  }
];

const TrendingNowComponent = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <div className="bg-gray-900 py-6 lg:py-10 px-3 sm:px-4 lg:px-6 xl:px-8">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 lg:mb-8 relative"
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              initial={{ rotate: -10, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
              className="bg-red-600 rounded-full p-2"
            >
              <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Trending Now
            </h2>
          </div>
          <div className="h-1 w-20 lg:w-24 bg-red-600 rounded-full" />
          <p className="text-gray-400 text-sm lg:text-base mt-3 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            What everyone's watching right now
          </p>
        </motion.div>

        {/* Horizontal Slider */}
        <motion.div
          ref={sliderRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-2 cursor-grab active:cursor-grabbing"
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
          {trendingContent.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="flex-shrink-0 w-40 sm:w-44 lg:w-48 xl:w-52 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Main Card */}
              <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 group-hover:border-gray-600 transition-all duration-300">
                {/* Poster Image */}
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x600/374151/f9fafb?text=${encodeURIComponent(item.title)}`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Ranking Badge - Inside card, top left */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-black/60 backdrop-blur-sm border border-white/20 text-white text-lg font-bold px-3 py-1 rounded-lg">
                      {item.rank}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs px-2 py-1 rounded-md font-medium">
                      {item.type}
                    </span>
                  </div>

                  {/* Rating only */}
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-3 lg:p-4">
                  <h3 className="text-white font-bold text-sm lg:text-base mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs lg:text-sm line-clamp-2">
                    {item.episode}
                  </p>
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
          .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TrendingNowComponent;