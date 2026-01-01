'use client';
import React from 'react';
import { Play, Database, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoProof() {
  return (
    <section id="portfolio" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Recent Projects & Evidence</h2>
            <p className="text-slate-400">
              See exactly how I extract data and what information I deliver.
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Visit Linkedin Profile
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group hover:border-blue-500 transition-colors"
          >
            <div className="aspect-video bg-black relative flex items-center justify-center">
              <video controls className="w-full h-full object-cover">
                <source src="/videos/demo1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 text-white">Project: Real Estate Agents USA</h3>
              
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 mb-3">
                <p className="text-xs text-slate-400 uppercase font-bold mb-2 flex items-center gap-1">
                  <Database size={12}/> Data Extracted:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">Full Name</span>
                  <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">CEO Email</span>
                  <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">Company URL</span>
                  <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">Phone No.</span>
                </div>
              </div>
              <p className="text-sm text-slate-400">Result: 500+ Verified Leads delivered in CSV.</p>
            </div>
          </motion.div>

           {/* Project 2 - Updated Video Path */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group hover:border-purple-500 transition-colors"
          >
            <div className="aspect-video bg-black relative flex items-center justify-center">
               {/* 👇 VIDEO TAG ADDED HERE */}
               <video controls className="w-full h-full object-cover">
                <source src="/videos/demo2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 text-white">Project: Sales Navigator Research</h3>
              
               <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 mb-3">
                <p className="text-xs text-slate-400 uppercase font-bold mb-2 flex items-center gap-1">
                  <FileText size={12}/> Script & Strategy:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded">CEO/Director/Founder</span>
                  <span className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded">Active Clients</span>
                  <span className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded">Email Setup</span>
                </div>
              </div>
              <p className="text-sm text-slate-400">Result: 45% Open Rate achieved.</p>
            </div>
          </motion.div>

           {/* Project 3 - Updated Video Path */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group hover:border-green-500 transition-colors"
          >
            <div className="aspect-video bg-black relative flex items-center justify-center">
               {/* 👇 VIDEO TAG ADDED HERE */}
               <video controls className="w-full h-full object-cover">
                <source src="/videos/demo3.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 text-white">Project: Apollow Scraping</h3>
              
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 mb-3">
                <p className="text-xs text-slate-400 uppercase font-bold mb-2 flex items-center gap-1">
                  <Database size={12}/> Processing:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded">Removing Duplicates</span>
                  <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded">Format Fixing</span>
                  <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded">CRM Upload</span>
                </div>
              </div>
              <p className="text-sm text-slate-400">Result: 10,000 Rows cleaned in 24 hours.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}