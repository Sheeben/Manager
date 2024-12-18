import React from 'react';
import { Container } from '../ui/Container';
import { LocationInfo } from './LocationInfo';
import { StaticMap } from './StaticMap';

export default function LocationMap() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Come visit us at our office in Miyapur, Hyderabad to discuss your real estate needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full">
            <LocationInfo />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg h-full">
            <StaticMap />
          </div>
        </div>
      </Container>
    </section>
  );
}