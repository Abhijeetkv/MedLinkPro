import React from "react";
import logo1 from "../assets/logo1.svg";
import DigifrillsLogo from "../assets/DigifrillsLogo.png";
import fb1 from "../assets/fb1.png";
import Insta1 from "../assets/Insta1.svg";
import x from "../assets/x.png";
import Whatsapp from "../assets/Whatsapp.png";
import Mail from "../assets/Mail.png";

const FooterSection = () => {
  return (
    <div className="realtive bg-gray-50 text-gray-900 font-sans p-10">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Take the First Step Toward Smarter Healthcare
            </h1>
            <p className="text-gray-600 mt-4">
              Join the revolution in healthcare management with MedLinkPro.
              Empower your clinic or hospital to deliver seamless, integrated
              care today.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
              Get Started Now
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="flex space-x-4">
              <img
                src="/phone-1.png"
                alt="Phone 1"
                className="w-32 h-auto shadow-lg rounded-md"
              />
              <img
                src="/phone-2.png"
                alt="Phone 2"
                className="w-32 h-auto shadow-lg rounded-md"
              />
              <img
                src="/phone-3.png"
                alt="Phone 3"
                className="w-32 h-auto shadow-lg rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-16">

             {/* Newsletter */}
        <div className="mb-8 md:mb-0 flex justify-between pb-6">
                <div>
                <h2 className="text-lg font-semibold">Join our newsletter</h2>
                <p className="text-gray-600 mt-1">
                  Get updates from us weekly about project management.
                </p>
                </div>
                <div className="mt-4 flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="py-2 px-6 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <div className="ml-8 rounded-xl">
                  <button className="bg-blue-600 rounded-xl text-white py-3 px-6  hover:bg-blue-700">
                    Subscribe
                  </button>
                  </div>
                </div>
              </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
             
             {/* Contact Info */}
              <div className="text-center md:text-left">
                <div className="flex items-center">
                <img src={logo1} alt="" className="h-14 w-14" />
                <h3 className="font-semibold text-2xl ml-3">Medlink</h3>
                </div>
                <p className="text-xl pt-2">
                Address:
                </p>
                <p className="text-gray-600 mt-1">
                   block no, street name, road name, Gujarat 90783
                </p>
                <p className="text-xl pt-2">Contact:</p>
                <p className="text-gray-600"> 9389218327</p>
                <p className="text-gray-600 ">medlinkpro@gmail.com</p>
                <div className="flex justify-center md:justify-start mt-4 space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              {/* Sitemap */}
              <div className="flex justify-between gap-48 mt-5">
              <div className="text-center md:text-left mt-8 md:mt-0">
                <h3 className="font-semibold text-lg">Sitemap</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Project
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Info */}
              <div className="text-center md:text-left mt-8 md:mt-0">
                <h3 className="font-semibold text-lg">Company</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={fb1} alt="" className="h-8" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Insta1} alt="" className="h-8" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={x} alt="" className="h-8" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Whatsapp} alt="" className="h-8" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Mail} alt="" className="h-8" />
                    </a>
                </div>

                <div>
                    <img src={DigifrillsLogo} alt="" className="h-14" />
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t pt-2">
              <p>
                &copy; 2024 MedLinkPro. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterSection;
