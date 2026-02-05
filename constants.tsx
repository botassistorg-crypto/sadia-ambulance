import React from 'react';
import { 
  Clock, Users, HeartPulse, Zap, Phone, MapPin, Ambulance, 
  Stethoscope, Thermometer, Truck, Activity, UserCheck 
} from 'lucide-react';
import { Service, ProcessStep, Testimonial, CoverageArea } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Oxygen Support",
    description: "Advanced oxygen delivery systems for patients requiring respiratory support during transport.",
    icon:  HeartPulse,
    features: ["Portable oxygen concentrators", "Ventilator support available", "Trained respiratory technicians"],
    image: "https://ibb.co.com/7JkmYtBJ"
  },
  {
    id: 2,
    title: "ICU Support",
    description: "Critical care ambulance with ICU-level equipment for serious medical emergencies.",
    icon: Stethoscope,
    features: ["Cardiac monitors", "Defibrillator equipment", "IV fluid administration"],
    image: "https://ibb.co.com/1GzFnJ8R"
  },
  {
    id: 3,
    title: "Freezing Ambulance",
    description: "Specialized freezing ambulance service for preserving deceased individuals during long-distance transport.",
    icon: Thermometer,
    features: ["Temperature control -5°C to -20°C", "Hygienic storage", "Long-distance capability"],
    image: "https://ibb.co.com/RTJbktzz"
  },
  {
    id: 4,
    title: "Patient Transfer",
    description: "Non-emergency patient transport between hospitals and medical facilities.",
    icon: Ambulance,
    features: ["Comfortable stretcher beds", "Wheelchair accessibility", "Inter-hospital transfers"],
    image: "https://ibb.co.com/0ytYdBJb"
  },
  {
    id: 5,
    title: "Neonatal Transport",
    description: "Specialized transport for newborns requiring specialized temperature control and care.",
    icon: UserCheck,
    features: ["Neonatal incubators", "Temperature control systems", "Pediatric-trained staff"],
    image: "https://ibb.co.com/5xzSwXPh"
  },
  {
    id: 6,
    title: "Event Medical Cover",
    description: "On-site ambulance service for events, construction sites, and large gatherings.",
    icon: Users,
    features: ["Event standby service", "First aid stations", "Emergency response team"],
    image: "https://ibb.co.com/7JkmYtBJ"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Emergency Call Received",
    description: "24/7 dispatcher takes your call and gathers essential patient information.",
    icon: Phone
  },
  {
    id: 2,
    title: "Immediate Dispatch",
    description: "Nearest available ambulance with trained crew dispatched to your location.",
    icon: Ambulance
  },
  {
    id: 3,
    title: "Safe Transport",
    description: "Professional medical care during transport to destination hospital.",
    icon: HeartPulse
  },
  {
    id: 4,
    title: "Hospital Handover",
    description: "Seamless patient transfer to hospital medical team with complete documentation.",
    icon: MapPin
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mohammad Rahman",
    quote: "Quick response time when my father had chest pain. The medical team was professional and caring. Reached hospital within 15 minutes. Highly recommend!",
    rating: 5,
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Fatema Begum",
    quote: "Excellent service during my pregnancy emergency. Clean ambulance, trained staff, and smooth ride to the hospital. Thank you for your care!",
    rating: 5,
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Dr. Karim Ahmed",
    role: "Physician",
    quote: "As a physician, I appreciate their professional approach. Well-equipped ambulances and trained technicians. Reliable service for patient transfers.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const COVERAGE_AREAS: CoverageArea[] = [
  { name: "Agrabad", zip: "4100", type: "Commercial Area" },
  { name: "GEC Circle", zip: "4203", type: "Main Junction" },
  { name: "Nasirabad", zip: "4220", type: "Residential" },
  { name: "Panchlaish", zip: "4203", type: "Medical District" },
  { name: "Kotowali", "zip": "4000", "type": "Old Town" },
  { name: "Halishahar", "zip": "4216", "type": "Port Area" },
  { name: "Khulshi", "zip": "4225", "type": "Hills Area" },
  { name: "CDA", "zip": "4209", "type": "Planned Area" },
  { name: "Anowara", "zip": "4376", "type": "Upazila Area" },
  { name: "Battali", "zip": "4378", "type": "Coastal Area" },
  { name: "Paroikora", "zip": "4377", "type": "Rural Area" },
  { name: "Boalkhali", "zip": "4366", "type": "Upazila Center" },
  { name: "Charandwip", "zip": "4369", "type": "Island Area" },
  { name: "Iqbal Park", "zip": "4365", "type": "Residential" },
  { name: "Kadurkhal", "zip": "4368", "type": "Suburban" },
  { name: "Kanungopara", "zip": "4363", "type": "Local Area" },
  { name: "Sakpura", "zip": "4367", "type": "Residential" },
  { name: "Saroatoli", "zip": "4364", "type": "Township" },
  { name: "Al-Amin Baria Madra", "zip": "4221", "type": "Religious Area" },
  { name: "Amin Jute Mills", "zip": "4211", "type": "Industrial" },
  { name: "Anandabazar", "zip": "4215", "type": "Market Area" },
  { name: "Bayezid Bostami", "zip": "4210", "type": "Historical Site" },
  { name: "Chandgaon", "zip": "4212", "type": "Residential" },
  { name: "Chawkbazar", "zip": "4203", "type": "Market District" },
  { name: "Cantonment", "zip": "4220", "type": "Military Area" },
  { name: "Customs Academy", "zip": "4219", "type": "Training Center" },
  { name: "Polytechnic", "zip": "4209", "type": "Educational" },
  { name: "Sailors Colony", "zip": "4218", "type": "Naval Area" },
  { name: "Airport", "zip": "4205", "type": "Aviation Hub" },
  { name: "Bandar", "zip": "4100", "type": "Port Area" },
  { "name": "GPO", "zip": "4000", "type": "Central Post" },
  { "name": "Export Processing", "zip": "4223", "type": "EPZ Area" },
  { "name": "Firozshah", "zip": "4207", "type": "Colony Area" },
  { "name": "Halishshar", "zip": "4225", "type": "Port Extension" },
  { "name": "Jalalabad", "zip": "4214", "type": "Residential" },
  { "name": "Marine Academy", "zip": "4206", "type": "Naval Training" },
  { "name": "Middle Patenga", "zip": "4222", "type": "Beach Area" },
  { "name": "Mohard", "zip": "4208", "type": "Local Area" },
  { "name": "North Halishahar", "zip": "4226", "type": "Extended Port" },
  { "name": "North Katuli", "zip": "4217", "type": "Northern Area" },
  { "name": "Pahartoli", "zip": "4202", "type": "Hills Area" },
  { "name": "Patenga", "zip": "4204", "type": "Beach Resort" },
  { "name": "Rampura TSO", "zip": "4224", "type": "Telecom Area" }
];