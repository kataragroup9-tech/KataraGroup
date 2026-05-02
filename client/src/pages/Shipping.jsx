import React from 'react';
import * as Lucide from 'lucide-react';
import { 
  Ship, Truck, Box, Globe, ShieldCheck, 
  MapPin, BarChart3, ArrowRight, Anchor, Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Shipping = () => {
  // --- DATA ARRAY ---
 const logisticsGallery = [
  // --- MARITIME & PORT ---
  {
    title: "Global Ocean Carrier",
    category: "Maritime",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800"
  },
  {
    title: "Container Terminal",
    category: "Port Operations",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800"
  },
  {
    title: "Harbor Cranes",
    category: "Infrastructure",
    img: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=800"
  },
  {
    title: "Vessel Berthing",
    category: "Maritime",
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800"
  },

  // --- AIR CARGO ---
  {
    title: "Air Cargo Expedition",
    category: "Aviation",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800"
  },
  {
    title: "Night Logistics",
    category: "Transport",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800"
  },

  // --- WAREHOUSING & TECH ---
  {
    title: "Automated Hub",
    category: "Storage",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    title: "Precision Scanning",
    category: "Technology",
    img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800"
  },

  {
    title: "Robotic Sorting",
    category: "Technology",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800"
  },

  // --- STRATEGIC & INTERMODAL ---
  {
    title: "Logistics Coordination",
    category: "Management",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800"
  },
  {
    title: "Intermodal Rail",
    category: "Rail",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800"
  },
  {
    title: "Global Distribution",
    category: "Network",
    img: "https://images.unsplash.com/photo-1521791136364-798e730bb36d?q=80&w=800"
  },
  {
    title: "Package Fulfillment",
    category: "E-commerce",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800"
  }
];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-28 overflow-hidden font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 mt-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-8">
                <Zap size={14} className="text-indigo-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">AI-Driven Supply Chain</span>
            </div>
            <h1 className="text-7xl md:text-[8.5rem] font-black tracking-tighter leading-[0.75] mb-10 text-gray-950">
              ELITE <br /> <span className="text-indigo-600 italic">CARGO.</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg mb-12">
              Precision logistics for high-stakes enterprises. We operate at the intersection of speed and absolute security.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-indigo-600 text-white px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all shadow-2xl shadow-indigo-200">
                Track Shipment
              </button>
              <button className="bg-transparent text-gray-950 border-2 border-gray-200 px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-50 transition-all">
                The Network
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-gray-200 rounded-[5rem] aspect-[4/5] overflow-hidden relative group border-[12px] border-white shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Logistics"
               />
               <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 min-w-[320px]">
                <div className="flex justify-between items-start mb-6">
                    <div className="bg-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white">
                        <Globe size={24} />
                    </div>
                    <div className="text-right">
                        <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Vessel</span>
                        <span className="text-lg font-black text-gray-900 uppercase">VG-AETHER</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-full w-[75%] animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-gray-500">
                        <span>Mumbai</span>
                        <span className="text-indigo-600 italic">London</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-32 bg-gray-950 rounded-[4rem] mx-4 md:mx-10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
                <span className="text-indigo-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Core Competencies</span>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Global <br /> <span className="text-indigo-500">Reach.</span></h2>
            </div>
            <div className="flex items-center gap-6 text-gray-400 font-bold text-[10px] uppercase tracking-widest border border-white/10 px-8 py-4 rounded-full">
                Encrypted Tracking <ShieldCheck size={18} className="text-indigo-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {logisticsGallery.map((s, i) => (
              <motion.div 
                whileHover={{ y: -20 }}
                key={i} 
                className="group bg-white/5 p-2 rounded-[3.5rem] border border-white/5 hover:border-indigo-500/50 transition-all duration-500"
              >
                <div className="h-80 overflow-hidden relative rounded-[3rem]">
                    <img src={s.img} className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" alt={s.title} />
                    <div className="absolute top-8 left-8 bg-indigo-600 p-4 rounded-2xl text-white shadow-xl">
                        {s.icon}
                    </div>
                </div>
                <div className="p-10">
                    <h3 className="text-2xl font-black uppercase mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">{s.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed mb-8 text-sm">{s.desc}</p>
                    <button className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                        View Specs <ArrowRight size={16} className="text-indigo-500" />
                    </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- METRICS BAR --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 border-y border-gray-100 py-20">
            {[
                { label: 'Strategic Ports', val: '412' },
                { label: 'Annual Tonnage', val: '8.4M' },
                { label: 'Clearance Speed', val: '2h' },
                { label: 'Asset Safety', val: '99.9%' }
            ].map((stat, i) => (
                <div key={i} className="text-center group">
                    <p className="text-6xl font-black text-gray-950 mb-2 italic group-hover:text-indigo-600 transition-colors">
                        {stat.val}
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>
    <footer className="py-20 border-t border-white/5 text-center bg-black">
        <h2 className="text-4xl font-serif italic mb-4 text-white">Katara Shipping Corporation</h2>
        <p className="text-gray-600 text-sm tracking-[0.5em] uppercase">Skyward Elegance Since 1967</p>
      </footer>

    </div>
  );
};

export default Shipping;
