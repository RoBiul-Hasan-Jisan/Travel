import React from 'react';

const AccommodationTab = ({ trip }) => {
  const getZonePros = (zone) => {
    return zone.pros || [
      'Central location',
      'Great views', 
      'Good transportation links'
    ];
  };

  const getZoneCons = (zone) => {
    return zone.cons || [
      'Can be crowded',
      'Higher prices',
      'Noisy at night'
    ];
  };

  const getZonePriceRange = (zone) => {
    return zone.priceRange || '$$ - $$$';
  };

  const getHotelAmenities = (hotel) => {
    return hotel.amenities || ['Free WiFi', 'Air Conditioning', 'Swimming Pool'];
  };

  return (
    <div className="space-y-8">
      {/* Hotels Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🏨 Recommended Hotels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trip.hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg text-gray-800">{hotel.name}</h4>
                  <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                    ⭐ {hotel.rating}
                  </div>
                </div>
                <p className="text-blue-600 font-semibold text-lg mb-2">{hotel.price}</p>
                <p className="text-gray-600 mb-3">{hotel.type}</p>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                  📍 {hotel.location}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {getHotelAmenities(hotel).map((amenity, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accommodation Zones */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🏙️ Accommodation Zones
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trip.accommodationZones.map((zone, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h4 className="font-bold text-xl text-gray-800 mb-3">{zone.name}</h4>
              <p className="text-gray-600 mb-4">{zone.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    ✅ Pros
                  </h5>
                  <ul className="space-y-1">
                    {getZonePros(zone).map((pro, idx) => (
                      <li key={idx} className="text-green-700 text-sm">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    ❌ Cons
                  </h5>
                  <ul className="space-y-1">
                    {getZoneCons(zone).map((con, idx) => (
                      <li key={idx} className="text-red-700 text-sm">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-yellow-800 font-semibold flex items-center gap-2">
                  💰 {getZonePriceRange(zone)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationTab;