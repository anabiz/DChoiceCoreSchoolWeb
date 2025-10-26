"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Target, 
  Globe,
  Star,
  TrendingUp,
  Heart
} from "lucide-react";

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
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
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

const AboutPage = () => {
  const stats = [
    { number: "2,500+", label: "Students Trained", icon: Users },
    { number: "98%", label: "Completion Rate", icon: Award },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "500+", label: "Industry Partners", icon: Globe }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We maintain the highest standards in curriculum development and instructional quality.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Career Transformation",
      description: "Our programs are designed to deliver tangible career outcomes and professional growth.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Heart,
      title: "Student Success Focus",
      description: "Every decision we make is centered around maximizing student success and satisfaction.",
      color: "from-green-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We&apos;re committed to making quality tech education accessible worldwide.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Learning Officer",
      bio: "Former Senior DevOps Engineer with 8+ years of experience in cloud infrastructure.",
      image: "SJ",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Michael Chen",
      role: "Head of Curriculum",
      bio: "Ex-Google engineer passionate about making complex concepts accessible.",
      image: "MC",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Emily Rodriguez",
      role: "Student Success Manager",
      bio: "Dedicated to ensuring every student achieves their career goals.",
      image: "ER",
      color: "from-green-500 to-cyan-600"
    },
    {
      name: "David Kim",
      role: "Technical Director",
      bio: "Full-stack developer with expertise in modern web technologies.",
      image: "DK",
      color: "from-orange-500 to-red-600"
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
                TechCareer
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transforming Tech Education
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              At TechCareer, we&apos;re on a mission to bridge the gap between ambition and expertise. 
              We empower aspiring technologists with the skills, knowledge, and confidence to thrive 
              in the rapidly evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Founded in 2018, TechCareer emerged from a simple observation: the traditional education 
                  system was struggling to keep pace with the rapid evolution of technology. While universities 
                  were teaching fundamentals, the industry was racing ahead with new frameworks, tools, and 
                  methodologies.
                </p>
                <p>
                  Our founders&mdash;seasoned tech professionals from companies like Google, Amazon, and Microsoft&mdash;
                  came together with a shared vision: to create learning experiences that mirror real-world 
                  development environments and prepare students for immediate impact in their careers.
                </p>
                <p>
                  Today, we&apos;ve helped thousands of students transition into tech roles, with many landing 
                  positions at top companies within months of completing our programs.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">20{18 + item}</div>
                    <div className="text-white/60 text-sm">Milestone {item}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              These principles guide everything we do, from curriculum design to student support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Passionate educators and industry experts dedicated to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto`}>
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-4">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of students who have transformed their careers with TechCareer.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Our Programs
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
