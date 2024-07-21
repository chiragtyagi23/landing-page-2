import React from 'react'
import './App.css';
import Navbar from './Navbar'

import { FaAward, FaRegLightbulb, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className="bg-gray-100 flex-grow">
        {/* About Us Section */}
        <section className="relative h-60 md:h-96 bg-blue-500 text-white flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://travelprofessionalnews.com/wp-content/uploads/2022/01/In-2022-the-role-of-the-Travel-Agent-is-more-important-than-ever-are-you-ready-for-the-challenge-.jpg" 
              alt="Hero"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl">Learn more about our mission and team</p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0 slide-up">
                <img 
                  src="https://www.thetravelteam.com/wp-content/uploads/2019/11/corporate-travel-agency.jpg" 
                  alt="Our Mission" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-6 fade-in">
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg">
                  We strive to provide the best travel experiences by offering tailored packages that cater to every traveler's needs. Our mission is to create unforgettable journeys and foster a love for exploration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6 fade-in">
            <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-1/3 text-center mb-6 md:mb-0 slide-up">
                <div className="text-blue-500 text-4xl mb-4">
                  <FaAward />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-md">We aim for excellence in everything we do, from customer service to the quality of our travel packages.</p>
              </div>
              <div className="w-full md:w-1/3 text-center mb-6 md:mb-0 slide-up">
                <div className="text-blue-500 text-4xl mb-4">
                  <FaRegLightbulb />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-md">We continuously innovate to provide unique travel experiences and stay ahead of trends in the travel industry.</p>
              </div>
              <div className="w-full md:w-1/3 text-center mb-6 md:mb-0 slide-up">
                <div className="text-blue-500 text-4xl mb-4">
                  <FaHandsHelping />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-md">We uphold the highest standards of integrity, ensuring transparency and honesty in all our dealings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-12">
          <div className="container mx-auto px-6 fade-in">
            <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 lg:w-1/4 p-4 slide-up">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://rosenbergadv.com/wp-content/uploads/2020/01/ProTrav_1.jpg" 
                    alt="Team Member" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Chirag Tyagi</h3>
                    <p className="text-md">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/4 p-4 slide-up">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://www.onlinewikipedia.com/wp-content/uploads/2022/06/Travelling-Professional-1200x675.jpg" 
                    alt="Team Member" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Raju Singh</h3>
                    <p className="text-md">Head of Operations</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/4 p-4 slide-up">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://gr8traveltips.com/wp-content/uploads/2019/02/Professional-Travel-Agent-1-scaled.jpg" 
                    alt="Team Member" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Shreya Singhal</h3>
                    <p className="text-md">Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default About
