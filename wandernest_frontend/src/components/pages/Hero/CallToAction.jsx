import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/button'
import { FiArrowRight } from 'react-icons/fi'

const CallToAction = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="max-w-7xl mx-auto mt-24 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600"
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 p-12 text-white space-y-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Skip the Planning Stress.  
            <span className="text-blue-200 block">Let AI Craft Your Perfect Trip.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-blue-100 text-lg max-w-md"
          >
            Whether it’s a beach escape, mountain adventure, or city getaway — we’ll build the perfect plan for you.  
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link to="/create-trip">
              <Button className="rounded-full bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-semibold flex items-center">
                Plan My Trip <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative h-[320px] md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2940&auto=format&fit=crop" 
            alt="Travel Adventure" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      </div>
    </motion.div>
  )
}

export default CallToAction
