'use client';
import React from 'react';
import { Send, Calendar, Mail, CheckCircle, MessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  // 👇 Aapki ID
  const [state, handleSubmit] = useForm("xgovvzbb");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-white text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 animate-in zoom-in">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h2>
          <p className="text-slate-600 mb-8">
            Thanks Danish! I have received your details. I'll check the requirements and get back to you within 24 hours.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
            <MessageSquare className="text-blue-600" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Start a Project</h2>
          <p className="text-slate-600 text-lg">
            Ready to automate your leads? Fill out the form or book a call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-50 p-8 rounded-3xl border border-slate-100">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4">Contact Info</h3>
              <p className="text-slate-500 mb-8">
                I am available for freelance projects and full-time remote roles.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Email Me</p>
                    <a href="mailto:da6872316@gmail.com" className="text-slate-900 font-semibold hover:text-blue-600 transition">
                      da6872316@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Book a Call</p>
                    <a href="#" className="text-slate-900 font-semibold hover:text-purple-600 transition">
                      Schedule 15 Mins
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <p className="italic text-slate-600 text-sm">
                 "Danish helped us scale from 10 to 100 leads a week. His automation setup is a game changer."
               </p>
               <div className="mt-4 flex items-center gap-2">
                 <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                 <span className="text-xs font-bold text-slate-900">CEO, TechStart Inc.</span>
               </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">Your Name</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                required
                // 👇 FIX: text-slate-900 added, placeholder dark kiya
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
                placeholder="John Doe"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">Work Email</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                required
                // 👇 FIX: text-slate-900 added
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
                placeholder="john@company.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">Service Needed</label>
              <select 
                id="service"
                name="service"
                // 👇 FIX: text-slate-900 added
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-500 transition"
              >
                <option value="Lead Generation">Lead Generation</option>
                <option value="Email Automation">Email Automation</option>
                <option value="Web Scraping">Web Scraping</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">Message</label>
              <textarea 
                id="message"
                name="message" 
                rows={4}
                // 👇 FIX: text-slate-900 added
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
                placeholder="Tell me about your project..."
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-blue-200"
            >
              {state.submitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}