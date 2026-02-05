import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MapPin, ChevronDown, ChevronUp, Play, Star, Check, 
  Clock, Users, HeartPulse, Zap 
} from 'lucide-react';
import { SERVICES, PROCESS_STEPS, TESTIMONIALS, COVERAGE_AREAS } from '../constants';

const FeatureCard: React.FC<{icon: React.ElementType, title: string, desc: string}> = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4 text-red-600">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const AccordionItem: React.FC<{question: string, answer: string, isOpen: boolean, onClick: () => void}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-slate-800">{question}</span>
        {isOpen ? <ChevronUp className="text-red-500" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-slate-600 border-t border-gray-100 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-red-700 pt-16 pb-32 md:pb-48 overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-600 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-800 opacity-50 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Hero Text */}
            <div className="md:w-1/2">
              <div className="inline-block bg-yellow-400 text-red-900 font-bold px-4 py-1 rounded-full text-sm mb-6 shadow-md">
                ⚠️ 24/7 EMERGENCY SERVICE
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Sadia <br/>
                <span className="text-yellow-400">Ambulance</span> <br/>
                Service
              </h1>
              <p className="text-red-100 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                Professional Emergency Medical Transport in Chattogram. Licensed, equipped, and ready to save lives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="tel:+8801757949128" className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-red-900 text-lg font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
                  <Phone className="fill-current" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs uppercase opacity-75">Call Now</span>
                    <span>+880 175 794 9128</span>
                  </div>
                </a>
                <Link to="/contact" className="flex items-center justify-center gap-2 bg-red-800 hover:bg-red-900 text-white text-lg font-semibold px-8 py-4 rounded-full transition-colors border border-red-600">
                  <MapPin />
                  GET DIRECTIONS
                </Link>
              </div>
            </div>

            {/* Hero Stats Cards Floating */}
            <div className="md:w-5/12 relative">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl relative">
                  <div className="absolute -top-12 right-4 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <HeartPulse className="text-red-600 w-12 h-12" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-red-800/80 p-6 rounded-xl flex items-center gap-4 text-white">
                      <div className="bg-yellow-400 p-3 rounded-full text-red-900">
                        <Star className="fill-current" size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">10,000+</div>
                        <div className="text-sm opacity-90">Successful Deliveries</div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl flex items-center gap-4 shadow-lg">
                      <div className="relative">
                        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white animate-pulse"></div>
                        <div className="bg-gray-100 p-3 rounded-full text-gray-700">
                          <Clock size={24} />
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">Available 24/7</div>
                        <div className="text-sm text-gray-600">Emergency Response Team Ready</div>
                        <div className="text-xs text-green-600 font-bold uppercase mt-1 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online Now
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 -mt-20 relative z-20 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 pt-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Choose Sadia Ambulance?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Trusted by thousands of families across Chattogram for reliable, professional emergency medical transport.</p>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Emergency Response Process</h2>
            <p className="text-slate-600">Professional, efficient, and caring service in every step</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-gray-100 z-0"></div>

            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-red-600 border-8 border-white shadow-xl flex items-center justify-center text-white mb-6 transform transition-transform hover:scale-110">
                   <step.icon size={32} />
                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-red-900 font-bold text-sm border-2 border-white">
                     {step.id}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Ambulance Services</h2>
            <p className="text-slate-600">Comprehensive emergency medical transport solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-red-100 p-4 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <service.icon size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <Check size={16} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Service Coverage Areas in Chittagong</h2>
            <p className="text-slate-600">Comprehensive ambulance coverage across all areas of Chittagong with rapid response times.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {COVERAGE_AREAS.map((area, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all text-center group cursor-default">
                <MapPin className="mx-auto text-gray-400 group-hover:text-red-500 mb-2 transition-colors" size={24} />
                <h4 className="font-bold text-slate-800">{area.name} <span className="text-xs text-gray-500">({area.zip})</span></h4>
                <p className="text-xs text-slate-500 mt-1">{area.type}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-slate-500 text-sm">
            Don't see your area? We cover the entire Chittagong metropolitan area!
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">What Our Patients Say</h2>
            <p className="text-slate-600">Real experiences from families we've served</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    {t.role && <p className="text-xs text-slate-500 uppercase font-semibold">{t.role}</p>}
                    <div className="flex text-yellow-400 text-xs mt-1">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Get answers to common questions about our ambulance services</p>
          </div>

          <div className="space-y-4">
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
          </div>
        </div>
      </section>

       {/* Video Section */}
       <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">See Our Service in Action</h2>
          <div className="max-w-4xl mx-auto bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative aspect-video flex items-center justify-center group cursor-pointer">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
             <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform z-10">
                <Play className="text-white ml-2" size={32} fill="currentColor" />
             </div>
             <div className="absolute bottom-8 text-white font-bold text-xl shadow-black drop-shadow-md">
                Sadia Ambulance Service Video
             </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-red-700 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Need Emergency Medical Transport?</h2>
          <p className="text-xl text-red-100 mb-8">Don't wait - call now for immediate ambulance service</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+8801757949128" className="bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
              <Phone size={24} />
              +880 175 794 9128
            </a>
          </div>
          <div className="mt-4 text-sm opacity-75">
            24/7 Emergency Response • Average response time: 8-12 minutes
          </div>
        </div>
      </section>
    </div>
  );
};