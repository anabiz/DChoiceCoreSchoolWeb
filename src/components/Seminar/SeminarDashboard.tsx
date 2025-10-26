"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PaystackPop from '@paystack/inline-js';

import { 
  Play, 
  CheckCircle, 
  Users, 
  Clock, 
  Calendar,
  Award,
  MessageCircle,
  Zap,
  Star,
  Shield,
  Video,
  BookOpen,
  TrendingUp,
  ArrowRight,
  User,
  Mail,
  Phone,
  X
} from "lucide-react";
import { toast } from "react-toastify";
import ToastComponent from "@/components/Common/ToastComponent";
import { useCheckoutStore } from "@/api/store/checkout";
import PollingComponent from "@/components/Common/Polling";

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

const SeminarDashboard = () => {
  const [hasPaid, setHasPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 38
  });
  const [reference, setReference] = useState<string | null>(null);
  const [startPolling, setStartPolling] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
    phone: "",
    fbc: "", // Facebook Click ID
    fbp: "", // Facebook Browser ID
    adId: "", // Ad ID
    campaignId: "", // Campaign ID
    ttclid: "", // TikTok Click ID
    ttsource: "", // TikTok Source
    ttcampaign: "" // TikTok Campaign
  });
  
  const [formErrors, setFormErrors] = useState({
    email: "",
    fullName: ""
  });
  
  const [hasAutoFilledData, setHasAutoFilledData] = useState(false);
  
  const paymentFormRef = useRef<HTMLDivElement>(null);
  
  const initiateCheckoutV2 = useCheckoutStore((state) => state.initiateCheckoutV2);

  // YouTube video configuration
  const youtubeVideo = {
    id: "YOUR_VIDEO_ID", // Replace with your YouTube video ID
    thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg", // YouTube thumbnail
    title: "Tech Career Breakthrough Seminar - Transform Your Future",
    description: "Join us for a life-changing seminar that will equip you with the skills and knowledge to launch a successful tech career.",
    // description: "See how this seminar has transformed lives and launched successful tech careers"
  };

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  // Function to get YouTube thumbnail
  const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault' = 'maxresdefault') => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const seconds = prev.seconds - 1;
        if (seconds >= 0) return { ...prev, seconds };
        
        const minutes = prev.minutes - 1;
        if (minutes >= 0) return { ...prev, minutes: minutes, seconds: 59 };
        
        const hours = prev.hours - 1;
        if (hours >= 0) return { hours, minutes: 59, seconds: 59 };
        
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    // Extract Facebook/Instagram/TikTok ad parameters from URL
    extractAdParameters();

    return () => clearInterval(timer);
  }, []);

  // Extract Facebook/Instagram/TikTok ad parameters from URL
  const extractAdParameters = () => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    
    // Facebook Click ID (_fbp and _fbc)
    const fbc = urlParams.get('fbclid') || getCookie('_fbc') || '';
    const fbp = getCookie('_fbp') || '';
    
    // TikTok Parameters
    const ttclid = urlParams.get('ttclid') || '';
    const ttsource = urlParams.get('tt_source') || urlParams.get('tt_source') || '';
    const ttcampaign = urlParams.get('tt_campaign') || '';
    
    // Common ad parameters
    const adId = urlParams.get('ad_id') || urlParams.get('adid') || '';
    const campaignId = urlParams.get('campaign_id') || urlParams.get('utm_campaign') || '';
    
    // Try to get email from URL (common in lead ads)
    const email = urlParams.get('email') || '';
    const fullName = urlParams.get('name') || urlParams.get('full_name') || '';

    const newUserData = {
      email: email || "",
      fullName: fullName || "",
      phone: "",
      fbc,
      fbp,
      adId,
      campaignId,
      ttclid,
      ttsource,
      ttcampaign
    };

    setUserData(newUserData);

    // Check if we have auto-filled data from ads
    const hasAdData = fbc || fbp || ttclid || adId || campaignId;
    const hasPrefilledData = email || fullName;
    
    if (hasAdData || hasPrefilledData) {
      setHasAutoFilledData(true);
      // DON'T show form - proceed directly to payment when user is ready
    }
  };

  // Helper function to get cookies
  const getCookie = (name: string): string => {
    if (typeof window === 'undefined') return '';
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
    return '';
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {
      email: "",
      fullName: ""
    };
    
    let isValid = true;
    
    // Validate full name
    if (!userData.fullName.trim()) {
      errors.fullName = "Full name is required";
      isValid = false;
    } else if (userData.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters";
      isValid = false;
    }
    
    // Validate email
    if (!userData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  // Handle form input changes and clear errors when user types
  const handleInputChange = (field: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  // Scroll to payment form section
  const scrollToPaymentForm = () => {
    // First ensure the form is shown
    setShowForm(true);
    
    // Then scroll to the payment form after a brief delay to ensure it's rendered
    setTimeout(() => {
      if (paymentFormRef.current) {
        paymentFormRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  // Handle secure your spot button click
  const handleSecureSpotClick = () => {
    scrollToPaymentForm();
  };

  // Send seminar registration data to .NET backend
  const sendRegistrationData = async (paymentData: any) => {
    try {
      const registrationData = {
        ...userData,
        ...paymentData,
        seminarTitle: seminarData.title,
        seminarDate: seminarData.date,
        seminarTime: seminarData.time,
        amount: seminarData.price,
        registrationDate: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ipAddress: await getClientIP(),
        source: getTrafficSource()
      };

      // Send to your .NET backend
      const response = await fetch('/api/seminar/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData)
      });

      if (!response.ok) {
        console.error('Failed to send registration data');
      }

      return response.ok;
    } catch (error) {
      console.error('Error sending registration data:', error);
      return false;
    }
  };

  // Determine traffic source
  const getTrafficSource = (): string => {
    if (userData.fbc || userData.fbp) return 'facebook_instagram';
    if (userData.ttclid) return 'tiktok';
    if (userData.adId) return 'google_ads';
    return 'direct';
  };

  // Get client IP (simplified - in production, use proper IP detection)
  const getClientIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return 'unknown';
    }
  };

  // Send seminar details to user email
  const sendSeminarEmail = async (email: string, fullName: string) => {
    try {
      const emailData = {
        to: email,
        subject: `Welcome to ${seminarData.title}!`,
        template: 'seminar-confirmation',
        data: {
          fullName,
          seminarTitle: seminarData.title,
          seminarDate: seminarData.date,
          seminarTime: seminarData.time,
          seminarDuration: seminarData.duration,
          whatsappGroup: seminarData.whatsappGroup,
          instructor: seminarData.instructor,
          preparationTips: [
            "Test your internet connection before the seminar",
            "Find a quiet space for the 2-hour session",
            "Prepare questions for the Q&A session",
            "Have a notebook ready for taking notes"
          ]
        }
      };

      const response = await fetch('/api/email/send-seminar-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const handlePayment = async () => {

    // If we have auto-filled data but missing required fields, show form
    if (hasAutoFilledData && (!userData.email || !userData.fullName)) {
      setShowForm(true);
      scrollToPaymentForm();
      return;
    }

    // If form is shown, validate form data
    if (showForm) {
      if (!validateForm()) {
        toast.error(
          <ToastComponent
            title="Missing Information!"
            body="Please provide valid email and full name to continue."
          />,
          { progress: undefined }
        );
        return;
      }
    }

    setIsProcessing(true);

    try {
      const paymentRequest = {
        email: userData.email,
        amount: seminarData.price,
        metadata: {
          fullName: userData.fullName,
          phone: userData.phone,
          seminar: seminarData.title,
          fbc: userData.fbc,
          fbp: userData.fbp,
          ttclid: userData.ttclid,
          ttsource: userData.ttsource,
          ttcampaign: userData.ttcampaign,
          adId: userData.adId,
          campaignId: userData.campaignId,
          trafficSource: getTrafficSource()
        }
      };

      const res = await initiateCheckoutV2(paymentRequest as any, true);

      if (res != null) {
        const { reference, accessCode } = res;  
        setReference(reference);

        if (window !== undefined) {
          setStartPolling(true);
          const paystack = new PaystackPop();
          paystack.resumeTransaction(accessCode);
          setIsProcessing(false);
          return { success: true };
        }
        setIsProcessing(false);
        return { success: false };
      } else {
        setIsProcessing(false);
        return { success: false };
      }
    } catch (error: any) {
      console.error(error);
      setIsProcessing(false);
      toast.error(
        <ToastComponent
          title="Error!"
          body={error?.response?.data?.message || "Failed to complete checkout."}
        />,
        { progress: undefined }
      );
      return { success: false };
    }
  };

  const seminarData = {
    title: "Tech Career Breakthrough: From Zero to High-Income Tech Professional",
    description: "Discover how to launch or upgrade your tech career, even with no prior experience. Learn the exact skills Nigerian and international companies are hiring for RIGHT NOW.",
    date: "November 01, 2025",
    time: "7:00 PM WAT",
    duration: "2 Hours",
    price: 2500, // ₦2,500
    originalPrice: 5000,
    instructor: "Tony Tech Expert",
    studentsEnrolled: 347,
    whatsappGroup: "https://chat.whatsapp.com/your-group-link"
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "6-Figure Career Paths",
      description: "Discover tech roles paying ₦500,000+ monthly in Nigeria"
    },
    {
      icon: BookOpen,
      title: "No Experience Required",
      description: "Start from scratch with our step-by-step roadmap"
    },
    {
      icon: Users,
      title: "Mentorship Access",
      description: "Get guidance from senior tech professionals"
    },
    {
      icon: Zap,
      title: "Immediate Opportunities",
      description: "Learn about companies hiring RIGHT NOW"
    }
  ];

  const whatYouGet = [
    "Live 2-hour intensive training session",
    "Lifetime access to recording",
    "Comprehensive tech career roadmap PDF",
    "Mentorship support for one year",
    "Access to exclusive WhatsApp community",
    "List of 50+ companies hiring juniors",
    "Resume and portfolio review guide"
  ];

  // Handle successful payment completion
  const handlePaymentSuccess = async () => {
    setHasPaid(true);

    toast.success(
      <ToastComponent
        title="Payment Successful!"
        body="Check your email for seminar details."
      />,
      { progress: undefined }
    );
  };

  // Direct payment handler for auto-filled data
  const handleDirectPayment = () => {
    if (hasAutoFilledData && userData.email && userData.fullName) {
      // We have all required data, proceed directly to payment
      handlePayment();
    } else {
      // Show form to collect missing data
      setShowForm(true);
    }
  };

  if (hasPaid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <IlluminationBackground />
        
        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl border border-green-500/30 p-8 mb-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Welcome to the Tech Career Breakthrough Seminar, {userData.fullName}!
              </h1>
              <p className="text-xl text-white/70">
                Your payment was successful.
                {/* Your payment was successful. Check your email at <strong>{userData.email}</strong> for seminar details! */}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Seminar Details</h3>
                <p className="text-white/70">
                  <strong>Date:</strong> {seminarData.date}<br />
                  <strong>Time:</strong> {seminarData.time}<br />
                  <strong>Duration:</strong> {seminarData.duration}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Join Our Community</h3>
                <p className="text-white/70 mb-4">
                  Connect with other participants and get ongoing support
                </p>
                <a
                  href={seminarData.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Join WhatsApp Group</span>
                </a>
              </div>
            </div>

            <div className="bg-cyan-500/10 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">What&apos;s Next?</h3>
              <div className="space-y-3 text-white/70 text-left max-w-2xl mx-auto">
                {/* <p>✅ <strong>Check your email</strong> at {userData.email} for seminar access details</p> */}
                <p>✅ <strong>Join the WhatsApp group</strong> for updates and networking</p>
                <p>✅ <strong>Prepare questions</strong> for the Q&A session</p>
                <p>✅ <strong>Test your internet connection</strong> before the seminar starts</p>
                <p>✅ <strong>Find a quiet space</strong> for the 2-hour live session</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

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
                TechCareerNG
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-cyan-400">
                <Users className="w-4 h-4" />
                <span>{seminarData.studentsEnrolled} already enrolled</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Payment Button */}
      <section className="relative py-12 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-semibold">
                  LIMITED TIME OFFER - 50% OFF
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  From ₦50k to ₦500k: Launch Your Tech Career NOW!
                </span>
              </h1>
              
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Discover the exact roadmap Nigerian companies are using to hire tech professionals. 
                No experience needed. 2-hour live seminar with ongoing mentorship.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 text-white/70">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>{seminarData.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>{seminarData.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>{seminarData.duration} Live</span>
                </div>
              </div>

              {/* Mobile Payment Button - Visible on mobile */}
              <div className="lg:hidden">
                <PaymentButton 
                  handlePayment={handleDirectPayment}
                  handleFormPayment={handlePayment}
                  isProcessing={isProcessing}
                  seminarData={seminarData}
                  timeLeft={timeLeft}
                  userData={userData}
                  showForm={showForm}
                  setShowForm={setShowForm}
                  onInputChange={handleInputChange}
                  hasAutoFilledData={hasAutoFilledData}
                  formErrors={formErrors}
                  validateForm={validateForm}
                  paymentFormRef={paymentFormRef}
                />
              </div>
            </motion.div>

            {/* Right Side - Payment Card (Desktop) */}
            <motion.div
              ref={paymentFormRef}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <PaymentButton 
                handlePayment={handleDirectPayment}
                handleFormPayment={handlePayment}
                isProcessing={isProcessing}
                seminarData={seminarData}
                timeLeft={timeLeft}
                userData={userData}
                showForm={showForm}
                setShowForm={setShowForm}
                onInputChange={handleInputChange}
                hasAutoFilledData={hasAutoFilledData}
                formErrors={formErrors}
                validateForm={validateForm}
                paymentFormRef={paymentFormRef}
              />
            </motion.div>
          </div>
        </div>
      </section>

        {/* Main Content */}
       <div className="container mx-auto px-6 py-12">
         <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Left Column - Content */}
             <div className="lg:col-span-2 space-y-8">
               {/* Video Preview */}
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
              >
                <div 
                  className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center cursor-pointer relative group"
                  onClick={() => setShowVideo(true)}
                >
                  {/* YouTube Thumbnail Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${getYouTubeThumbnail(youtubeVideo.id)})`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Play Button Overlay */}
                  <div className="relative z-10 text-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 bg-red-600 backdrop-blur-md rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-red-700 transition-colors duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white/90 font-semibold text-lg">{youtubeVideo.title}</p>
                    <p className="text-white/70 text-sm mt-2">{youtubeVideo.description}</p>
                    <div className="mt-3 inline-flex items-center space-x-1 bg-black/50 px-3 py-1 rounded-full">
                      <Video className="w-4 h-4 text-red-400" />
                      <span className="text-white/80 text-sm">Watch on YouTube</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  Here&apos;s What Makes This Seminar Different
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:border-cyan-400/30 transition-all duration-300"
                      >
                        <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Here&apos;s Exactly What You&apos;ll Get
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whatYouGet.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  See What Our Students Are Saying
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Aisha L.",
                      role: "Recent Graduate",
                      comment: "Went from unemployed to ₦350k/month in 2 months!",
                      income: "₦350,000/mo"
                    },
                    {
                      name: "Chukwuma E.",
                      role: "Former Banker",
                      comment: "Tripled my salary. This seminar was the turning point!",
                      income: "₦450,000/mo"
                    },
                    {
                      name: "Fatima B.",
                      role: "Student",
                      comment: "Got my first tech job before even graduating!",
                      income: "₦280,000/mo"
                    }
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white/80 text-sm mb-4 italic">{`"${testimonial.comment}"`}</p>
                      <div className="text-cyan-400 font-semibold mb-1">{testimonial.income}</div>
                      <div className="text-white/60 text-sm">
                        <strong>{testimonial.name}</strong> - {testimonial.role}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Urgency Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl border border-red-500/30 p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  ⚠️ Don&apos;t Let This Opportunity Pass You By!
                </h3>
                <p className="text-white/70 text-lg mb-4">
                  Every day you wait is another day you&apos;re missing out on high-paying opportunities. 
                  The tech industry won&apos;t wait for you to decide. Take action NOW.
                </p>
                <div className="flex justify-center">
                  <motion.button
                    onClick={handleSecureSpotClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 flex items-center space-x-3"
                  >
                    <span>Secure Your Spot Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Additional Info (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden lg:block space-y-6"
            >
              {/* Instructor Info */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Your Instructor</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    TT
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Tony Tech Expert</h4>
                    <p className="text-cyan-400 text-sm">Senior Tech Consultant</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm">
                  With 8+ years in the industry, I&apos;ve helped a lot of Nigerians launch successful tech careers. 
                  {/* My students now work at companies like Flutterwave, Paystack, and Andela. */}
                </p>
              </div>

              {/* Support Card */}
              <div className="bg-green-500/10 backdrop-blur-md rounded-2xl border border-green-500/20 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">24/7 Support</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Have questions? Our support team is available round the clock to help you.
                </p>
                <div className="text-green-400 text-sm space-y-1">
                  <div>📧 support@dchoicecore.com</div>
                  <div>📞 +234 812 556 7675</div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="bg-cyan-500/10 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Risk-Free Investment</h3>
                </div>
                <p className="text-white/70 text-sm">
                  If you attend the first 30 minutes and don&apos;t find immediate value, 
                  we&apos;ll refund your payment immediately. No questions asked.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 rounded-2xl p-2 max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2 px-4 pt-2">
              <h3 className="text-white font-semibold">{youtubeVideo.title}</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-white/60 hover:text-white transition-colors duration-300 p-1 hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={getYouTubeEmbedUrl(youtubeVideo.id)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={youtubeVideo.title}
              />
            </div>
            <div className="p-4">
              <p className="text-white/70 text-sm">{youtubeVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}


      {startPolling && reference != null && 
        <PollingComponent 
          paymentReference={reference} 
          setHasPaid={handlePaymentSuccess}
        />
      }
    </div>
  );
};

// Updated Payment Button Component with Form Validation
const PaymentButton = ({ 
  handlePayment, 
  handleFormPayment,
  isProcessing, 
  seminarData, 
  timeLeft, 
  userData,
  showForm,
  setShowForm,
  onInputChange,
  hasAutoFilledData,
  formErrors,
  validateForm,
  paymentFormRef
}) => (
  <div ref={paymentFormRef} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sticky top-6">
    {!showForm ? (
      // Initial payment button
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <span className="text-3xl font-bold text-white">₦{seminarData.price}</span>
          <span className="text-lg text-white/60 line-through">₦{seminarData.originalPrice}</span>
          <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-sm font-bold">
            50% OFF
          </span>
        </div>
        <p className="text-white/60 text-sm mb-6">One-time payment • Live session + Community</p>

        {/* Urgency Timer */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 text-center">
          <div className="text-red-300 font-semibold mb-2">Offer Ends In:</div>
          <div className="text-white text-xl font-mono">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>

        <motion.button
          onClick={handlePayment}
          disabled={isProcessing}
          whileHover={{ scale: isProcessing ? 1 : 1.02 }}
          whileTap={{ scale: isProcessing ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Processing Payment...</span>
            </div>
          ) : hasAutoFilledData ? (
            `Pay ₦${seminarData.price} Now & Join Seminar`
          ) : (
            `Register Now & Pay ₦${seminarData.price}`
          )}
        </motion.button>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-2 text-white/60 text-sm mb-4">
          <Shield className="w-4 h-4 text-green-400" />
          <span>Secure payment powered by Paystack</span>
        </div>

        {/* Guarantee */}
        <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
          <div className="flex items-center space-x-2 text-green-400 mb-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">30-Minute Money-Back Guarantee</span>
          </div>
          <p className="text-white/70 text-sm">
            If you don&apos;t find value in the first 30 minutes, we&apos;ll refund your payment immediately.
          </p>
        </div>

        {/* Enrollment Count */}
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm">
            <Users className="w-4 h-4" />
            <span>{seminarData.studentsEnrolled} students already enrolled</span>
          </div>
        </div>
      </div>
    ) : (
      // Registration form (only shows when manually triggered or missing data)
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white text-center mb-4">Complete Your Registration</h3>
        
        <div className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-white/60" />
            <input
              type="text"
              placeholder="Full Name"
              value={userData.fullName}
              onChange={(e) => onInputChange('fullName', e.target.value)}
              className={`w-full bg-white/10 border ${
                formErrors.fullName ? 'border-red-400' : 'border-white/20'
              } rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 transition-colors`}
            />
            {formErrors.fullName && (
              <p className="text-red-400 text-xs mt-1 ml-1">{formErrors.fullName}</p>
            )}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-white/60" />
            <input
              type="email"
              placeholder="Email Address"
              value={userData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
              className={`w-full bg-white/10 border ${
                formErrors.email ? 'border-red-400' : 'border-white/20'
              } rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 transition-colors`}
            />
            {formErrors.email && (
              <p className="text-red-400 text-xs mt-1 ml-1">{formErrors.email}</p>
            )}
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-white/60" />
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              value={userData.phone}
              onChange={(e) => onInputChange('phone', e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        <motion.button
          onClick={handleFormPayment}
          disabled={isProcessing}
          whileHover={{ scale: isProcessing ? 1 : 1.02 }}
          whileTap={{ scale: isProcessing ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Processing Payment...</span>
            </div>
          ) : (
            `Pay ₦${seminarData.price} Now & Join Seminar`
          )}
        </motion.button>
      </div>
    )}
  </div>
);

export default SeminarDashboard;