"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Lock, 
  Shield, 
  CreditCard, 
  CheckCircle, 
  ArrowLeft,
  Zap
} from "lucide-react";

// Illumination Background Component (same as other pages)
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
    </>
  );
};

// Mock program data for payment page
const programData = {
  id: 3,
  title: "Cloud Computing & DevOps",
  price: 899,
  duration: "10 weeks",
  instructor: "Sarah Johnson"
};

const PaymentPage = () => {
  const params = useParams();
  const router = useRouter();
  const programId = params.id as string;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: ""
  });

  const program = programData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const initializePaystackPayment = async () => {
    setIsProcessing(true);
    
    // Simulate Paystack integration
    // In a real implementation, you would:
    // 1. Call your backend to initialize Paystack transaction
    // 2. Get the authorization URL from Paystack
    // 3. Redirect to Paystack payment page
    
    setTimeout(() => {
      setIsProcessing(false);
      // Simulate successful payment redirect
      router.push(`/programs/${programId}/payment/success`);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await initializePaystackPayment();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <IlluminationBackground />
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5 text-white/60 group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="text-white/60 group-hover:text-cyan-300 transition-colors duration-300">
                  Back to Course
                </span>
              </motion.div>
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CodeMaster
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Complete Your Enrollment
              </span>
            </h1>
            <p className="text-xl text-white/70">
              Secure payment for <strong>{program.title}</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                {/* Security Header */}
                <div className="flex items-center justify-center space-x-3 mb-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-semibold">Secure Payment Powered by Paystack</span>
                  <Lock className="w-5 h-5 text-green-400" />
                </div>

                {/* Payment Method Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === "card" 
                          ? "border-cyan-400 bg-cyan-500/10" 
                          : "border-white/20 bg-white/5 hover:border-white/40"
                      }`}
                    >
                      <CreditCard className="w-6 h-6 mb-2 mx-auto text-cyan-400" />
                      <span className="text-white font-medium">Card Payment</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod("bank")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === "bank" 
                          ? "border-cyan-400 bg-cyan-500/10" 
                          : "border-white/20 bg-white/5 hover:border-white/40"
                      }`}
                    >
                      <Zap className="w-6 h-6 mb-2 mx-auto text-cyan-400" />
                      <span className="text-white font-medium">Bank Transfer</span>
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Paystack Payment Button */}
                  <motion.button
                    type="submit"
                    disabled={isProcessing}
                    whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                    whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Connecting to Paystack...</span>
                      </div>
                    ) : (
                      `Pay $${program.price} with Paystack`
                    )}
                  </motion.button>

                  {/* Security Assurance */}
                  <div className="text-center mt-6">
                    <p className="text-white/60 text-sm flex items-center justify-center space-x-2">
                      <Lock className="w-4 h-4" />
                      <span>Your payment is secured and encrypted by Paystack</span>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Order Summary */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <div>
                      <h4 className="font-semibold text-white">{program.title}</h4>
                      <p className="text-white/60 text-sm">{program.duration}</p>
                      <p className="text-white/60 text-sm">with {program.instructor}</p>
                    </div>
                    <span className="text-cyan-400 font-bold">${program.price}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-white/80">
                      <span>Program Fee</span>
                      <span>${program.price}</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Platform Fee</span>
                      <span>$0</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Tax</span>
                      <span>$0</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-cyan-400">${program.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Included */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">What's Included</h3>
                <div className="space-y-3">
                  {[
                    "Full program access",
                    "Lifetime course materials",
                    "Certificate of completion",
                    "1-on-1 mentor support",
                    "Slack community access",
                    "Career guidance sessions"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-green-500/10 backdrop-blur-md rounded-2xl border border-green-500/20 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">30-Day Money-Back Guarantee</h3>
                </div>
                <p className="text-white/70 text-sm">
                  If you're not satisfied with the program within the first 30 days, 
                  we'll refund your payment in full. No questions asked.
                </p>
              </div>

              {/* Support */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
                <p className="text-white/70 text-sm mb-3">
                  Our support team is here to help you with any questions.
                </p>
                <div className="text-cyan-400 text-sm space-y-1">
                  <div>📧 support@codemaster.com</div>
                  <div>📞 +1 (555) 123-4567</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Payment Methods Logos */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-white/60 mb-4">Supported Payment Methods</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">Paystack</div>
              <div className="text-white">Visa</div>
              <div className="text-white">Mastercard</div>
              <div className="text-white">Verve</div>
              <div className="text-white">Bank Transfer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;