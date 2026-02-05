import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Emergency Request Sent! We will call you immediately.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="pb-20">
       <div className="bg-slate-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-400">We are available 24/7. Reach out for immediate assistance.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
            <p className="text-slate-600">For emergency ambulance service, please call our hotline immediately. For general inquiries, you can use the form or visit our office.</p>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="bg-red-600 p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Emergency Hotline</h3>
                  <p className="text-red-600 text-xl font-bold">+880 175 794 9128</p>
                  <p className="text-sm text-slate-500">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-slate-800 p-3 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                  <p className="text-slate-600">C&F Tower, Ma O Shishu Hospital<br/>Zambuti Field, Chattogram 4100</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-slate-800 p-3 rounded-full text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Operating Hours</h3>
                  <p className="text-slate-600">24 Hours / 7 Days a Week</p>
                  <p className="text-sm text-green-600 font-semibold">Always ready for emergencies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Ambulance Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="017xxxxxxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Pick-up Location</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Street address or Area"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Information (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Patient condition, destination, etc."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Request Ambulance Now
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-100 rounded-2xl overflow-hidden h-96 relative flex items-center justify-center border border-gray-300">
           <div className="text-center p-8">
             <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
               <MapPin className="text-red-600 w-12 h-12" />
             </div>
             <h3 className="text-xl font-bold text-slate-700">Interactive Map</h3>
             <p className="text-slate-500 mb-4">C&F Tower, Ma O Shishu Hospital, Zambuti Field, Chattogram 4100</p>
             <a 
               href="https://maps.google.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-white text-red-600 px-6 py-2 rounded-full border border-red-600 font-semibold hover:bg-red-50 transition-colors"
             >
               Open in Google Maps
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};