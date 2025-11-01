
import React from 'react';
import { Mail, Linkedin, Phone, User } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Person 1 */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-4 flex items-center justify-center bg-primary/10">
                <User className="w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Contact Person 1</h3>
              <p className="text-gray-600 mb-4">CEO and Founder</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:contact1@vertexdigital.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  contact1@vertexdigital.com
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Person 2 */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-4 flex items-center justify-center bg-accent/10">
                <User className="w-16 h-16 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Contact Person 2</h3>
              <p className="text-gray-600 mb-4">COO</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:contact2@vertexdigital.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  contact2@vertexdigital.com
                </a>
                <a 
                  href="#"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
                <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
