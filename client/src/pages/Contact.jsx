import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, ArrowRight, ShieldCheck, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const CONTACT_NUMBER = "+91 73740 04111";
  const WHATSAPP_NUMBER = "917374004111"; // Formatted for URL

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault(); // Form reload rokne ke liye

    // Validation: Check if fields are filled
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }

    // Message draft karna details ke saath
    const text = `*New Inquiry via Website*\n\n` +
                 `*Name:* ${formData.name}\n` +
                 `*Email:* ${formData.email || 'Not provided'}\n` +
                 `*Subject:* ${formData.subject}\n` +
                 `*Message:* ${formData.message}`;

    const encodedMsg = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="bg-[#05070a] min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-[0.9]">
            Get In <span className="text-blue-600 italic font-serif">Touch.</span>
          </h1>
          <p className="text-slate-500 mt-6 max-w-xl font-medium">
            Contact the Katara Group HQ for business inquiries, logistics partnerships, or career opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-10">
            <div 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
              className="p-8 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-500"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-6 opacity-80">Direct Lines & WhatsApp</h3>
              <div className="space-y-4 relative z-10">
                <p className="text-2xl font-bold flex items-center gap-3"><Phone size={20}/> {CONTACT_NUMBER}</p>
                <p className="text-lg font-medium opacity-90 break-all flex items-center gap-3"><Mail size={18}/> kyholidays2016@gmail.com</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-black/20 w-fit px-4 py-2 rounded-full">
                <MessageCircle size={14} /> Chat on WhatsApp
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            <div className="space-y-6 px-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-blue-500 shrink-0"><MapPin size={20}/></div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-slate-300 font-bold leading-snug text-sm">Outside Chandpol Gate, Circular Road, Bharatpur 321001</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-blue-500 shrink-0"><Globe size={20}/></div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Corporate Web</p>
                  <p className="text-slate-300 font-bold text-sm">www.kataragroup.co.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 bg-slate-900/20 border border-slate-800 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Your Name *</label>
                  <input 
                    name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-black/40 border border-slate-800 rounded-2xl p-5 text-white outline-none focus:border-blue-600 transition-all font-bold placeholder:text-slate-700" 
                    placeholder="E.g. Vivek Katara" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input 
                    name="email" type="email" value={formData.email} onChange={handleChange}
                    className="w-full bg-black/40 border border-slate-800 rounded-2xl p-5 text-white outline-none focus:border-blue-600 transition-all font-bold placeholder:text-slate-700" 
                    placeholder="name@company.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Inquiry Type</label>
                <select 
                  name="subject" value={formData.subject} onChange={handleChange}
                  className="w-full bg-black/40 border border-slate-800 rounded-2xl p-5 text-white outline-none focus:border-blue-600 transition-all font-bold appearance-none cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Airlines">Airlines</option>
                  <option value="Travel">Travel</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Tea">Tea</option>
                  <option value="Careers">Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Message *</label>
                <textarea 
                  name="message" required value={formData.message} onChange={handleChange} rows="5"
                  className="w-full bg-black/40 border border-slate-800 rounded-3xl p-6 text-white outline-none focus:border-blue-600 transition-all font-bold resize-none placeholder:text-slate-700" 
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              {/* Combined Submit Button as WhatsApp Chat */}
              <button 
                type="submit"
                className="w-full py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] bg-blue-600 text-white hover:bg-white hover:text-blue-600 shadow-2xl shadow-blue-900/20 transition-all flex items-center justify-center gap-4"
              >
                Send Message via WhatsApp <MessageCircle size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
