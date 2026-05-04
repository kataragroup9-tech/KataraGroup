import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ship, Search, Coffee, Plane, MapPin, Star, ShieldCheck, Anchor } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Verified Experts', value: '50k+' },
    { label: 'Global Sectors', value: '15+' },
    { label: 'Successful Deployments', value: '12k+' },
    { label: 'Industrial Partners', value: '250+' },
  ];

 const companySegments = [
  { 
    title: 'Katara Airlines', 
    desc: 'SKY IS NOT THE LIMIT.', 
    tagline: 'Aviation Excellence',
    logo: process.env.PUBLIC_URL + '/assets/airlines-logo.png'
  },
  { 
    title: 'Katara Shipping Corp', 
    desc: 'DEPTH IS NOT THE LIMIT.', 
    tagline: 'Global Logistics',
    logo: process.env.PUBLIC_URL + '/assets/shipping-logo.png'
  },
  { 
    title: 'Katara Real Estate', 
    desc: 'FOUNDATION WITHOUT LIMITS.', 
    tagline: 'Luxury Living',
    logo: process.env.PUBLIC_URL + '/assets/realestate-logo.png'
  },
  { 
    title: 'Katara Tea Corporation', 
    desc: 'PURITY WITHOUT COMPROMISE.', 
    tagline: 'Premium FMCG',
    logo: process.env.PUBLIC_URL + '/assets/tea-logo.png'
  },
  { 
    title: 'K Y HOLIDAYS PVT LTD', 
    desc: 'JOURNEYS BEYOND BOUNDARIES.', 
    tagline: 'Bespoke Travel',
    logo: process.env.PUBLIC_URL + '/assets/holidays-logo.png'
  },
];

  // State for the Airlines section tabs
  const [activeFlightTab, setActiveFlightTab] = useState('round-trip');

  return (
    <div className="font-sans antialiased text-slate-900 bg-white overflow-x-hidden">
      
      {/* --- RECRUITMENT HERO SECTION --- */}
   <section className="relative w-full min-h-[95vh] flex items-center bg-white overflow-hidden font-sans">
  <div className="flex flex-col lg:flex-row w-full h-full">
    
    {/* Left Content Column */}
    <div className="w-full lg:w-1/2 p-10 md:p-24 flex flex-col justify-center relative z-20 bg-white">
      {/* Accent Line */}
      <div className="w-20 h-1.5 bg-blue-600 mb-10"></div>
      
      <h1 className="text-5xl md:text-[5.5rem] font-black text-slate-950 leading-[0.85] tracking-[-0.04em] mb-10">
        Depth goes beyond <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 italic font-serif pr-4">
          Boundaries.
        </span>
      </h1>
      
      <p className="text-slate-600 text-xl max-w-lg mb-12 leading-relaxed font-medium border-l-4 border-blue-600/20 pl-6">
        From massive container carriers to precision port logistics. Sclerahunt commands the global tides, 
        ensuring your cargo navigates the world's most vital trade routes with absolute certainty.
      </p>
      
      <div className="flex flex-wrap gap-5">
        <Link 
          to="/shipping" 
          className="bg-slate-950 text-white px-12 py-6 rounded-2xl font-black hover:bg-blue-600 transition-all text-lg shadow-2xl shadow-blue-600/10"
        >
          Book Your Shipment
        </Link>
        <button className="bg-white text-slate-950 border-2 border-slate-100 px-12 py-6 rounded-2xl font-black hover:bg-slate-50 transition-all text-lg">
          Explore Map
        </button>
      </div>
    </div>

    {/* Right Image Area */}
    <div className="w-full lg:w-1/2 relative min-h-[600px] bg-slate-100">
      {/* Soft Gradient Overlay for Desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 lg:block hidden"></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 grayscale hover:grayscale-0"
        style={{ 
          backgroundImage: `url('/assets/Ship.jpg')`,
          backgroundPosition: 'center 40%' 
        }}
      >
        {/* Subtle Contrast Overlay */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-12 right-12 z-20 bg-white p-10 rounded-[3rem] shadow-2xl hidden md:block border border-slate-50">
        <div className="flex flex-col items-center">
            <p className="text-6xl font-black text-slate-950 leading-none tracking-tighter italic">120+</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mt-3">Global Hubs</p>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* --- PROCESS SECTION --- */}
  <section className="py-32 px-6 w-full bg-[#0A0A0B] text-[#E4E4E7] overflow-hidden relative border-t border-[#232326]">
      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-black mb-24 tracking-tighter leading-none uppercase text-[#E4E4E7]">
          Our <span className="text-[#6366F1] italic font-serif">Katara Group</span> 
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {companySegments.map((step, i) => (
            <div 
              key={i} 
              className="relative group p-10 bg-[#161618] rounded-[3.5rem] border border-[#232326] hover:border-[#6366F1]/50 transition-all duration-500 text-left shadow-2xl"
            >
              {/* Updated: Number "01" ki jagah yahan step.icon render ho raha hai */}
              <div className="w-20 h-20 bg-[#6366F1]/10 text-[#6366F1] rounded-3xl flex items-center justify-center mb-8 border border-[#6366F1]/20 group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                {step.icon}
              </div>
              
              <h4 className="text-3xl font-black mb-2 uppercase tracking-tighter group-hover:text-[#6366F1] transition-colors">
                {step.title}
              </h4>
              
              <p className="text-[#6366F1] text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-80">
                {step.tagline}
              </p>
              
              <p className="text-[#A1A1AA] text-lg font-medium leading-relaxed group-hover:text-[#E4E4E7] transition-colors">
                {step.desc}
              </p>

              {/* Decorative line color updated to Dark Steel */}
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-[1px] bg-[#232326]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
{/* --- AIRLINE & AVIATION SECTION --- */}
<section className="relative py-32 px-6 md:px-16 bg-[#F8FAFC] overflow-hidden w-full font-sans border-t border-slate-200">
  {/* Subtle Decorative Element */}
  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[120px]"></div>
  
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
    
    {/* Left Content Column */}
    <div className="lg:w-1/2 z-10">
      <div className="flex items-center gap-4 mb-6">
        <span className="h-[1.5px] w-10 bg-[#6366F1]"></span>
        <span className="text-[#6366F1] font-black uppercase tracking-[0.4em] text-[10px]">
          Elite Air Travel
        </span>
      </div>
      
      {/* Font Size Reduced from 7.5rem to 5.5rem/6xl for better fit */}
      <h2 className="text-5xl md:text-7xl font-black text-[#0A0A0B] leading-[0.95] tracking-tighter mb-8 uppercase">
        Fly Beyond <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#818cf8] italic font-serif pr-4">
          Boundaries.
        </span>
      </h2>
      
      <p className="text-[#64748B] text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium border-l-4 border-[#6366F1]/10 pl-6">
        Experience the pinnacle of aviation. From private charters to global 
        routes, we redefine your journey with <span className="font-bold text-[#0A0A0B]">first-class precision</span>.
      </p>
      
      <div className="flex flex-wrap items-center gap-6">
        <Link to="/airlines" className="group bg-[#0A0A0B] text-white px-10 py-5 rounded-2xl font-black text-base hover:bg-[#6366F1] transition-all duration-300 shadow-xl flex items-center gap-3">
          Book Your Flight
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
        
        <div className="flex flex-col gap-2">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?u=aero${i}`} alt="traveler" />
              </div>
            ))}
          </div>
          <p className="text-[9px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">
            Trusted by <span className="text-[#0A0A0B]">12M+</span> Flyers
          </p>
        </div>
      </div>
    </div>

    {/* Right Visual Column - Optimized Size */}
    <div className="lg:w-5/12 w-full relative">
      <div className="aspect-[4/5] bg-white rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-slate-100 relative overflow-hidden group">
        
        {/* Background Image - Clean Reveal */}
        <img 
          src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop" 
          alt="Premium Flight"
          className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 pointer-events-none"
        />

        {/* Floating Badge (Adjusted size) */}
        <div className="absolute -top-6 -right-6 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50 z-10 group-hover:border-[#6366F1]/20 transition-colors">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-black text-[#6366F1] leading-none tracking-tighter italic">85</p>
            <p className="text-[9px] font-black uppercase tracking-[0.1em] text-[#94A3B8] mt-3 text-center">Global<br/>Gateways</p>
          </div>
        </div>

        {/* Center Aircraft Icon */}
        <div className="text-[10rem] opacity-[0.04] rotate-[-15deg] select-none relative z-0 text-[#0A0A0B]">
          ✈️
        </div>

        {/* Bottom Inner Soft Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
      </div>
    </div>

  </div>
</section>
  
 {/* --- KATARA TEA CORPORATION: PREMIER INDUSTRIAL SECTION --- */}
<section className="py-44 bg-[#0A0A0B] px-6 border-t border-[#232326]">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
    
    {/* Left: Text Content */}
    <div className="lg:w-1/2">
      <h2 className="text-6xl font-black text-[#E4E4E7] mb-12 tracking-tighter uppercase leading-[0.9]">
        The Journey of <br/> <span className="text-[#6366F1] italic font-serif">Excellence.</span>
      </h2>
      
      <div className="space-y-12">
        {[
          { step: '01', title: 'Sustainable Harvest', desc: 'Ethically sourced from 100% organic-certified estates.' },
          { step: '02', title: 'Smart Processing', desc: 'Minimal human touch with maximum flavor retention.' },
          { step: '03', title: 'Global Porting', desc: 'Direct shipping to 45+ international destinations.' }
        ].map((item, i) => (
          <div key={i} className="flex gap-8 group">
            <span className="text-4xl font-black text-[#232326] group-hover:text-[#6366F1] transition-colors duration-500 italic font-serif">
              {item.step}
            </span>
            <div className="border-l border-[#232326] pl-8 group-hover:border-[#6366F1] transition-all">
              <h4 className="text-xl font-black text-[#E4E4E7] uppercase mb-2">{item.title}</h4>
              <p className="text-[#71717A] font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Vertical Glass Image Stack */}
    <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
      {/* Background Decorative Indigo Box */}
      <div className="absolute inset-0 bg-[#6366F1]/5 blur-[100px] -z-10"></div>
      
      <div className="space-y-6">
        <div className="h-80 rounded-[3rem] overflow-hidden border border-[#232326] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          <img src="https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Industrial 1" />
        </div>
        <div className="h-64 rounded-[3rem] overflow-hidden border border-[#232326] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          <img src="https://images.unsplash.com/photo-1582733315331-a8c0809bca32?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Industrial 2" />
        </div>
      </div>
      
      <div className="space-y-6 pt-12">
        <div className="h-64 rounded-[3rem] overflow-hidden border border-[#232326] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Industrial 3" />
        </div>
        <div className="h-80 rounded-[3rem] overflow-hidden border border-[#232326] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          <img src="https://images.unsplash.com/photo-1597484662317-9bd773ee1663?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Industrial 4" />
        </div>
      </div>
    </div>
  </div>
</section>


{/* --- REAL ESTATE & LUXURY SPACES SECTION --- */}
     <section className="relative py-44 px-6 md:px-16 bg-[#F8FAFC] overflow-hidden w-full font-sans border-t border-slate-200">
  {/* Subtle Ambient Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#6366F1]/5 blur-[120px] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
    
    {/* Left Content: Real Estate Focus - Titanium Light Style */}
    <div className="lg:w-1/2">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-[1.5px] w-12 bg-[#6366F1]"></span>
        <span className="text-[#6366F1] font-black uppercase tracking-[0.4em] text-[10px]">
          Exclusive Living
        </span>
      </div>
      
      <h2 className="text-6xl md:text-[6.5rem] font-black text-[#0A0A0B] leading-[0.9] tracking-tighter mb-8 uppercase">
        Modern <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#818cf8] italic font-serif pr-4">
          Real Estate.
        </span>
      </h2>
      
      <p className="text-[#64748B] text-xl max-w-xl mb-12 leading-relaxed font-medium border-l-4 border-[#6366F1]/10 pl-8">
        We don't just find houses; we discover homes. Katara Estates specializes 
        in curated luxury properties and high-yield urban investments across the world's most iconic skylines.
      </p>
      
      <div className="flex items-center gap-6">
        <Link to="/properties" className="bg-[#0A0A0B] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#6366F1] transition-all shadow-2xl shadow-slate-200">
          Explore Estates
        </Link>
        <div className="flex -space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-12 h-12 rounded-full border-4 border-[#F8FAFC] bg-slate-100 overflow-hidden shadow-sm">
                <img src={`https://i.pravatar.cc/150?u=homeowner${i}`} alt="client" className="grayscale hover:grayscale-0 transition-all" />
            </div>
          ))}
          <div className="flex items-center justify-center pl-8 text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">
            +15k Residents
          </div>
        </div>
      </div>
    </div>

    {/* Right Visual Column - White & Indigo Fusion */}
    <div className="lg:w-5/12 w-full relative">
      <div className="aspect-square bg-white rounded-[4rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-slate-100 relative overflow-hidden group">
        
        {/* Background Image - Clean Reveal */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 pointer-events-none scale-110 group-hover:scale-100"
        />

        {/* Floating Badge (Titanium Style) */}
        <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50 z-10 group-hover:border-[#6366F1]/20 transition-colors">
          <p className="text-6xl font-black text-[#6366F1] leading-none tracking-tighter italic">850+</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mt-4">Premium Listings</p>
        </div>

        {/* Center Home/Building Icon */}
        <div className="text-[12rem] opacity-[0.03] select-none relative z-0 text-[#0A0A0B]">
          🏢
        </div>
        
        {/* Soft Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
      </div>
    </div>

  </div>
</section>


<section className="relative py-32 px-6 md:px-16 bg-[#0A0A0B] overflow-hidden w-full font-sans border-t border-[#232326]">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
    
    {/* Left Visual: Overlapping Images Layout */}
    <div className="lg:w-1/2 w-full relative">
      <div className="relative z-10 aspect-[3/4] w-full max-w-md rounded-[4rem] overflow-hidden border border-[#232326] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] group bg-[#161618]">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" 
          alt="Tropical Destination" 
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 opacity-70 group-hover:opacity-100"
        />
        {/* Deep Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-[#E4E4E7]">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 text-[#6366F1]">Current Hotspot</p>
            <h3 className="text-5xl font-black italic font-serif tracking-tighter">Maldives.</h3>
        </div>
      </div>

      {/* Floating Indigo Glow behind the main image */}
      <div className="absolute -bottom-10 -right-10 lg:right-0 w-72 h-72 bg-[#6366F1] rounded-full -z-10 animate-pulse opacity-10 blur-[100px]"></div>
      
      {/* Mini Floating Stats - Onyx Glassmorphism */}
      <div className="absolute top-1/4 -right-8 bg-[#161618]/80 backdrop-blur-2xl p-6 rounded-[2rem] shadow-2xl border border-[#232326] z-20 hidden md:block">
        <div className="flex items-center gap-4">
          <div className="bg-[#6366F1] text-white p-4 rounded-2xl shadow-lg shadow-[#6366F1]/20">
            <span className="text-xl">✈️</span>
          </div>
          <div>
            <p className="text-2xl font-black text-[#E4E4E7]">250+</p>
            <p className="text-[10px] font-bold text-[#71717A] uppercase tracking-widest">Global Routes</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Content: Midnight Typography */}
    <div className="lg:w-1/2">
      <div className="flex items-center gap-5 mb-10">
        <div className="flex -space-x-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0B] bg-[#161618] overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=traveler${i}`} alt="user" className="grayscale hover:grayscale-0 transition-all" />
            </div>
          ))}
        </div>
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#6366F1] border-l border-[#232326] pl-5">
          Trusted by 50k+ Travelers
        </p>
      </div>

      <h2 className="text-6xl md:text-[6.5rem] font-black text-[#E4E4E7] leading-[0.85] tracking-tighter mb-12 uppercase">
        Escape the <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818cf8] to-[#a5b4fc] italic font-serif">
          Ordinary.
        </span>
      </h2>

      <p className="text-[#A1A1AA] text-xl md:text-2xl font-light leading-relaxed mb-14 max-w-lg">
        Your journey is more than just a destination. We curate <span className="text-[#E4E4E7] font-medium">bespoke experiences</span> that bridge the gap between dreams and reality.
      </p>

      <div className="flex flex-col sm:flex-row gap-8">
        <Link 
          to="/explore" 
          className="bg-[#6366F1] text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-[#4f46e5] transition-all shadow-[0_20px_50px_-10px_rgba(79,70,229,0.4)] hover:-translate-y-1 text-center"
        >
          START EXPLORING
        </Link>
        <button className="flex items-center justify-center gap-4 font-black text-sm uppercase tracking-widest text-[#E4E4E7] hover:text-[#6366F1] transition-all group">
          WATCH FILM 
          <span className="w-14 h-14 rounded-full border border-[#232326] flex items-center justify-center group-hover:bg-[#161618] group-hover:border-[#6366F1] transition-all">
            <span className="ml-1 text-xs">▶</span>
          </span>
        </button>
      </div>
    </div>

  </div>
</section>
      {/* --- STATS SECTION --- */}
      <section className="py-28 bg-[#F8FAFC] relative overflow-hidden border-y border-slate-200">
  {/* Subtle Background Accent */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#6366F1]/[0.02] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-16 text-center relative z-10">
    {stats.map((s, i) => (
      <div key={i} className="group relative">
        {/* Value with Electric Indigo Gradient */}
        <h3 className="text-6xl md:text-7xl font-black text-[#0A0A0B] mb-4 group-hover:text-[#6366F1] group-hover:scale-105 transition-all duration-500 tracking-tighter italic font-serif">
          {s.value}
        </h3>
        
        {/* Animated Divider */}
        <div className="h-1.5 w-12 bg-[#6366F1]/20 mx-auto mb-6 group-hover:w-24 group-hover:bg-[#6366F1] transition-all duration-500 rounded-full"></div>
        
        {/* Label in Muted Slate */}
        <p className="text-[#64748B] uppercase text-[10px] font-black tracking-[0.4em] group-hover:text-[#0A0A0B] transition-colors">
          {s.label}
        </p>

        {/* Optional: Subtle vertical divider for desktop */}
        {i < stats.length - 1 && (
          <div className="hidden lg:block absolute top-1/2 -right-8 w-px h-12 bg-slate-200 -translate-y-1/2"></div>
        )}
      </div>
    ))}
  </div>
</section>

      {/* --- FORM SECTION --- */}
    <section className="py-32 bg-[#0A0A0B] text-[#E4E4E7] px-6 relative overflow-hidden border-t border-[#232326]">
  {/* Subtle Background Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
    
    {/* Left Content */}
    <div className="lg:w-1/2">
      <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] uppercase">
        Your Industrial <br />
        <span className="text-[#6366F1] italic font-serif">Solution Partner.</span>
      </h2>
      <p className="text-[#A1A1AA] text-xl mb-12 font-medium leading-relaxed max-w-md border-l border-[#232326] pl-8">
        Schedule a call with our experts to discuss your specific industrial and manpower needs.
      </p>
      
      {/* Contact Card: Deep Onyx Style */}
      <div className="flex items-center gap-6 p-8 bg-[#161618] rounded-[2.5rem] border border-[#232326] max-w-md group hover:border-[#6366F1]/30 transition-all">
         <div className="w-16 h-16 bg-[#6366F1]/10 text-[#6366F1] rounded-2xl flex items-center justify-center text-3xl border border-[#6366F1]/20 group-hover:bg-[#6366F1] group-hover:text-white transition-all">
           📞
         </div>
         <div>
           <p className="text-[10px] font-black text-[#71717A] uppercase tracking-[0.3em] mb-1">Direct Line</p>
           <p className="text-2xl font-black text-[#E4E4E7] group-hover:text-[#6366F1] transition-colors tracking-tighter">
             +91 98765 43210
           </p>
         </div>
      </div>
    </div>

    {/* Right Content: The Form (Converted to Dark UI) */}
    <div className="lg:w-1/2 bg-[#161618] p-12 rounded-[4rem] w-full border border-[#232326] shadow-2xl relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366F1]/5 blur-3xl rounded-full"></div>
      
      <form className="space-y-8 relative z-10">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#71717A] ml-6">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full p-7 bg-[#0A0A0B] rounded-[2rem] border border-[#232326] text-[#E4E4E7] font-bold focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]/30 transition-all placeholder:text-[#3F3F46]" 
          />
        </div>
        
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#71717A] ml-6">Work Email</label>
          <input 
            type="email" 
            placeholder="john@company.com" 
            className="w-full p-7 bg-[#0A0A0B] rounded-[2rem] border border-[#232326] text-[#E4E4E7] font-bold focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]/30 transition-all placeholder:text-[#3F3F46]" 
          />
        </div>

        <button 
          type="button" 
          className="w-full bg-[#6366F1] text-white py-7 rounded-[2rem] font-black text-xl hover:bg-[#4f46e5] transition-all uppercase tracking-widest shadow-[0_20px_50px_-10px_rgba(79,70,229,0.4)]"
        >
          Submit Request
        </button>
        
        <p className="text-center text-[10px] font-bold text-[#3F3F46] uppercase tracking-widest">
          No spam. Only professional consultations.
        </p>
      </form>
    </div>

  </div>
</section>

      {/* --- CTA BANNER --- */}
      <section className="py-32 px-6 bg-[#F8FAFC] border-t border-slate-200">
  <div className="max-w-7xl mx-auto bg-[#0A0A0B] rounded-[4rem] p-16 md:p-24 text-center text-[#E4E4E7] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden group">
    
    {/* Animated Background Gradients */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#6366F1]/20 transition-all duration-1000"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#818cf8]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

    <div className="relative z-10">
      {/* Decorative Tag */}
      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6366F1] mb-8">
        Strategic Partnerships
      </p>

      <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.9] uppercase">
        Ready to provide <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818cf8] to-indigo-300 italic font-serif">
          Global Talent?
        </span>
      </h2>

      <div className="flex flex-col items-center gap-6">
        <Link 
          to="/contact" 
          className="bg-[#6366F1] text-white px-16 py-7 rounded-[2rem] font-black text-2xl hover:bg-[#4f46e5] transition-all hover:-translate-y-1 shadow-[0_20px_50px_-10px_rgba(79,70,229,0.4)] uppercase tracking-widest"
        >
          Get Started Today
        </Link>
        
        <p className="text-[#71717A] text-[10px] font-bold uppercase tracking-[0.2em] mt-4">
          Industry standard solutions since 1947
        </p>
      </div>
    </div>

    {/* Subtle Border Detail */}
    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-50"></div>
  </div>
