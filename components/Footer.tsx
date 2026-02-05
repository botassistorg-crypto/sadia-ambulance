import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, MessageCircle, Clock, Ambulance } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="bg-red-600 p-1.5 rounded">
                <Ambulance className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Sadia Ambulance</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Professional 24/7 emergency medical transport service in Chattogram. Trusted by thousands of families for reliable, compassionate care.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Sadia.Ambulance.service.Chittagong.Agrabad.1" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded hover:bg-red-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded hover:bg-green-600 transition-colors text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-red-500 transition-colors">Emergency Services</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">Service Areas</Link></li>
              <li><Link to="/#testimonials" className="hover:text-red-500 transition-colors">Patient Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-red-500 transition-colors">ICU Transport</Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition-colors">Oxygen Support</Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition-colors">Freezing Ambulance</Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition-colors">Patient Transfer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-red-500 shrink-0 mt-1" size={18} />
                <span className="font-semibold text-white">01884959116</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-red-500 shrink-0 mt-1" size={18} />
                <span>C&F Tower, Ma O Shishu Hospital, Zamburi Field, Chattogram 4100</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-red-500 shrink-0 mt-1" size={18} />
                <span>24/7 Emergency Service</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-red-500 shrink-0 mt-1" size={18} />
                <span>info@sadiaambulance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Sadia Ambulance Service. All rights reserved. | Licensed Emergency Medical Transport Service</p>
        </div>
      </div>
    </footer>
  );
};