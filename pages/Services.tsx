import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-slate-900 text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">We provide a comprehensive range of medical transport services designed to meet every patient's specific needs.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                <h4 className="font-bold text-slate-800 mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                     <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                     </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Book This Service
                </Link>
              </div>
              <div className="flex-1 w-full h-64 md:h-auto min-h-[300px] bg-gray-200 rounded-2xl overflow-hidden relative">
                 <img 
                  src={`https://picsum.photos/600/400?random=${service.id}`} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};