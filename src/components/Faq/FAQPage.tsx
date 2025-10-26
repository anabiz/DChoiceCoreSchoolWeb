"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, BookOpen, CreditCard, Users, Settings, Mail } from "lucide-react";
import { IlluminationBackground } from "../Common/IlluminationBackground";
const FAQPage = () => {
  const [openCategory, setOpenCategory] = useState("general");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const faqCategories = [
    {
      id: "general",
      name: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is TechCareer?",
          answer: "TechCareer is an online IT training platform that offers comprehensive courses and seminars in web development, data science, cloud computing, and other tech skills. We focus on practical, industry-relevant training designed to help Nigerians launch and advance their tech careers."
        },
        {
          question: "Who are your courses for?",
          answer: "Our courses are designed for beginners, students, working professionals, and anyone looking to start or advance their career in technology. No prior experience is needed for our beginner courses. We specifically cater to the Nigerian market with locally relevant examples and case studies."
        },
        {
          question: "Do you offer certificates?",
          answer: "Yes, all our courses and seminars include a digital certificate of completion that you can share on LinkedIn and include in your resume. Our certificates are recognized by local tech companies and can help you stand out in job applications."
        },
        {
          question: "Are the courses in English?",
          answer: "Yes, all our course materials and instruction are in English. However, our instructors are familiar with Nigerian contexts and often use local examples that resonate with Nigerian students."
        }
      ]
    },
    {
      id: "courses",
      name: "Courses & Learning",
      icon: BookOpen,
      questions: [
        {
          question: "How long do I have access to course materials?",
          answer: "You get lifetime access to all course materials, including future updates. You can learn at your own pace and revisit the content anytime. This means you can always come back to refresh your knowledge as technology evolves."
        },
        {
          question: "Are the courses self-paced or scheduled?",
          answer: "We offer both options! Most courses are self-paced, while seminars and bootcamps have scheduled live sessions. Our self-paced courses give you flexibility, while live sessions provide real-time interaction with instructors and peers."
        },
        {
          question: "What if I need help during the course?",
          answer: "You get access to our student community, weekly mentorship sessions, and dedicated support team. We also have active WhatsApp groups where you can ask questions and get help from both instructors and fellow students."
        },
        {
          question: "Can I download course materials?",
          answer: "Yes, most course materials including videos, PDFs, and code examples are available for download. This allows you to learn even when you&apos;re offline or have limited internet connectivity."
        }
      ]
    },
    {
      id: "payment",
      name: "Payment & Pricing",
      icon: CreditCard,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major payment methods through Paystack, including bank transfers, debit/credit cards, and USSD. We&apos;ve optimized our payment process for Nigerian users to ensure smooth and secure transactions."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes! We offer flexible payment plans for most of our programs. You can typically split your payment into 2-3 monthly installments. Contact our support team to discuss available options for your chosen program."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees. The price you see is the price you pay. All taxes and platform fees are included in the displayed price. We believe in transparent pricing with no surprises."
        },
        {
          question: "Do you offer discounts for students?",
          answer: "Yes, we offer student discounts! Contact our support team with proof of your student status (student ID or admission letter) to receive a special discount code for our courses."
        }
      ]
    },
    {
      id: "technical",
      name: "Technical Support",
      icon: Settings,
      questions: [
        {
          question: "What are the technical requirements?",
          answer: "You need a computer with internet access and a modern web browser (Chrome, Firefox, or Edge). Most courses require a computer rather than just a phone, as you&apos;ll be doing practical coding exercises. We recommend at least 4GB RAM and a stable internet connection."
        },
        {
          question: "Can I access courses on mobile?",
          answer: "Yes! Our platform is fully responsive and works on smartphones, tablets, and desktop computers. While we recommend using a computer for the best learning experience (especially for coding), you can watch videos and access materials on mobile devices."
        },
        {
          question: "What if I experience technical issues?",
          answer: "Contact our support team immediately via email, WhatsApp, or live chat. We offer 24/7 technical support to ensure you have a smooth learning experience. Most issues are resolved within a few hours."
        },
        {
          question: "Do I need to install special software?",
          answer: "It depends on the course. Most programming courses will require you to install free software like VS Code, Node.js, or Python. We provide step-by-step installation guides and support to help you set up your development environment."
        }
      ]
    },
    {
      id: "career",
      name: "Career Support",
      icon: Users,
      questions: [
        {
          question: "Do you help with job placement?",
          answer: "Yes! We provide comprehensive career support including resume reviews, LinkedIn optimization, interview preparation, and job placement assistance. We have partnerships with Nigerian tech companies that regularly hire from our talent pool."
        },
        {
          question: "What kind of jobs can I get after completion?",
          answer: "Our students have secured roles as Frontend Developers, Backend Developers, Data Analysts, Cloud Engineers, and more. Entry-level positions typically start from ₦150,000 monthly, with experienced roles reaching ₦500,000+ in Nigerian companies."
        },
        {
          question: "Do you offer internship opportunities?",
          answer: "Yes, we have an internship program that connects top students with partner companies for 3-6 month paid internships. This provides valuable real-world experience and often leads to full-time job offers."
        },
        {
          question: "Can I get a referral after completing the course?",
          answer: "Absolutely! We provide referrals and recommendations to our partner companies for students who demonstrate strong skills and complete projects successfully. We also showcase outstanding student projects to potential employers."
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const currentCategory = faqCategories.find(cat => cat.id === openCategory);

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
            <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-white/70">
              Find answers to common questions about our platform and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sticky top-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                  <div className="space-y-2">
                    {faqCategories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setOpenCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                            openCategory === category.id
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{category.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* FAQ Items */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      {currentCategory && (
                        <currentCategory.icon className="w-6 h-6 text-blue-400" />
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {currentCategory?.name}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {currentCategory?.questions.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border border-white/10 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(index)}
                          className="w-full text-left p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {openItems.has(index) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 pt-2 border-t border-white/10">
                                <p className="text-white/70 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-cyan-500/10 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8 mt-8 text-center"
                >
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                    Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you with any questions about our courses, payments, or technical issues.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:support@codemaster.com"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Email Support
                    </a>
                    <a
                      href="https://wa.me/2348065661350"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      WhatsApp Chat
                    </a>
                  </div>
                  <div className="mt-6 text-cyan-400 text-sm">
                    <div>📞 +234 806 566 1350</div>
                    <div>🕒 Available 24/7</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;