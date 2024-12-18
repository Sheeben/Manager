import React from 'react';

export function MapLoading() {
  return (
    <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}