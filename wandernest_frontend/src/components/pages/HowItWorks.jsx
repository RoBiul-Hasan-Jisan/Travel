import React, { useState } from 'react';
import { 
  Sparkles, 
  Map, 
  Wallet, 
  Calendar,
  Zap,
  Globe,
  Shield,
  Users,
  ArrowRight,
  Play,
  Star,
  Check,
  ChevronDown,
  MessageCircle
} from 'lucide-react';

function HowItWorks() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Planning",
      description: "Our advanced AI analyzes millions of data points to create your perfect itinerary",
      image: "/modern-ai-interface.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Smart Navigation",
      description: "Real-time maps with intelligent routing and local insights",
      image: "/smart-travel-map.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Budget Intelligence",
      description: "AI that optimizes your spending and finds hidden deals",
      image: "/budget-dashboard.png",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Travel",
      description: "Share plans and collaborate with travel companions",
      image: "/collaborative-planning.png",
      color: "from-orange-500 to-red-500"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Describe Your Dream",
      description: "Tell us where you want to go and what you love to do",
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      number: "02",
      title: "AI Magic Happens",
      description: "Our AI crafts a personalized itinerary in seconds",
      icon: <Zap className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Refine & Explore",
      description: "Customize your plan and discover local gems",
      icon: <Globe className="w-8 h-8" />
    },
    {
      number: "04",
      title: "Travel Smart",
      description: "Access your plan anywhere, with real-time updates",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Nomad",
      content: "This AI transformed how I travel. It found hidden local spots I'd never discover on my own.",
      rating: 5,
      avatar: "/avatar-sarah.png"
    },
    {
      name: "Marcus Rodriguez",
      role: "Family Traveler",
      content: "Planning family vacations used to be stressful. Now it's actually enjoyable!",
      rating: 5,
      avatar: "/avatar-marcus.png"
    },
    {
      name: "Alex Thompson",
      role: "Business Traveler",
      content: "Saves me 5+ hours per trip. The budget optimization alone is worth it.",
      rating: 5,
      avatar: "/avatar-alex.png"
    }
  ];

  const faqs = [
    {
      question: "How does the AI understand my travel style?",
      answer: "Our AI learns from your preferences, past trips, and real-time feedback to continuously improve recommendations."
    },
    {
      question: "Can I use it for last-minute trips?",
      answer: "Absolutely! Our AI can create comprehensive plans in under 2 minutes for any destination."
    },
    {
      question: "How accurate are the budget predictions?",
      answer: "We achieve 95% accuracy by analyzing real-time prices, seasonal trends, and local economic data."
    },
    {
      question: "Do you support group travel planning?",
      answer: "Yes! Collaborate with travel companions and let our AI balance everyone's preferences."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              AI-Powered Travel Revolution
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Travel Smarter,
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Not Harder
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Let artificial intelligence plan your perfect trip while you focus on making memories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                Start Planning Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-300 dark:border-gray-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Travelers <span className="text-purple-600">Love Us</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need for stress-free travel planning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`bg-white dark:bg-gray-800 rounded-3xl p-8 transition-all duration-500 ${
                  activeFeature === index 
                    ? 'shadow-2xl scale-105 border-2 border-purple-200 dark:border-purple-800' 
                    : 'shadow-lg hover:shadow-xl'
                }`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {feature.description}
                  </p>
                  
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      {feature.image.replace('/', '')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your journey to perfect travel planning starts here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold text-gray-400 absolute -top-2 -left-2">
                      {step.number}
                    </div>
                    <div className="text-purple-600">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="text-orange-600">Travelers</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands who transformed their travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Travel?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of smart travelers who save time, money, and stress with AI-powered planning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                Start Your Free Trip
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors">
                Watch 2-Min Demo
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Setup in 2 minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;