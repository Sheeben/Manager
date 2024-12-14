import React from 'react';

export function ProfileImage() {
  return (
    <div className="relative">
      <img 
        src="manager.jpg" 
        alt="Manoj Rathod - General Manager"
        className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover"
      />
      <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
        <p className="font-semibold">15+ Years Experience</p>
        <p className="text-sm">Real Estate Expert</p>
      </div>
    </div>
  );
}