import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BudgetTab = ({ trip }) => {
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

  return (
    <div className="space-y-8">
      {/* Budget Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Budget Breakdown</h2>
          <div className="text-2xl font-bold bg-white/20 px-6 py-3 rounded-full">
            Total: ${trip.budget?.total || 'N/A'}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Budget by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Cost Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ category, percent }) => `${category} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="total"
              >
                {budgetChartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'][index % 5]} 
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Budget Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(trip.budget?.breakdown || {}).map(([type, budget]) => (
          <div key={type} className={`bg-white rounded-2xl shadow-lg border-l-4 ${
            type === 'luxury' ? 'border-l-red-500' : 
            type === 'mid-range' ? 'border-l-green-500' : 'border-l-blue-500'
          }`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 capitalize">{type}</h3>
                <div className="text-xl font-bold text-gray-700">${budget.total}</div>
              </div>
              
              <div className="space-y-3 mb-4">
                {[
                  { label: 'Hotels', value: budget.hotels, color: 'bg-blue-100 text-blue-800' },
                  { label: 'Food', value: budget.food, color: 'bg-green-100 text-green-800' },
                  { label: 'Tickets', value: budget.tickets, color: 'bg-yellow-100 text-yellow-800' },
                  { label: 'Transport', value: budget.transport, color: 'bg-purple-100 text-purple-800' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.label}</span>
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${item.color}`}>
                      ${item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetTab;