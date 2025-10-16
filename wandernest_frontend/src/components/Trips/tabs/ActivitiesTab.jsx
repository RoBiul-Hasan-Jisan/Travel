import React from 'react';

const ActivitiesTab = ({ trip }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Extended Activities</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(trip.extendedActivities || {}).map(([category, activities]) => (
          <div key={category} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              {category === 'adventure' ? '🧗' : 
               category === 'cultural' ? '🏛️' : 
               category === 'food' ? '🍴' : 
               category === 'family' ? '👨‍👩‍👧‍👦' :
               category === 'relaxing' ? '😌' :
               category === 'romantic' ? '💕' : '🛍️'}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  {typeof activity === 'string' ? (
                    <p className="text-gray-700">{activity}</p>
                  ) : (
                    <>
                      <h4 className="font-semibold text-gray-800">{activity.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesTab;