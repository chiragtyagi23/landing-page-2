import React from 'react'
import { NavLink } from 'react-router-dom'

const Russiasection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Image Section */}
        <div className="relative mb-8">
          <img 
            src="https://www.tripsavvy.com/thmb/6r0v_4y_U86xIHL5Tbxed2HkMOs=/3863x2578/filters:fill(auto,1)/moscow-kremlin-and-st-basil-cathedral-at-dusk-158200423-5a64f4594e46ba00377331fb-f1cefbfe078841fa9951f6b4a7c44ae2.jpg" 
            alt="Moscow Kremlin and St. Basil's Cathedral" 
            className="w-full h-80 object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        {/* Details Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Discover Russia</h2>
          <p className="text-xl mb-6">Experience the grandeur and rich history of Russia with our exclusive travel package, featuring iconic landmarks and cultural wonders.</p>
          
          <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Price Details</h3>
            <p className="text-lg mb-4">Starting from <span className="font-bold">$1,300 per person</span></p>
            
            <h4 className="text-xl font-semibold mb-2">How to Visit</h4>
            <p className="text-md mb-4">Fly into Sheremetyevo International Airport (SVO) in Moscow. Our package includes airport transfers, guided tours of Moscow and St. Petersburg, and accommodation in luxury hotels.</p>
            
            <h4 className="text-xl font-semibold mb-2">Distance & Time</h4>
            <p className="text-md mb-4">Russia is approximately 5,600 miles from New York, with an average flight time of 9-11 hours, depending on layovers and flight paths.</p>
            
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

export default Russiasection
