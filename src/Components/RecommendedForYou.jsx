import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const recommendedContent = [
  {
    id: 1,
    title: "The Mandalorian",
    image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/mandalorian.54000f.pw_500x749.jpg?v=1599582718"
  },
  {
    id: 2,
    title: "Turning Red",
    image: "https://i.pinimg.com/736x/02/b8/7a/02b87a00ef7db7db04caf723905dcefc.jpg"
  },
  {
    id: 3,
    title: "Moon Knight",
    image: "https://www.instituteforcreativemindfulness.com/wp-content/uploads/2022/05/moonknight-poster.jpg"
  },
  {
    id: 4,
    title: "Luca",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdUHiYOJy_RlKzegLWF61zUvaSTqHvCPA8w&s"
  },
  {
    id: 5,
    title: "Encanto",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cvaLAijOPGPirJUDeS784b7Cj6wQO0fXqg&s"
  },
  {
    id: 6,
    title: "Spider-Man",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZS5n9Vgq1P_ydVtCskF6w3UJcP1bqlFiuw&s"
  },
  {
    id: 7,
    title: "Frozen",
    image: "https://m.media-amazon.com/images/I/71NroNFvGkL._UF894,1000_QL80_.jpg"
  },
  {
    id: 8,
    title: "Moana",
    image: "https://m.media-amazon.com/images/I/81eN27QvPnL._UF894,1000_QL80_.jpg"
  },
  {
    id: 9,
    title: "The Lion King",
    image: "https://i.pinimg.com/474x/ff/9e/43/ff9e433d875284aa5563f8d2735dd9e2.jpg"
  },
  {
    id: 10,
    title: "Toy Story 4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-0DP5Hl069oYn3EVKQGt5sPYvf1gzvFsdQ&s"
  },
  {
    id: 11,
    title: "Coco",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWximgwGEdK47GpRe3KSfiNg718ztDVe2q3Q&s"
  },
  {
    id: 12,
    title: "Soul",
    image: "https://wallpapercat.com/w/full/b/a/3/47137-1536x2732-samsung-hd-soul-pixar-background-photo.jpg"
  },
  {
    id: 13,
    title: "Raya",
    image: "https://mrwallpaper.com/images/thumbnail/raya-and-the-last-dragon-raya-blue-portrait-art-rqzfwfmjdfr9htl7.webp"
  },
  {
    id: 14,
    title: "Cruella",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8unRdkJzTbqJ7YOjCgOiRnB-vVddSCBOtig&s"
  },
  {
    id: 15,
    title: "WandaVision",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFDtZZAOPGfYWe8sTkyscNLxBoZp9jTD_qg&s"
  },
  {
    id: 16,
    title: "The Falcon",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf853092-d54d-4bd0-842b-1facd2b89c32/de4khr0-cb766443-1965-4260-922b-32bacba70a38.png/v1/fill/w_1280,h_1921,q_80,strp/falcon_and_the_winter_soldier__fanmade__poster__2__by_iwasboredsoididthis_de4khr0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmODUzMDkyLWQ1NGQtNGJkMC04NDJiLTFmYWNkMmI4OWMzMlwvZGU0a2hyMC1jYjc2NjQ0My0xOTY1LTQyNjAtOTIyYi0zMmJhY2JhNzBhMzgucG5nIiwiaGVpZ2h0IjoiPD0xOTIxIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYmY4NTMwOTItZDU0ZC00YmQwLTg0MmItMWZhY2QyYjg5YzMyXC9pd2FzYm9yZWRzb2lkaWR0aGlzLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.MciHrXXHqxkx6udYQb1ZyWtn-ax2pUN2osi_X1BUsw0"
  },
  {
    id: 17,
    title: "Loki",
    image: "https://i.pinimg.com/736x/2b/24/22/2b2422be536bd0e2d360afb61ff51d9e.jpg"
  },
  {
    id: 18,
    title: "Finding Nemo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9bz6jlpa5u3Vx1Hp2Qwho297f1enAX3wZw&s"
  }
];

const RecommendedForYou = () => {
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
    const walk = (x - sliderRef.current.offsetLeft - startX) * 1.5;
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
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Recommended for You
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Personalized picks based on your viewing history
          </p>
        </motion.div>

        {/* Slider */}
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
          {recommendedContent.map((content) => (
            <motion.div
              key={content.id}
              variants={cardVariants}
              className="flex-shrink-0 w-48 bg-slate-800 rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3)' 
              }}
            >
              {/* Portrait Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-base text-center">
                  {content.title}
                </h3>
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
        `}</style>
      </div>
    </div>
  );
};

export default RecommendedForYou;