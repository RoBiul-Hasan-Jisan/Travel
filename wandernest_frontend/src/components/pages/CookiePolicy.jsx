import React, { useState } from 'react';

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState('what-are-cookies');
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const sections = [
    { id: 'what-are-cookies', title: 'What Are Cookies?', icon: '🍪' },
    { id: 'types-of-cookies', title: 'Types of Cookies', icon: '📊' },
    { id: 'managing-cookies', title: 'Managing Cookies', icon: '⚙️' },
    { id: 'third-party', title: 'Third-Party Cookies', icon: '🤝' },
    { id: 'updates', title: 'Policy Updates', icon: '🔄' },
    { id: 'contact', title: 'Contact Us', icon: '📞' }
  ];

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      icon: '🔐',
      color: 'from-red-500 to-orange-500',
      description: 'Required for basic site functionality',
      examples: ['Login sessions', 'Security features', 'Site navigation'],
      necessary: true
    },
    {
      type: 'Preference Cookies',
      icon: '⭐',
      color: 'from-blue-500 to-cyan-500',
      description: 'Remember your settings and preferences',
      examples: ['Language settings', 'Theme preferences', 'Travel preferences'],
      necessary: false
    },
    {
      type: 'Analytics Cookies',
      icon: '📈',
      color: 'from-green-500 to-emerald-500',
      description: 'Help us understand how visitors use our site',
      examples: ['Page visits', 'Feature usage', 'Improvement insights'],
      necessary: false
    }
  ];

  const browserGuides = [
    { browser: 'Chrome', icon: '🌐', link: 'https://support.google.com/chrome/answer/95647' },
    { browser: 'Firefox', icon: '🦊', link: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
    { browser: 'Safari', icon: '🍎', link: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
    { browser: 'Edge', icon: '🔷', link: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Learn how we use cookies to enhance your experience on WanderNest
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
                <p className="text-lg font-bold text-gray-800">3 min</p>
                <p className="text-xs text-gray-500">Read Time</p>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 text-center">
                <p className="text-lg font-bold text-gray-800">6</p>
                <p className="text-xs text-gray-500">Sections</p>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 text-center">
                <p className="text-lg font-bold text-gray-800">3</p>
                <p className="text-xs text-gray-500">Cookie Types</p>
              </div>
            </div>
          </div>

          {/* Search Bar  latter improve  */}
         
        </div>

        {/* Quick Cookie Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cookieTypes.map((cookie, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${cookie.color} rounded-xl flex items-center justify-center text-white text-xl mb-4`}>
                {cookie.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{cookie.type}</h3>
              <p className="text-gray-600 text-sm mb-3">{cookie.description}</p>
              {cookie.necessary && (
                <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                  Always Active
                </span>
              )}
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
                        ? 'bg-amber-50 text-amber-600 border-l-4 border-amber-600 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-lg mr-3">{section.icon}</span>
                    <span className="font-medium text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Quick Tip */}
              <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                <div className="flex items-start">
                  <span className="text-amber-500 text-xl mr-3">💡</span>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Cookie Control</p>
                    <p className="text-amber-700 text-xs mt-1">
                      You can manage cookies in your browser settings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              
              {/* What Are Cookies */}
              <section id="what-are-cookies" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🍪
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">What Are Cookies?</h2>
                    <p className="text-gray-600">Understanding these small but important files</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <p className="text-gray-700 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit websites. 
                    They help websites function properly, remember your preferences, and improve your overall experience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">✅</span>
                        What They Do
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Remember your login sessions</li>
                        <li>• Store site preferences</li>
                        <li>• Analyze site usage</li>
                        <li>• Enable personalization</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">🔒</span>
                        Safe & Secure
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cannot contain viruses</li>
                        <li>• Cannot access your computer</li>
                        <li>• Only store basic information</li>
                        <li>• Encrypted when necessary</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Cookies */}
              <section id="types-of-cookies" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📊
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Types of Cookies We Use</h2>
                    <p className="text-gray-600">Different cookies for different purposes</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-amber-200 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 bg-gradient-to-r ${cookie.color} rounded-lg flex items-center justify-center text-white text-lg mr-4`}>
                            {cookie.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{cookie.type}</h3>
                            <p className="text-gray-600 text-sm">{cookie.description}</p>
                          </div>
                        </div>
                        {cookie.necessary && (
                          <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-medium">
                            Essential
                          </span>
                        )}
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                          <span className="text-amber-500 mr-2">🎯</span>
                          Examples of Use
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {cookie.examples.map((example, exampleIndex) => (
                            <div key={exampleIndex} className="flex items-center text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
                              {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Managing Cookies */}
              <section id="managing-cookies" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    ⚙️
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Managing Cookies</h2>
                    <p className="text-gray-600">You're in control of your cookie preferences</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="text-green-500 mr-2">🔧</span>
                        Browser Controls
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Delete existing cookies
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Block future cookies
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Set site-specific preferences
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="text-green-500 mr-2">🌐</span>
                        Browser Guides
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {browserGuides.map((browser, index) => (
                          <a
                            key={index}
                            href={browser.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-600 hover:text-green-600 transition-colors"
                          >
                            <span className="mr-2">{browser.icon}</span>
                            {browser.browser}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-500">
                    <p className="text-yellow-700 text-sm flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <strong>Note:</strong> Disabling cookies may affect some website features and functionality.
                    </p>
                  </div>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section id="third-party" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🤝
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Third-Party Cookies</h2>
                    <p className="text-gray-600">Working with trusted partners</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We work with trusted partners who may set cookies for analytics and service improvement. 
                    These cookies help us understand how our services are used and make them better for you.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-purple-500 mr-2">📊</span>
                        Analytics Partners
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Help us understand user behavior and improve our services
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-purple-500 mr-2">🔒</span>
                        Strict Standards
                      </h4>
                      <p className="text-gray-600 text-sm">
                        All partners must comply with our privacy and data protection standards
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-24">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
                  <p className="text-amber-100 mb-6 text-lg">
                    We're here to help you understand how we use cookies and address any concerns.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="mr-2">📧</span>
                        Email Privacy Team
                      </h4>
                      <p className="text-amber-100">privacy@wandernest.com</p>
                      <p className="text-amber-200 text-sm mt-1">Direct line to our privacy experts</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="mr-2">💬</span>
                        Live Chat Support
                      </h4>
                      <p className="text-amber-100">Available in the app</p>
                      <p className="text-amber-200 text-sm mt-1">Quick answers to your questions</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} WanderNest. Making your browsing experience better with responsible cookie usage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;