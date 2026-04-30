import { Mail, MapPin, Phone, Globe, MessageSquare, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-2xl tracking-tighter italic">
              Katara<span className="text-blue-500">Group</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Leading the digital transformation for the Katara Group of Industries through Agentic AI and advanced software engineering.
            </p>
            <div className="flex space-x-4 pt-2">
              <Globe className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
              <Share2 className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <MessageSquare className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Group Companies - Your List Integrated Here */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Our Entities</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer text-indigo-400 font-bold"><Link to="/about">About Katara Group</Link></li>
              <li className="hover:text-white transition-colors cursor-default opacity-60 italic">K Y Holidays Private Limited</li>
              <li className="hover:text-white transition-colors cursor-default opacity-60 italic">Katara Shipping Corporation</li>
              <li className="hover:text-white transition-colors cursor-default opacity-60 italic">Katara Tea Corporation</li>
              <li className="hover:text-white transition-colors cursor-default opacity-60 italic">Katara Airlines</li>
              <li className="hover:text-white transition-colors cursor-default opacity-60 italic">Katara Real Estate</li>
            </ul>
          </div>

          {/* Services / Focus */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Core Tech</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Agentic AI Solutions</li>
              <li className="hover:text-white cursor-pointer transition-colors">MERN Stack Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cloud Infrastructure</li>
              <li className="hover:text-white cursor-pointer transition-colors">Workflow Automation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Outside Chandpol Gate, Circular Road<br />Bharatpur (Raj.), 321001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>kyholidays2016@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+91 73740 04111</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>www.kataragroup.co.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-[0.2em]">
          <p>© 2026 Katara Group | Developed by TechTravel Team</p>
          <div className="flex space-x-8 mt-4 md:mt-0 opacity-60">
            <span className="hover:opacity-100 cursor-pointer">Privacy Policy</span>
            <span className="hover:opacity-100 cursor-pointer">Terms of Service</span>
            <span className="hover:opacity-100 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}