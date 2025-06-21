import React from "react";
import { Link } from "react-router";
import { BiError } from "react-icons/bi";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white text-gray-800">
        <BiError size={80} className="text-red-500 mb-4" />
        <h1 className="text-4xl font-bold mb-2">Oops! Page Not Found</h1>
        <p className="text-lg mb-6">
          The page you're looking for doesn't exist or an error occurred.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
