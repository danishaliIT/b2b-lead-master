'use client';
import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw, AlertCircle, User, Building2, Mail, MessageSquare, List, AlignLeft } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function EmailGenerator() {
  // --- Form States ---
  const [recipientType, setRecipientType] = useState<'company' | 'person'>('company');
  const [generationMode, setGenerationMode] = useState<'email' | 'subjects'>('email'); // New: Switch betwen Email or Subjects
  
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [personName, setPersonName] = useState('');
  const [reason, setReason] = useState(''); // New: "Wajah" (Context)
  
  // --- App States ---
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    // Validation
    if (!company) { setError('Company Name is required.'); return; }
    
    setIsLoading(true);
    setError('');
    setGeneratedContent('');

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) throw new Error("API Key missing.");

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

      // --- Smart Prompt Logic ---
      let recipientInfo = recipientType === 'company' 
        ? `the CEO of "${company}"` 
        : `"${personName}" at "${company}"`;

      let contextPart = reason 
        ? `The specific reason I am contacting them right now is: "${reason}". Use this context to make the email relevant.` 
        : `I am contacting them for a general partnership.`;

      let prompt = "";

      if (generationMode === 'subjects') {
        // --- MODE 1: Only Subject Lines ---
        prompt = `
          Act as a Copywriting Expert.
          Generate 10 highly clickable, curiosity-inducing cold email subject lines for ${recipientInfo}.
          Context: ${contextPart}
          Industry: ${industry || 'General'}.
          
          Rules:
          - Keep them under 60 characters.
          - Mix styles: Some questions, some direct statements, some personalized.
          - Do NOT write the email body. Just the list of 10 subject lines.
          - Format as a numbered list.
        `;
      } else {
        // --- MODE 2: Full Email ---
        prompt = `
          Act as Danish Ali, a B2B Growth Expert.
          Write a high-converting cold email to ${recipientInfo}.
          
          Context/Trigger: ${contextPart}
          My Offer: Verified Data & Email Automation.
          Goal: Book a 15-min call.
          
          Rules:
          - Use the "Reason" mentioned above as the opening hook (Icebreaker).
          - Keep it under 100 words.
          - Tone: Professional but conversational.
          - Include 1 strong subject line at the top.
        `;
      }

      const result = await model.generateContent(prompt);
      const response = await result.response;
      setGeneratedContent(response.text());
      
    } catch (err) {
      console.error(err);
      setError("Error generating content. Check API Key.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background FX */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-10">
          <span className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-2 block">AI Powered Outreach</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contextual Email Engine</h2>
          <p className="text-slate-400">Tell the AI <strong>why</strong> you are reaching out, and watch the magic happen.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT: Controls --- */}
          <div className="lg:col-span-5 space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm h-fit">
            
            {/* 1. Mode Switcher (Email vs Subjects) */}
            <div className="bg-slate-900/50 p-1 rounded-xl flex">
              <button 
                onClick={() => setGenerationMode('email')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition ${generationMode === 'email' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                <AlignLeft size={16}/> Full Email
              </button>
              <button 
                onClick={() => setGenerationMode('subjects')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition ${generationMode === 'subjects' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                <List size={16}/> Subject Lines Only
              </button>
            </div>

            {/* 2. Recipient Info */}
            <div className="space-y-4">
               <div>
                  <label className="text-xs text-slate-400 uppercase font-bold mb-2 block">Target Info</label>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                     <button 
                      onClick={() => setRecipientType('company')}
                      className={`py-2 px-3 rounded-lg border text-sm flex items-center justify-center gap-2 ${recipientType === 'company' ? 'border-blue-500 bg-blue-500/10 text-blue-200' : 'border-white/10 text-slate-400'}`}
                     >
                       <Building2 size={14}/> Company
                     </button>
                     <button 
                      onClick={() => setRecipientType('person')}
                      className={`py-2 px-3 rounded-lg border text-sm flex items-center justify-center gap-2 ${recipientType === 'person' ? 'border-blue-500 bg-blue-500/10 text-blue-200' : 'border-white/10 text-slate-400'}`}
                     >
                       <User size={14}/> Person
                     </button>
                  </div>

                  <input 
                    type="text" placeholder="Company Name (e.g. Nike)" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-500 outline-none transition text-white mb-3"
                    value={company} onChange={(e) => setCompany(e.target.value)}
                  />
                  
                  {recipientType === 'person' && (
                    <input 
                      type="text" placeholder="Person Name (e.g. John)" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-500 outline-none transition text-white animate-in slide-in-from-top-2"
                      value={personName} onChange={(e) => setPersonName(e.target.value)}
                    />
                  )}
               </div>
            </div>

            {/* 3. THE REASON (Context Input) */}
            <div>
               <label className="text-xs text-yellow-400 uppercase font-bold mb-2 flex items-center gap-2">
                 <Sparkles size={12}/> Why are you contacting them?
               </label>
               <textarea 
                 rows={3}
                 placeholder="e.g. I saw they are hiring Sales Reps OR Their website is loading very slowly..." 
                 className="w-full px-4 py-3 rounded-xl bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400 outline-none transition text-white placeholder:text-slate-500 resize-none"
                 value={reason} onChange={(e) => setReason(e.target.value)}
               ></textarea>
            </div>

            {/* Generate Button */}
            <button 
              onClick={handleGenerate}
              disabled={isLoading}
              className={`w-full py-4 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 ${generationMode === 'email' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-purple-600 hover:bg-purple-500'}`}
            >
              {isLoading ? <RefreshCw className="animate-spin" size={20}/> : <Sparkles size={20} />}
              {isLoading ? 'Thinking...' : generationMode === 'email' ? 'Write Email' : 'Generate Subjects'}
            </button>
             {error && <div className="text-red-400 text-sm mt-2 text-center">{error}</div>}
          </div>


          {/* --- RIGHT: Output --- */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[500px]">
            <div className={`flex-1 rounded-2xl border backdrop-blur-md shadow-2xl overflow-hidden flex flex-col relative ${generationMode === 'email' ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-purple-500/30 text-purple-100'}`}>
               
               {/* Output Header */}
               <div className={`px-6 py-4 border-b flex justify-between items-center ${generationMode === 'email' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-purple-500/20'}`}>
                  <div className="flex items-center gap-2">
                     <div className={`w-3 h-3 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-500'}`}></div>
                     <span className="font-semibold text-sm opacity-70">
                       {generationMode === 'email' ? 'Draft Preview' : 'Subject Line Options'}
                     </span>
                  </div>
                  {generatedContent && (
                    <button 
                      onClick={() => navigator.clipboard.writeText(generatedContent)}
                      className="text-xs hover:underline flex items-center gap-1 opacity-70"
                    >
                      <Copy size={12}/> Copy All
                    </button>
                  )}
               </div>

               {/* Content Area */}
               <div className="flex-1 p-8 overflow-auto">
                 {generatedContent ? (
                   <pre className={`font-sans whitespace-pre-wrap text-base leading-relaxed ${generationMode === 'email' ? 'text-slate-700' : 'text-purple-100 font-medium'}`}>
                     {generatedContent}
                   </pre>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center opacity-30">
                      <Sparkles size={64} className="mb-4"/>
                      <p>Waiting for context...</p>
                   </div>
                 )}
               </div>

               {/* Watermark */}
               <div className="p-2 text-center text-[10px] opacity-20 uppercase font-bold tracking-widest">
                 Generated by Danish Ali AI
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}