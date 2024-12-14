import React from 'react';

export function ContactInfo() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900">Contact</h3>
        <p className="text-gray-600">+91 70228 82599</p>
        <p className="text-gray-600">+91 7899111932</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900">Email</h3>
        <p className="text-gray-600">info@yoshithainfra.in</p>
      </div>
    </div>
  );
}