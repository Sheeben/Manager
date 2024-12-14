import React from 'react';
import { MapPin, Check } from 'lucide-react';

const projects = [
  {
    title: 'NIMZ Landmark',
    location: 'Zaheerabad',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    features: ['Adjacent to NIMZ', '23 acres total area', '2.14 acres open park', '45% open spaces']
  },
  {
    title: 'Woxridge',
    location: 'Sadhashivpet',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
    features: ['DTCP & RERA Approved', 'Premium Villa Plots', 'Modern amenities', 'Secure gated community']
  },
  {
    title: 'WoxView Sannidhi',
    location: 'Kamkole Toll Plaza',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    features: ['Phase - I: 33 acres', 'DTCP & RERA Approved', 'Modern clubhouse', 'Sports facilities']
  },
  {
    title: 'Luminous Serenity',
    location: 'Sangareddy',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    features: ['100% Vaastu compliant', 'Grand Entrance Arch', 'Underground Drainage', "Children's Play Area"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 mb-5">
      <div className="container mx-auto px-4">
      
      <div className="flex justify-center mb-5">
        <div className="relative group cursor-pointer w-fit">
          <h2 className="text-3xl font-bold text-center text-logoBlue mb-4">
            Our Featured Projects
          </h2>
          <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-logoGreen  transition-all duration-300"></div>
        </div>
      </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/90 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" /> {project.location}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}