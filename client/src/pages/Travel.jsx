import React, { useState } from 'react';
import * as Lucide from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- OPTIMIZED IMAGE COMPONENT ---
// Ye component image load hone tak smooth animation dikhayega
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900/50">
      {/* Shimmer Effect - Jab tak image load nahi hoti */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-slate-800/50 to-transparent animate-[shimmer_1.5s_infinite] -translate-x-full" 
               style={{ backgroundSize: '200% 100%' }} />
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} transition-all duration-700 ease-out`}
      />
      
      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

const KataraAura = () => {
  // Mumbai places data with optimized Unsplash URLs
  // 'sig' parameter helps in avoiding redundant fetches but ensures uniqueness
  const mumbaiPlaces = [
    { title: "Gateway of India", category: "Heritage", price: "Colonial", img: "https://images.unsplash.com/photo-1570160897040-30430aac2eb1?auto=format&fit=crop&w=600&q=80" },
    { title: "CST Station", category: "Heritage", price: "UNESCO", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80" },
    { title: "Taj Mahal Palace", category: "Luxury", price: "Heritage", img: "https://images.unsplash.com/photo-1598305312880-49d9c26e27ec?auto=format&fit=crop&w=600&q=80" },
    { title: "Bandra-Worli Sea Link", category: "Modern", price: "Engineering", img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80" },
    { title: "Marine Drive", category: "Coastal", price: "Public", img: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?auto=format&fit=crop&w=600&q=80" },
    { title: "Siddhivinayak Temple", category: "Spiritual", price: "Devotional", img: "https://images.unsplash.com/photo-1626014303757-0fc51197607a?auto=format&fit=crop&w=600&q=80" },
    { title: "Haji Ali Dargah", category: "Spiritual", price: "Coastal", img: "https://images.unsplash.com/photo-1592639103986-905e340a6e0d?auto=format&fit=crop&w=600&q=80" },
    { title: "Elephanta Caves", category: "Caves", price: "Island", img: "https://images.unsplash.com/photo-1589394815804-964ed962eb33?auto=format&fit=crop&w=600&q=80" },
    { title: "Kanheri Caves", category: "Caves", price: "National Park", img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=600&q=80" },
    { title: "Juhu Beach", category: "Beach", price: "Popular", img: "https://images.unsplash.com/photo-1566371510344-99d8544c017d?auto=format&fit=crop&w=600&q=80" },
    { title: "Colaba Causeway", category: "Shopping", price: "Street Shop", img: "https://images.unsplash.com/photo-1621360841013-c7683c6c98ca?auto=format&fit=crop&w=600&q=80" },
    { title: "Prithvi Theatre", category: "Culture", price: "Drama", img: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen font-sans selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-end p-10 md:p-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&q=80&w=1800" 
            className="w-full h-full object-cover opacity-20 grayscale" 
            alt="Marine Drive" 
            fetchpriority="high" // Force browser to prioritize hero image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 96 }} 
            transition={{ duration: 1 }}
            className="h-1.5 bg-blue-600 mb-10"
          ></motion.div>
          
          <h1 className="text-7xl md:text-[10rem] text-white leading-[0.9] font-black tracking-tighter uppercase mb-10">
            Global <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 italic font-serif pr-4">Horizons.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
             <button className="px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-blue-600 transition-all shadow-2xl shadow-blue-600/20 active:scale-95">
                Book The Experience
             </button>
             <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-slate-500 uppercase">
                <div className="w-20 h-[1px] bg-slate-800"></div>
                KY Holidays / Travel Division
             </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-40 px-10 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center relative z-10">
            <div className="flex-1 space-y-10">
                <p className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Adventure is Calling</p>
                <h2 className="text-5xl md:text-7xl text-slate-950 font-black leading-tight uppercase tracking-tighter">
                  Beyond the <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 italic font-serif pr-4">
                    Shores
                  </span> of Ordinary.
                </h2>
                <p className="text-xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-blue-600/30 pl-6">
                    "We don't provide travel; we curate legacy moments across the globe."
                </p>
            </div>

            <div className="flex-1">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-100/50 rounded-[3.5rem] blur-2xl -z-10 group-hover:bg-blue-200/60 transition-colors"></div>
                    <div className="overflow-hidden rounded-[3rem] border border-white shadow-2xl aspect-[4/5]">
                        <OptimizedImage 
                            src="https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&w=800&q=80" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105"
                            alt="Luxury Travel"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- CARDS SECTION --- */}
      <section className="py-40 px-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {mumbaiPlaces.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-8 border border-slate-800 rounded-[2.5rem] transition-all duration-500 group-hover:border-blue-600/50 group-hover:shadow-2xl group-hover:shadow-blue-900/20 aspect-[4/5]">
                <OptimizedImage 
                  src={exp.img} 
                  alt={exp.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110" 
                />
              </div>
              <div className="flex justify-between items-end px-2">
                <div>
                  <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] mb-2">{exp.category}</p>
                  <h3 className="text-2xl text-white font-black uppercase tracking-tighter group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                </div>
                <div className="text-[10px] font-bold text-slate-600 group-hover:text-white transition-colors uppercase tracking-widest">
                  {exp.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-slate-900 text-center">
        <h2 className="text-4xl font-black italic mb-4 text-white uppercase tracking-tighter">Katara Travel Corporation</h2>
        <p className="text-blue-600 text-sm tracking-[0.5em] uppercase font-black">Adventure is Calling Since 2016</p>
      </footer>
    </div>
  );
};

export default KataraAura;