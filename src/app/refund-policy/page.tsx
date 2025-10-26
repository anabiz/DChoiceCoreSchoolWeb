"use client";

import { motion } from "framer-motion";
import { RefreshCw, Clock, CheckCircle, XCircle } from "lucide-react";
import { IlluminationBackground } from "../page";

const RefundPolicyPage = () => {
  const refundScenarios = [
    {
      icon: CheckCircle,
      scenario: "30-Day Money-Back Guarantee",
      eligible: true,
      conditions: "Request within 30 days of purchase • Less than 25% course completion • Valid reason required"
    },
    {
      icon: CheckCircle,
      scenario: "Technical Issues",
      eligible: true,
      conditions: "Platform unavailable for more than 48 hours • Documented technical problems • Support ticket submitted"
    },
    {
      icon: XCircle,
      scenario: "Change of Mind",
      eligible: false,
      conditions: "After 30-day period • Completed more than 50% of course • No technical issues experienced"
    },
    {
      icon: XCircle,
      scenario: "Not Achieving Desired Results",
      eligible: false,
      conditions: "Success depends on student effort • Course materials are as described • Completion certificate awarded"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Submit Request",
      description: "Contact support with your refund request and reason"
    },
    {
      step: "2",
      title: "Review Period",
      description: "We review your request within 3-5 business days"
    },
    {
      step: "3",
      title: "Approval/Denial",
      description: "You receive notification of our decision"
    },
    {
      step: "4",
      title: "Processing",
      description: "Approved refunds processed within 7-10 business days"
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
            <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-10 h-10 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Refund Policy
              </span>
            </h1>
            <p className="text-xl text-white/70">
              Our commitment to your satisfaction
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
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Refund Policy</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We want you to be completely satisfied with your learning experience. If you're not happy 
                with your purchase, we offer a 30-day money-back guarantee for most of our programs.
              </p>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                <p className="text-orange-300 text-sm">
                  <strong>Note:</strong> Seminar registrations may have different refund terms. Please check 
                  the specific seminar page for details.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Refund Eligibility
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {refundScenarios.map((scenario, index) => {
                  const Icon = scenario.icon;
                  return (
                    <motion.div
                      key={scenario.scenario}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`backdrop-blur-md rounded-2xl border p-6 ${
                        scenario.eligible 
                          ? 'bg-green-500/10 border-green-500/20' 
                          : 'bg-red-500/10 border-red-500/20'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <Icon className={`w-6 h-6 ${
                          scenario.eligible ? 'text-green-400' : 'text-red-400'
                        }`} />
                        <h3 className="text-xl font-semibold text-white">{scenario.scenario}</h3>
                      </div>
                      <div className={`text-sm ${
                        scenario.eligible ? 'text-green-300' : 'text-red-300'
                      }`}>
                        {scenario.conditions}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Refund Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center"
                  >
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-cyan-400 font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-cyan-500/10 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-white/70 mb-4">
                If you have questions about our refund policy or need to request a refund, 
                please contact our support team.
              </p>
              <div className="text-cyan-400 space-y-2">
                <div>📧 support@codemaster.com</div>
                <div>📞 +234 806 566 1350</div>
                <div>🕒 Mon-Fri: 9AM-6PM WAT</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;