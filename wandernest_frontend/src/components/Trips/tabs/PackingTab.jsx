import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  RadialBarChart,
  RadialBar
} from 'recharts';

// Constants and configuration
const COLOR_SCHEME = {
  primary: {
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    light: '#f0f4ff',
    dark: '#4c51bf'
  },
  sections: {
    'Essential Items': '#FF6B6B',
    'Clothing': '#4ECDC4',
    'Toiletries': '#45B7D1',
    'Destination-Specific': '#FFA726',
    'Weather-Appropriate': '#AB47BC',
    'Cultural': '#26A69A',
    'Electronics': '#42A5F5',
    'Health': '#EF5350',
    'Adventure': '#66BB6A',
    'Security': '#7E57C2',
    'Exploration': '#FFCA28'
  },
  status: {
    packed: '#10B981',
    unpacked: '#EF4444',
    essential: '#DC2626',
    optional: '#6B7280'
  }
};

const VIEW_MODES = {
  GRID: 'grid',
  LIST: 'list',
  COMPACT: 'compact'
};

const SORT_OPTIONS = {
  CATEGORY: 'category',
  ESSENTIAL: 'essential',
  PACKED: 'packed',
  NAME: 'name'
};

// Custom hooks for better state management
const usePackingChecklist = (trip, packingChecklists) => {
  const [checklist, setChecklist] = useState(null);
  const [selectedSections, setSelectedSections] = useState(new Set());

  useEffect(() => {
    if (!packingChecklists || !trip) return;

    const tripId = trip.id?.toString();
    const checklistEntry = packingChecklists[tripId] || 
      Object.values(packingChecklists).find(
        list => list.country === trip.country || list.destination?.includes(trip.country)
      );

    if (checklistEntry) {
      const initializedChecklist = Object.keys(checklistEntry).reduce((acc, key) => {
        const section = checklistEntry[key];
        if (section?.items) {
          acc[key] = {
            ...section,
            items: section.items.map(item => ({
              ...item,
              packed: item.packed || false,
              id: item.id || `${key}-${item.name}-${Date.now()}`
            }))
          };
        }
        return acc;
      }, {});

      setChecklist(initializedChecklist);
      
      // Auto-select all sections with items
      const sections = new Set(
        Object.values(initializedChecklist)
          .filter(section => section?.items?.length > 0)
          .map(section => section.title)
      );
      setSelectedSections(sections);
    }
  }, [trip, packingChecklists]);

  const toggleItemPacked = useCallback((sectionTitle, itemId) => {
    setChecklist(prev => {
      if (!prev) return prev;
      
      return Object.keys(prev).reduce((acc, key) => {
        const section = prev[key];
        if (section?.title === sectionTitle && section.items) {
          acc[key] = {
            ...section,
            items: section.items.map(item => 
              item.id === itemId ? { ...item, packed: !item.packed } : item
            )
          };
        } else {
          acc[key] = section;
        }
        return acc;
      }, {});
    });
  }, []);

  const markSectionItems = useCallback((sectionTitle, packed = true) => {
    setChecklist(prev => {
      if (!prev) return prev;
      
      return Object.keys(prev).reduce((acc, key) => {
        const section = prev[key];
        if (section?.title === sectionTitle && section.items) {
          acc[key] = {
            ...section,
            items: section.items.map(item => ({ ...item, packed }))
          };
        } else {
          acc[key] = section;
        }
        return acc;
      }, {});
    });
  }, []);

  return {
    checklist,
    selectedSections,
    setSelectedSections,
    toggleItemPacked,
    markSectionItems,
    setChecklist
  };
};

