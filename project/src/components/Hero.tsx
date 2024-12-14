import React from 'react';
import { ArrowRight } from 'lucide-react';
import { fadeInAnimation, floatAnimation } from '../utils/animations';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Welcome to <span className="text-logoBlue">Yoshitha Housing & Infra</span>
            </h1>
            <div className="flex items-center space-x-4">
              <img 
                src="man.jpg" 
                alt="Manoj Rathod"
                className="w-16 h-16 rounded-full border-2 border-logoBlue"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Manoj Rathod</h2>
                <p className="text-gray-600">General Manager</p>
              </div>
            </div>
            <p className="text-xl text-gray-600">
              Discover Premium Real Estate Opportunities
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-logoBlue text-white rounded-lg hover:bg-logoGreen transition-colors"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative animate-float">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              alt="Modern building"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}