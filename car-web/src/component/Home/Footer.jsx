import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-14 bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-2xl pb-4">WheelsDeal</h1>
          <p className="mb-2 text-sm">
            Experience unmatched value with Wheels Deal – your trusted
            destination for quality cars, great prices, and exceptional service.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Pages Links
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/about"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/cars"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Our Cars
            </Link>
            <Link
              to="/services"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Services
            </Link>
             <Link
              to="/signin"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              SignUp
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-medium">
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Used Cars for sale
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Toyota Camry
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Learn More
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              User-friendly
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Search and Filters
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Secure Payment
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Geolocation Services
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copywrite developed by
          <span className="text-primary font-semibold mx-2">
            champion programmers
          </span>
          | All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
