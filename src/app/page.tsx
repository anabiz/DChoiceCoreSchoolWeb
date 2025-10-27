
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HeroWithSeminar, SeminarCTASection, WalkingTextAnnouncement } from "@/components/Common/WalkingTextAnnouncement ";
import { IlluminationBackground } from "@/components/Common/IlluminationBackground";



// Program Data
const programsData = {
  ongoing: [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and cloud technologies",
      duration: "12 weeks",
      level: "Intermediate",
      students: 45,
      progress: 65,
      image: "/images/courses/web-dev.svg",
      category: "Development",
      icon: "💻"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Comprehensive data science course covering Python, ML algorithms, and AI",
      duration: "16 weeks",
      level: "Advanced",
      students: 32,
      progress: 40,
      image: "/images/courses/data-science.svg",
      category: "Data Science",
      icon: "🤖"
    }
  ],
  upcoming: [
    {
      id: 3,
      title: "Cloud Computing & DevOps",
      description: "Learn AWS, Docker, Kubernetes and modern DevOps practices",
      duration: "10 weeks",
      level: "Intermediate",
      seats: 25,
      startDate: "2024-02-15",
      image: "/images/courses/cloud-devops.svg",
      category: "Cloud",
      price: "₦50000",
      icon: "☁️"
    },
    {
      id: 4,
      title: "Cybersecurity Fundamentals",
      description: "Essential cybersecurity skills for modern IT infrastructure",
      duration: "8 weeks",
      level: "Beginner",
      seats: 30,
      startDate: "2024-02-20",
      image: "/images/courses/cybersecurity.svg",
      category: "Security",
      price: "₦52000",
      icon: "🛡️"
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps with React Native and Flutter",
      duration: "14 weeks",
      level: "Intermediate",
      seats: 20,
      startDate: "2024-03-01",
      image: "/images/courses/mobile-dev.svg",
      category: "Development",
      price: "₦49900",
      icon: "📱"
    }
  ]
};

// Animated Program Card
const ProgramCard = ({ program, type = "upcoming", index }: { program: any; type?: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -10,
      transition: { duration: 0.3 }
    }}
    className="group relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-500"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl mb-2">{program.icon}</div>
        <div className="flex flex-col items-end space-y-2">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            {program.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            program.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
            program.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-300' :
            'bg-purple-500/20 text-purple-300'
          }`}>
            {program.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
        {program.title}
      </h3>
      <p className="text-white/70 text-sm mb-4 leading-relaxed">
        {program.description}
      </p>

      {/* Details */}
      <div className="flex items-center justify-between text-sm text-white/60 mb-4">
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {program.duration}
        </span>
        {type === "ongoing" ? (
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            {program.students} students
          </span>
        ) : (
          <span className="text-cyan-300 font-semibold">{program.price}</span>
        )}
      </div>

      {/* Progress Bar for Ongoing Programs */}
      {type === "ongoing" && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1 text-white/70">
            <span>Progress</span>
            <span>{program.progress}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${program.progress}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
            />
          </div>
        </div>
      )}

      {/* CTA Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={`/programs/${program.id}`}
          className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
        >
          {type === "ongoing" ? "View Progress" : "Enroll Now"}
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

// Main Landing Page Component
const ClassicLandingPage = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: "🎯",
      title: "Expert-Led Curriculum",
      description: "Learn from industry professionals with real-world experience"
    },
    {
      icon: "🛠️",
      title: "Hands-on Projects",
      description: "Build portfolio-worthy projects with guided mentorship"
    },
    {
      icon: "💼",
      title: "Career Support",
      description: "Get job placement assistance and career guidance"
    },
    {
      icon: "⚡",
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to materials"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <IlluminationBackground />

      <WalkingTextAnnouncement />
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TechCareer
              </span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Programs', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-white/70 hover:text-cyan-300 transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Updated Hero with Seminar */}
      {/* <HeroWithSeminar /> */}

      {/* Seminar CTA Section */}
      <SeminarCTASection />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Master Modern
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Technology Skills
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed"
            >
              Transform your career with industry-relevant IT training programs. 
              Learn from experts and join the next generation of tech professionals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Programs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Our Programs?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We provide comprehensive learning experiences designed for career growth and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all duration-500"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* Ongoing Programs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Currently Running Programs
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join these ongoing programs and learn alongside fellow professionals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programsData.ongoing.map((program, index) => (
                <ProgramCard key={program.id} program={program} type="ongoing" index={index} />
              ))}
            </div>
          </motion.div>

          {/* Upcoming Programs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Programs Open for Registration
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Enroll in our upcoming programs and start your learning journey
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programsData.upcoming.map((program, index) => (
                <ProgramCard key={program.id} program={program} type="upcoming" index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Career?
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of successful graduates who have advanced their careers with our programs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClassicLandingPage;