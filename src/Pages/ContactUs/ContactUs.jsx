import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaLinkedin, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Your App</title>
        <link rel="icon" href="/images/contact-us.png" />
      </Helmet>

      {loading ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-48px)]">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-64px)] bg-white px-4 md:px-10 py-8 flex items-center justify-center">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <div className="space-y-4 text-[#0F0F0F] text-sm md:text-base">
              <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
              <p className="text-[#0F0F0F80]">
                Have a question or just want to say hello? We'd love to hear from you!
              </p>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#176AE5] mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>123 Health St, MedCity, BD 1212</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#176AE5] mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+880 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-[#176AE5] mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>support@phudu.com</p>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} className="text-[#1877F2] hover:scale-110 transition" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter size={24} className="text-black hover:scale-110 transition" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} className="text-[#0A66C2] hover:scale-110 transition" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={24} className="text-[#FF0000] hover:scale-110 transition" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-[#F9F9F9] rounded-lg p-5 shadow space-y-4 text-sm md:text-base">
              <div>
                <label className="block mb-1 font-medium text-[#0F0F0F]">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#176AE5]"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-[#0F0F0F]">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#176AE5]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-[#0F0F0F]">Message</label>
                <textarea
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#176AE5]"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#176AE5] text-white font-semibold py-2 rounded-md hover:bg-[#145bcc] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
