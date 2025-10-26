"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Users, 
  Calendar, 
  Star, 
  CheckCircle, 
  ArrowLeft,
  Play,
  FileText,
  Award,
  MessageCircle
} from "lucide-react";

// Illumination Background Component
const IlluminationBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -inset-[10px] opacity-50 blur-3xl"
          style={{
            background: `
              radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(120, 119, 198, 0.3), transparent 40%),
              radial-gradient(400px circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 1.2}px, 
                rgba(255, 119, 198, 0.2), transparent 40%),
              radial-gradient(300px circle at ${mousePosition.x * 1.2}px ${mousePosition.y * 0.8}px, 
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
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </>
  );
};

// Mock program data
const programData = {
  id: 3,
  title: "Cloud Computing & DevOps",
  description: "Master modern cloud infrastructure and DevOps practices with hands-on experience",
  longDescription: "This comprehensive course covers everything you need to become a proficient Cloud and DevOps engineer. You&apos;ll learn to design, deploy, and maintain scalable cloud infrastructure while implementing industry-standard DevOps practices that are essential in today&apos;s tech landscape.",
  duration: "16 weeks",
  level: "Intermediate",
  category: "Cloud & Infrastructure",
  price: 100000,
  originalPrice: 150000,
  startDate: "2026-01-10",
  seats: 25,
  enrolled: 18,
  rating: 4.9,
  reviewCount: 127,
  image: "/images/courses/cloud-devops-detail.svg",
  videoThumbnail: "/images/courses/cloud-preview.jpg",
  
  instructor: {
    name: "Sarah Johnson",
    role: "Senior DevOps Engineer",
    experience: "8+ years in cloud infrastructure",
    image: "/images/instructors/sarah-johnson.jpg",
    bio: "Sarah has worked with Fortune 500 companies to design and implement scalable cloud infrastructure solutions. She is passionate about teaching and has helped over 1,000 students launch their careers in cloud computing.",
    students: 1200,
    rating: 4.9
  },

  features: [
    "60+ hours of live instruction",
    "Hands-on labs and projects",
    "Lifetime access to materials",
    "Certificate of completion",
    "Career support and job placement",
    "1-on-1 mentor sessions",
    "Real-world capstone project",
    "Slack community access"
  ],

  curriculum: [
    {
      week: 1,
      title: "Cloud Fundamentals & AWS Core Services",
      duration: "8 hours",
      lessons: [
        "Cloud Computing Concepts",
        "AWS Global Infrastructure",
        "EC2 Instances & Auto Scaling",
        "S3 Storage Solutions",
        "VPC & Networking",
        "IAM & Security Fundamentals"
      ]
    },
    {
      week: 2,
      title: "Infrastructure as Code with Terraform",
      duration: "10 hours",
      lessons: [
        "Terraform Basics & Setup",
        "Resource Management",
        "State Files & Backends",
        "Modules & Reusability",
        "Best Practices",
        "Real-world Project"
      ]
    },
    {
      week: 3,
      title: "Containerization with Docker",
      duration: "12 hours",
      lessons: [
        "Docker Fundamentals",
        "Image Creation & Management",
        "Container Orchestration",
        "Docker Compose",
        "Docker in Production",
        "Hands-on Lab"
      ]
    },
    {
      week: 4,
      title: "Kubernetes & Container Orchestration",
      duration: "14 hours",
      lessons: [
        "K8s Architecture & Components",
        "Pods, Services & Deployments",
        "Helm Charts & Package Management",
        "Monitoring & Logging",
        "Security in Kubernetes",
        "Capstone Project Setup"
      ]
    }
  ],

  reviewList: [
    {
      id: 1,
      name: "Michael Chen",
      role: "DevOps Engineer",
      rating: 5,
      comment: "This course transformed my career. The hands-on projects were exactly what I needed to land a DevOps role at a major tech company.",
      avatar: "MC",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Cloud Architect",
      rating: 5,
      comment: "Sarah is an amazing instructor. The curriculum is well-structured and covers all essential cloud technologies used in the industry today.",
      avatar: "ER",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Software Developer",
      rating: 5,
      comment: "The capstone project helped me build a strong portfolio. Got multiple job offers after completion! Highly recommended.",
      avatar: "DK",
      date: "3 months ago"
    }
  ]
};

// Curriculum Item Component
const CurriculumItem = ({ week, index }: { week: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-500"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between group"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
            {week.week}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {week.title}
            </h3>
            <p className="text-white/60 text-sm flex items-center mt-1">
              <Clock className="w-4 h-4 mr-1" />
              {week.duration} • {week.lessons.length} lessons
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white/60 group-hover:text-white"
        >
          ▼
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10"
          >
            <div className="p-6 space-y-3">
              {week.lessons.map((lesson: string, lessonIndex: number) => (
                <div key={lessonIndex} className="flex items-center space-x-3 text-white/80">
                  <Play className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{lesson}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Review Component
const ReviewCard = ({ review, index }: { review: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:border-white/40 transition-all duration-500"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
          {review.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-white">{review.name}</h4>
          <p className="text-white/60 text-sm">{review.role}</p>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"
            }`}
          />
        ))}
      </div>
    </div>
    <p className="text-white/80 leading-relaxed mb-3">{review.comment}</p>
    <p className="text-white/40 text-sm">{review.date}</p>
  </motion.div>
);

