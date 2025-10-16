import React, { useState } from 'react';

const UserManual = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const sections = [
    { id: 'introduction', title: 'Getting Started', icon: '🚀' },
    { id: 'create-trip', title: 'Plan a Trip', icon: '🗺️' },
    { id: 'view-trip', title: 'Your Trips', icon: '📋' },
    { id: 'profile', title: 'Profile', icon: '👤' },
    { id: 'tips', title: 'Pro Tips', icon: '💡' },
    { id: 'faq', title: 'FAQ', icon: '❓' },
    { id: 'contact', title: 'Help', icon: '💬' }
  ];

  const quickActions = [
    { title: 'Plan First Trip', description: 'Start your journey', icon: '✨', color: 'from-purple-500 to-pink-500' },
    { title: 'Watch Tutorial', description: '2 min video guide', icon: '🎬', color: 'from-blue-500 to-cyan-500' },
    { title: 'Explore Features', description: 'See what\'s possible', icon: '🔍', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            WanderNest Guide
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your visual guide to planning amazing trips with AI-powered assistance
          </p>
          
          {/* Search Bar */}
       
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center text-white text-xl mb-4`}>
                {action.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{action.title}</h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sticky Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-2">📚</span>
                Guide Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center group ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-lg mr-3">{section.icon}</span>
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Progress Indicator */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Guide Progress</span>
                  <span className="text-sm text-gray-500">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              
              {/* Introduction */}
              <section id="introduction" className="mb-16 scroll-mt-24">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🚀
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">Welcome to WanderNest</h2>
                    <p className="text-gray-600">Let's get you started on your travel planning journey</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                      <span className="text-blue-500 mr-2">🎯</span>
                      What You Can Do
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Plan trips in 5 minutes</li>
                      <li>• Get AI-powered suggestions</li>
                      <li>• Manage your travel preferences</li>
                      <li>• Share plans with friends</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                      <span className="text-green-500 mr-2">⚡</span>
                      Quick Start
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>1. Create your account</li>
                      <li>2. Set travel preferences</li>
                      <li>3. Plan your first trip</li>
                      <li>4. Enjoy your journey!</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
                  <div className="flex">
                    <div className="flex-shrink-0 text-yellow-400 text-xl">💡</div>
                    <div className="ml-3">
                      <p className="text-yellow-700 font-medium">Pro Tip</p>
                      <p className="text-yellow-600 mt-1">Start with a 3-4 day trip for the best AI recommendations</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Create Trip */}
              <section id="create-trip" className="mb-16 scroll-mt-24">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🗺️
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">Plan Your Perfect Trip</h2>
                    <p className="text-gray-600">Follow these simple steps to create your dream vacation</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { step: 1, title: 'Destination', icon: '📍', color: 'from-blue-400 to-cyan-400' },
                    { step: 2, title: 'Dates', icon: '📅', color: 'from-purple-400 to-pink-400' },
                    { step: 3, title: 'Preferences', icon: '❤️', color: 'from-orange-400 to-red-400' },
                    { step: 4, title: 'Generate', icon: '✨', color: 'from-green-400 to-emerald-400' }
                  ].map((item) => (
                    <div key={item.step} className="text-center group cursor-pointer">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                        {item.icon}
                      </div>
                      <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                        {item.step}
                      </div>
                      <p className="font-semibold text-gray-700">{item.title}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-purple-500 mr-2">🎨</span>
                    Personalization Options
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Adventure', 'Relaxation', 'Culture', 'Food', 'Luxury', 'Budget', 'Family', 'Solo'].map((item) => (
                      <div key={item} className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-200">
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* View Trip */}
              <section id="view-trip" className="mb-16 scroll-mt-24">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📋
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">Manage Your Trips</h2>
                    <p className="text-gray-600">Everything you need to know about your travel plans</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <span className="text-blue-500 mr-2">📅</span>
                        Daily Schedule
                      </h4>
                      <div className="space-y-3">
                        {['Morning', 'Afternoon', 'Evening'].map((time) => (
                          <div key={time} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">{time}</span>
                            <span className="text-sm text-gray-500">Activities & Places</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <span className="text-green-500 mr-2">💰</span>
                        Budget Overview
                      </h4>
                      <div className="space-y-2">
                        {[
                          { category: 'Accommodation', amount: '$450', color: 'bg-blue-500' },
                          { category: 'Activities', amount: '$200', color: 'bg-green-500' },
                          { category: 'Food', amount: '$180', color: 'bg-yellow-500' },
                          { category: 'Transport', amount: '$120', color: 'bg-purple-500' }
                        ].map((item) => (
                          <div key={item.category} className="flex items-center justify-between">
                            <span className="text-gray-600">{item.category}</span>
                            <span className="font-semibold text-gray-800">{item.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="mb-16 scroll-mt-24">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    ❓
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Quick answers to common questions</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "How does the AI create my travel plan?",
                      answer: "We analyze your preferences and match them with thousands of travel options to create your perfect itinerary."
                    },
                    {
                      question: "Can I modify my trip after it's generated?",
                      answer: "Yes! You can easily edit any part of your trip - change activities, adjust dates, or update your budget."
                    },
                    {
                      question: "Is my payment information secure?",
                      answer: "Absolutely. We use bank-level encryption and never store your full payment details on our servers."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                        <span className="text-blue-500 mr-2">Q:</span>
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 ml-6">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-24">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
                  <p className="text-blue-100 mb-6 text-lg">We're here to assist you with any questions</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="mr-2">📧</span>
                        Email Support
                      </h4>
                      <p className="text-blue-100">help@wandernest.com</p>
                      <p className="text-blue-200 text-sm mt-1">Typically respond within 2 hours</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="mr-2">💬</span>
                        Live Chat
                      </h4>
                      <p className="text-blue-100">Available 9AM-6PM EST</p>
                      <p className="text-blue-200 text-sm mt-1">later improve  hare chat type somthing</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManual;