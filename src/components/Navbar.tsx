'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Target, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text Color Logic: Agar scroll hua to Dark, warna White (Hero par)
  const textColor = scrolled ? 'text-slate-900' : 'text-white';
  const subTextColor = scrolled ? 'text-slate-500' : 'text-blue-200';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGO START (Animated) --- */}
        <a href="#" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30"
          >
            <Target size={24} strokeWidth={2.5} />
          </motion.div>
          
          <div className="flex flex-col">
            <span className={`text-xl font-extrabold leading-none tracking-tight transition-colors duration-300 ${textColor}`}>
              B2B Lead <span className="text-blue-500">Master</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300 ${subTextColor}`}>
              Data & Automation
            </span>
          </div>
        </a>
        {/* --- LOGO END --- */}

        {/* Desktop Menu (Animated Stagger) */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Process', 'Portfolio'].map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${textColor}`}
            >
              {item}
            </motion.a>
          ))}
          
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.3 }}
            className={`px-6 py-2.5 text-sm font-bold rounded-lg transition shadow-lg flex items-center gap-2 ${scrolled ? 'bg-slate-900 text-white hover:bg-blue-600' : 'bg-white text-blue-900 hover:bg-blue-50'}`}
          >
            Hire Me <ChevronRight size={14}/>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button className={`md:hidden transition-colors ${textColor}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Slide Down Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {['About', 'Process', 'Portfolio'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg font-medium text-slate-600 hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-4 bg-blue-600 text-white text-center font-bold rounded-xl shadow-lg shadow-blue-200">
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}