import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/button'
import { HiSparkles } from 'react-icons/hi'

const AIPredictions = () => {
  const aiPredictions = [
    { location: "Tokyo, Japan", confidence: 94, reason: "Based on your interest in modern culture and street food" },
    { location: "Paris, France", confidence: 89, reason: "You searched for romantic destinations and art museums" },
    { location: "Cappadocia, Turkey", confidence: 86, reason: "Matches your interest in unique landscapes and hot air balloon rides" },
    { location: "Reykjavik, Iceland", confidence: 90, reason: "Aligned with your love for adventure and natural wonders" },
    { location: "Bangkok, Thailand", confidence: 84, reason: "Based on your foodie preferences and night market interests" },
    { location: "Vancouver, Canada", confidence: 88, reason: "You looked for scenic cities with outdoor activities" },
    { location: "Cape Town, South Africa", confidence: 85, reason: "Matches your interest in beaches and cultural diversity" },
    { location: "Barcelona, Spain", confidence: 91, reason: "You favor destinations with vibrant nightlife and architecture" },
    { location: "Zurich, Switzerland", confidence: 83, reason: "Based on your interest in peaceful lakeside destinations" },
    
  ]

  //  Shuffle the list so order changes each time
  const shuffledPredictions = [...aiPredictions].sort(() => 0.5 - Math.random())

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="max-w-7xl mx-auto mt-20 px-4 md:px-8"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-1 rounded-full text-purple-800 font-medium text-sm"
        >
          <HiSparkles className="mr-2 text-purple-600" />
          AI-Curated Travel Picks ✈️
        </motion.div>

        <h2 className="text-4xl font-bold mt-4 text-gray-300">
          Your <span className="text-blue-400">Perfect Getaway</span> Starts Here
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mt-3">
          Explore destinations uniquely matched to your travel style. From iconic landmarks to hidden gems — our AI helps you discover where you truly belong next.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {shuffledPredictions.map((prediction, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{prediction.location}</h3>
                <div className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  {prediction.confidence}% Match
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {prediction.reason}.
              </p>

              <div className="flex justify-between items-center border-t pt-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-6 rounded-full ${i < Math.round(prediction.confidence / 20) ? 'bg-purple-500' : 'bg-gray-200'}`}
                    ></div>
                  ))}
                </div>

                <Link to={'/create-trip'}>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="rounded-full border-gray-200 text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default AIPredictions
