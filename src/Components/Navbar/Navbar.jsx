import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {

    const links = <>
        <NavLink to={'/'}><li className='mr-8'>Home</li></NavLink>
        <NavLink to={'/myBookings'}><li className='mr-8'>My-Bookings</li></NavLink>
        <NavLink to={'/blogs'}><li className='mr-8'>Blogs</li></NavLink>
        <NavLink to={'/contactUs'}><li className='mr-8'>Contact-Us</li></NavLink>
    </>

    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

        {links}

      </ul>
    </div>
    <div className='flex items-center gap-4'>
        <img style={{width:'48px',height:'48px'}} src="images/logo.png" alt="" />
        <p className="font-extrabold text-3xl">Phudu</p>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {links}

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-indigo-800 text-white">Emergency</a>
  </div>
  
</div>
        </>
    );
};

export default Navbar;