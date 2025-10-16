import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tripsData } from '../../data/tripData.json';
// Import your packing checklists data
import { packingChecklists } from '../../data/tripData.json'; 
import OverviewTab from './tabs/OverviewTab';
import ItineraryTab from './tabs/ItineraryTab';
import AccommodationTab from './tabs/AccommodationTab';
import ActivitiesTab from './tabs/ActivitiesTab';
import BudgetTab from './tabs/BudgetTab';
import PhotosTab from './tabs/PhotosTab';
import PackingTab from './tabs/PackingTab';

const TripDetails = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const id = parseInt(tripId);
    if (tripsData[id]) {
      const foundTrip = tripsData[id];
      setTrip(foundTrip);
    }
  }, [tripId]);

  const tabs = [
    { key: 'overview', icon: '📋', label: 'Overview' },
    { key: 'itinerary', icon: '🗓️', label: 'Itinerary' },
    { key: 'accommodation', icon: '🏨', label: 'Stay' },
    { key: 'activities', icon: '🎯', label: 'Activities' },
    { key: 'budget', icon: '💰', label: 'Budget' },
    { key: 'photos', icon: '📸', label: 'Photos' },
    { key: 'packing', icon: '🎒', label: 'Packing' }
  ];

  const renderTabContent = () => {
    if (!trip) return null;

    const tabProps = { trip };
    
    switch (activeTab) {
      case 'overview':
        return <OverviewTab {...tabProps} />;
      case 'itinerary':
        return <ItineraryTab {...tabProps} />;
      case 'accommodation':
        return <AccommodationTab {...tabProps} />;
      case 'activities':
        return <ActivitiesTab {...tabProps} />;
      case 'budget':
        return <BudgetTab {...tabProps} />;
      case 'photos':
        return <PhotosTab {...tabProps} />;
      case 'packing':
        return <PackingTab {...tabProps} packingChecklists={packingChecklists} />;
      default:
        return <OverviewTab {...tabProps} />;
    }
  };

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Loading trip details...</h2>
        
        </div>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
         
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{trip.name}, {trip.country}</h1>
            <p className="text-xl text-gray-600">
              {trip.duration} • {trip.travelers}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2 mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map(({ key, icon, label }) => (
              <button
                key={key}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  activeTab === key 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(key)}
              >
                <span className="text-lg">{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default TripDetails;