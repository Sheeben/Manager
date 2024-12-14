import React from 'react';

export function ProfileInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">About Manoj Rathod</h2>
      <p className="text-gray-600 leading-relaxed">
        As the General Manager at Yoshitha Housing & Infra, I bring years of experience in real estate development 
        and plot sales. My role is to ensure that we deliver premium real estate opportunities to our valued clients, 
        focusing on projects that combine luxury, location, and investment potential.
      </p>
      <p className="text-gray-600 leading-relaxed">
        With a deep understanding of market trends and a commitment to customer satisfaction, I lead our team in 
        creating and managing projects that stand out in the competitive real estate landscape.
      </p>
      <ContactInfo />
    </div>
  );
}