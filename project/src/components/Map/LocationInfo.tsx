import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface LocationDetail {
  icon: React.ReactNode;
  title: string;
  content: string | string[];
}

const locationDetails: LocationDetail[] = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Address",
    content: [
      "Yoshitha Housing & Infra Pvt.Ltd,",
      "H.No 20, Plot No 135, 60/P/135,",
      "Mathrusree Nagar, Serilingampalle (M),",
      "Hyderabad, Telangana 500049"
    ]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Contact Numbers",
    content: [
      "+91 70228 82599",
      "+91 7899111932"
    ]
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    content: "Manojarathod99@gmail.com"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM"
  }
];

export function LocationInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
      {locationDetails.map((detail, index) => (
        <div key={index} className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
          <div className="text-blue-600 mt-1 group-hover:scale-110 transition-transform">
            {detail.icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">{detail.title}</h4>
            {Array.isArray(detail.content) ? (
              <div className="space-y-1">
                {detail.content.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">{detail.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}