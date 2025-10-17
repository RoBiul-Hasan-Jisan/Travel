import React, { useState, useEffect, useRef } from 'react'
import { MdOutlineAutoAwesome, MdTravelExplore } from 'react-icons/md'
import { Globe, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import HeroImage from './Hero/HeroImage'
import AIPredictions from './Hero/AIPredictions'
import FeaturesSection from './Hero/FeaturesSection'
import PopularDestinations from './Hero/PopularDestinations'
import CallToAction from './Hero/CallToAction'
import HeroSearch from './Hero/HeroSearch'

function Hero() {
  const [searchInput, setSearchInput] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuggestion, setShowSuggestion] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowSuggestion(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8 lg:space-y-10">
            
            {/* AI Badge */}
            <div className="inline-flex items-center px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm shadow-2xl">
              <MdOutlineAutoAwesome className="text-lg text-cyan-400 mr-3" />
              <span>Next-Gen AI Travel Planning</span>
              <div className="ml-3 w-2 h-2 bg-cyan-400 rounded-full" />
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Explore The
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  World Smarter
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Let AI craft your perfect journey. From breathtaking landscapes to hidden urban gems, 
                we transform your travel dreams into unforgettable realities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://portfolio-nine-gilt-93.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl shadow-2xl font-bold transition-all duration-300"
              >
                <Globe className="w-6 h-6" />
                <span>Start Your Adventure</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>

              <Link to="/ai-suggestion">
  <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-2xl font-bold transition-all duration-300 hover:bg-white/10 cursor-pointer">
    <MdTravelExplore className="w-6 h-6" />
    <span>AI Suggestions</span>
  </button>
</Link>

            </div>

            {/* Hero Search */}
            <div className="pt-6">
              <HeroSearch 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                isProcessing={isProcessing}
                showSuggestion={showSuggestion}
                setShowSuggestion={setShowSuggestion}
                setIsProcessing={setIsProcessing}
              />
            </div>

            {/* Trending Destinations */}
            <div className="flex flex-col items-center lg:items-start gap-4 pt-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">Trending Now:</span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['Tokyo', 'Paris', 'Bali', 'New York', 'Sydney', 'Dubai'].map((item, index) => (
                  <span
                    key={index}
                    className="px-5 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white font-medium cursor-pointer transition-all duration-300 shadow-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
         
            <HeroImage isVisible={isVisible} />
         
        </div>
      </div>

      {/* Sections */}
      <section>
        <AIPredictions />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <PopularDestinations />
      </section>
      <section>
        <CallToAction />
      </section>
    </div>
  )
}

export default Hero
