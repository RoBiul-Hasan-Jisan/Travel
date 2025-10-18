import React, { useState } from "react";
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
  MessageCircle,
} from "lucide-react";

export default function HowItWorks() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const accent = "text-purple-600";

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Planning",
      description:
        "Advanced AI analyzes data to create your perfect itinerary in seconds.",
      image: "/modern-ai-interface.png",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Smart Navigation",
      description: "Real-time maps with intelligent routing and local insights.",
      image: "/smart-travel-map.png",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Budget Intelligence",
      description: "Optimize spending and uncover hidden deals effortlessly.",
      image: "/budget-dashboard.png",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Travel",
      description: "Collaborate with companions and plan together smoothly.",
      image: "/collaborative-planning.png",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Describe Your Dream",
      description: "Tell us where you want to go and what you love to do.",
      icon: <MessageCircle className="w-7 h-7" />,
    },
    {
      number: "02",
      title: "AI Magic Happens",
      description: "Our AI crafts a personalized itinerary in seconds.",
      icon: <Zap className="w-7 h-7" />,
    },
    {
      number: "03",
      title: "Refine & Explore",
      description: "Customize your plan and discover local gems.",
      icon: <Globe className="w-7 h-7" />,
    },
    {
      number: "04",
      title: "Travel Smart",
      description: "Access your plan anywhere, with real-time updates.",
      icon: <Shield className="w-7 h-7" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Nomad",
      content:
        "This AI transformed how I travel. It found hidden local spots I'd never discover on my own.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Family Traveler",
      content:
        "Planning family vacations used to be stressful. Now it's actually enjoyable!",
      rating: 5,
    },
    {
      name: "Alex Thompson",
      role: "Business Traveler",
      content:
        "Saves me 5+ hours per trip. The budget optimization alone is worth it.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How does the AI understand my travel style?",
      answer:
        "It learns from your preferences, past trips, and feedback to improve continuously.",
    },
    {
      question: "Can I use it for last-minute trips?",
      answer:
        "Absolutely! Our AI can create comprehensive plans in under 2 minutes.",
    },
    {
      question: "How accurate are the budget predictions?",
      answer:
        "We achieve 95% accuracy by analyzing real-time prices and seasonal trends.",
    },
    {
      question: "Do you support group travel planning?",
      answer:
        "Yes! Collaborate with companions and let our AI balance everyone's preferences.",
    },
  ];

  return (
   <div
      className="min-h-screen text-gray-900 dark:text-white"
      style={{
        background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Hero */}
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-50/80 dark:bg-purple-900/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Travel
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Travel Smarter,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Not Harder
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Let AI plan your perfect trip while you focus on making memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition">
              Start Planning <ArrowRight className="w-4 h-4 inline ml-1" />
            </button>
            <button className="border border-white/40 px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition">
              <Play className="w-4 h-4 inline mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
   </section>
      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Travelers <span className={accent}>Love Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition border ${
                  activeFeature === i
                    ? "border-purple-500"
                    : "border-transparent"
                }`}
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How It <span className="text-green-300">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                  {s.icon}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-300 dark:text-gray-400 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Loved by <span className="text-orange-600">Travelers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-left"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  “{t.content}”
                </p>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Your <span className="text-red-700">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-medium">{f.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-300 dark:text-gray-400">
                    {f.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
