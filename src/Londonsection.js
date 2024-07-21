import React from 'react'
import { NavLink } from 'react-router-dom'

const Londonsection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Image Section */}
        <div className="relative mb-8">
          <img 
            src="http://wallpapercave.com/wp/tKCaN8t.jpg" 
            alt="Travel Destination" 
            className="w-full h-80 object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        {/* Details Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Discover Your Next Destination</h2>
          <p className="text-xl mb-6">Embark on a journey to breathtaking landscapes and vibrant cultures with our exclusive travel packages.</p>
          
          <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Price Details</h3>
            <p className="text-lg mb-4">Starting from <span className="font-bold">$1,000 per person</span></p>
            
            <h4 className="text-xl font-semibold mb-2">How to Visit</h4>
            <p className="text-md mb-4">Fly into the nearest international airport. Our package includes airport transfers, accommodation, and guided tours of top attractions.</p>
            
            <h4 className="text-xl font-semibold mb-2">Distance & Time</h4>
            <p className="text-md mb-4">Distance varies by location. Average flight time from major cities ranges from 10 to 14 hours.</p>
            
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

export default Londonsection
