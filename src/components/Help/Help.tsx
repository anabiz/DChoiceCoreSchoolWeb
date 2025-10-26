"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  BookOpen, 
  CreditCard, 
  Settings, 
  Users,
  FileText,
  Clock,
  Zap,
  ArrowRight,
  ChevronRight
} from "lucide-react";

// Illumination Background Component
const IlluminationBackground = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -inset-[10px] opacity-50 blur-3xl"
          style={{
            background: `
              radial-gradient(600px circle at 50% 50%, 
                rgba(120, 119, 198, 0.3), transparent 40%),
              radial-gradient(400px circle at 30% 70%, 
                rgba(255, 119, 198, 0.2), transparent 40%),
              radial-gradient(300px circle at 70% 30%, 
                rgba(120, 219, 255, 0.2), transparent 40%)
            `,
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </>
  );
};

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "New to CodeMaster? Start here to learn the basics",
      color: "from-cyan-500 to-blue-600",
      articles: [
        "How to create your account",
        "Navigating the learning dashboard",
        "Setting up your learning environment",
        "Your first course: Step by step guide"
      ],
      link: "/help/getting-started"
    },
    {
      icon: CreditCard,
      title: "Billing & Payments",
      description: "Questions about payments, refunds, and pricing",
      color: "from-purple-500 to-pink-600",
      articles: [
        "Payment methods accepted",
        "Understanding refund policies",
        "Setting up payment plans",
        "Tax receipts and invoices"
      ],
      link: "/help/billing"
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Technical issues and platform troubleshooting",
      color: "from-green-500 to-cyan-600",
      articles: [
        "System requirements",
        "Video playback issues",
        "Login and account recovery",
        "Mobile app troubleshooting"
      ],
      link: "/help/technical"
    },
    {
      icon: Users,
      title: "Courses & Learning",
      description: "About course content, progress, and certificates",
      color: "from-orange-500 to-red-600",
      articles: [
        "Course completion certificates",
        "Downloading course materials",
        "Interacting with instructors",
        "Group projects and collaborations"
      ],
      link: "/help/courses"
    },
    {
      icon: FileText,
      title: "Account & Profile",
      description: "Manage your account settings and preferences",
      color: "from-blue-500 to-purple-600",
      articles: [
        "Updating personal information",
        "Privacy and data settings",
        "Notification preferences",
        "Closing your account"
      ],
      link: "/help/account"
    },
    {
      icon: Zap,
      title: "Seminar & Events",
      description: "Live sessions, webinars, and special events",
      color: "from-yellow-500 to-orange-600",
      articles: [
        "Joining live seminars",
        "Accessing seminar recordings",
        "WhatsApp community guidelines",
        "Networking opportunities"
      ],
      link: "/help/seminars"
    }
  ];

  const popularArticles = [
    {
      title: "How to reset your password",
      category: "Account & Profile",
      views: "2.4k"
    },
    {
      title: "Troubleshooting video playback issues",
      category: "Technical Support",
      views: "1.8k"
    },
    {
      title: "Understanding our refund policy",
      category: "Billing & Payments",
      views: "1.5k"
    },
    {
      title: "Downloading course certificates",
      category: "Courses & Learning",
      views: "1.3k"
    },
    {
      title: "Joining the WhatsApp community",
      category: "Seminar & Events",
      views: "1.1k"
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      responseTime: "2-5 minutes",
      availability: "24/7",
      action: "Start Chat",
      color: "from-green-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      responseTime: "2-4 hours",
      availability: "24/7",
      action: "Send Email",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      responseTime: "Immediate",
      availability: "Mon-Fri, 9AM-6PM WAT",
      action: "Call Now",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <IlluminationBackground />
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CodeMaster
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white/70 hover:text-cyan-300 transition-colors duration-300">
                Home
              </Link>
              <Link href="/programs" className="text-white/70 hover:text-cyan-300 transition-colors duration-300">
                Programs
              </Link>
              <Link href="/seminar" className="text-white/70 hover:text-cyan-300 transition-colors duration-300">
                Seminar
              </Link>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How can we help you?
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Find answers to your questions, get technical support, or contact our team directly
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers... (e.g., 'refund', 'technical issue', 'certificate')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Popular Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cyan-400">{article.category}</span>
                    <span className="text-white/40">{article.views} views</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Help Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Browse Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:border-cyan-400/30 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{category.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-center text-white/60 text-sm">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3"></div>
                          {article}
                        </div>
                      ))}
                      {category.articles.length > 3 && (
                        <div className="text-cyan-400 text-sm font-medium">
                          +{category.articles.length - 3} more articles
                        </div>
                      )}
                    </div>

                    <Link
                      href={category.link}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium text-sm"
                    >
                      <span>View all articles</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results Message */}
            {filteredCategories.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-white/70 mb-6">
                  We couldn't find any articles matching "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Clear search and show all categories
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
                <p className="text-white/70 text-lg">
                  Our support team is ready to assist you with any questions or issues
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                      <p className="text-white/70 text-sm mb-4">{method.description}</p>
                      
                      <div className="space-y-2 mb-4 text-sm text-white/60">
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{method.responseTime} response</span>
                        </div>
                        <div>{method.availability}</div>
                      </div>

                      <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-xl font-semibold transition-all duration-300">
                        {method.action}
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70">
                  <div>
                    <strong>Email:</strong> support@codemaster.com
                  </div>
                  <div>
                    <strong>Phone:</strong> +234 806 566 1350
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenterPage;