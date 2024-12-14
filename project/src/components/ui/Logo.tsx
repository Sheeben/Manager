import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-10 h-10">
        {/* Diamond shape with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 transform rotate-45"></div>
        {/* Inner square */}
        <div className="absolute inset-2 bg-white"></div>
        {/* Inner diamond */}
        <div className="absolute inset-3 bg-gradient-to-br from-green-500 to-blue-600"></div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-900">Yoshitha</h1>
        <p className="text-sm text-gray-600">Housing & Infra</p>
      </div>
    </div>
  );
}