// Main Detail Page Component
const ProgramDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const program = programData;
  const discount = Math.round(((program.originalPrice - program.price) / program.originalPrice) * 100);

  const handleEnroll = async () => {
    setIsEnrolling(true);
    setTimeout(() => {
      setIsEnrolling(false);
      router.push(`/programs/${program.id}/payment`);
    }, 1000);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "curriculum", label: "Curriculum", icon: Play },
    { id: "instructor", label: "Instructor", icon: Users },
    { id: "reviews", label: "Reviews", icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <IlluminationBackground />
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ x: -5 }}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5 text-white/60 group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="text-white/60 group-hover:text-cyan-300 transition-colors duration-300">
                  Back to Programs
                </span>
              </motion.div>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TechCareer
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {program.category}
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {program.level} Level
                </span>
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {program.seats - program.enrolled} Seats Left
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {program.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-white/70 leading-relaxed">
                {program.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 py-4">
                <div className="flex items-center space-x-2 text-white/70">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>Starts {new Date(program.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>{program.enrolled} Students Enrolled</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>{program.rating} ({program.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Video Preview */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setShowVideoModal(true)}
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 mb-4 mx-auto">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                    <p className="text-white/80 font-semibold">Watch Course Introduction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Enrollment Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-6"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-3xl font-bold text-white">₦{program.price}</span>
                    <span className="text-lg text-white/60 line-through">₦{program.originalPrice}</span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-bold">
                      {discount}% OFF
                    </span>
                  </div>
                  <p className="text-white/60">One-time payment • 30-day money-back guarantee</p>
                </div>

                {/* Enrollment Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEnroll}
                  disabled={isEnrolling}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isEnrolling ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    `Enroll Now - ₦${program.price}`
                  )}
                </motion.button>

                {/* Features List */}
                <div className="space-y-3">
                  {program.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Guarantee */}
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <Award className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-white/70 text-sm">
                    <strong>Certificate of Completion</strong> included with career support
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-white/10 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-cyan-400 text-cyan-400"
                      : "border-transparent text-white/60 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              >
                <div className="lg:col-span-2 space-y-8">
                  {/* Description */}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About This Program</h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {program.longDescription}
                    </p>
                  </div>

                  {/* What You'll Learn */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">What You&apos;ll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Instructor Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Instructor</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        SJ
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{program.instructor.name}</h4>
                        <p className="text-cyan-300 text-sm">{program.instructor.role}</p>
                        <p className="text-white/60 text-sm">{program.instructor.experience}</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {program.instructor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "curriculum" && (
              <motion.div
                key="curriculum"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Program Curriculum</h2>
                <div className="space-y-4">
                  {program.curriculum.map((week, index) => (
                    <CurriculumItem key={week.week} week={week} index={index} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "instructor" && (
              <motion.div
                key="instructor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      SJ
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl font-bold text-white mb-2">{program.instructor.name}</h2>
                      <p className="text-xl text-cyan-300 mb-4">{program.instructor.role}</p>
                      <p className="text-white/70 text-lg leading-relaxed mb-6">
                        {program.instructor.bio}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-2xl font-bold text-cyan-400">{program.instructor.students}+</div>
                          <div className="text-white/60">Students Taught</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-2xl font-bold text-cyan-400">{program.instructor.rating}</div>
                          <div className="text-white/60">Instructor Rating</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-2xl font-bold text-cyan-400">8+</div>
                          <div className="text-white/60">Years Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "reviews" && (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Student Reviews</h2>
                    <div className="flex items-center space-x-4 text-white/70">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(program.rating) ? "text-yellow-400 fill-yellow-400" : "text-white/30"
                            }`}
                          />
                        ))}
                      </div>
                      <span>{program.rating} out of 5</span>
                      <span>({program.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {program.reviewList.map((review, index) => (
                    <ReviewCard key={review.id} review={review} index={index} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-4 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white/80 text-lg">Course Introduction Video</p>
                  <p className="text-white/60 text-sm mt-2">This would be a real video player in production</p>
                </div>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="mt-4 text-white/60 hover:text-white transition-colors duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProgramDetailPage;