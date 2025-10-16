import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi'
import { RiCompassDiscoverLine, RiStarFill } from 'react-icons/ri'

const HeroImage = ({ isVisible }) => {
  // Floating animation for cards
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Staggered fade-in for elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="lg:w-1/2 relative"
    >
      {/* Main Image Container */}
      <motion.div
        variants={itemVariants}
        className="relative z-10"
      >
        {/* Main Image with Enhanced Styling */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/landing.png" 
            alt="Travel destination" 
            className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Image Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2 shadow-lg"
          >
            <RiStarFill className="text-yellow-500 text-lg" />
            <span className="text-sm font-semibold">4.8 Rating</span>
          </motion.div>
        </div>

        {/* Floating Card 1 - Destination Info */}
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          className="absolute -left-6 top-1/4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-100"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <FiMapPin className="text-white text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Popular Destination</p>
              <p className="text-sm font-bold text-gray-800">Bali, Indonesia</p>
              <div className="flex items-center gap-1 mt-1">
                <RiStarFill className="text-yellow-400 text-xs" />
                <span className="text-xs text-gray-600">4.9 • 2.4k reviews</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Card 2 - Trip Details */}
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute -right-6 bottom-1/3 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-100"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
              <FiCalendar className="text-white text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Perfect Time</p>
              <p className="text-sm font-bold text-gray-800">May - October</p>
              <div className="flex items-center gap-1 mt-1">
                <FiUsers className="text-gray-400 text-xs" />
                <span className="text-xs text-gray-600">Best weather</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Card 3 - AI Recommendation */}
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-5 shadow-2xl text-white max-w-xs w-full"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <RiCompassDiscoverLine className="text-white text-lg" />
                </div>
                <span className="text-sm font-semibold">AI Recommendation</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 rounded-full border-2 border-white/30 border-t-white"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Match Score</span>
                <span className="font-bold">94%</span>
              </div>
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-white rounded-full shadow-lg"
                />
              </div>
            </div>
            
            <p className="text-xs opacity-90">
              Perfect match for adventure seekers & beach lovers
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Background Effects */}
      <div className="absolute -z-10 inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Decorative Border Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute -inset-4 border-2 border-blue-200/30 rounded-3xl pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute -inset-6 border-2 border-cyan-200/20 rounded-3xl pointer-events-none"
      />
    </motion.div>
  )
}

export default HeroImage