import React from 'react';
import { fadeInAnimation } from '../utils/animations';


export default function About() {
  return (
    <section id="about" className="py-20 bg-white mb-5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto group">
              <img 
                src="/manager.jpg"
                alt="Manoj Rathod - General Manager"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-700/50 to-transparent rounded-lg" />
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-logoGreen transition-all duration-300 group-hover:w-full"></div>

              <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold">
                Manoj Rathod
                <div className="text-sm font-normal">General Manager</div>
              </div>

            </div>
          </div>
          
          <div className="space-y-6">
           
            <div className="relative group cursor-pointer">
              <span className="text-3xl font-bold text-logoBlue">About Manoj Rathod</span>
              <div className="absolute bottom-0 top-10 left-0 w-full h-[2px] bg-logoGreen  scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              As the General Manager at Yoshitha Housing & Infra, I bring years of experience in real estate development 
              and plot sales. My role is to ensure that we deliver premium real estate opportunities to our valued clients, 
              focusing on projects that combine luxury, location, and investment potential.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a deep understanding of market trends and a commitment to customer satisfaction, I lead our team in 
              creating and managing projects that stand out in the competitive real estate landscape.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Contact</h3>
                <p className="text-gray-600">+91 70228 82599</p>
                <p className="text-gray-600">+91 7899111932</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">Manojarathod99@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

