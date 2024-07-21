import React from 'react'
import { NavLink } from 'react-router-dom'

const Balisection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Image Section */}
        <div className="relative mb-8">
          <img 
            src="https://handluggageonly.co.uk/wp-content/uploads/2015/08/IMG_1123.jpg" 
            alt="Bali Nature" 
            className="w-full h-80 object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        {/* Details Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Bali</h2>
          <p className="text-xl mb-6">Immerse yourself in the natural beauty and serene landscapes of Bali with our exclusive travel package.</p>
          
          <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Price Details</h3>
            <p className="text-lg mb-4">Starting from <span className="font-bold">$900 per person</span></p>
            
            <h4 className="text-xl font-semibold mb-2">How to Visit</h4>
            <p className="text-md mb-4">Fly into Ngurah Rai International Airport (DPS). Our package includes airport transfers and guided tours of Bali’s most stunning locations.</p>
            
            <h4 className="text-xl font-semibold mb-2">Distance & Time</h4>
            <p className="text-md mb-4">Bali is approximately 5,800 miles from Los Angeles, with an average flight time of 12-15 hours, including layovers.</p>
            
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

export default Balisection
