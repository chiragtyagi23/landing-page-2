import React from 'react'
import { NavLink } from 'react-router-dom'

const Thailandsection = () => {
  return (
    <div>
       
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Image Section */}
        <div className="relative mb-8">
          <img 
            src="https://a.cdn-hotels.com/gdcs/production17/d398/4fc00310-ba03-4511-8028-c29f05535f08.jpg" 
            alt="Thailand Beach" 
            className="w-full h-80 object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        {/* Details Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Thailand</h2>
          <p className="text-xl mb-6">Discover the stunning beaches, vibrant culture, and delicious cuisine of Thailand with our all-inclusive travel package.</p>
          
          <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Price Details</h3>
            <p className="text-lg mb-4">Starting from <span className="font-bold">$850 per person</span></p>
            
            <h4 className="text-xl font-semibold mb-2">How to Visit</h4>
            <p className="text-md mb-4">Fly into Suvarnabhumi Airport (BKK) or Don Mueang International Airport (DMK). Our package includes airport transfers, luxury accommodation, and guided tours of major attractions.</p>
            
            <h4 className="text-xl font-semibold mb-2">Distance & Time</h4>
            <p className="text-md mb-4">Thailand is approximately 8,500 miles from New York, with an average flight time of 15-17 hours, including layovers.</p>
            
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

export default Thailandsection
