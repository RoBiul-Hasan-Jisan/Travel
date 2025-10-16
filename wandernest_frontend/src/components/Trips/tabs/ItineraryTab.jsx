import React, { useState } from 'react';

const ItineraryTab = ({ trip }) => {
  const [expandedDays, setExpandedDays] = useState(new Set());

  const toggleDayExpand = (day) => {
    const newExpanded = new Set(expandedDays);
    newExpanded.has(day) ? newExpanded.delete(day) : newExpanded.add(day);
    setExpandedDays(newExpanded);
  };

  const expandAllDays = () => {
    const allDays = new Set(trip.itinerary.map(day => day.day));
    setExpandedDays(allDays);
  };

  const collapseAllDays = () => {
    setExpandedDays(new Set());
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Your {trip.duration} Itinerary</h2>
        <div className="flex gap-3">
          <button 
            onClick={expandAllDays}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Expand All
          </button>
          <button 
            onClick={collapseAllDays}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {trip.itinerary.map((day) => (
          <div key={day.day} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div 
              className={`p-6 cursor-pointer transition-all duration-300 ${
                expandedDays.has(day.day) 
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => toggleDayExpand(day.day)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Day {day.day}: {day.theme}</h3>
                    {day.highlights && (
                      <p className="text-gray-600 mt-1">{day.highlights.join(' • ')}</p>
                    )}
                  </div>
                </div>
                <div className="text-2xl font-light text-gray-400">
                  {expandedDays.has(day.day) ? '−' : '+'}
                </div>
              </div>
            </div>
            
            {expandedDays.has(day.day) && (
              <div className="p-6 space-y-4">
                {day.activities.map((activity, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="text-sm font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {activity.time}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800 text-lg">{activity.place}</h4>
                      <p className="text-gray-600 mt-1">{activity.note}</p>
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          ⏱️ {activity.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          🎫 {activity.ticket}
                        </span>
                        {activity.cost && (
                          <span className="flex items-center gap-1">
                            💰 ${activity.cost}
                          </span>
                        )}
                      </div>
                      {activity.transport && (
                        <div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                          🚗 {activity.transport}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryTab;