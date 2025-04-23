import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
         <Helmet>
        <title>Error | Phudu</title>
        <link rel="icon" href="/images/undraw_page-not-found_6wni.svg" />
      </Helmet>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-48px)] bg-gray-100 px-4 text-center">
        
        <img
          src="/images/undraw_page-not-found_6wni.svg" 
          alt="Page Not Found"
          className="w-72 mb-6"
        />

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mb-6">
          {error?.statusText || "We couldn't find the page you're looking for."}
        </p>

        <a
          href="/"
          className="bg-indigo-800 text-white px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-indigo-700 transition"
        >
          Back to Home
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
