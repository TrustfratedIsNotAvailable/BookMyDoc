import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebook, FaLinkedin, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {

    const links = <>
        <NavLink to={'/'} className={'mr-2'}>Home</NavLink>
        <NavLink to={'/myBookings'}>My-Bookings</NavLink>
        <NavLink to={'/blogs'}>Blogs</NavLink>
        <NavLink to={'/contactUs'}>Contact-Us</NavLink>
    </>

    return (
        <>
            {/* <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
                <div className='flex items-center gap-4'>
                    <img src="/images/logo.png" alt="" className='w-12 h-12' />
                    <p className="font-extrabold text-3xl">Phudu</p>
                </div>
                <nav className="grid grid-flow-col gap-4 text-[#0F0F0F70]">
                    {links}
                </nav>

                <hr className="w-[85%] border-t border-[#0F0F0F20] mt-4" />

                <nav>
                    <div className="grid grid-flow-col gap-4">

                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook
                                size={36}
                                className="text-[#1877F2] hover:scale-110 transition-transform duration-300"
                            />
                        </a>

                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaSquareXTwitter
                                size={36}
                                className="text-black hover:scale-110 transition-transform duration-300"
                            />
                        </a>

                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin
                                size={36}
                                className="text-[#0A66C2] hover:scale-110 transition-transform duration-300"
                            />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <FaYoutube
                                size={36}
                                className="text-[#FF0000] hover:scale-110 transition-transform duration-300"
                            />
                        </a>
                    </div>
                </nav>
            </footer> */}
            {/* <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-6 md:p-8">
  <div className="flex items-center gap-3">
    <img src="/images/logo.png" alt="" className="w-10 h-10" />
    <p className="font-extrabold text-2xl">Phudu</p>
  </div>

  <nav className="grid grid-flow-col gap-3 text-[#0F0F0F70] text-sm">
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/myBookings'}>My-Bookings</NavLink>
    <NavLink to={'/blogs'}>Blogs</NavLink>
    <NavLink to={'/contactUs'}>Contact-Us</NavLink>
  </nav>

  <hr className="w-[85%] border-t border-[#0F0F0F20] my-2" />

  <nav>
    <div className="flex gap-4 justify-center">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={28} className="text-[#1877F2] hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter size={28} className="text-black hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={28} className="text-[#0A66C2] hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={28} className="text-[#FF0000] hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  </nav>
</footer> */}

<footer className="footer footer-horizontal footer-center bg-white text-base-content rounded px-4 py-5 md:px-6 md:py-6">
  <div className="flex items-center gap-2">
    <img src="/images/logo.png" alt="" className="w-9 h-9" />
    <p className="font-extrabold text-xl md:text-2xl">Phudu</p>
  </div>

  <nav className="grid grid-flow-col gap-x-4 text-[#0F0F0F70] text-sm">
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/myBookings'}>My-Bookings</NavLink>
    <NavLink to={'/blogs'}>Blogs</NavLink>
    <NavLink to={'/contactUs'}>Contact-Us</NavLink>
  </nav>

  <hr className="w-[85%] border-t border-[#0F0F0F20]" />

  <nav>
    <div className="flex gap-3 justify-center">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={26} className="text-[#1877F2] hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter size={26} className="text-black hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={26} className="text-[#0A66C2] hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={26} className="text-[#FF0000] hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  </nav>
</footer>


        </>
    );
};

export default Footer;
