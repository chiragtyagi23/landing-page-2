import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const Homepage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex flex-col items-center justify-center flex-grow p-4'>
    <div className='flex flex-col md:flex-row items-center p-5'>
      <h1 className='text-3xl underline font-bold mb-4 fade-in-up'>
        Sardar ji Travellers
      </h1>
      <img
        src='http://www.emofaces.com/png/200/emoticons/sikh.png'
        alt='Emoticon'
        className='w-12 mb-4 fade-in-up md:ml-4'
      />
    </div>
  </main>

        
      <section className='flex flex-col md:flex-row items-center justify-between px-4 mx-5 py-6 bg-gray-100 rounded-lg shadow-md fade-in'>
  <p className='text-lg font-medium mb-4 md:mb-0 md:w-2/3'>
    Discover the enchanting beauty of Bali's waterfalls, where crystal-clear waters cascade down lush, green cliffs, creating a serene and magical atmosphere. Explore hidden gems like Sekumpul, Nungnung, and Tegenungan, each offering a unique experience amidst the tropical rainforest. Marvel at the pristine nature, feel the refreshing mist on your skin, and immerse yourself in the tranquil sounds of flowing water. Bali's waterfalls are not just a sight to behold but a journey into the heart of the island's natural splendor, promising moments of awe and relaxation.
  </p>
  <img className='w-full md:w-1/3 h-auto rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-80' src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg" alt="Decorative" />
</section>

<section className='flex flex-col md:flex-row items-center justify-between px-4 mx-5 py-6 bg-gray-100 rounded-lg shadow-md fade-in'>
  <img className='w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 md:mr-4 transition-opacity duration-300 ease-in-out hover:opacity-80' src="https://3.bp.blogspot.com/_hEeDlsg8wA4/TT6L8hncQhI/AAAAAAAADGU/XWItBDceBBA/s1600/11hto3p.jpg" alt="Decorative" />
  <p className='text-lg font-medium md:w-2/3'>
    India's beauty is a vast and intricate tapestry woven from its diverse landscapes, rich cultural heritage, and vibrant traditions. From the serene backwaters of Kerala, where gentle houseboats glide through tranquil waters surrounded by lush greenery, to the majestic forts and palaces of Rajasthan that echo tales of royalty and grandeur, each region offers a unique glimpse into the country's charm. The snow-capped peaks of the Himalayas present a breathtaking contrast to the golden sands of the Thar Desert, while the lush tea gardens of Darjeeling provide a serene retreat. India's cultural richness is reflected in its ancient temples, each adorned with intricate carvings and steeped in spiritual significance.
  </p>
</section>

<section className='flex flex-col md:flex-row items-center justify-between px-4 mx-5 py-6 bg-gray-100 rounded-lg shadow-md fade-in'>
  <p className='text-lg font-medium mb-4 md:mb-0 md:w-2/3'>
    London, a city where history and modernity intertwine seamlessly, offers an unparalleled experience for travelers. From the iconic silhouette of the Houses of Parliament and the majestic Big Ben to the contemporary allure of the Shard, London's skyline is a captivating blend of the old and the new. Wander through the historic streets of Westminster, where you can explore the grandeur of Buckingham Palace and the rich artifacts of the British Museum. The vibrant neighborhoods of Covent Garden and Soho offer a dynamic mix of world-class dining, shopping, and entertainment. Stroll along the Thames, taking in landmarks like the London Eye and Tower Bridge, or escape to the lush greenery of Hyde Park and Kensington Gardens. With its diverse cultural scene, thriving arts community, and historic landmarks, London provides an engaging and multifaceted experience, making every visit a journey through its rich past and vibrant present.
  </p>
  <img className='w-full md:w-1/3 h-auto rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-80' src="https://images.pexels.com/photos/1444970/pexels-photo-1444970.jpeg?cs=srgb&dl=tower-of-london-1444970.jpg&fm=jpg" alt="Decorative" />
</section>

<section className='flex flex-col md:flex-row items-center justify-between px-4 mx-5 py-6 bg-gray-100 rounded-lg shadow-md fade-in'>
  <img className='w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 md:mr-4 transition-opacity duration-300 ease-in-out hover:opacity-80' src="https://lp-cms-production.imgix.net/2019-06/59758d46f79e6f06e2725f147bfcd085-downtown-dubai.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4" alt="Decorative" />
  <p className='text-lg font-medium md:w-2/3'>
    Dubai, a dazzling metropolis in the heart of the Arabian Desert, is a city that epitomizes luxury, innovation, and grandeur. Renowned for its futuristic skyline, Dubai boasts architectural marvels like the Burj Khalifa, the tallest building in the world, and the iconic Burj Al Arab, a symbol of opulence. The city's vibrant atmosphere is reflected in its bustling souks, luxurious shopping malls, and world-class dining options. Explore the man-made wonders of Palm Jumeirah and the Dubai Marina, or immerse yourself in the rich cultural heritage of the Dubai Museum and the historic Al Fahidi Neighborhood. With its pristine beaches, extravagant resorts, and a thriving nightlife, Dubai offers an unforgettable blend of modernity and tradition, promising an extraordinary experience for every visitor.
  </p>
