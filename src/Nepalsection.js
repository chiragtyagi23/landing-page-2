import React from 'react'
import { NavLink } from 'react-router-dom'

const Nepalsection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Image Section */}
        <div className="relative mb-8">
          <img 
            src="https://hiasia.xyz/Uploads/Picture/thanhhuong-183821043855-Patan.jpg" 
            alt="Nepal Patan" 
            className="w-full h-80 object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        {/* Details Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Nepal</h2>
          <p className="text-xl mb-6">Discover the serene beauty and rich cultural heritage of Nepal with our exclusive travel package, featuring stunning landscapes and historic sites.</p>
          
          <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Price Details</h3>
            <p className="text-lg mb-4">Starting from <span className="font-bold">$950 per person</span></p>
            
            <h4 className="text-xl font-semibold mb-2">How to Visit</h4>
            <p className="text-md mb-4">Fly into Tribhuvan International Airport (KTM). Our package includes airport transfers, guided tours of Kathmandu Valley, and accommodation in charming local lodges.</p>
            
            <h4 className="text-xl font-semibold mb-2">Distance & Time</h4>
            <p className="text-md mb-4">Nepal is approximately 7,300 miles from New York, with an average flight time of 14-16 hours, including layovers.</p>
            
            {/* Home Page Button */}
            <NavLink 
              to="/" 
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Back to Home
            </NavLink>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Nepalsection
