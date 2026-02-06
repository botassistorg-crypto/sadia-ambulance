import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, MessageCircle, Clock, Ambulance, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex flex-col gap-1 mb-6">
               <h3 className="text-3xl font-extrabold text-white leading-none">Sadia</h3>
               <span className="text-sm font-bold text-white tracking-widest uppercase">Ambulance Service</span>
            </div>
            <p className="mb-8 leading-relaxed text-sm">
              Professional 24/7 emergency medical transport service in Chattogram. Licensed Emergency Medical Transport Service provider trusted by thousands of families for reliable, compassionate care.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Sadia.Ambulance.service.Chittagong.Agrabad.1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle size={24} />
              </a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white transition-colors text-sm">Emergency Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors text-sm">Service Areas</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors text-sm">Patient Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-white transition-colors text-sm">ICU Transport</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors text-sm">Oxygen Support</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors text-sm">Patient Transfer</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors text-sm">Event Medical Cover</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-white mt-1 shrink-0" />
                <span className="text-sm">+880 188 495 9116</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-1 shrink-0" />
                <span className="text-sm">C&F Tower, Ma O Shishu Hospital, Zambuti Field, Chattogram 4100</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-white mt-1 shrink-0" />
                <span className="text-sm">24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sadia Ambulance Service. All rights reserved. | Licensed Emergency Medical Transport Service</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <Ambulance size={24} className="text-red-500" />
             <span className="font-bold text-red-400 text-lg uppercase tracking-wider">Sadia Ambulance</span>
          </div>
        </div>
        <div className="text-center mt-8 text-[10px] text-slate-600">
           All rights reserved
        </div>
      </div>
    </footer>
  );
};
