
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Facebook,
  Youtube,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "All Programs", href: "/programs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Success Stories", href: "/success-stories" }
  ];

  const programs = [
    { name: "Web Development", href: "/programs/web-development" },
    { name: "Data Science", href: "/programs/data-science" },
    { name: "Cloud Computing", href: "/programs/cloud-computing" },
    { name: "Cybersecurity", href: "/programs/cybersecurity" },
    { name: "Mobile Development", href: "/programs/mobile-development" },
    { name: "AI & Machine Learning", href: "/programs/ai-ml" }
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "FAQs", href: "/faqs" },
    // { name: "Payment Options", href: "/payment" },
    { name: "Refund Policy", href: "/refund-policy" },
    // { name: "Technical Support", href: "/support" },
    // { name: "Community", href: "/community" }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/codemaster" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/codemaster" },
    { name: "GitHub", icon: Github, href: "https://github.com/codemaster" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/codemaster" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/codemaster" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CM</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  CodeMaster
                </span>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Transform your career with industry-relevant IT training programs. 
                Learn from experts and join the next generation of tech professionals.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>hello@codemaster.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+234 806 566 1350</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Lagos, NG</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Programs</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <motion.li
                    key={program.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={program.href}
                      className="text-white/70 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {program.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-12"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Latest Programs
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about new courses, 
                special offers, and career tips from industry experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white/60 text-sm mb-4 md:mb-0"
              >
                © {currentYear} CodeMaster. All rights reserved.
              </motion.div>

              <div className="flex items-center space-x-6 text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6"
                >
                  <Link href="/refund-policy" className="text-white/60 hover:text-cyan-300 transition-colors duration-300">
                    Refund Policy
                  </Link>
                  <Link href="/terms" className="text-white/60 hover:text-cyan-300 transition-colors duration-300">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-white/60 hover:text-cyan-300 transition-colors duration-300">
                    Cookie Policy
                  </Link>
                </motion.div>

                {/* Scroll to Top Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 400,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
