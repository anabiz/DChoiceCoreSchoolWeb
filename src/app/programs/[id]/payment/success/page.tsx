"use client";

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Mail, 
  Users, 
  Calendar, 
  Download, 
  ArrowRight,
  BookOpen,
  MessageCircle,
  Video
} from 'lucide-react';

// Illumination Background Component
const IlluminationBackground = () => {
  return (
    <>
      {/* Animated Gradient Orbs */}
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
        
        {/* Classic Grid Pattern */}
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

      {/* Floating Particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
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
    </>
  );
};

const PaymentSuccessPage = () => {
  const params = useParams();
  const router = useRouter();
  const programId = params.id as string;

  // Mock program data
  const program = {
    id: programId,
    title: "Cloud Computing & DevOps",
    instructor: "Sarah Johnson",
    startDate: "2024-02-15",
    duration: "10 weeks",
    price: 899
  };

  useEffect(() => {
    // Here you would typically:
    // 1. Verify the payment with your backend
    // 2. Update user enrollment status
    // 3. Send confirmation email
    
    // Simulate API call
    const verifyPayment = async () => {
      // await verifyPaymentWithBackend(programId);
    };
    
    verifyPayment();
  }, [programId]);

  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description: "We&apos;ve sent a welcome package with program details and access instructions",
      action: "Check your inbox",
      color: "text-cyan-400"
    },
    {
      icon: BookOpen,
      title: "Access Course Materials",
      description: "All course content is now available in your learning dashboard",
      action: "Start Learning",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with fellow students in our exclusive Slack workspace",
      action: "Join Slack",
      color: "text-purple-400"
    },
    {
      icon: Calendar,
      title: "Orientation Session",
      description: "Live orientation on February 15, 2024 - don&apos;t miss it!",
      action: "Add to Calendar",
      color: "text-green-400"
    },
    {
      icon: Video,
      title: "Watch Welcome Video",
      description: "Get started with an overview from your instructor",
      action: "Watch Now",
      color: "text-red-400"
    },
    {
      icon: MessageCircle,
      title: "Meet Your Mentor",
      description: "Schedule your first 1-on-1 session with your assigned mentor",
      action: "Schedule Call",
      color: "text-yellow-400"
    }
  ];

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
            
            <Link 
              href="/"
              className="text-white/60 hover:text-cyan-300 transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Success Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                <CheckCircle className="w-16 h-16 text-green-400" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Welcome to the Program!
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-6 max-w-2xl mx-auto">
              Your enrollment in <strong className="text-cyan-300">{program.title}</strong> is confirmed. 
              We&apos;re excited to have you join our learning community.
            </p>

            {/* Order Details */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 max-w-md mx-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white/70">Order Reference</span>
                <span className="text-cyan-300 font-mono">CM{programId}-{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Amount Paid</span>
                <span className="text-green-400 font-bold text-lg">${program.price}</span>
              </div>
            </div>
          </motion.div>

          {/* Next Steps Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Here&apos;s What to Do Next
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:border-cyan-400/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${step.color.replace('text-', 'bg-')}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <button className="w-full bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl py-3 text-white/80 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:border-cyan-400/30">
                      <span className="text-sm font-medium">{step.action}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Left - Course Access */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Access all course materials, video lectures, and assignments immediately. 
                Your learning journey begins now!
              </p>
              <div className="space-y-4">
                <Link
                  href={`/programs/${programId}`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-3"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Enter Learning Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <button className="w-full border border-white/20 bg-white/5 backdrop-blur-md py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3">
                  <Download className="w-5 h-5" />
                  <span>Download Course Syllabus</span>
                </button>
              </div>
            </div>

            {/* Right - Support & Resources */}
            <div className="space-y-6">
              {/* Support Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Need Help?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Our support team is here to help you succeed. Reach out anytime.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-3 text-cyan-400">
                    <Mail className="w-4 h-4" />
                    <span>support@codemaster.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-cyan-400">
                    <MessageCircle className="w-4 h-4" />
                    <span>Live Chat Support</span>
                  </div>
                </div>
              </div>

              {/* Resources Card */}
              <div className="bg-green-500/10 backdrop-blur-md rounded-2xl border border-green-500/20 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Success Guarantee</h3>
                <p className="text-white/70 text-sm mb-4">
                  Remember, you&apos;re protected by our 30-day money-back guarantee. 
                  If you&apos;re not satisfied, we&apos;ll refund your payment.
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Fully Protected</span>
                </div>
              </div>

              {/* Community Card */}
              <div className="bg-purple-500/10 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Join the Community</h3>
                <p className="text-white/70 text-sm mb-4">
                  Connect with 2,500+ students and alumni in our exclusive network.
                </p>
                <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-300 py-3 rounded-xl font-medium transition-all duration-300">
                  Join Student Network
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/60 mb-6">
              Have questions about your enrollment or need technical support?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/help"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Visit Help Center
              </Link>
              <span className="text-white/40 hidden sm:block">•</span>
              <Link
                href="/contact"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Contact Support
              </Link>
              <span className="text-white/40 hidden sm:block">•</span>
              <Link
                href="/programs"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Browse More Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;