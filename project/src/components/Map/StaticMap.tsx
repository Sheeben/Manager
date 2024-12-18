import React from 'react';
import { MapPin } from 'lucide-react';

export function StaticMap() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Location Map</h3>
      <div className="relative rounded-lg overflow-hidden shadow-md bg-blue-50 min-h-[450px] group">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-400" />
          <div className="grid grid-cols-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-blue-200/20" />
            ))}
          </div>
        </div>

        {/* Location marker */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="relative inline-block">
              <MapPin className="h-16 w-16 text-blue-600 animate-bounce" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full blur-sm opacity-50" />
            </div>
            <div className="mt-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-sm mx-auto">
              <h4 className="font-semibold text-gray-900 mb-2">Yoshitha Housing & Infra</h4>
              <p className="text-sm text-gray-600">
                Mathrusree Nagar, Miyapur<br />
                Hyderabad, Telangana 500049
              </p>
              <a 
                href="https://maps.google.com/?q=Yoshitha+Housing+%26+Infra+Pvt.Ltd,+H.No+20,+Plot+No+135,+60/P/135,+Mathrusree+Nagar,+Serilingampalle+(M),+Hyderabad,+Telangana+500049"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Open in Google Maps</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 border-4 border-blue-200/20 rounded-full" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-green-200/20 rounded-full" />
      </div>
    </div>
  );
}