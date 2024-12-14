import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>

           

            <div className=" mb-5">
        <div className="relative group cursor-pointer w-fit">
          <h2 className="text-3xl font-bold mb-6 text-logoBlue">
          Contact Manoj Rathod
          </h2>
          <div className="absolute top-10 bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-logoGreen  transition-all duration-300"></div>
        </div>
      </div>

            <p className="text-gray-600 mb-8">
              Get in touch with us for premium real estate opportunities and expert guidance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-logoGreen mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 70228 82599</p>
                  <p className="text-gray-600">+91 7899111932</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-logoGreen mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@yoshithainfra.in</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-logoGreen mr-3" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    2 & 3rd Floor, Plot #135,<br />
                    Pillar #A601, Mathruni Nagar,<br />
                    Miyapur, Hyderabad - 500049
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6 bg-gray-50 p-8 rounded-xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-logoBlue text-white py-3 px-6 rounded-lg hover:bg-logoGreen  transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}