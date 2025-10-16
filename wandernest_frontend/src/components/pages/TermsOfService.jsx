import React, { useState } from 'react';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: '✅' },
    { id: 'service', title: 'Service Description', icon: '🌍' },
    { id: 'responsibilities', title: 'User Responsibilities', icon: '👤' },
    { id: 'ai-disclaimer', title: 'AI Content Disclaimer', icon: '🤖' },
    { id: 'liability', title: 'Limitation of Liability', icon: '🛡️' },
    { id: 'changes', title: 'Changes to Terms', icon: '🔄' },
    { id: 'contact', title: 'Contact Information', icon: '📞' }
  ];

  const quickStats = [
    { number: '5 min', label: 'Read Time', icon: '⏱️' },
    { number: '7', label: 'Sections', icon: '📑' },
    { number: 'Latest', label: 'Version', icon: '🔄' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
         
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Understanding your rights and responsibilities when using WanderNest
          </p>
          
          {/* Last Updated & Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-600">
                📅 Last updated: <span className="font-semibold text-gray-800">{new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </p>
            </div>
            
            <div className="flex gap-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200">
                    <p className="text-lg font-bold text-gray-800">{stat.number}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar */}
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sticky Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-2">📚</span>
                Quick Navigation
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
                    <span className="font-medium text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Important Notice */}
              <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                <div className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">⚠️</span>
                  <div>
                    <p className="font-semibold text-orange-800 text-sm">Important</p>
                    <p className="text-orange-700 text-xs mt-1">
                      By using our service, you agree to these terms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              
              {/* Acceptance of Terms */}
              <section id="acceptance" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    ✅
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">1. Acceptance of Terms</h2>
                    <p className="text-gray-600">Understanding your agreement with us</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using <strong>WanderNest</strong> (Viaona.com), you accept and agree to be bound by these Terms of Service 
                    and our Privacy Policy. If you disagree with any part of these terms, you may not access our service.
                  </p>
                </div>
              </section>

              {/* Service Description */}
              <section id="service" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🌍
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">2. Service Description</h2>
                    <p className="text-gray-600">What WanderNest provides</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <p className="text-gray-700 leading-relaxed">
                    WanderNest provides AI-powered travel planning services including personalized itinerary creation, 
                    destination recommendations, accommodation suggestions, and travel insights. Our service uses 
                    artificial intelligence to help you plan better trips based on your preferences.
                  </p>
                </div>
              </section>

              {/* User Responsibilities */}
              <section id="responsibilities" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    👤
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">3. User Responsibilities</h2>
                    <p className="text-gray-600">Your obligations when using our service</p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-green-500 mr-2">🔐</span>
                        Account Security
                      </h4>
                      <p className="text-sm text-gray-600">
                        Maintain the security of your account credentials and notify us immediately of any unauthorized use.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-blue-500 mr-2">📝</span>
                        Accurate Information
                      </h4>
                      <p className="text-sm text-gray-600">
                        Provide accurate and complete information when creating your account and planning trips.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-orange-500 mr-2">⚖️</span>
                        Lawful Use
                      </h4>
                      <p className="text-sm text-gray-600">
                        Use our service only for lawful purposes and in accordance with these terms.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-red-500 mr-2">🚫</span>
                        Prohibited Activities
                      </h4>
                      <p className="text-sm text-gray-600">
                        Do not engage in spam, fraud, or any activity that disrupts our service.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* AI Content Disclaimer */}
              <section id="ai-disclaimer" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🤖
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">4. AI Content Disclaimer</h2>
                    <p className="text-gray-600">Understanding AI-generated content limitations</p>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                  <div className="bg-white rounded-xl p-4 mb-4 border-l-4 border-orange-500">
                    <p className="text-orange-700 font-medium">
                      ⚠️ Important: Our AI-generated content is for informational purposes only
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    While we strive for accuracy, AI-generated travel recommendations may contain errors or outdated information. 
                    Always verify critical travel details such as visa requirements, opening hours, prices, and safety information 
                    with official sources before making travel decisions. We are not responsible for any inaccuracies in 
                    AI-generated content.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🛡️
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">5. Limitation of Liability</h2>
                    <p className="text-gray-600">Understanding our responsibilities</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-2xl p-6 border border-gray-300">
                  <p className="text-gray-700 leading-relaxed">
                    To the fullest extent permitted by law, WanderNest shall not be liable for any indirect, incidental, 
                    special, consequential, or punitive damages resulting from your use of or inability to use our service 
                    or reliance on AI-generated content. This includes but is not limited to damages for lost profits, data, 
                    or other intangible losses.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section id="changes" className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    🔄
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">6. Changes to Terms</h2>
                    <p className="text-gray-600">How we update our terms</p>
                  </div>
                </div>
                <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-200">
                  <p className="text-gray-700 leading-relaxed">
                    We may update these Terms of Service periodically to reflect changes in our practices, service features, 
                    or legal requirements. We will notify you of significant changes by posting the new terms on our website 
                    and updating the "Last updated" date. Your continued use of our service after changes constitutes 
                    acceptance of the updated terms.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📞
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">7. Contact Information</h2>
                    <p className="text-gray-600">Get in touch with us</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Need Help or Have Questions?</h3>
                  <p className="text-indigo-100 mb-6">
                    We're here to help you understand our terms and address any concerns you might have.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="mr-2">📧</span>
                        Email Support
                      </h4>
                      <p className="text-indigo-100">team@wandernest.com</p>
                      <p className="text-indigo-200 text-sm mt-1">We typically respond within 24 hours</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="mr-2">🌐</span>
                        Website
                      </h4>
                      <p className="text-indigo-100">coming soon</p>
                      <p className="text-indigo-200 text-sm mt-1">Visit our main website</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} WanderNest. All rights reserved.</p>
                <p className="mt-2">These terms are legally binding. Please read them carefully.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;