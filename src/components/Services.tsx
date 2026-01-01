'use client';
import React from 'react';
import { Target, Mail, Globe, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">My Growth Engine</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I don't just "scrape data". I build a complete system to get you from <br/> 
            <strong>Unknown</strong> to <strong>Booked Meetings</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Hyper-Targeted Leads</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Sales Nav Advanced Filters</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Verified CEO/Founder Emails</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> &lt; 1% Bounce Rate Guarantee</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl transform md:-translate-y-4"
          >
            <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Cold Email Automation</h3>
            <p className="text-slate-400 text-sm mb-4">
              I setup the infrastructure (DNS, DKIM, SPF) and write personalized scripts that land in the primary inbox.
            </p>
            <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
              High Open Rates
            </span>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-green-500 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Web & Tech Support</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Landing Page Design</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Python Scraping Scripts</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> CRM Data Cleaning</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}