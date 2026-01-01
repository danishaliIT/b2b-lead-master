'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Lead Generation & Email Marketing And Cold Calling",
    category: "B2B Lead Generation & Email Marketing",
    description: "The client needed high-net-worth real estate brokers in New York and Texas. I used Sales Navigator to filter by 'Annual Revenue' and extracted 5000+ verified personal emails.",
    stats: ["5000+ Leads", "99% Valid Emails", "30 Days Delivery"],
    image: "/images/project1.jpg", // Replace with your Excel screenshot
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Lead gen to find industry firms & targeted job title contacts",
    category: "Sales Lead Lists & Smartlead Setup",
    description: "Discovering targeted companies in New South Wales and their employees through this project boosts my confidence in expanding business opportunities.",
    stats: ["45% Open Rate", "12 Meetings Booked", "Smartlead Setup"],
    image: "/images/project2.jpg",
    color: "bg-purple-500"
  },
  {
    id: 3,
    title: "Lead generation project to identify marketing-level personnel",
    category: "Lead Generation & Email Marketing",
    description: "In January, I worked to identify individuals who could help market the Organization's products and increase sales growth.",
    stats: ["10k+ Leads", "Automated Script", "Clean CSV Output"],
    image: "/images/project3.jpg", // Replace with Python/Code screenshot
    color: "bg-green-500"
  }
];

export default function ProjectGallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Proven Results. Real Data.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            I don't just talk about leads; I deliver them. Here is a breakdown of my recent successful campaigns.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              
              {/* Project Image Area */}
              <div className="flex-1 w-full group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video">
                  <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hamne 'text-slate-900' add kar diya hai taakay text kala ho jaye */}
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2 text-slate-900">
  <div className={`w-2 h-2 rounded-full ${project.color}`}></div>
  {project.category}
</div>
                </div>
              </div>

              {/* Project Details Area */}
              <div className="flex-1 space-y-6">
                <div className={`inline-block p-3 rounded-xl ${project.color} bg-opacity-10 text-${project.color.replace('bg-', '')}`}>
                  {index === 0 && <Database size={24} className="text-blue-600"/>}
                  {index === 1 && <TrendingUp size={24} className="text-purple-600"/>}
                  {index === 2 && <ExternalLink size={24} className="text-green-600"/>}
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle size={16} className={`text-${project.color.split('-')[1]}-500`} /> 
                      {stat}
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="text-sm font-bold text-slate-900 border-b-2 border-slate-200 hover:border-blue-500 transition-colors pb-1">
                    View Full Case Study
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}