const usePackingStatistics = (checklist, selectedSections) => {
  return useMemo(() => {
    if (!checklist) return null;

    const statistics = {
      totalItems: 0,
      packedItems: 0,
      essentialItems: 0,
      packedEssential: 0,
      categoryStats: {},
      sectionStats: {},
      weightDistribution: { light: 0, medium: 0, heavy: 0 }
    };

    Object.values(checklist).forEach(section => {
      if (!section?.items || !selectedSections.has(section.title)) return;

      let sectionPacked = 0;
      
      section.items.forEach(item => {
        statistics.totalItems++;
        if (item.packed) {
          statistics.packedItems++;
          sectionPacked++;
        }
        
        if (item.essential) {
          statistics.essentialItems++;
          if (item.packed) statistics.packedEssential++;
        }

        // Category statistics
        statistics.categoryStats[item.category] = 
          (statistics.categoryStats[item.category] || 0) + 1;

        // Weight estimation
        const weightCategory = item.weightCategory || 
          (item.category.toLowerCase().includes('electronics') ? 'light' :
           item.category.toLowerCase().includes('clothing') ? 'medium' : 'heavy');
        statistics.weightDistribution[weightCategory]++;
      });

      statistics.sectionStats[section.title] = {
        total: section.items.length,
        packed: sectionPacked,
        progress: section.items.length > 0 ? (sectionPacked / section.items.length) * 100 : 0
      };
    });

    const progress = statistics.totalItems > 0 ? 
      (statistics.packedItems / statistics.totalItems) * 100 : 0;
    const essentialProgress = statistics.essentialItems > 0 ? 
      (statistics.packedEssential / statistics.essentialItems) * 100 : 0;

    return {
      ...statistics,
      progress,
      essentialProgress,
      categoryStats: Object.entries(statistics.categoryStats).map(([name, value]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        value,
        percentage: (value / statistics.totalItems) * 100
      })),
      weightEstimation: [
        { name: 'Light', value: statistics.weightDistribution.light, color: '#4ECDC4' },
        { name: 'Medium', value: statistics.weightDistribution.medium, color: '#45B7D1' },
        { name: 'Heavy', value: statistics.weightDistribution.heavy, color: '#FF6B6B' }
      ],
      essentialStats: [
        { 
          name: 'Essential', 
          value: statistics.essentialItems, 
          packed: statistics.packedEssential, 
          color: COLOR_SCHEME.status.essential 
        },
        { 
          name: 'Optional', 
          value: statistics.totalItems - statistics.essentialItems, 
          packed: statistics.packedItems - statistics.packedEssential, 
          color: COLOR_SCHEME.status.optional 
        }
      ]
    };
  }, [checklist, selectedSections]);
};

// Reusable components
const ProgressBar = ({ progress, color = COLOR_SCHEME.primary.dark, height = 12 }) => (
  <div className={`w-full bg-gray-200 rounded-full h-${height} overflow-hidden`}>
    <div
      className="h-full rounded-full transition-all duration-1000 ease-out"
      style={{ 
        width: `${Math.max(0, Math.min(100, progress))}%`,
        background: color
      }}
    />
  </div>
);

