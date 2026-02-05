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
    features: ["Portable oxygen concentrators", "Ventilator support available", "Trained respiratory technicians"]
  },
  {
    id: 2,
    title: "ICU Support",
    description: "Critical care ambulance with ICU-level equipment for serious medical emergencies.",
    icon: Stethoscope,
    features: ["Cardiac monitors", "Defibrillator equipment", "IV fluid administration"]
  },
  {
    id: 3,
    title: "Neonatal Transport",
    description: "Specialized transport for newborns requiring specialized temperature control and care.",
    icon: UserCheck,
    features: ["Neonatal incubators", "Temperature control systems", "Pediatric-trained staff"]
  },
  {
    id: 4,
    title: "Patient Transfer",
    description: "Non-emergency patient transport between hospitals and medical facilities.",
    icon: Ambulance,
    features: ["Comfortable stretcher beds", "Wheelchair accessibility", "Inter-hospital transfers"]
  },
  {
    id: 5,
    title: "Dialysis Transport",
    description: "Regular transport service for dialysis patients to and from treatment centers.",
    icon: Activity,
    features: ["Scheduled appointments", "Comfortable transport", "Medical supervision available"]
  },
  {
    id: 6,
    title: "Event Medical Cover",
    description: "On-site ambulance service for events, construction sites, and large gatherings.",
    icon: Users,
    features: ["Event standby service", "First aid stations", "Emergency response team"]
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
  { name: "Kotowali", zip: "4000", type: "Old Town" },
  { name: "Halishahar", zip: "4216", type: "Port Area" },
  { name: "Khulshi", zip: "4225", type: "Hills Area" },
  { name: "CDA", zip: "4209", type: "Planned Area" },
  { name: "Anowara", zip: "4376", type: "Upazila Area" },
  { name: "Battali", zip: "4378", type: "Coastal Area" },
  { name: "Patiya", zip: "4377", type: "Rural Area" },
  { name: "Boalkhali", zip: "4366", type: "Upazila Center" },
];