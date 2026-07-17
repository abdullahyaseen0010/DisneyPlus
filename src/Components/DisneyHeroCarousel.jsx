import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Plus, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    id: 1,
    title: "ONWARD",
    subtitle: "Disney • Pixar",
    image: "https://www.comingsoon.net/wp-content/uploads/sites/3/2019/05/onwardheader.jpg",
    description: "Two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left in the world."
  },
  {
    id: 2,
    title: "THE MANDALORIAN",
    subtitle: "Star Wars",
    image: "https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-compilation-poster-fb-tw_6ae443d1.jpeg?region=0%2C75%2C864%2C482",
    description: "A lone gunfighter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic."
  },
  {
    id: 3,
    title: "FROZEN II",
    subtitle: "Disney",
    image: "https://w0.peakpx.com/wallpaper/132/659/HD-wallpaper-frozen-ii-2019-snowman-movie-poster-autumn-fantast-leaf-disney-olaf-fantasy.jpg",
    description: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land."
  },
  {
    id: 4,
    title: "AVENGERS: ENDGAME",
    subtitle: "Marvel",
    image: "https://images.bauerhosting.com/legacy/empire-images/articles/5ca1ec3f133d503e3a486a2e/avengers-russian-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=768&q=80",
    description: "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe."
  },
  {
    id: 5,
    title: "SOUL",
    subtitle: "Disney • Pixar",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Temp-1400x700(65).png?q=50&fit=crop&w=1140&h=&dpr=1.5",
    description: "A middle school band teacher gets the chance of a lifetime to play at the best jazz club in town."
  },
  {
    id: 6,
    title: "LOKI",
    subtitle: "Marvel",
    image: "https://comicbook.com/wp-content/uploads/sites/4/2021/08/103aa000-6400-4da1-ac53-cbe280c773e4.jpg?resize=1024,576",
    description: "The mercurial villain Loki resumes his role as the God of Mischief following the events of Avengers: Endgame."
  },
  {
    id: 7,
    title: "MOANA",
    subtitle: "Disney",
    image: "https://scera.org/wp-content/uploads/2017/03/disney-moana-movie-poster-wallpaper-6677.jpg",
    description: "A spirited teenager sails out on a daring mission to save her people, discovering the heart of Te Fiti."
  },
  {
    id: 8,
    title: "WANDAVISION",
    subtitle: "Marvel",
    image: "https://www.peshprints.com/wp-content/uploads/2021/01/wandavision.jpg",
    description: "Wanda Maximoff and Vision are living their ideal suburban lives when they begin to suspect things are not as they seem."
  },
  {
    id: 9,
    title: "RAYA AND THE LAST DRAGON",
    subtitle: "Disney",
    image: "https://w0.peakpx.com/wallpaper/223/768/HD-wallpaper-movie-raya-and-the-last-dragon.jpg",
    description: "A warrior seeks the last dragon to stop the evil spirits that have returned to the kingdom of Kumandra."
  },
  {
    id: 10,
    title: "FALCON AND THE WINTER SOLDIER",
    subtitle: "Marvel",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Falcon-Winter-Soldier-Poster-.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
    description: "Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience."
  }
];

const DisneyHeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const currentMovie = heroSlides[currentSlide];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-80 sm:h-96 lg:h-[450px] overflow-hidden bg-black group">
      {/* Animated Background */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <motion.img
            src={currentMovie.image}
            alt={currentMovie.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={20} />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={20} />
      </motion.button>

      {/* Content */}
      <div className="absolute left-4 sm:left-8 lg:left-12 bottom-8 sm:bottom-12 z-10 max-w-md lg:max-w-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-3 sm:space-y-4"
          >
            <motion.div
              variants={itemVariants}
              className="text-xs sm:text-sm font-semibold tracking-wider text-white/80 uppercase"
              style={{
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))",
              }}
            >
              {currentMovie.subtitle}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{
                filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.9)) drop-shadow(0 8px 32px rgba(0,0,0,0.6))",
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              }}
            >
              {currentMovie.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-200 max-w-md leading-relaxed"
              style={{
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))",
                lineHeight: "1.5",
              }}
            >
              {currentMovie.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3 pt-2"
            >
              <motion.button
                className="flex items-center space-x-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 8px 20px rgba(255,255,255,0.3))"
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
                }}
              >
                <Play size={16} fill="black" />
                <span>PLAY</span>
              </motion.button>

              <motion.button
                className="flex items-center space-x-2 bg-gray-700/60 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-600/60 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 8px 20px rgba(255,255,255,0.2))"
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
                }}
              >
                <Plus size={16} />
                <span>WATCHLIST</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
            }}
          />
        ))}
      </div>

      {/* Animated shadow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(147,51,234,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(59,130,246,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default DisneyHeroCarousel;