import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Instagram, Twitter, Linkedin, Sun, Moon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode);
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-12 pb-8 transition-colors duration-500">
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              WanderNest
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              Your AI-powered travel companion that crafts personalized itineraries and simplifies your journey planning.
            </p>

            {/* Button Row */}
            <div className="flex space-x-3">
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 text-blue-600 dark:text-blue-400 group"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4 group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
              </button>

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-110"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />}
              </button>

              {/* Our Offices Button */}
              <a
                href="/offices"
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-transform duration-200 transform hover:-translate-y-0.5"
              >
                Our Offices
              </a>
            </div>

            {/* Optional small map preview in footer */}
            <div className="mt-4 space-y-3">
              {[
                {
                  title: 'Chittagong Office',
                  src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.790405929495!1d91.8317003750236!2d22.356851379647282!3d22.356851379647282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd885efbd62ff%3A0xe5f07068e7d96ad0!2sChittagong%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1697300000000!5m2!1sen!2sbd'
                },
              ].map((office, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden shadow-md">
                  <iframe
                    title={office.title}
                    src={office.src}
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-48 rounded-lg"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Create Trip", href: "/create-trip" },
                { label: "View Trips", href: "/my-trips" },
                { label: "Trip Stats", href: "/trip-stats" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Contact Us", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:teams@viaona.com"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" /> call@wandernest.com
                </a>
              </li>
              <li className="pt-2">
                <div className="flex space-x-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-pink-700 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4 text-gray-600 dark:text-gray-200 hover:text-pink-600" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4 text-gray-600 dark:text-gray-200 hover:text-blue-400" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-200 hover:text-blue-600" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "User Manual", href: "/user-manual" },
                { label: "Join With Us", href: "/user-join" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {currentYear}{' '}
            <a
              href="https://portfolio-nine-gilt-93.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              WanderNest
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;