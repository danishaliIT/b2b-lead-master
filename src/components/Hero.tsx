'use client';
import React from 'react';
import { ArrowRight, Download, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion';

export default function Hero() {
  // Animation Variants (Settings)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Har line 0.2s ke gap ke baad aayegi
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: easeOut } 
    },
  };    

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white min-h-screen flex items-center">
      
      {/* 1. Background Pulse Animation */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* --- Left Side: Text Content (Staggered Animation) --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-8"
          >
            {/* Animated Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-sm font-semibold backdrop-blur-md">
              <Sparkles size={14} className="text-yellow-400 animate-pulse"/>
              <span>Available for New Projects</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Turn Cold Leads into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 animate-gradient">
                Hot Meetings.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-blue-100/80 max-w-xl leading-relaxed">
              I help agencies & startups book <strong>20+ meetings/month</strong> using 
              Verified Data, Python Scraping, and AI-Driven Email Automation.
            </motion.p>

            {/* Feature Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-sm font-medium text-blue-200">
              {['99% Valid Emails', 'Smartlead Setup', 'Python Scripts'].map((feat) => (
                <div key={feat} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle size={16} className="text-blue-400"/> {feat}
                </div>
              ))}
            </motion.div>

            {/* Buttons with Hover Effects */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                Book Strategy Call <ArrowRight size={18} />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl font-bold transition flex items-center gap-2 backdrop-blur-sm"
              >
                View Work <Download size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Profile Image (Floating Animation) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative flex justify-center"
          >
            {/* 2. Floating Effect Container */}
            <motion.div
              animate={{ y: [0, -20, 0] }} // Upar neeche float karega
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 h-80 md:w-[450px] md:h-[450px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-[60px] opacity-30 animate-pulse"></div>
              
              {/* Profile Image */}
              <img 
                src="/images/profile.jpg" 
                alt="Danish Ali" 
                className="relative w-full h-full object-cover rounded-full border-[6px] border-white/10 shadow-2xl z-10"
              />
              
              {/* Floating Stat Card (Left) */}
             

              {/* Floating Stat Card (Right) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} // Opposite float
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-6 bg-blue-600 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={20}/>
                 </div>
                 <div>
                   <p className="text-xs text-blue-200 font-bold uppercase">Open Rate</p>
                   <p className="font-bold text-white text-lg">45% Avg</p>
                 </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}