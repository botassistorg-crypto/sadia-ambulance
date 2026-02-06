import React from 'react';
import { Shield, Clock, Heart, Ambulance } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sadia Ambulance</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Dedicated to saving lives with professional, compassionate, and timely medical transport services in Chattogram.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <img 
              src="https://i.ibb.co.com/WvtBYDKJ/file-00000000e66471faa67d108c67515528.png" 
              alt="Sadia Ambulance Team" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
             <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold mb-4">SINCE 2015</div>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Trusted Partner in Medical Emergencies</h2>
             <p className="text-slate-600 mb-4 leading-relaxed">
               Sadia Ambulance Service was established with a singular mission: to bridge the gap between emergency medical needs and professional transport in Chattogram. We understand that every second counts when a life is at stake.
             </p>
             <p className="text-slate-600 mb-6 leading-relaxed">
               Starting with just two ambulances, we have grown into a premier fleet equipped with state-of-the-art ICU facilities, oxygen support, and freezing ambulance units. Our team consists of certified drivers and medical technicians trained to handle critical situations with calmness and expertise.
             </p>
             <div className="grid grid-cols-2 gap-4">
               <div className="border-l-4 border-red-600 pl-4">
                 <div className="text-3xl font-bold text-slate-900">50+</div>
                 <div className="text-sm text-slate-500">Medical Staff</div>
               </div>
               <div className="border-l-4 border-red-600 pl-4">
                 <div className="text-3xl font-bold text-slate-900">20+</div>
                 <div className="text-sm text-slate-500">Modern Ambulances</div>
               </div>
             </div>
          </div>
        </div>

        {/* Fleet Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
             <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Modern Fleet</h3>
             <p className="text-slate-600 max-w-2xl mx-auto">Equipped with the latest medical technology to ensure patient safety and comfort.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
               <img src="https://i.ibb.co.com/whc5LrMp/1770273245503-019c2c81-7ce0-7b65-baa3-b09052fc2e35.png" alt="ICU Ambulance Interior" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                 <span className="text-white font-bold text-lg">ICU Support</span>
               </div>
            </div>
             <div className="relative group overflow-hidden rounded-xl shadow-lg">
               <img src="https://i.ibb.co.com/4R0tnCPP/file-0000000002a471fab590776ef6f07a7d.png" alt="Freezing Ambulance" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                 <span className="text-white font-bold text-lg">Freezing Unit</span>
               </div>
            </div>
             <div className="relative group overflow-hidden rounded-xl shadow-lg">
               <img src="https://i.ibb.co.com/P03FM9v/1770295676710-019c2dd7-3070-7ab8-bf60-c0e9a8d7310d.png" alt="Standard Ambulance" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                 <span className="text-white font-bold text-lg">Standard Ambulance</span>
               </div>
            </div>
          </div>
        </div>

        {/* Mission/Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600 text-center">
             <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
               <Shield size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">Our Mission</h3>
             <p className="text-slate-600 text-sm">To provide the fastest, safest, and most reliable medical transport to the people of Chattogram, ensuring no life is lost due to transport delays.</p>
          </div>
           <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-400 text-center">
             <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-600">
               <Heart size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">Core Values</h3>
             <p className="text-slate-600 text-sm">Compassion, Integrity, Speed, and Professionalism are at the heart of everything we do. We treat every patient like our own family.</p>
          </div>
           <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 text-center">
             <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
               <Ambulance size={32} />
             </div>
             <h3 className="text-xl font-bold mb-3">Our Vision</h3>
             <p className="text-slate-600 text-sm">To become the national benchmark for emergency medical services, integrating technology and care for seamless patient outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
