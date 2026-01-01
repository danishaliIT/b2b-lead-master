import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold text-white tracking-tight mb-2">
            Danish<span className="text-blue-500">Ali</span>
          </div>
          <p className="text-sm">
            Helping B2B companies scale with data-driven outreach.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/danish-ali-b21127390/" className="hover:text-white transition"><Linkedin size={20} /></a>
          <a href="https://github.com/danishaliIT" className="hover:text-white transition"><Github size={20} /></a>
          <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
        </div>

        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} Danish Ali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}