import React, { useState } from 'react';

const PhotosTab = ({ trip }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Photo Gallery & Suggestions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(trip.imageSuggestions || []).map((suggestion, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => setSelectedImage(suggestion)}
          >
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-4xl">
              📸
            </div>
            <div className="p-4">
              <p className="font-semibold text-gray-800 mb-2">
                {typeof suggestion === 'string' ? suggestion : suggestion.location || 'Photo Spot'}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {typeof suggestion === 'object' ? suggestion.tip : 'Great photo opportunity'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {typeof selectedImage === 'string' ? selectedImage : selectedImage.location || 'Photo Spot'}
                </h3>
                <button 
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white text-6xl mb-6">
                📸
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p><strong className="text-gray-800">Tip:</strong> {typeof selectedImage === 'object' ? selectedImage.tip : 'Capture during golden hour for best lighting'}</p>
                <p><strong className="text-gray-800">Best Time:</strong> {typeof selectedImage === 'object' ? selectedImage.bestTime : 'Morning'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosTab;