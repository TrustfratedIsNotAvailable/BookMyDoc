import React, { useState } from 'react';

const Hero = ({handleSearch}) => {
  const [searchText,setSearchText]=useState('');
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-12 md:py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-[95%] md:max-w-[80%] mx-auto text-center my-6 md:my-10 px-4 sm:px-6 md:px-10 py-6 md:py-8 rounded-lg shadow-md bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
          Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>

        <form  onSubmit={e => {
            handleSearch(e, searchText)
            // reset input state
            setSearchText('')
          }} className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto mb-12">
          <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            type="text"
            placeholder="Search any doctor..."
            className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button type='submit' className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-200">
            Search Now
          </button>
        </form>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 items-center">
          <img
            src="/images/banner-img-1.png"
            alt="Doctor 1"
            className="rounded-xl w-full md:w-[48%] object-cover object-top h-[350px]"
          />
          <img
            src="/images/banner-2.jpg"
            alt="Doctor 2"
            className="rounded-xl w-full md:w-[48%] object-cover object-top h-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
