import React from 'react';
import { Building2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="white-logo.png" width={50} alt="logo" />
            <div>
              <h2 className="text-xl font-bold">Yoshitha</h2>
              <p className="text-sm text-gray-400">Housing & Infra</p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Yoshitha Housing & Infra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}