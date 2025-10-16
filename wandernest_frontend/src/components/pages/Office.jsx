import React from 'react';

const offices = [
  {
    name: "Chittagong Office",
    address: "Central Chittagong, Bangladesh",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.790405929495!2d91.8317003750236!3d22.356851379647282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd885efbd62ff%3A0xe5f07068e7d96ad0!2sChittagong%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1697300000000!5m2!1sen!2sbd"
  },
  {
    name: "Dhaka Office",
    address: "Gulshan, Dhaka, Bangladesh",
    mapSrc: "https://www.google.com/maps?q=Gulshan,+Dhaka,+Bangladesh&output=embed"
  },
  {
    name: "Sylhet Office",
    address: "Sylhet City, Bangladesh",
    mapSrc: "https://www.google.com/maps?q=Sylhet,+Bangladesh&output=embed"
  },
  {
    name: "Khulna Office",
    address: "Khulna City, Bangladesh",
    mapSrc: "https://www.google.com/maps?q=Khulna,+Bangladesh&output=embed"
  },
  {
    name: "Rajshahi Office",
    address: "Rajshahi City, Bangladesh",
    mapSrc: "https://www.google.com/maps?q=Rajshahi,+Bangladesh&output=embed"
  },
];

const Office = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Our Offices
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
          Discover our locations across Bangladesh. Visit us at your convenience.
        </p>
      </div>

      {/* Offices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {offices.map((office, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {office.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{office.address}</p>
            </div>
            <div className="relative h-64 md:h-72">
              <iframe
                title={office.name}
                src={office.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-2xl"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Office;
