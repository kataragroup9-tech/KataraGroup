import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Users, ArrowRight, Target, Briefcase, Heart, Building2, Anchor, Plane, Home, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Established", value: "1969" },
    { label: "Employment Target", value: "1 Lakh+" },
    { label: "Vision Year", value: "2032" },
    { label: "Headquarters", value: "Bharatpur" }
  ];

  const yojanae = [
    { icon: <ShieldCheck className="text-blue-500" />, title: "Safe Mobility", desc: "Logon ko sasti aur surakshit car seva uplabdha karana." },
    { icon: <Briefcase className="text-blue-500" />, title: "Entrepreneurship", desc: "Car chaalako ko car maalik banana." },
    { icon: <Plane className="text-blue-500" />, title: "Aviation", desc: "Sasti aur surakshit hawai yatra ka har nagrik ka sapna." },
    { icon: <Home className="text-blue-500" />, title: "Housing", desc: "Bharat ke aam logon ko khud ka ghar uplabdha karana." },
    { icon: <Anchor className="text-blue-500" />, title: "Logistics", desc: "Antarrashtriya vyapari varg ko samudri marg se jodna." },
    { icon: <Coffee className="text-blue-500" />, title: "Organic Tea", desc: "Har nagrik ko shuddh aur bagano ki chai pilana." }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen font-sans selection:bg-blue-600">
      
      {/* --- HERO SECTION: LEGACY START --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=1800" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            alt="Heritage" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mb-6">
            <span className="px-4 py-1 border border-blue-500/30 rounded-full text-blue-500 text-[10px] uppercase tracking-[0.4em] font-black bg-blue-500/5">
              Est. 1969
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-tight"
          >
            Katara Group <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 italic font-serif">Of Companies.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            नमस्कार! Katara Group pariwar mein aapka swagat hai. Ek chota sapna jo 1969 mein shuru hua, aaj ek vishal vishwas ban chuka hai.
          </motion.p>
        </div>
      </section>

      {/* --- HISTORY SECTION --- */}
      <section className="py-24 px-6 border-y border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-xs">The Evolution</h2>
              <h3 className="text-4xl text-white font-black uppercase tracking-tighter">Legacy Across Generations</h3>
            </div>
            
            <div className="space-y-8 relative border-l-2 border-slate-800 pl-8 ml-2">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                <h4 className="text-white font-bold text-xl uppercase tracking-tighter">1969 | The Foundation</h4>
                <p className="text-slate-500 mt-2 leading-relaxed text-sm">
                  <span className="text-slate-300 font-semibold italic text-base">Shri Baniram Katara ji</span> ne ek bus seva ke saath shuruat ki, taaki logon ko sahi parivahan suvidha mil sake.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-800"></div>
                <h4 className="text-white font-bold text-xl uppercase tracking-tighter">1985 | Expansion</h4>
                <p className="text-slate-500 mt-2 leading-relaxed text-sm">
                  Unke bade bete <span className="text-slate-300 font-semibold italic text-base">Shri Jagdish Prasad Katara ji</span> ne karobar ki bagdor sambhali aur ise aage badhaya.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-blue-400"></div>
                <h4 className="text-white font-bold text-xl uppercase tracking-tighter">Present | Modernization</h4>
                <p className="text-slate-500 mt-2 leading-relaxed text-sm">
                  36 varshon baad, <span className="text-slate-300 font-semibold italic text-base">Shri Vivek Katara ji</span> ne is group ka aadhunikikaran (Modernization) kiya, jisse aaj naye kshitij khul rahe hain.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-colors">
                <div className="text-3xl text-white font-black mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- YOJANAE (PLANS) SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">Future Roadmap</h2>
            <h3 className="text-5xl text-white font-black uppercase tracking-tighter">Hamari Yojanae</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yojanae.map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-slate-900 bg-[#06080c] hover:bg-slate-900/30 transition-all duration-500 group">
                <div className="mb-6 p-4 bg-slate-900/50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-white font-black uppercase text-lg mb-3 tracking-tighter">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION 2032 --- */}
      <section className="py-32 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl text-white font-black uppercase tracking-tighter leading-none">
              Vision <br /> <span className="opacity-40 italic">2032.</span>
            </h2>
            <p className="text-blue-50 text-xl font-medium leading-relaxed">
              Katara Group ka mukhya uddeshya apni bhinn-bhinn ikaiyon ke zariye Bharat ki arthvyavastha (Economy) mein sahyog dena hai. 
            </p>
            <div className="bg-blue-700/50 p-8 rounded-3xl border border-blue-400/30">
               <div className="text-4xl text-white font-black mb-2">1,00,000</div>
               <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Naye Rozgar Ka Lakshya</p>
            </div>
          </div>
          <div className="text-blue-100 space-y-6 text-lg leading-relaxed border-l-2 border-blue-400/30 pl-8">
            <p>
              2032 tak group Bharat ke mukhya shehron mein apni shakhaaye (branches) aur karyalaya kholega. Humara sankalp hai ki hum bharat ke vikas mein ek majboot stambh banein.
            </p>
            <div className="pt-4">
               <Target size={60} className="opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT / OFFICE INFO --- */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="inline-block p-4 rounded-full bg-slate-900 border border-slate-800">
            <Building2 size={32} className="text-blue-600" />
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-black text-3xl uppercase tracking-tighter">Mukhyalay (HQ)</h3>
            <p className="text-slate-400 text-lg">
              Outside Chandpol Gate, Bharatpur <br /> (Rajasthan), 321001
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
              <div className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2">Email</div>
              <a href="mailto:Kataragroupofcompanies@gmail.com" className="text-white font-bold hover:text-blue-400 transition-colors">
                Kataragroupofcompanies@gmail.com
              </a>
            </div>
            <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
              <div className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2">Contact</div>
              <a href="tel:+918955593937" className="text-white font-bold hover:text-blue-400 transition-colors">
                +91 89555 93937
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;