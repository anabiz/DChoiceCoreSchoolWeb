"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, CreditCard, AlertCircle } from "lucide-react";
import { IlluminationBackground } from "../page";

const TermsOfServicePage = () => {
  const sections = [
    {
      icon: BookOpen,
      title: "Account Registration",
      content: `
        • You must be at least 16 years old to create an account
        • Provide accurate and complete registration information
        • Maintain the security of your account credentials
        • Notify us immediately of any unauthorized access
        • One account per individual is permitted
      `
    },
    {
      icon: CreditCard,
      title: "Payments and Refunds",
      content: `
        • All payments are processed securely through Paystack
        • Course fees are due upon enrollment
        • Refund policies vary by program (see Refund Policy)
        • We reserve the right to change pricing with notice
        • Chargebacks may result in account suspension
      `
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: `
        • All course materials are proprietary to CodeMaster
        • Personal use of materials for learning is permitted
        • Redistribution of content is strictly prohibited
        • You retain ownership of your projects and assignments
        • We may use anonymized data for improvement purposes
      `
    },
    {
      icon: AlertCircle,
      title: "Prohibited Activities",
      content: `
        • Sharing account access with others
        • Copying or distributing course materials
        • Harassing other students or instructors
        • Attempting to compromise platform security
        • Using automated systems to access the platform
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <IlluminationBackground />
      
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CodeMaster
              </span>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-white/70">
              Effective date: February 1, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8"
            >
              <p className="text-white/70 leading-relaxed">
                Welcome to CodeMaster. These Terms of Service govern your use of our platform, courses, 
                and services. By accessing or using CodeMaster, you agree to be bound by these terms.
              </p>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    </div>
                    <div className="text-white/70 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-purple-500/10 backdrop-blur-md rounded-2xl border border-purple-500/20 p-8 mt-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-white/70">
                We may update these Terms of Service from time to time. We will notify you of any changes 
                by posting the new terms on this page and updating the effective date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;