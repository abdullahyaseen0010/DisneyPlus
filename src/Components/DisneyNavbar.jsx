import React, { useState } from "react";
import { 
  Home, 
  Search, 
  Plus, 
  Star, 
  Film, 
  Tv,
  User,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { id: 1, name: "HOME", icon: Home, path: "/" },
  { id: 2, name: "SEARCH", icon: Search, path: "/search" },
  { id: 3, name: "WATCHLIST", icon: Plus, path: "/watchlist" },
  { id: 4, name: "ORIGINALS", icon: Star, path: "/originals" },
  { id: 5, name: "MOVIES", icon: Film, path: "/movies" },
  { id: 6, name: "SERIES", icon: Tv, path: "/series" },
];

const DisneyNavbar = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-900 text-white px-4 sm:px-8 py-4 border-b border-slate-800">
        <div className="flex items-center max-w-7xl mx-auto">
          
          {/* Disney+ Logo */}
          <motion.div 
            className="flex items-center space-x-2 mr-4 sm:mr-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-bold tracking-wide cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Disney+
            </motion.div>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const isActive = activeItem === item.id;
              const Icon = item.icon;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-slate-800 rounded-lg"
                      layoutId="activeBackground"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ 
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                      }}
                    />
                  )}
                  
                  {/* Icon with animation */}
                  <motion.div
                    className="relative z-10"
                    animate={isActive ? { 
                      scale: [1, 1.2, 1],
                      transition: { duration: 0.3 }
                    } : {}}
                  >
                    <Icon size={16} />
                  </motion.div>
                  
                  {/* Text */}
                  <span className="text-sm font-medium relative z-10">{item.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Tablet Navigation Menu (Icons Only) */}
          <div className="hidden sm:flex lg:hidden items-center space-x-1">
            {navigationItems.map((item, index) => {
              const isActive = activeItem === item.id;
              const Icon = item.icon;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`flex items-center justify-center p-2 rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-slate-800 rounded-lg"
                      layoutId="activeBackgroundTablet"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ 
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                      }}
                    />
                  )}
                  
                  {/* Icon with animation */}
                  <motion.div
                    className="relative z-10"
                    animate={isActive ? { 
                      scale: [1, 1.3, 1],
                      transition: { duration: 0.3 }
                    } : {}}
                  >
                    <Icon size={18} />
                  </motion.div>
                </motion.button>
              );
            })}
          </div>

          {/* User Profile */}
          <motion.div 
            className="flex items-center ml-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden cursor-pointer shadow-md relative"
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="https://i.pinimg.com/736x/24/da/7b/24da7b50a84de57b771ef7f9492c8885.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              
              {/* Hover ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="sm:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 ml-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="sm:hidden bg-slate-900 border-b border-slate-800 px-4 py-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div 
              className="flex flex-col space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              {navigationItems.map((item, index) => {
                const isActive = activeItem === item.id;
                const Icon = item.icon;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left relative ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ 
                      x: 5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active background */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-slate-800 rounded-lg"
                        layoutId="activeBackgroundMobile"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{ 
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                        }}
                      />
                    )}
                    
                    {/* Icon with animation */}
                    <motion.div
                      className="relative z-10"
                      animate={isActive ? { 
                        scale: [1, 1.2, 1],
                        transition: { duration: 0.3 }
                      } : {}}
                    >
                      <Icon size={18} />
                    </motion.div>
                    
                    {/* Text */}
                    <span className="text-sm font-medium relative z-10">{item.name}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DisneyNavbar;