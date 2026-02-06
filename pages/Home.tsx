import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MapPin, ChevronDown, ChevronUp, Play, Star, Check, 
  Clock, Users, HeartPulse, Zap, Trophy, Circle, Shield 
} from 'lucide-react';
import { SERVICES, PROCESS_STEPS, TESTIMONIALS, COVERAGE_AREAS } from '../constants';

const FeatureCard: React.FC<{icon: React.ElementType, title: string, desc: string}> = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-red-50 hover:shadow-xl transition-all duration-300 group">
    <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
      <Icon size={36} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const AccordionItem: React.FC<{question: string, answer: string, isOpen: boolean, onClick: () => void}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden mb-4">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={onClick}
      >
        <span className="font-bold text-slate-800">{question}</span>
        {isOpen ? <ChevronUp className="text-red-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-6 py-6 text-slate-600 border-t border-gray-200 bg-white leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-[#c0392b] pt-12 pb-20 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Hero Text & Stats */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-yellow-400 text-red-900 font-bold px-4 py-1 rounded-full text-xs md:text-sm mb-6 shadow-md uppercase tracking-wider">
                ⚠️ 24/7 Emergency Service
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-none">
                Sadia <br/>
                <span className="text-yellow-400">Ambulance</span> <br/>
                Service
              </h1>
              <p className="text-red-100 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Professional Emergency Medical Transport in Chattogram. <br className="hidden md:block"/>
                Trusted by thousands for speed, safety, and care.
              </p>

              {/* Stats Boxes */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                 <div className="bg-[#a93226] border border-[#d98880] p-4 rounded-xl flex items-center gap-4 text-left min-w-[200px] shadow-lg">
                    <div className="bg-yellow-400 p-3 rounded-full text-red-900">
                      <Trophy size={24} fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">10,000+</div>
                      <div className="text-xs text-red-100">Successful Emergency Deliveries</div>
                    </div>
                 </div>
                 <div className="bg-[#a93226] border border-[#d98880] p-4 rounded-xl flex items-center gap-4 text-left min-w-[200px] shadow-lg">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 right-0 border-2 border-[#a93226]"></div>
                      <div className="bg-white p-3 rounded-full text-red-600">
                        <Phone size={24} fill="currentColor" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">Available 24/7</div>
                      <div className="text-xs text-red-100">Emergency Response Team Ready</div>
                      <div className="text-[10px] text-green-300 font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        Online Now
                      </div>
                    </div>
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <a href="tel:+8801884959116" className="relative group">
                   <div className="absolute inset-0 bg-yellow-500 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                   <div className="relative bg-yellow-400 hover:bg-yellow-300 text-red-900 w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-[#c0392b] transition-transform hover:scale-105">
                      <Phone size={32} fill="currentColor" className="mb-2" />
                      <span className="font-bold text-sm uppercase">CALL NOW:</span>
                      <span className="font-black text-xl leading-none">+880 188<br/>495 9116</span>
                   </div>
                </a>
                
                <Link to="/contact" className="relative group">
                   <div className="bg-[#922b21] hover:bg-[#7b241c] text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-[#c0392b] transition-transform hover:scale-105">
                      <MapPin size={28} className="mb-1" />
                      <span className="font-bold text-sm text-center leading-tight">GET<br/>DIRECTIONS</span>
                   </div>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 relative mt-12 lg:mt-0">
               <div className="relative z-10 transform lg:translate-x-12">
                 <img 
                   src="https://i.ibb.co.com/WvtBYDKJ/file-00000000e66471faa67d108c67515528.png" 
                   alt="Sadia Ambulance" 
                   className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                 />
               </div>
               
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Why Choose Sadia Ambulance?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Trusted by thousands of families across Chattogram for reliable, professional emergency medical transport</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Clock} 
              title="24/7 Availability" 
              desc="Round-the-clock emergency response team ready to serve you anytime." 
            />
            <FeatureCard 
              icon={Users} 
              title="Trained Professionals" 
              desc="Certified medical technicians and experienced drivers for safe transport." 
            />
            <FeatureCard 
              icon={HeartPulse} 
              title="Advanced Equipment" 
              desc="Modern ambulances equipped with life-saving medical equipment." 
            />
            <FeatureCard 
              icon={Zap} 
              title="Rapid Response" 
              desc="Average response time of 8-12 minutes in Chattogram city area." 
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Emergency Response Process</h2>
            <p className="text-slate-500 text-lg">Professional, efficient, and caring service in every step</p>
          </div>

          <div className="relative">
            {/* Dashed Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] border-t-2 border-dashed border-red-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {PROCESS_STEPS.map((step) => (
                <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-[#c0392b] border-4 border-white shadow-xl flex items-center justify-center text-white mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 relative">
                     <span className="text-3xl font-extrabold">{step.id}</span>
                  </div>
                   {/* Icon Badge */}
                   <div className="text-[#c0392b] mb-4">
                      <step.icon size={40} />
                   </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm px-4 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Clean Cards without Background Images) */}
      <section className="py-24 bg-[#fff5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Ambulance Services</h2>
            <p className="text-slate-500 text-lg">Comprehensive emergency medical transport solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-red-50 group">
                <div className="mb-6">
                  <service.icon size={48} className="text-[#c0392b]" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                   {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Gallery (Moved specific images here) */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Inside Our Modern Fleet</h2>
              <p className="text-slate-500 text-lg">Equipped with advanced life-saving technology</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                  <img src="https://i.ibb.co.com/whc5LrMp/1770273245503-019c2c81-7ce0-7b65-baa3-b09052fc2e35.png" alt="ICU Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                     <p className="text-white font-bold text-xl">Advanced ICU Setup</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                  <img src="https://i.ibb.co.com/4R0tnCPP/file-0000000002a471fab590776ef6f07a7d.png" alt="Freezer Ambulance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                     <p className="text-white font-bold text-xl">Freezing Unit</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                  <img src="https://i.ibb.co.com/P03FM9v/1770295676710-019c2dd7-3070-7ab8-bf60-c0e9a8d7310d.png" alt="Sadia Ambulance Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                     <p className="text-white font-bold text-xl">Modern Exterior</p>
                  </div>
                </div>
            </div>
         </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Service Coverage Areas in Chittagong</h2>
            <p className="text-slate-500 text-lg">Comprehensive ambulance coverage across all areas of Chittagong with rapid response times.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {COVERAGE_AREAS.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-red-200 transition-all text-center group cursor-default flex flex-col items-center justify-center h-full">
                <div className="mb-3 text-slate-400 group-hover:text-red-600 transition-colors">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-1">{area.name}</h4>
                <div className="text-xs text-slate-500 font-medium">
                  {area.zip}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide">
                    {area.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">What Our Patients Say</h2>
            <p className="text-slate-500 text-lg">Real experiences from families we've served</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="absolute -top-6 left-8">
                   <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                </div>
                <div className="mt-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                    {t.role && <p className="text-xs text-red-500 font-bold uppercase tracking-wider">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-500">Get answers to common questions about our ambulance services</p>
          </div>

          <div className="space-y-2">
            <AccordionItem 
              question="How quickly can you respond to an emergency call?"
              answer="Our average response time is 8-12 minutes within Chattogram city limits. We have strategically positioned ambulances across the city to ensure rapid response to all areas."
              isOpen={openFaq === 0}
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            />
            <AccordionItem 
              question="What medical equipment do your ambulances carry?"
              answer="Our ambulances are equipped with oxygen supplies, cardiac monitors, defibrillators, stretchers, IV equipment, and basic life support medications. ICU ambulances have advanced ventilators and critical care equipment."
              isOpen={openFaq === 1}
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            />
             <AccordionItem 
              question="Do you provide inter-hospital transfer services?"
              answer="Yes, we offer scheduled and emergency inter-hospital transfers throughout Chattogram and surrounding districts. Our medical staff ensures continuous care during transport."
              isOpen={openFaq === 2}
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            />
             <AccordionItem 
              question="What are your service charges?"
              answer="Our rates are competitive and vary based on distance, type of service, and medical equipment required. We offer transparent pricing with no hidden charges. Contact us for detailed pricing information."
              isOpen={openFaq === 3}
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            />
            <AccordionItem 
              question="Can I book an ambulance in advance?"
              answer="Absolutely! We accept advance bookings for scheduled medical appointments, hospital discharges, and planned medical procedures. Call us to schedule your transport."
              isOpen={openFaq === 4}
              onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
            />
            <AccordionItem 
              question="Are your staff medically trained?"
              answer="Yes, all our medical technicians are certified and regularly trained in emergency medical procedures. Our drivers are also trained in safe emergency vehicle operation."
              isOpen={openFaq === 5}
              onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
            />
          </div>
        </div>
      </section>

       {/* Video Section */}
       <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-12">See Our Service in Action</h2>
          <div className="max-w-5xl mx-auto bg-gray-100 rounded-3xl overflow-hidden shadow-sm relative aspect-video flex items-center justify-center group cursor-pointer border border-gray-200">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors z-10"></div>
             {/* Re-added image for video thumbnail as per request */}
             <img src="https://i.ibb.co.com/P03FM9v/1770295676710-019c2dd7-3070-7ab8-bf60-c0e9a8d7310d.png" alt="Sadia Ambulance Video Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
             <div className="w-20 h-16 bg-[#c0392b] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform z-20 relative">
                <Play className="text-white ml-1" size={32} fill="currentColor" />
             </div>
             <div className="absolute bottom-10 text-white font-bold text-2xl z-20 tracking-wide drop-shadow-md">
                Sadia Ambulance Service Video
             </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#c0392b] py-16 md:py-20 text-center text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Need Emergency Medical Transport?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-light">Don't wait - call now for immediate ambulance service</p>
          
          <div className="flex flex-col items-center gap-2">
             <a href="tel:+8801884959116" className="bg-yellow-400 text-red-900 px-12 py-4 rounded-full font-bold text-2xl hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl mb-4">
              <Phone size={28} fill="currentColor" />
              +880 188 495 9116
            </a>
            <div className="text-white text-sm">
               <p className="font-bold">24/7 Emergency Response</p>
               <p className="opacity-80">Average response time: 8-12 minutes</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-2">
               <div className="bg-white/20 p-3 rounded-full">
                  <Shield size={24} />
               </div>
               <span className="font-bold">Licensed & Insured</span>
               <span className="text-xs text-red-200">Fully certified ambulance service</span>
            </div>
            <div className="flex flex-col items-center gap-2">
               <div className="bg-white/20 p-3 rounded-full">
                  <Trophy size={24} />
               </div>
               <span className="font-bold">10,000+ Served</span>
               <span className="text-xs text-red-200">Trusted by Chattogram families</span>
            </div>
             <div className="flex flex-col items-center gap-2">
               <div className="bg-white/20 p-3 rounded-full">
                  <Check size={24} />
               </div>
               <span className="font-bold">Compassionate Care</span>
               <span className="text-xs text-red-200">Professional medical team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
