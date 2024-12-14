import React from 'react';
import { ProfileImage } from './ProfileImage';
import { ProfileInfo } from './ProfileInfo';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ProfileImage />
          <ProfileInfo />
        </div>
      </div>
    </section>
  );
}