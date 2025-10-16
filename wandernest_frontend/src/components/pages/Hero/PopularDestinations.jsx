import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/button'
import { FiArrowRight } from 'react-icons/fi'

const PopularDestinations = () => {
  const [activeTab, setActiveTab] = useState('popular')

  const destinationsData = {
    popular: [
      {
        name: 'Chicago, USA',
        image:
          'https://images.unsplash.com/photo-1627561993829-0adc897016e9?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500',
        tags: ['3 Days', '3–5 Travelers'],
        tripId: 1745958781034,
      },
      {
        name: 'Bali, Indonesia',
        image:
          'https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500',
        tags: ['Beach', 'Culture'],
        tripId: 1745960000000,
      },
      {
        name: 'Kyoto, Japan',
        image:
          'https://media.istockphoto.com/id/1182679050/photo/traditional-japanese-koi-pond-in-kyoto-japan.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xvh8e_xeOwGC7mnYTtKiMDesZ8AZXjM0t6HPUV0JOIM=',
        tags: ['Historic', 'Culture'],
        tripId: 1745961000000,
      },
    ],
    recommended: [
      {
        name: 'Barcelona, Spain',
        image:
          'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=930',
        tags: ['Art', 'Architecture'],
        tripId: 1745958781034,
      },
      {
        name: 'Cape Town, South Africa',
        image:
          'https://images.unsplash.com/photo-1612860606900-25b4b0bc79ba?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500',
        tags: ['Adventure', 'Nature'],
        tripId: 1745958781034,
      },
      {
        name: 'Paris, France',
        image:
          'https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500',
        tags: ['Romantic', 'Luxury'],
        tripId: 1745962000000,
      },
    ],
    trending: [
      {
        name: 'Istanbul, Turkey',
        image:
          'https://plus.unsplash.com/premium_photo-1691338312403-e9f7f7984eeb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500',
        tags: ['Culture', 'Food'],
        tripId: 1745963000000,
      },
      {
        name: 'Santorini, Greece',
        image:
          'https://soloflighted.com/wp-content/uploads/2013/06/clip_image001.jpg',
        tags: ['Romantic', 'Luxury'],
        tripId: 1745959400000,
      },
      {
        name: 'Seoul, South Korea',
        image:
          'https://plus.unsplash.com/premium_photo-1661963468634-71b9482a3efe?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500',
        tags: ['Modern', 'Nightlife'],
        tripId: 1745958781034,
      },
    ],
  }

  const destinations = destinationsData[activeTab]

  return (
    <section className="max-w-7xl mx-auto mt-24 px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-4 sm:mb-0">
          Explore Destinations
        </h2>

        <div className="flex gap-3">
          {['popular', 'recommended', 'trending'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Destination Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {!Array.isArray(destinations) ? (
            <p className="text-gray-500 text-center col-span-full">
              Loading destinations...
            </p>
          ) : destinations.length === 0 ? (
            <p className="text-gray-500 text-center col-span-full">
              No destinations found.
            </p>
          ) : (
            destinations.map((dest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-white"
              >
                <div className="h-80 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {Array.isArray(dest.tags) &&
                      dest.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/30 text-white rounded-full text-xs backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  <h3 className="text-white text-xl font-bold mb-1">
                    {dest.name}
                  </h3>

                  <Link to={`/view-trip/${dest.tripId}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-2 flex items-center gap-2 text-sm text-white/90 hover:text-white"
                    >
                      Plan Your Trip <FiArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link to="/create-trip">
          <Button
            variant="outline"
            className="px-10 py-6 rounded-full border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold text-lg shadow-md hover:shadow-lg transition-all"
          >
            Discover More <FiArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default PopularDestinations