const StatCard = ({ title, value, subtitle, color = COLOR_SCHEME.primary.dark }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
    <div className="text-sm font-medium text-gray-600 mb-1">{title}</div>
    <div className="text-2xl font-bold mb-1" style={{ color }}>{value}</div>
    {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
  </div>
);

const SectionFilter = ({ sections, selectedSections, onToggleSection }) => (
  <div className="flex flex-wrap gap-2">
    {sections.map(section => (
      <button
        key={section}
        onClick={() => onToggleSection(section)}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          selectedSections.has(section)
            ? 'bg-blue-500 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {section}
      </button>
    ))}
  </div>
);

// Main component
const PackingTab = ({ trip, packingChecklists }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState(VIEW_MODES.GRID);
  const [sortBy, setSortBy] = useState(SORT_OPTIONS.CATEGORY);

  const {
    checklist,
    selectedSections,
    setSelectedSections,
    toggleItemPacked,
    markSectionItems,
    setChecklist
  } = usePackingChecklist(trip, packingChecklists);

  const packingStats = usePackingStatistics(checklist, selectedSections);

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    if (!checklist) return [];

    const allItems = Object.values(checklist)
      .filter(section => section?.items && selectedSections.has(section.title))
      .flatMap(section => 
        section.items.map(item => ({
          ...item,
          section: section.title,
          sectionColor: COLOR_SCHEME.sections[section.title] || '#8884d8'
        }))
      );

    const filtered = allItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.reason?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case SORT_OPTIONS.ESSENTIAL:
          return (b.essential ? 1 : 0) - (a.essential ? 1 : 0);
        case SORT_OPTIONS.PACKED:
          return (a.packed ? 1 : 0) - (b.packed ? 1 : 0);
        case SORT_OPTIONS.NAME:
          return a.name.localeCompare(b.name);
        case SORT_OPTIONS.CATEGORY:
        default:
          return a.category.localeCompare(b.category);
      }
    });
  }, [checklist, selectedCategory, searchTerm, sortBy, selectedSections]);

  // Helper functions
  const getCategories = useCallback(() => {
    if (!checklist) return ['all'];
    const categories = new Set(['all']);
    Object.values(checklist).forEach(section => {
      section?.items?.forEach(item => categories.add(item.category));
    });
    return Array.from(categories).sort();
  }, [checklist]);

  const getSections = useCallback(() => {
    if (!checklist) return [];
    return Object.values(checklist)
      .filter(section => section?.items?.length > 0)
      .map(section => section.title)
      .sort();
  }, [checklist]);

  const toggleSectionSelection = useCallback((sectionTitle) => {
    setSelectedSections(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(sectionTitle)) {
        newSelected.delete(sectionTitle);
      } else {
        newSelected.add(sectionTitle);
      }
      return newSelected;
    });
  }, []);

  // Batch operations
  const packAllEssential = useCallback(() => {
    setChecklist(prev => {
      if (!prev) return prev;
      return Object.keys(prev).reduce((acc, key) => {
        const section = prev[key];
        if (section?.items) {
          acc[key] = {
            ...section,
            items: section.items.map(item => 
              item.essential ? { ...item, packed: true } : item
            )
          };
        } else {
          acc[key] = section;
        }
        return acc;
      }, {});
    });
  }, []);

  const packAllItems = useCallback((packed = true) => {
    setChecklist(prev => {
      if (!prev) return prev;
      return Object.keys(prev).reduce((acc, key) => {
        const section = prev[key];
        if (section?.items) {
          acc[key] = {
            ...section,
            items: section.items.map(item => ({ ...item, packed }))
          };
        } else {
          acc[key] = section;
        }
        return acc;
      }, {});
    });
  }, []);

  if (!checklist) {
    return (
      <div className="min-h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Packing Checklist</h2>
          <p className="text-gray-600">
            {trip?.country ? `No packing checklist available for ${trip.country}` : 'Select a trip to view packing checklist'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              🎒 Packing Checklist
            </h1>
            <p className="text-blue-100 text-lg">
              {checklist.destination} • {checklist.duration} • {checklist.travelers}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard 
              title="Items Packed" 
              value={`${packingStats.packedItems}/${packingStats.totalItems}`}
              color="white"
            />
            <StatCard 
              title="Overall Progress" 
              value={`${Math.round(packingStats.progress)}%`}
              color="white"
            />
            <StatCard 
              title="Essential Done" 
              value={`${packingStats.packedEssential}/${packingStats.essentialItems}`}
              color="white"
            />
            <StatCard 
              title="Essential Progress" 
              value={`${Math.round(packingStats.essentialProgress)}%`}
              color="white"
            />
          </div>
        </div>
      </div>

      {/* Progress Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Overall Progress</h3>
            <span className="font-bold text-green-600">{Math.round(packingStats.progress)}%</span>
          </div>
          <ProgressBar progress={packingStats.progress} color="#10B981" />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Essential Items</h3>
            <span className="font-bold text-red-600">{Math.round(packingStats.essentialProgress)}%</span>
          </div>
          <ProgressBar progress={packingStats.essentialProgress} color="#EF4444" />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">Completion Rate</h3>
          <ResponsiveContainer width="100%" height={60}>
            <RadialBarChart 
              innerRadius="70%" 
              outerRadius="100%" 
              data={[{ value: packingStats.progress }]}
              startAngle={180}
              endAngle={-180}
            >
              <RadialBar minAngle={15} background dataKey="value" fill="#10B981" />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Items by Category</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={packingStats.categoryStats}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {packingStats.categoryStats.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={Object.values(COLOR_SCHEME.sections)[index % Object.values(COLOR_SCHEME.sections).length]} 
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Progress by Priority</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={packingStats.essentialStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="packed" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="value" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Section Progress</h3>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {Object.entries(packingStats.sectionStats).map(([section, stats]) => (
              <div key={section} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-700">{section}</span>
                  <span className="font-semibold text-gray-600">
                    {stats.packed}/{stats.total}
                  </span>
                </div>
                <ProgressBar 
                  progress={stats.progress} 
                  color={COLOR_SCHEME.sections[section]} 
                  height={8}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {getCategories().map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={SORT_OPTIONS.CATEGORY}>Sort by Category</option>
              <option value={SORT_OPTIONS.ESSENTIAL}>Sort by Priority</option>
              <option value={SORT_OPTIONS.PACKED}>Sort by Packed</option>
              <option value={SORT_OPTIONS.NAME}>Sort by Name</option>
            </select>
            
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={VIEW_MODES.GRID}>Grid View</option>
              <option value={VIEW_MODES.LIST}>List View</option>
              <option value={VIEW_MODES.COMPACT}>Compact View</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Filter Sections:</h4>
          <SectionFilter
            sections={getSections()}
            selectedSections={selectedSections}
            onToggleSection={toggleSectionSelection}
          />
        </div>

        {/* Packing List */}
        <div className={viewMode === VIEW_MODES.GRID ? 
          'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4' : 
          viewMode === VIEW_MODES.COMPACT ? 
          'space-y-2' : 'space-y-4'
        }>
          {getSections()
            .filter(section => selectedSections.has(section))
            .map(sectionTitle => {
              const section = Object.values(checklist).find(s => s?.title === sectionTitle);
              const sectionItems = filteredAndSortedItems.filter(item => item.section === sectionTitle);

              if (sectionItems.length === 0) return null;

              return (
                <div key={sectionTitle} className="border border-gray-200 rounded-lg bg-white">
                  <div 
                    className="p-3 border-b border-gray-200 flex justify-between items-center"
                    style={{ backgroundColor: `${COLOR_SCHEME.sections[sectionTitle]}15` }}
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-800">{sectionTitle}</h3>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                        {sectionItems.length} items
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => markSectionItems(sectionTitle, true)}
                        className="px-2 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                      >
                        Check All
                      </button>
                      <button
                        onClick={() => markSectionItems(sectionTitle, false)}
                        className="px-2 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                      >
                        Uncheck All
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                    {sectionItems.map((item) => (
                      <div
                        key={item.id}
                        className={`p-3 transition-colors ${
                          item.packed ? 'bg-green-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={item.packed}
                            onChange={() => toggleItemPacked(sectionTitle, item.id)}
                            className="mt-1 w-4 h-4 text-green-500 rounded focus:ring-green-500"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className={`font-medium ${
                                item.packed ? 'line-through text-gray-500' : 'text-gray-800'
                              }`}>
                                {item.name}
                              </span>
                              <div className="flex gap-1 flex-wrap">
                                {item.essential && (
                                  <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">
                                    Essential
                                  </span>
                                )}
                                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">
                                  {item.category}
                                </span>
                              </div>
                            </div>
                            {item.reason && (
                              <p className="text-gray-600 text-sm">
                                {item.reason}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        {filteredAndSortedItems.length === 0 && (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">No items found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <button
            onClick={packAllEssential}
            className="p-3 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors text-center"
          >
            <div className="font-semibold">Pack All Essential</div>
          </button>
          
          <button
            onClick={() => packAllItems(true)}
            className="p-3 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors text-center"
          >
            <div className="font-semibold">Pack Everything</div>
          </button>
          
          <button
            onClick={() => packAllItems(false)}
            className="p-3 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors text-center"
          >
            <div className="font-semibold">Reset All</div>
          </button>
          
          <button
            onClick={() => {
              const dataStr = JSON.stringify(checklist, null, 2);
              const dataBlob = new Blob([dataStr], { type: 'application/json' });
              const url = URL.createObjectURL(dataBlob);
              const link = document.createElement('a');
              link.href = url;
              link.download = `packing-checklist-${checklist.destination}.json`;
              link.click();
            }}
            className="p-3 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors text-center"
          >
            <div className="font-semibold">Export List</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackingTab;