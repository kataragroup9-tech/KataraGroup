import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin, Briefcase, Clock, ChevronRight, Loader2 } from 'lucide-react';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // URL cleaning logic
  const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/$/, "");
  const JOBS_URL = `${API_BASE}/jobs`;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(JOBS_URL);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching careers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-[#05070a] min-h-screen text-slate-300 font-sans selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none mb-6">
            Join the <br />
            <span className="text-blue-600 italic font-serif">Movement.</span>
          </h1>
          <p className="max-w-2xl text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            Katara Group is expanding. We are looking for innovators, thinkers, and leaders to shape the future of transport and technology.
          </p>
        </div>
      </section>

      {/* Jobs List Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Open Positions</h2>
              <div className="h-1 w-12 bg-blue-600"></div>
            </div>
            <span className="text-slate-600 font-mono text-sm tracking-widest">[{jobs.length} ROLES AVAILABLE]</span>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 gap-4">
              <Loader2 className="animate-spin text-blue-600" size={40} />
              <p className="text-slate-600 uppercase font-black tracking-widest text-xs">Loading Careers...</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {jobs.length === 0 ? (
                <div className="p-20 text-center border border-dashed border-slate-900 rounded-[3rem]">
                  <p className="text-slate-600 font-bold uppercase tracking-widest text-xs italic">Currently no active openings. Check back soon.</p>
                </div>
              ) : (
                jobs.map((job) => (
                  <div 
                    key={job._id}
                    className="group relative p-8 md:p-10 bg-slate-900/10 border border-slate-900 rounded-[2.5rem] hover:border-blue-600/40 transition-all duration-500 hover:bg-slate-900/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-blue-600/10 text-blue-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-500/20">
                            {job.department}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                          <span className="flex items-center gap-2"><MapPin size={14} className="text-blue-600" /> {job.location}</span>
                          <span className="flex items-center gap-2"><Briefcase size={14} className="text-blue-600" /> {job.type}</span>
                          <span className="flex items-center gap-2"><Clock size={14} className="text-blue-600" /> Posted Recently</span>
                        </div>
                      </div>

                      <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-black/20">
                        Apply Now <ChevronRight size={16} />
                      </button>
                    </div>

                    {/* Expandable Description (Optional) */}
                    <div className="mt-8 pt-8 border-t border-white/5 text-slate-400 text-sm leading-relaxed max-w-4xl line-clamp-2 group-hover:line-clamp-none transition-all">
                      {job.desc}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
          Katara Group Of Companies • Career Portal 2026
        </p>
      </footer>
    </div>
  );
};

export default Career;