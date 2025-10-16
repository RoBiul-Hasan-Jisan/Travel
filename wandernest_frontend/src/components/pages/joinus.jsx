import React, { useState } from 'react';

const JoinUs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const careerCategories = ['All', 'Technology', 'Content', 'Operations', 'Marketing', 'Design'];

  const careers = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Technology",
      location: "Remote / Dhaka, Bangladesh",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop and optimize AI systems that power our intelligent travel planning platform. Work with large datasets to create personalized travel recommendations.",
      requirements: [
        "Strong background in machine learning and natural language processing",
        "Experience with Python, TensorFlow/PyTorch, and cloud platforms",
        "Knowledge of recommendation systems and predictive analytics"
      ],
      benefits: ["Competitive salary", "Flexible work hours", "Professional development budget"]
    },
    {
      id: 2,
      title: "Travel Content Strategist",
      department: "Content",
      location: "Remote / Anywhere",
      type: "Full-time",
      experience: "2+ years",
      description: "Create compelling travel content and develop content strategies that inspire travelers and drive engagement across multiple platforms.",
      requirements: [
        "Proven experience in content creation and strategy",
        "Excellent writing and storytelling skills",
        "Knowledge of SEO and content marketing"
      ],
      benefits: ["Travel opportunities", "Content creation budget", "Remote-first culture"]
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Design",
      location: "Remote / Anywhere",
      type: "Full-time",
      experience: "3+ years",
      description: "Design intuitive user experiences and beautiful interfaces that make travel planning seamless and enjoyable for our users.",
      requirements: [
        "Portfolio showcasing UX/UI design skills",
        "Proficiency in Figma, Sketch, or similar tools",
        "Experience with user research and testing"
      ],
      benefits: ["Design software budget", "Conference attendance", "Creative freedom"]
    },
    {
      id: 4,
      title: "Growth Marketing Manager",
      department: "Marketing",
      location: "Remote / Anywhere",
      type: "Full-time",
      experience: "4+ years",
      description: "Develop and execute growth strategies to expand WanderNest's user base and build a strong travel community.",
      requirements: [
        "Experience in digital marketing and growth hacking",
        "Strong analytical skills and data-driven approach",
        "Knowledge of travel industry trends"
      ],
      benefits: ["Performance bonuses", "Marketing budget", "Industry networking"]
    },
    {
      id: 5,
      title: "Operations Coordinator",
      department: "Operations",
      location: "Chittagong, Bangladesh",
      type: "Full-time",
      experience: "2+ years",
      description: "Manage local travel operations, coordinate with partners, and ensure seamless travel experiences for our users.",
      requirements: [
        "Strong organizational and communication skills",
        "Experience in travel or hospitality industry",
        "Problem-solving and multitasking abilities"
      ],
      benefits: ["Local travel opportunities", "Team building events", "Career growth path"]
    },
    {
      id: 6,
      title: "Frontend Developer",
      department: "Technology",
      location: "Remote / Anywhere",
      type: "Full-time",
      experience: "2+ years",
      description: "Build responsive and performant user interfaces using modern web technologies for our travel platform.",
      requirements: [
        "Proficiency in React.js, TypeScript, and modern CSS",
        "Experience with state management and API integration",
        "Knowledge of web performance optimization"
      ],
      benefits: ["Tech equipment budget", "Open source contributions", "Flexible schedule"]
    }
  ];

  const filteredCareers = careers.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.department === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
       
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Build the Future of Travel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join WanderNest and help millions of travelers discover their perfect journeys through innovative technology and exceptional experiences.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-500">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50K+</div>
              <div className="text-sm text-gray-500">Travelers Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400 text-xl">🔍</span>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {careerCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-600">
              Showing {filteredCareers.length} position{filteredCareers.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>

        {/* Careers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredCareers.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-2">📍</span>
                  {job.location}
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                {/* Key Requirements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Apply Now
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results State */}
        {filteredCareers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No positions found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any positions matching your criteria. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              View All Positions
            </button>
          </div>
        )}

        {/* Company Culture Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Why Join WanderNest?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
              <p className="text-blue-100">Continuous learning opportunities and career advancement paths</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Travel Benefits</h3>
              <p className="text-blue-100">Experience the world with exclusive travel perks and opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
              <p className="text-blue-100">Work with cutting-edge technology in the travel industry</p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Application Review', desc: 'We review your application within 48 hours' },
              { step: 2, title: 'Initial Interview', desc: 'Get to know each other and discuss the role' },
              { step: 3, title: 'Technical Assessment', desc: 'Showcase your skills with a practical task' },
              { step: 4, title: 'Final Interview', desc: 'Meet the team and discuss your future with us' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default JoinUs;