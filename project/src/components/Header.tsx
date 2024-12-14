import React from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';



const NavLink: React.FC<{ href: string; children: React.ReactNode; mobile?: boolean }> = ({ href, children, mobile }) => {
  return (
    <a 
      href={href} 
      className={`text-gray-800 hover:text-logoBlue transition-colors relative group ${mobile ? 'py-2' : ''}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </a>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpeg" alt="logo" width={40} height={40} />
            <div>
              <h1 className="text-xl font-bold text-logoBlue">Yoshitha</h1>
              <p className="text-sm text-gray-600">Housing & Infra</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
          <nav className="flex flex-col p-4">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#projects" mobile>Projects</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

