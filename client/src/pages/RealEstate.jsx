import React from 'react';
import { MoveRight, ArrowUpRight, MapPin, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const IndianStoneCollection = () => {
const propertyList = [
  {
    name: "The Lutyens' Manor",
    location: "Prithviraj Road, Delhi",
    price: "₹70.0 Cr",
    size: "1850m²",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800"
  },
  {
    name: "Azure Bay Penthouse",
    location: "Marine Drive, Mumbai",
    price: "₹35.5 Cr",
    size: "520m²",
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800"
  },
  {
    name: "The Silicon Estate",
    location: "Lavelle Road, Bangalore",
    price: "₹38.2 Cr",
    size: "610m²",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800"
  },
  {
    name: "Royal Cenotaph View",
    location: "Banjara Hills, Hyderabad",
    price: "₹52.0 Cr",
    size: "1100m²",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800"
  },
  {
    name: "Nawabi Heritage",
    location: "Hazratganj, Lucknow",
    price: "₹18.4 Cr",
    size: "880m²",
    img: "https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?q=80&w=800"
  },
  {
    name: "The Imperial Duplex",
    location: "Golf Course Road, Gurgaon",
    price: "₹41.5 Cr",
    size: "720m²",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
  },
  {
    name: "Tea Garden Sanctuary",
    location: "Munnar, Kerala",
    price: "₹12.9 Cr",
    size: "1500m²",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800"
  },
  {
    name: "Malabar Majesty",
    location: "Malabar Hill, Mumbai",
    price: "₹110.0 Cr",
    size: "580m²",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800"
  },
  {
    name: "The Victoria Loft",
    location: "Ballygunge, Kolkata",
    price: "₹26.7 Cr",
    size: "440m²",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800"
  },

  {
    name: "The Deccan Palace",
    location: "Sadashivnagar, Bangalore",
    price: "₹44.0 Cr",
    size: "780m²",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800"
  },
  {
    name: "Himalayan Zenith",
    location: "Rishikesh, Uttarakhand",
    price: "₹15.6 Cr",
    size: "1350m²",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800"
  },
  {
    name: "The Silk Pavilion",
    location: "Kanchipuram, TN",
    price: "₹9.4 Cr",
    size: "920m²",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800"
  },
  {
    name: "Rivera Grand",
    location: "Boat Club Road, Pune",
    price: "₹33.5 Cr",
    size: "540m²",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800"
  },
  {
    name: "Coastal Obsidian",
    location: "ECR, Chennai",
    price: "₹21.0 Cr",
    size: "810m²",
    img: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=800"
  },
  {
    name: "The White Desert Villa",
    location: "Kutch, Gujarat",
    price: "₹11.2 Cr",
    size: "1050m²",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800"
  },
  {
    name: "Vintage Corridors",
    location: "Civil Lines, Jaipur",
    price: "₹35.0 Cr",
    size: "1400m²",
    img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800"
  }
];
  return (
    <div className="bg-[#F2F2F2] min-h-screen font-sans text-[#1A1A1A] selection:bg-black selection:text-white">
     

      {/* --- HERO SECTION: INDIAN LUXURY FOCUS --- */}
      <section className="px-6 py-10">
        <div className="max-w-1400px mx-auto relative bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden min-h-[85vh] flex flex-col shadow-2xl">
          
          {/* Main Hero Image: Modern Indian Architecture */}
          <div className="relative h-[60%] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
              alt="Luxury Indian Estate"
            />
            <div className="absolute top-1/2 right-12 -translate-y-1/2 text-[15vw] font-black text-white opacity-10 pointer-events-none">
              IND
            </div>
            <div className="absolute left-6 bottom-12 -rotate-90 origin-left text-[9px] font-black uppercase tracking-[0.6em] text-white/40">
                Domestic Curation 2026
            </div>
          </div>

          {/* Hero Text Content */}
          <div className="flex-1 p-12 flex flex-col md:flex-row justify-between items-end text-white">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] tracking-tighter uppercase">
                Vedic <br /> <span className="italic lowercase tracking-normal text-indigo-400">Luxury.</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-12 items-end mb-4">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest text-right">States</p>
                <p className="text-2xl font-light tracking-tight">12 Regions</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest text-right">Portfolio</p>
                <p className="text-2xl font-light tracking-tight">₹4,500 Cr+</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <MousePointer2 size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDIAN PROPERTY GRID --- */}
      <section className="max-w-1400px mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em]">Featured Indian Masterpieces</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propertyList.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-3xl group border border-transparent hover:border-black/5 hover:shadow-xl transition-all"
            >
              <div className="aspect-4/3 overflow-hidden rounded-2xl mb-6 relative bg-gray-100">
                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                <div className="absolute top-4 left-4 -rotate-90 origin-left text-[8px] font-black uppercase tracking-widest text-white/50">
                    Heritage Ref: IND-0{i+1}
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-serif italic tracking-tighter">{item.name}</h3>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1 flex items-center gap-1">
                    <MapPin size={10} className="text-indigo-500" /> {item.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold tracking-tighter text-indigo-600">{item.price}</p>
                  <p className="text-[10px] text-gray-400 font-bold">{item.size}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
<footer className="py-20 border-t border-white/5 text-center bg-black">
        <h2 className="text-4xl font-serif italic mb-4 text-white">Katara Real Estate</h2>
        <p className="text-gray-600 text-sm tracking-[0.5em] uppercase">Skyward Elegance Since 1967</p>
      </footer>
    
    </div>
  );
};

export default IndianStoneCollection;
