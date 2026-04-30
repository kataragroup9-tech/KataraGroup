import React, { useState } from 'react';
import { Plane, ShieldCheck, Globe, ArrowRight, MapPin, Calendar, Star, Coffee, Send } from 'lucide-react';

const Airways = () => {
  const [activeTab, setActiveTab] = useState('round-trip');

  // --- ADD THIS DATA ARRAY TO FIX THE ERROR ---
  const companySegments = [
    {
    title: "Oasis Suites",
    tagline: "Total Privacy",
    desc: "Floor-to-ceiling sanctuary with Zero-G technology for weightless travel."
  },
  {
    title: "Culinary Theater",
    tagline: "Dine on Demand",
    desc: "Michelin-star menus prepared by on-board chefs to your exact preference."
  },
  {
    title: "Jet Card",
    tagline: "Global Access",
    desc: "Priority fleet access with 12-hour notice for the ultimate flexibility."
  }
  ];

  const features = [
    { 
      icon: <Star size={24} />, 
      title: "7-Star Service", 
      desc: "Award-winning cabin crew trained in elite hospitality and cultural etiquette." 
    },
    { 
      icon: <Coffee size={24} />, 
      title: "Gourmet Dining", 
      desc: "Michelin-star menus curated by world-class chefs, served on fine bone china." 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: "Unmatched Privacy", 
      desc: "Our Oasis Suites offer floor-to-ceiling privacy for the ultimate peace." 
    }
  ];

  return (
    <div className="font-sans antialiased text-slate-900 bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex items-center bg-white overflow-hidden font-sans">
        <div className="flex flex-col lg:flex-row w-full h-full">
          {/* Left Content Column */}
          <div className="w-full lg:w-1/2 p-10 md:p-24 flex flex-col justify-center relative z-20 bg-white">
            <div className="w-20 h-1.5 bg-blue-600 mb-10"></div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Introducing Katara Airways</span>
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-black text-slate-950 leading-[0.85] tracking-[-0.04em] mb-10">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 italic font-serif pr-4">
                First Class.
              </span>
            </h1>
            <p className="text-slate-600 text-xl max-w-lg mb-12 leading-relaxed font-medium border-l-4 border-blue-600/20 pl-6">
              Experience the pinnacle of Arabian hospitality. Where every flight is a curated masterpiece 
              of comfort, style, and absolute certainty.
            </p>
          </div>

          {/* Right Image Area */}
          <div className="w-full lg:w-1/2 relative min-h-[600px] bg-slate-100">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 lg:block hidden"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 grayscale hover:grayscale-0"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070')`,
                backgroundPosition: 'center' 
              }}
            >
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
            <div className="absolute bottom-12 right-12 z-20 bg-white p-10 rounded-[3rem] shadow-2xl hidden md:block border border-slate-50">
              <div className="flex flex-col items-center">
                  <p className="text-6xl font-black text-slate-950 leading-none tracking-tighter italic">5★</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mt-3">Luxury Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ARTICLE SECTION --- */}
      <section className="py-32 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070" 
                    alt="Luxury Interior" 
                    className="rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
            <div>
               <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 italic font-serif pr-4">
                The Katara Legacy
              </h2>
                <div className="space-y-6 text-gray-400 leading-relaxed text-lg mt-8">
                    <p>
                        <span className="text-white font-bold text-2xl">Katara Airways</span> isn't just an airline; it's a testament to the art of flight. Founded on the principles of Middle-Eastern hospitality and futuristic engineering.
                    </p>
                    <p>
                        Our signature <strong>Oasis Suites</strong> redefine personal space at 40,000 feet. With zero-gravity reclining seats and a digital sky-ceiling, jet lag becomes a thing of the past.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- KATARA GROUP SEGMENTS (Now Fixed) --- */}
      <section className="py-32 px-6 w-full bg-white text-slate-950 overflow-hidden relative border-t border-slate-100 font-sans">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-0"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
            {companySegments.map((step, i) => (
              <div 
                key={i} 
                className="relative group p-12 bg-white rounded-[3.5rem] border border-slate-100 hover:bg-slate-950 transition-all duration-500 text-left shadow-xl hover:shadow-2xl hover:shadow-blue-600/20"
              >
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-3xl font-black mb-8 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-500">
                  0{i + 1}
                </div>
                <h4 className="text-3xl font-black mb-2 uppercase tracking-tighter group-hover:text-white transition-colors">
                  {step.title}
                </h4>
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-80 group-hover:text-cyan-400">
                  {step.tagline}
                </p>
                <p className="text-slate-500 text-lg font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.desc}
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-500">
                   <span className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                      Explore Segment <div className="w-8 h-[1px] bg-blue-500"></div>
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center bg-black">
        <h2 className="text-4xl font-serif italic mb-4 text-white uppercase tracking-tighter">Katara Airways Corporation</h2>
        <p className="text-blue-500 text-sm tracking-[0.5em] uppercase font-black">Skyward Elegance Since 1967</p>
      </footer>
    </div>
  );
};

export default Airways;