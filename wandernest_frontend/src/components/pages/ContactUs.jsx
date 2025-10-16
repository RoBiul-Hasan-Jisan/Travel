import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Send, 
  Clock, 
  Mail, 
  Linkedin, 
  Instagram, 
  Twitter, 
  CheckCircle, 
  AlertCircle,
  User
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const subjectOptions = [
    'General Inquiry',
    'Feedback',
    'Bug Report',
    'Feature Request',
    'Partnership',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message exceeds 500 character limit';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message') setCharCount(value.length);

    setFormData({ ...formData, [name]: value });

    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setFormData({ fullName: '', email: '', subject: 'General Inquiry', message: '' });
          setCharCount(0);
          setIsSubmitted(false);
        }, 2000);
      }, 1500);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 px-4 py-1 rounded-full text-blue-800 font-medium text-sm mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            We'd Love to Hear From You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, feedback, or just want to say hi? Reach out to us — we're always here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 gap-6">
                  {/* Full Name */}
                  <motion.div variants={inputVariants} initial="blur" whileFocus="focus" className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder=" "
                      className={`block w-full px-4 pt-6 pb-2 rounded-lg border ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      } focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-200 peer`}
                    />
                    <label className="absolute text-gray-500 text-sm top-4 left-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-600 transition-all">
                      Full Name
                    </label>
                    <AnimatePresence>
                      {errors.fullName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-xs mt-1 ml-1 flex items-center"
                        >
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.fullName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={inputVariants} initial="blur" whileFocus="focus" className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className={`block w-full px-4 pt-6 pb-2 rounded-lg border ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      } focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-200 peer`}
                    />
                    <label className="absolute text-gray-500 text-sm top-4 left-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-600 transition-all">
                      Email Address
                    </label>
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-xs mt-1 ml-1 flex items-center"
                        >
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Subject */}
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                    >
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <label className="absolute text-xs text-blue-600 top-2 left-4">Subject</label>
                  </div>

                  {/* Message */}
                  <motion.div variants={inputVariants} initial="blur" whileFocus="focus" className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      maxLength={500}
                      placeholder=" "
                      className={`block w-full px-4 pt-6 pb-2 rounded-lg border ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      } focus:border-blue-500 focus:ring-blue-500 resize-none`}
                    />
                    <label className="absolute text-gray-500 text-sm top-4 left-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-600 transition-all">
                      Message
                    </label>
                    <div
                      className={`text-xs mt-1 flex justify-end ${
                        charCount > 400 ? (charCount > 475 ? 'text-red-500' : 'text-orange-500') : 'text-gray-500'
                      }`}
                    >
                      {charCount}/500 characters
                    </div>
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-xs mt-1 ml-1 flex items-center"
                        >
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Submit */}
                  <div className="mt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-medium text-white 
                        bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300
                        ${(isSubmitting || isSubmitted) ? 'opacity-80 cursor-not-allowed' : 'hover:opacity-90'}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email Us</p>
                    <a href="mailto:Teams@Viaona.com" className="text-base text-blue-600 hover:text-blue-800 transition-colors">
                      help@wandernest.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Office Hours</p>
                    <p className="text-base text-gray-600">Monday–Friday: 9AM–5PM EST</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    We typically respond within 24–48 hours. For faster help, check FAQs or reach us on social media.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100">
                      <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600" />
                    </a>
                    <a href="https://instagram.com" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-100">
                      <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-600" />
                    </a>
                    <a href="https://twitter.com" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100">
                      <Twitter className="h-5 w-5 text-gray-600 hover:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Help Banner */}
            <motion.div 
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white mb-1">Need Quick Help?</h4>
                  <p className="text-sm text-blue-100 mb-3">
                    Check our comprehensive guides or browse through frequently asked questions.
                  </p>
                  <a href="/how-it-works" className="inline-block px-4 py-2 bg-white rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors">
                    View User Guides
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