</section>


{/* this is the section for country to visit */}

<section className='py-8 px-4 bg-gray-100'>
  <div className='container mx-auto flex flex-col gap-6'>
    {/* Row 1 */}
    <div className='flex flex-col md:flex-row gap-6'>
      {/* Bali section */}
      <div className='flex-1 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 fade-in'>
        <img
          className='w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80'
          src='https://handluggageonly.co.uk/wp-content/uploads/2015/08/IMG_1123.jpg'
          alt='Bali'
        />
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>Bali</h2>
          <p className='text-gray-700'>
            Explore the breathtaking landscapes and rich cultural heritage of Bali, from the majestic Himalayas to the vibrant streets of Kathmandu.
          </p>
          <NavLink
            to='/balisection'
            className='inline-block mt-4 text-red-600 font-medium hover:underline'
          >
            More Info
          </NavLink>
        </div>
      </div>

      {/* London */}
      <div className='flex-1 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 fade-in'>
        <img
          className='w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80'
          src='http://wallpapercave.com/wp/tKCaN8t.jpg'
          alt='London'
        />
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>London</h2>
          <p className='text-gray-700'>
            Experience the dynamic blend of history and modernity in London, from iconic landmarks like Big Ben and the Tower of London to the bustling streets of Covent Garden.
          </p>
          <NavLink
            to='/londonsection'
            className='inline-block mt-4 text-red-600 font-medium hover:underline'
          >
            More Info
          </NavLink>
        </div>
      </div>
    </div>

    {/* Thailand */}
    <div className='flex flex-col md:flex-row gap-6'>
      {/* Thailand Section */}
      <div className='flex-1 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 fade-in'>
        <img
          className='w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80'
          src='https://a.cdn-hotels.com/gdcs/production17/d398/4fc00310-ba03-4511-8028-c29f05535f08.jpg'
          alt='Thailand'
        />
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>Thailand</h2>
          <p className='text-gray-700'>
            Discover the enchanting beauty of Thailand, where pristine beaches, vibrant cities, and ancient temples create an unforgettable journey.
          </p>
          <NavLink
            to='/thailandsection'
            className='inline-block mt-4 text-red-600 font-medium hover:underline'
          >
            More Info
          </NavLink>
        </div>
      </div>

      {/* Singapore */}
      <div className='flex-1 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 fade-in'>
        <img
          className='w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80'
          src='https://www.casino.org/blog/wp-content/uploads/GettyImages-812401084.jpg'
          alt='Singapore'
        />
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>Singapore</h2>
          <p className='text-gray-700'>
            Immerse yourself in the futuristic skyline, lush gardens, and diverse cultural tapestry of Singapore.
          </p>
          <NavLink
            to='/singaporesection'
            className='inline-block mt-4 text-red-600 font-medium hover:underline'
          >
            More Info
          </NavLink>
        </div>
      </div>
    </div>

    {/* Nepal */}
    <div className='flex flex-col md:flex-row gap-6'>
      {/* Nepal Section */}
      <div className='flex-1 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 fade-in'>
        <img
          className='w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80'
          src='https://hiasia.xyz/Uploads/Picture/thanhhuong-183821043855-Patan.jpg'
          alt='Nepal'
        />
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>Nepal</h2>
          <p className='text-gray-700'>
            Experience the unparalleled beauty and spiritual serenity of Nepal, home to the towering Himalayas and rich cultural heritage.
          </p>
          <NavLink
            to='/nepalsection'
            className='inline-block mt-4 text-red-600 font-medium hover:underline'
          >
            More Info
          </NavLink>
        </div>
      </div>

      {/* Russia */}
      <div className='flex-1 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 fade-in'>
        <img
          className='w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80'
          src='https://www.tripsavvy.com/thmb/6r0v_4y_U86xIHL5Tbxed2HkMOs=/3863x2578/filters:fill(auto,1)/moscow-kremlin-and-st-basil-cathedral-at-dusk-158200423-5a64f4594e46ba00377331fb-f1cefbfe078841fa9951f6b4a7c44ae2.jpg'
          alt='Russia'
        />
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>Russia</h2>
          <p className='text-gray-700'>
            Discover the vast landscapes and storied history of Russia, from the grandeur of Moscow and St. Petersburg to the remote beauty of Siberia.
          </p>
          <NavLink
            to='/russiasection'
            className='inline-block mt-4 text-red-600 font-medium hover:underline'
          >
            More Info
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</section>


{/* this country section ends here */}


    
{/* from here the footer section starts */}

<footer>
<footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-8">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">Discover the world with us! We offer tailored travel packages to the most breathtaking destinations across the globe.</p>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Travel Street, Suite 456<br />City, Country 12345<br />Phone: (123) 456-7890<br />Email: info@travelagency.com</p>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form action="#" method="post" className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md text-gray-800" 
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
</footer>

{/* footer section ends here */}

    </div>
  );
};

export default Homepage;