</section>

<section className="py-44 bg-[#0A0A0B] px-6 relative overflow-hidden border-t border-[#232326]">
  {/* Indigo radial glow for depth */}
  <div className="absolute inset-0 bg-radial-gradient from-[#6366F1]/5 via-transparent to-transparent opacity-50"></div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <h2 className="text-5xl md:text-8xl font-black text-[#E4E4E7] tracking-tighter uppercase mb-16">
      From Origin <br/> <span className="text-[#6366F1] italic font-serif">To Every Port.</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
      {[
        { city: 'Mumbai', role: 'Headquarters & Hub', detail: 'Strategic coordination for Asia-Pacific routes.' },
        { city: 'London', role: 'Distribution Center', detail: 'Primary gateway for European FMCG networks.' },
        { city: 'Dubai', role: 'Logistics Node', detail: 'Centralized storage for Middle Eastern markets.' }
      ].map((loc, i) => (
        <div key={i} className="group relative bg-[#161618] p-10 rounded-[3rem] border border-[#232326] hover:border-[#6366F1]/40 transition-all">
          <div className="w-12 h-12 bg-[#0A0A0B] rounded-xl flex items-center justify-center text-[#6366F1] font-black mb-8 border border-[#232326] group-hover:bg-[#6366F1] group-hover:text-white transition-all">
            {i + 1}
          </div>
          <h3 className="text-2xl font-black text-[#E4E4E7] uppercase mb-2 tracking-tight">{loc.city}</h3>
          <p className="text-[#6366F1] text-[10px] font-black uppercase tracking-widest mb-4">{loc.role}</p>
          <p className="text-[#71717A] text-sm leading-relaxed">{loc.detail}</p>
          
          {/* Animated dot indicator */}
          <div className="absolute top-10 right-10 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6366F1]"></span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
