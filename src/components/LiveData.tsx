import React from 'react';
import { CheckCircle, Lock, Download } from 'lucide-react';

export default function LiveData() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Real Data. Verified Results.</h2>
          <p className="text-slate-600">
            Below is a sample of recently extracted leads (Privacy protected).
          </p>
        </div>

        {/* Mock Data Table Window */}
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
          
          {/* Fake Browser Toolbar */}
          <div className="bg-slate-100 p-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs text-slate-500 font-mono">Project: USA_Real_Estate_Leads.csv</div>
            <button className="flex items-center gap-1 text-xs bg-white border border-slate-300 px-2 py-1 rounded text-slate-600">
              <Download size={10} /> Export
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-100">
                <tr>
                  <th className="p-4">Lead Name</th>
                  <th className="p-4">Job Title</th>
                  <th className="p-4">Company</th>
                  <th className="p-4">Email Status</th>
                  <th className="p-4">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-600">
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-4 font-medium text-slate-900">Michael R***</td>
                  <td className="p-4">CEO & Founder</td>
                  <td className="p-4">Nexus Realty Group</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium"><CheckCircle size={10}/> Verified</span></td>
                  <td className="p-4">Austin, TX</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-4 font-medium text-slate-900">Sarah J***</td>
                  <td className="p-4">Managing Broker</td>
                  <td className="p-4">Skyline Properties</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium"><CheckCircle size={10}/> Verified</span></td>
                  <td className="p-4">New York, NY</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-4 font-medium text-slate-900">David K***</td>
                  <td className="p-4">VP of Sales</td>
                  <td className="p-4">TechHome Solutions</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium"><CheckCircle size={10}/> Verified</span></td>
                  <td className="p-4">San Francisco, CA</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition">
                  <td className="p-4 font-medium text-slate-900">Emily W***</td>
                  <td className="p-4">Operations Director</td>
                  <td className="p-4">West Coast Estates</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium"><CheckCircle size={10}/> Verified</span></td>
                  <td className="p-4">Seattle, WA</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Footer of Table */}
          <div className="bg-slate-50 p-3 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <Lock size={12} /> Data blurred for client privacy. Full report contains Phone, LinkedIn URL, and Company Revenue.
          </div>
        </div>
      </div>
    </section>
  );
}