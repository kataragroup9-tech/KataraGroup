import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Droplets, Wind, Truck, FlaskConical, Shovel } from 'lucide-react';

const TeaManufacturing = () => {
  const factoryStats = [
    { label: "Daily Output", value: "2.5 Tons", icon: <Settings size={20} /> },
    { label: "Sourcing Radius", value: "500 km", icon: <Truck size={20} /> },
    { label: "Quality Checks", value: "14 Stages", icon: <FlaskConical size={20} /> },
    { label: "Storage Capacity", value: "50k sq.ft", icon: <Shovel size={20} /> },
  ];

  const manufacturingSteps = [
    { title: "Withering", desc: "Leaves are spread on racks to reduce moisture by 50% under controlled airflow.", icon: <Wind /> },
    { title: "Rolling", desc: "Mechanical rollers break cell walls to release essential juices for oxidation.", icon: <Settings /> },
    { title: "Oxidation", desc: "Precise temperature control at ±0.5°C to develop the signature aroma.", icon: <Droplets /> },
  ];

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
    
      {/* --- HERO: THE FACTORY FLOOR --- */}
      <section className="relative h-[70vh] overflow-hidden border-b border-black">
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center px-10">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white max-w-4xl"
            >
                <span className="text-[10px] font-black uppercase tracking-[1em] mb-4 block">B2B & Wholesale</span>
                <h2 className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter">
                    Volume <br /> Manufacturing.
                </h2>
            </motion.div>
        </div>
       <img 
  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600"
   className="w-full h-full object-cover grayscale contrast-125"
  alt="Tea Manufacturing Unit"
/>
      </section>

      {/* --- STATS GRID --- */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-black">
        {factoryStats.map((stat, i) => (
            <div key={i} className="p-10 border-r border-black/5 flex flex-col gap-8 hover:bg-gray-50 transition-colors">
                <div className="text-gray-300">{stat.icon}</div>
                <div>
                    <p className="text-4xl font-black tracking-tighter">{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                </div>
            </div>
        ))}
      </section>

      {/* --- PRODUCTION LINE FLOW --- */}
      <section className="py-32 px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
                <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                    From Soil <br /> to Bulk <br /> Shipping.
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 text-justify text-inter-word">
                  We do not merely sell tea; we manufacture quality and supply chain consistency. 
                  In alignment with Vivek Katara’s vision, every single batch undergoes a 
                  rigorous 14-point quality inspection before leaving our facility.  
                </p>
                <button className="border-2 border-black px-10 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Download Factory Specs
                </button>
            </div>

            <div className="lg:col-span-8 space-y-4">
                {manufacturingSteps.map((step, i) => (
                    <div key={i} className="group p-10 border border-black/5 hover:border-black flex gap-10 items-center transition-all">
                        <span className="text-5xl font-black text-gray-100 group-hover:text-black transition-colors italic">0{i+1}</span>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase">{step.title}</h4>
                            <p className="text-sm text-gray-400 max-w-lg">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CLIENTS / BULK INQUIRY --- */}
      <section className="bg-black text-white py-32 px-10 text-center">
         <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Become a Partner.</h2>
         <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="border border-white/20 p-10 flex flex-col items-center gap-4 hover:border-white transition-colors cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Retailers</span>
                <span className="text-2xl font-bold uppercase">Private Labeling</span>
            </div>
            <div className="border border-white/20 p-10 flex flex-col items-center gap-4 hover:border-white transition-colors cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Wholesale</span>
                <span className="text-2xl font-bold uppercase">Bulk Export</span>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center bg-black">
        <h2 className="text-4xl font-serif italic mb-4 text-white">Katara Tea Corporation</h2>
        <p className="text-gray-600 text-sm tracking-[0.5em] uppercase">Skyward Elegance Since 1967</p>
      </footer>

    </div>
  );
};

export default TeaManufacturing; 