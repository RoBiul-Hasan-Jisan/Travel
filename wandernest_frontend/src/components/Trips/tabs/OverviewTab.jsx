import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const OverviewTab = ({ trip }) => {
  const budgetChartData = useMemo(() => {
    if (!trip?.budget?.breakdown) return [];
    return Object.entries(trip.budget.breakdown).map(([category, data]) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      total: data.total,
      hotels: data.hotels,
      food: data.food,
      tickets: data.tickets,
      transport: data.transport
    }));
  }, [trip]);

  // Modern color palette
  const colors = {
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#059669',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    lightText: '#64748b',
    border: '#e2e8f0',
    chart: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-xl border border-gray-100">
          <p className="font-bold text-gray-900">{label}</p>
          <p className="text-sm text-gray-600">
            Total: <span className="font-semibold text-green-600">${payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 md:p-12 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-100 text-sm font-medium">Active Trip</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              {trip.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{trip.country}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{trip.duration}</span>
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              {trip.description}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: '👥', label: 'Travelers', value: trip.travelers },
            { icon: '🌤️', label: 'Best Time', value: trip.bestTimeToVisit },
            { icon: '💬', label: 'Language', value: trip.language },
            { icon: '💰', label: 'Currency', value: trip.currency },
            { icon: '🔌', label: 'Power Plugs', value: trip.powerPlugs },
            { icon: '⭐', label: 'Rating', value: '4.8/5' }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="font-semibold text-gray-500 text-xs uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-gray-900 font-bold text-lg">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Budget Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Budget Overview</h3>
              <p className="text-gray-600">Breakdown of your trip expenses</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-lg mt-4 md:mt-0">
              <div className="text-sm font-semibold">Total Budget</div>
              <div className="text-2xl font-black">${trip.budget.total}</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={budgetChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="category" 
                tick={{ fill: colors.lightText, fontSize: 12 }}
                axisLine={{ stroke: colors.border }}
              />
              <YAxis 
                tick={{ fill: colors.lightText, fontSize: 12 }}
                axisLine={{ stroke: colors.border }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="total" radius={[8, 8, 0, 0]}>
                {budgetChartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={colors.chart[index % colors.chart.length]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              title: 'Must-Try Foods',
              icon: '🍽️',
              color: 'from-orange-500 to-red-500',
              content: (
                <div className="space-y-3">
                  {trip.mustTryFoods.map((food, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100 transition-all duration-300 hover:shadow-md">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-800 font-medium">{food}</span>
                    </div>
                  ))}
                </div>
              )
            },
            {
              title: 'Transport Tips',
              icon: '🚗',
              color: 'from-blue-500 to-cyan-500',
              content: (
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                  <p className="text-gray-700 leading-relaxed text-lg">{trip.transportTips}</p>
                </div>
              )
            },
            {
              title: 'Packing Essentials',
              icon: '🎒',
              color: 'from-green-500 to-emerald-500',
              content: (
                <div className="space-y-3">
                  {trip.packingSuggestions.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 transition-all duration-300 hover:shadow-md">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">✓</span>
                      </div>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              )
            },
            {
              title: 'Cultural Notes',
              icon: '🏛️',
              color: 'from-purple-500 to-indigo-500',
              content: (
                <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
                  <p className="text-gray-700 leading-relaxed text-lg">{trip.culturalNotes}</p>
                </div>
              )
            },
            {
              title: 'Local Phrases',
              icon: '🗣️',
              color: 'from-yellow-500 to-amber-500',
              content: (
                <div className="space-y-3">
                  {trip.localLingo.map((phrase, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-100 transition-all duration-300 hover:shadow-md">
                      <p className="text-gray-800 font-medium">{phrase}</p>
                    </div>
                  ))}
                </div>
              )
            },
            {
              title: 'Visa Information',
              icon: '📄',
              color: 'from-rose-500 to-pink-500',
              content: (
                <div className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100">
                  <p className="text-gray-700 leading-relaxed text-lg">{trip.visaInfo}</p>
                </div>
              )
            }
          ].map((section, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center text-white text-xl`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900">{section.title}</h3>
              </div>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;