"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Calendar,
  Clock,
  MessageCircle
} from "lucide-react";

// Walking Text Announcement Component

export const WalkingTextAnnouncement = () => {
  const messages = [
    "🚀 LIMITED SPOTS: Tech Career Breakthrough Seminar - February 25, 2024 • 2:00 PM WAT",
    "💼 From ₦50k to ₦500k: Learn High-Income Tech Skills • Live Online Training",
    "🎯 No Experience Needed • Mentorship Included • WhatsApp Community Access",
    "🔥 50% OFF: Only ₦2,500 (Originally ₦5,000) • Money-Back Guarantee"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-b border-cyan-400/30 backdrop-blur-md overflow-hidden">
      <div className="relative h-12 md:h-10 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center px-2"
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4 text-sm font-semibold text-white w-full max-w-7xl mx-auto">
              {/* Mobile: Stacked layout */}
              <div className="flex items-center space-x-2 md:hidden">
                <Zap className="w-3 h-3 text-yellow-400 animate-pulse flex-shrink-0" />
                <span className="text-xs text-center truncate max-w-[200px]">
                  {messages[currentMessageIndex]}
                </span>
              </div>

              {/* Desktop: Horizontal layout */}
              <div className="hidden md:flex items-center space-x-4">
                <Zap className="w-4 h-4 text-yellow-400 animate-pulse flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">
                  {messages[currentMessageIndex]}
                </span>
              </div>

              {/* Register Button - Always visible */}
              <Link 
                href="/seminar"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-1 flex-shrink-0 whitespace-nowrap"
              >
                <span>Register Now</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WalkingTextAnnouncement;

// Seminar CTA Section Component
export const SeminarCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-y border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-semibold">
              SPECIAL ANNOUNCEMENT
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Career Breakthrough Seminar
            </span>
          </h2>

          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Join our live 2-hour training and discover how to go from zero to high-income tech professional. 
            Perfect for students, graduates, and working professionals in Nigeria.
          </p>

          {/* Seminar Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3 text-white/70">
              <Calendar className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="font-semibold text-white">November 01, 2025</div>
                <div className="text-sm">Live Online</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-white/70">
              <Clock className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="font-semibold text-white">7:00 PM WAT</div>
                <div className="text-sm">2 Hours Duration</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-white/70">
              <Users className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="font-semibold text-white">347+ Enrolled</div>
                <div className="text-sm">Limited Spots</div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-3xl font-bold text-white">₦2,500</span>
            <span className="text-xl text-white/60 line-through">₦5,000</span>
            <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-bold">
              50% OFF
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/seminar"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-3"
            >
              <Zap className="w-5 h-5" />
              <span>Register for Seminar</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/seminar#details"
              className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Learn More</span>
            </Link>
          </div>

          {/* Guarantee */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-white/60 text-sm">
            <span>✅ 30-minute money-back guarantee</span>
            <span>•</span>
            <span>✅ WhatsApp community access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Updated Hero Section with Seminar Mention
export const HeroWithSeminar = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-dark dark:to-blue-900/20 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hero-content">
                {/* Seminar Badge in Hero */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full mb-6"
                >
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 text-sm font-semibold">
                    NEW: Tech Career Seminar - Feb 25
                  </span>
                </motion.div>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  Advance Your IT Career with Expert-Led Training
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Join thousands of professionals who have transformed their careers through our comprehensive, 
                  industry-relevant IT training programs. <strong>Special seminar for Nigerian students and professionals!</strong>
                </p>

                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/seminar"
                    className="rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-cyan-600 flex items-center space-x-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Join Tech Career Seminar</span>
                  </Link>
                  <Link
                    href="/programs"
                    className="rounded-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Browse All Programs
                  </Link>
                </div>

                {/* Quick Seminar Info */}
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-body-color dark:text-body-color-dark">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    <span>Feb 25, 2024 • 2PM WAT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>2 Hours • Live Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500 font-semibold">Only ₦2,500</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <Image
                    src="/images/hero/learning-illustration.svg"
                    alt="IT Training"
                    width={600}
                    height={500}
                    className="max-w-full lg:ml-auto"
                  />
                  
                  {/* Floating Seminar Badge on Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute bottom-8 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 max-w-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">Tech Career Seminar</div>
                        <div className="text-cyan-300 text-xs">₦2,500 • Feb 25</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background SVG */}
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
            <defs>
              <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                <stop offset="0.145833" stopColor="#4F46E5" stopOpacity="0" />
                <stop offset="1" stopColor="#4F46E5" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};
