import React from 'react'
import Navbar from './Navbar'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
    <div>
    <Navbar/>
    </div>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">We'd love to hear from you. Fill out the form below or use the contact information provided.</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center mb-12">
          {/* Address */}
          <div className="w-full md:w-1/3 p-4 text-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-blue-500 text-3xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p className="text-md">f-377 Travel Street, Suite 456<br />City, Country +91</p>
            </div>
          </div>
          {/* Phone no */}
          <div className="w-full md:w-1/3 p-4 text-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-blue-500 text-3xl mb-4">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-md">Phone: (+91) 949209086</p>
            </div>
          </div>
          {/* Email */}
          <div className="w-full md:w-1/3 p-4 text-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-blue-500 text-3xl mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-md">Email: chiragt281@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h3>
          <form action="#" method="post">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="col-span-1">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                placeholder="Your Message" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Contact
