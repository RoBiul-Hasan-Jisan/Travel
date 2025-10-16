import React, { useState } from 'react';

const PrivacyPolicy = () => {
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
    { id: 'introduction', title: 'Introduction', icon: '👋' },
    { id: 'information-collected', title: 'Information We Collect', icon: '📊' },
    { id: 'how-we-use', title: 'How We Use Information', icon: '🎯' },
    { id: 'information-sharing', title: 'Information Sharing', icon: '🤝' },
    { id: 'your-rights', title: 'Your Rights', icon: '🔒' },
    { id: 'data-security', title: 'Data Security', icon: '🛡️' },
    { id: 'children-privacy', title: "Children's Privacy", icon: '👶' },
    { id: 'policy-updates', title: 'Policy Updates', icon: '🔄' },
    { id: 'contact', title: 'Contact Us', icon: '📞' }
  ];

  const privacyHighlights = [
    { icon: '🔐', title: 'No Data Selling', description: 'We never sell your personal information' },
    { icon: '🎯', title: 'Purpose Driven', description: 'Only collect what improves your experience' },
    { icon: '📝', title: 'Transparent', description: 'Clear about how we use your data' },
    { icon: '⚡', title: 'Your Control', description: 'Full control over your information' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
        
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we protect and handle your personal information.
          </p>
          
          {/* Last Updated & Quick Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-600">
                📅 Last updated: <span className="font-semibold text-gray-800">
                  {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 text-center">
                <p className="text-lg font-bold text-gray-800">5 min</p>
                <p className="text-xs text-gray-500">Read Time</p>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 text-center">
                <p className="text-lg font-bold text-gray-800">9</p>
                <p className="text-xs text-gray-500">Sections</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
      
        </div>

        {/* Privacy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {privacyHighlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">
                {highlight.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sticky Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-2">📚</span>
                Policy Sections
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center group ${
                      activeSection === section.id
                        ? 'bg-green-50 text-green-600 border-l-4 border-green-600 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-lg mr-3">{section.icon}</span>
                    <span className="font-medium text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Quick Tip */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3">💡</span>
                  <div>
                    <p className="font-semibold text-blue-800 text-sm">Quick Tip</p>
                    <p className="text-blue-700 text-xs mt-1">
                      You have full control over your data at any time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    👋
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Our Commitment to You</h2>
                    <p className="text-gray-600">Transparent, secure, and respectful data handling</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <p className="text-gray-700 leading-relaxed">
                    At <strong>WanderNest</strong>, we believe in being completely transparent about how we handle your information. 
                    This policy explains what data we collect and how we use it to improve your travel planning experience.
                  </p>
                  <div className="bg-white rounded-xl p-4 mt-4 border-l-4 border-green-500">
                    <p className="text-green-700 font-medium flex items-center">
                      <span className="mr-2">🎯</span>
                      Simple Summary: We only collect information that helps us create better travel experiences for you.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-collected" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📊
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
                    <p className="text-gray-600">What we gather to serve you better</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="text-blue-500 mr-2">👤</span>
                      Information You Provide
                    </h3>
                    <ul className="space-y-3">
                      {[
                        { icon: '📝', text: 'Account details: Name, email, and password' },
                        { icon: '🎒', text: 'Travel preferences and interests' },
                        { icon: '🗓️', text: 'Trip information and destinations' },
                        { icon: '💳', text: 'Payment details (processed securely)' }
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">{item.icon}</span>
                          <span className="text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="text-purple-500 mr-2">⚡</span>
                      Automatic Collection
                    </h3>
                    <ul className="space-y-3">
                      {[
                        { icon: '📈', text: 'Usage data to improve features' },
                        { icon: '📱', text: 'Device and browser information' },
                        { icon: '📍', text: 'Location data (with permission)' }
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">{item.icon}</span>
                          <span className="text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section id="how-we-use" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🎯
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
                    <p className="text-gray-600">Making your travel experience better</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                    <div className="bg-white rounded-xl p-4 mb-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="text-orange-500 mr-2">✨</span>
                        Personalize Your Experience
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          Create custom travel plans
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          Suggest activities you'll love
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          Remember your preferences
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
                    <div className="bg-white rounded-xl p-4 mb-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="text-cyan-500 mr-2">🚀</span>
                        Improve Our Service
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                          Fix technical issues
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                          Add new features you want
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                          Make the app easier to use
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section id="information-sharing" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🤝
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">When We Share Information</h2>
                    <p className="text-gray-600">Limited and transparent sharing practices</p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: '✅', title: 'With Your Consent', desc: 'When you ask us to share' },
                      { icon: '🔧', title: 'Service Providers', desc: 'Companies that help us operate' },
                      { icon: '⚖️', title: 'Legal Requirements', desc: 'When required by law' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-500">
                    <p className="text-yellow-700 font-medium flex items-center">
                      <span className="mr-2">🚫</span>
                      We never sell your personal information to third parties.
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🔒
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Your Privacy Rights</h2>
                    <p className="text-gray-600">You have full control over your information</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="text-indigo-500 mr-2">📋</span>
                      Access & Control
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'See what information we have',
                        'Update or correct your data',
                        'Download your travel history',
                        'Request data deletion'
                      ].map((right, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                          {right}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="text-green-500 mr-2">⚙️</span>
                      Account Management
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Delete your account anytime',
                        'Opt-out of marketing emails',
                        'Control location sharing',
                        'Manage notification preferences'
                      ].map((right, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {right}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🛡️
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Keeping Your Data Safe</h2>
                    <p className="text-gray-600">Enterprise-grade security measures</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { icon: '🔐', title: 'Encryption', desc: 'All sensitive data encrypted' },
                      { icon: '🖥️', title: 'Secure Servers', desc: 'Protected infrastructure' },
                      { icon: '📅', title: 'Regular Updates', desc: 'Continuous security improvements' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2 text-emerald-500">{item.icon}</div>
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-24">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
                  <p className="text-green-100 mb-6 text-lg">
                    We're here to help you understand our privacy practices and address any concerns.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="mr-2">📧</span>
                        Email Privacy Team
                      </h4>
                      <p className="text-green-100">privacy@wandernest.com</p>
                      <p className="text-green-200 text-sm mt-1">Direct line to our privacy experts</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="mr-2">🌐</span>
                        General Support
                      </h4>
                      <p className="text-green-100">help@wandernest.com</p>
                      <p className="text-green-200 text-sm mt-1">For general questions and support</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} WanderNest. Your privacy is our priority.</p>
                <p className="mt-2">We're committed to protecting your personal information and being transparent about our practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;