import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiOutlineCalendar } from 'react-icons/hi'
import { RiRoadMapLine } from 'react-icons/ri'

const FeaturesSection = () => {
  const featureItems = [
    {
      icon: <HiOutlineLightBulb className="w-7 h-7 text-purple-600" />,
      title: "AI-Powered Travel Insights",
      description: "Our AI learns your travel style — from foodie spots to hidden beaches — and builds plans that feel tailor-made."
    },
    {
      icon: <HiOutlineCalendar className="w-7 h-7 text-blue-600" />,
      title: "Smart Daily Itineraries",
      description: "Enjoy stress-free travel with optimized routes, timing, and suggestions updated in real time."
    },
    {
      icon: <RiRoadMapLine className="w-7 h-7 text-orange-500" />,
      title: "Authentic Local Experiences",
      description: "Discover hidden gems and local favorites you’d never find on the usual travel apps."
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="max-w-7xl mx-auto mt-28 px-6 md:px-10"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-200"
        >
          Why Travelers <span className="text-red-500">Love WanderNest AI</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-200 max-w-2xl mx-auto text-lg"
        >
          Plan smarter, explore deeper — and let artificial intelligence craft journeys that match your vibe, not just your budget.
        </motion.p>
      </div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {featureItems.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default FeaturesSection
