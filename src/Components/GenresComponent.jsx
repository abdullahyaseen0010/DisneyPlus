import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const genreContent = {
  action: [
    {
      id: 1,
      title: "John Wick",
      image: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 2,
      title: "Mad Max: Fury Road",
      image: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 3,
      title: "The Dark Knight",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 5,
      title: "Mission: Impossible - Fallout",
      image: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 6,
      title: "Top Gun: Maverick",
      image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 7,
      title: "Gladiator",
      image: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 8,
      title: "Die Hard",
      image: "https://media.posterlounge.com/img/products/730000/726628/726628_poster.jpg"
    },
    {
      id: 9,
      title: "Casino Royale",
      image: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 10,
      title: "Terminator 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKj7YomS4MFt26snBrXKHA-LqxOC8caea1A&s"
    }
  ],
  comedy: [
    {
      id: 11,
      title: "The Grand Budapest Hotel",
      image: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 12,
      title: "Superbad",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPT_NctcJ8oz4pQdiyj3mCbg4XGe6zOfIrw&s"
    },
    {
      id: 13,
      title: "The Hangover",
      image: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 14,
      title: "Knives Out",
      image: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 15,
      title: "Deadpool",
      image: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 16,
      title: "Anchorman",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGv_zbKB7Py7gbISYDYoSiuu74WHKrsUq_xQ&s"
    },
    {
      id: 17,
      title: "Tropic Thunder",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLz3mX3vt0WZTYwRfK4yTrtNc1DE1gAklcA&s"
    },
    {
      id: 18,
      title: "Borat",
      image: "https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 19,
      title: "Zoolander",
      image: "https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 20,
      title: "Step Brothers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35s-uzAZN19KWwWUnI-pfa46UvJCmw5b8Gw&s"
    }
  ],
  horror: [
    {
      id: 21,
      title: "The Conjuring",
      image: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 22,
      title: "Hereditary",
      image: "https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: 23,
      title: "A Quiet Place",
      image: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 24,
      title: "Get Out",
      image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 25,
      title: "It",
      image: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 26,
      title: "The Babadook",
      image: "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 27,
      title: "Midsommar",
      image: "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 28,
      title: "The Exorcist",
      image: "https://m.media-amazon.com/images/I/61Wn72g21tL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 29,
      title: "Halloween",
      image: "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 30,
      title: "Scream",
      image: "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_FMjpg_UX1000_.jpg"
    }
  ],
  drama: [
    {
      id: 31,
      title: "The Shawshank Redemption",
      image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 32,
      title: "The Godfather",
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 33,
      title: "Forrest Gump",
      image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 34,
      title: "12 Years a Slave",
      image: "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 35,
      title: "Moonlight",
      image: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 36,
      title: "The Pursuit of Happyness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYMdhzuHEPl0z4a8RUnxFaIBLTwknxaqkxw&s"
    },
    {
      id: 37,
      title: "Goodfellas",
      image: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 38,
      title: "There Will Be Blood",
      image: "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 39,
      title: "The Departed",
      image: "https://m.media-amazon.com/images/I/51IJ47CkWUL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 40,
      title: "Parasite",
      image: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg"
    }
  ],
  sciFi: [
    {
      id: 41,
      title: "Blade Runner 2049",
      image: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 42,
      title: "Interstellar",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 43,
      title: "Arrival",
      image: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 44,
      title: "Dune",
      image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 45,
      title: "The Matrix",
      image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 46,
      title: "Ex Machina",
      image: "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 47,
      title: "Inception",
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 48,
      title: "Star Wars: A New Hope",
      image: "https://m.media-amazon.com/images/I/818oxnoHqoL._UF894,1000_QL80_.jpg"
    },
    {
      id: 49,
      title: "Alien",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelq2gPVbp2LsNBieHj6lh3APQ5Ta5UdMUfA&s"
    },
    {
      id: 50,
      title: "2001: A Space Odyssey",
      image: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    }
  ]
};

const GenreSlider = ({ title, content, gradient }) => {
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
    <div className="mb-8 lg:mb-10">
      {/* Genre Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 lg:mb-6 relative"
      >
        <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
          {title}
        </h3>
        <div className={`h-1 w-12 lg:w-16 bg-gradient-to-r ${gradient} rounded-full`} />
      </motion.div>

      {/* Horizontal Slider */}
      <motion.div
        ref={sliderRef}
        className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide pb-3 lg:pb-4 cursor-grab active:cursor-grabbing"
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
        {content.map((movie) => (
          <motion.div
            key={movie.id}
            variants={cardVariants}
            className="flex-shrink-0 w-28 sm:w-32 lg:w-36 xl:w-40 group cursor-pointer"
            whileHover={{ 
              scale: 1.06,
              transition: { type: "spring", stiffness: 500, damping: 30 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Movie Poster */}
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 lg:mb-3 shadow-lg">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x600/1f2937/f3f4f6?text=${encodeURIComponent(movie.title)}`;
                }}
              />
              
              {/* Black Transparent Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            </div>

            {/* Title */}
            <h4 className="text-white font-medium text-xs sm:text-sm text-center line-clamp-2 group-hover:text-gray-300 transition-colors">
              {movie.title}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const GenresComponent = () => {
  const genres = [
    { title: "Action & Adventure", content: genreContent.action, gradient: "from-red-500 to-orange-500" },
    { title: "Comedy", content: genreContent.comedy, gradient: "from-yellow-400 to-pink-400" },
    { title: "Horror & Thriller", content: genreContent.horror, gradient: "from-purple-600 to-red-600" },
    { title: "Drama", content: genreContent.drama, gradient: "from-blue-400 to-purple-500" },
    { title: "Sci-Fi & Fantasy", content: genreContent.sciFi, gradient: "from-cyan-400 to-blue-600" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-6 lg:py-10 px-3 sm:px-4 lg:px-6 xl:px-8">
      <div className="max-w-full mx-auto">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 lg:mb-4">
            Explore by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Genre</span>
          </h1>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            Discover your next favorite movie or show across different genres
          </p>
        </motion.div>

        {/* Genre Sliders */}
        <div className="space-y-1 lg:space-y-2">
          {genres.map((genre, index) => (
            <motion.div
              key={genre.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <GenreSlider
                title={genre.title}
                content={genre.content}
                gradient={genre.gradient}
              />
            </motion.div>
          ))}
        </div>

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

export default GenresComponent;