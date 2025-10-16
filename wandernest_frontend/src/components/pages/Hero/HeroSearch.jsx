import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../../ui/button'
import { FiSearch, FiArrowRight } from 'react-icons/fi'
import { HiOutlineMicrophone, HiSparkles } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const HeroSearch = ({ searchInput, setSearchInput, isProcessing, showSuggestion, setShowSuggestion, setIsProcessing }) => {
  const [isListening, setIsListening] = useState(false)

  const handleVoiceSearch = () => {
    setIsListening(true)
    setIsProcessing(true)
    
    setTimeout(() => {
      setIsProcessing(false)
      setIsListening(false)
      setSearchInput("New York City in autumn with Central Park's fall foliage.")
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="relative mt-6 max-w-lg"
    >
      <div className="flex overflow-hidden rounded-full border bg-white shadow-md">
        <div className="flex items-center pl-4">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Where do you want to go?"
          className="w-full py-4 px-4 outline-none"
        />
        <div className="flex">
          <button 
            onClick={handleVoiceSearch}
            className={`flex items-center justify-center h-10 w-10 my-auto mr-1 rounded-full transition-all ${
              isListening ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <HiOutlineMicrophone className="h-5 w-5" />
          </button>
          <Link to={'/create-trip'}>
            <Button className="m-1 rounded-full bg-gradient-to-r from-[#110259] to-[#bef97a] hover:opacity-90 px-6">
              <FiArrowRight className="mr-2" /> Plan Trip
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Voice processing indicator */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 bg-white p-3 rounded-lg shadow-md w-full"
          >
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0s" }}></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
              <span className="text-sm text-gray-600">Processing your voice input...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* AI Suggestion Popup */}
      <AnimatePresence>
        {showSuggestion && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 bg-white p-4 rounded-lg shadow-md w-full z-10"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <HiSparkles className="text-yellow-500 mr-2" />
                <span className="font-medium text-gray-800">AI Suggestion</span>
              </div>
              <button 
                onClick={() => setShowSuggestion(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <MdClose />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">Based on your location and the season, you might enjoy:</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium text-blue-800">Cherry Blossom Season in Japan</p>
              <p className="text-sm text-blue-700">Perfect timing for a 10-day cultural exploration</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default HeroSearch