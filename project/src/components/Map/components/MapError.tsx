import React from 'react';
import { AlertCircle } from 'lucide-react';

interface MapErrorProps {
  message: string;
}

export function MapError({ message }: MapErrorProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
      <AlertCircle className="w-5 h-5 text-red-500" />
      <p className="text-red-700">{message}</p>
    </div>
  );
}