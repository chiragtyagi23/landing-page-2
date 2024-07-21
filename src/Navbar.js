import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <header className='w-full bg-slate-900 border-b p-4 sticky top-0 z-50'>
        <nav className='flex items-center justify-between md:justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <NavLink to='/' className='flex items-center'>
              <img
                src='https://stickershop.line-scdn.net/stickershop/v1/product/7436321/LINEStorePC/main.png;compress=true'
                alt='Logo'
                className='w-12 h-auto'
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex flex-grow justify-center space-x-8'>
            <NavLink to='/' className='font-bold p-4 text-slate-100'>
              Home
            </NavLink>
            
            <NavLink to='/about' className='font-bold p-4 text-slate-100'>
              About
            </NavLink>
            <NavLink to='/contact' className='font-bold p-4 text-slate-100'>
              Contact
            </NavLink>
          </div>

          {/* SignUp and Login Buttons */}
          <div className='hidden md:flex space-x-4'>
            <NavLink
              to='/signup'
              className='bg-red-600 px-4 py-1 text-sm font-medium text-white rounded shadow hover:bg-red-700'
            >
              SignUp
            </NavLink>
            <NavLink
              to='/login'
              className='bg-red-600 px-4 py-1 text-sm font-medium text-white rounded shadow hover:bg-red-700'
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex md:hidden'>
            <button
              className='text-3xl text-slate-100'
              onClick={() => setMobile(!mobile)}
            >
              <IoMdMenu />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobile && (
          <div className='fixed inset-0 z-50 bg-gray-800 bg-opacity-80'>
            <div className='fixed inset-y-0 right-0 z-50 bg-white px-6 py-6 w-3/4 max-w-sm'>
              <div className='flex items-center justify-between mb-4'>
                <img
                  src='https://stickershop.line-scdn.net/stickershop/v1/product/7436321/LINEStorePC/main.png;compress=true'
                  alt='Logo'
                  className='w-12 h-auto'
                />
                <button
                  className='text-3xl text-gray-800'
                  onClick={() => setMobile(false)}
                >
                  &times;
                </button>
              </div>
              <nav className='space-y-4'>
                <NavLink to='/' className='block text-lg font-bold text-gray-800' onClick={() => setMobile(false)}>
                  Home
                </NavLink>
                
                <NavLink to='/about' className='block text-lg font-bold text-gray-800' onClick={() => setMobile(false)}>
                  About
                </NavLink>
                <NavLink to='/contact' className='block text-lg font-bold text-gray-800' onClick={() => setMobile(false)}>
                  Contact
                </NavLink>
                <NavLink to='/signup' className='block text-lg font-bold text-gray-800' onClick={() => setMobile(false)}>
                  SignUp
                </NavLink>
                <NavLink to='/login' className='block text-lg font-bold text-gray-800' onClick={() => setMobile(false)}>
                  Login
                </NavLink>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;




