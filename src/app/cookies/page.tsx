"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, Shield, Info } from "lucide-react";
import { IlluminationBackground } from "@/components/Common/IlluminationBackground";
const CookiePolicyPage = () => {
  const cookieTypes = [
    {
      icon: Shield,
      name: "Essential Cookies",
      purpose: "Required for basic site functionality.",
      duration: "Session",
      examples: "Authentication, security, session management.",
    },
    {
      icon: Settings,
      name: "Preference Cookies",
      purpose: "Remember your settings and preferences.",
      duration: "1 year",
      examples: "Language preferences, theme settings.",
    },
    {
      icon: Cookie,
      name: "Analytics Cookies",
      purpose: "Help us improve our platform.",
      duration: "2 years",
      examples: "Google Analytics, user behavior tracking.",
    },
    {
      icon: Info,
      name: "Marketing Cookies",
      purpose: "Deliver relevant advertisements.",
      duration: "1 year",
      examples: "Facebook Pixel, conversion tracking.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <IlluminationBackground />

      {/* Navbar */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TechCareer
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Cookie Policy
              </span>
            </h1>
            <p className="text-xl text-white/70">
              How we use cookies to enhance your experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* What Are Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-white/70 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website.
                They help us provide you with a better experience by remembering your preferences and
                understanding how you use our platform.
              </p>
            </motion.div>

            {/* Types of Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Types of Cookies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((cookie, index) => {
                  const Icon = cookie.icon;
                  return (
                    <motion.div
                      key={cookie.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <Icon className="w-6 h-6 text-green-400" />
                        <h3 className="text-xl font-semibold text-white">{cookie.name}</h3>
                      </div>
                      <div className="space-y-2 text-white/70 text-sm">
                        <div>
                          <strong>Purpose:</strong> {cookie.purpose}
                        </div>
                        <div>
                          <strong>Duration:</strong> {cookie.duration}
                        </div>
                        <div>
                          <strong>Examples:</strong> {cookie.examples}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Managing Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-green-500/10 backdrop-blur-md rounded-2xl border border-green-500/20 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-white/70 mb-4">
                You can control and delete cookies as you wish. You can remove all cookies stored on your
                computer and configure most browsers to prevent them from being saved.
              </p>
              <div className="text-white/70 space-y-2">
                <div>&bull; Browser settings: Check your browser&apos;s help section.</div>
                <div>&bull; Opt-out tools: Available for analytics and advertising cookies.</div>
                <div>&bull; Essential cookies: Cannot be disabled as they are required for site functionality.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/50 text-sm">
        <p>© {new Date().getFullYear()} TechCareer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CookiePolicyPage;
