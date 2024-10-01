import React from 'react'
import docimg1 from '../assets/docimg1.png'
import docimg2 from '../assets/docimg2.png'
import docimg3 from '../assets/docimg3.png'
import child from '../assets/child.png'
import logo1 from '../assets/logo1.svg'

function AboutComponent() {
  return (
    <>
       <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-indigo-600">MedLinkPro</span>
            Unifying Healthcare Sectors Through Innovation
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            At MedLinkPro, our mission is to unify healthcare sectors through innovative
            technology solutions. We enhance collaboration among doctors, hospitals,
            pharmacies, and laboratories, improving communication and operational
            efficiency. By integrating digital tools, we create a cohesive healthcare
            ecosystem that prioritizes patient care and ensures access to vital
            information, transforming healthcare delivery across India.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8 text-center sm:grid-cols-3">
            <div>
              <span className="block text-4xl font-extrabold text-indigo-600">
                5
              </span>
              <span className="mt-2 block text-base font-medium text-gray-500">
                Healthcare Partners
              </span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-indigo-600">
                10k
              </span>
              <span className="mt-2 block text-base font-medium text-gray-500">
                Users
              </span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-indigo-600">
                4.8
              </span>
              <span className="mt-2 block text-base font-medium text-gray-500">
                Rating
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
        <div className="relative">
          <img
            src="https://placehold.co/300x300/EFEFEF/888888" // Replace with your actual image URL
            alt="Healthcare Professional"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            21
          </span>
        </div>

        {/* Image 2 */}
        <div className="relative">
          <img
            src="https://placehold.co/300x300/EFEFEF/888888" // Replace with your actual image URL
            alt="Smiling Patient"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            20
          </span>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <img
            src="https://placehold.co/300x300/EFEFEF/888888" // Replace with your actual image URL
            alt="Confident Doctor"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            21
          </span>
        </div>

        {/* App Logo */}
        <div className="flex items-center justify-center bg-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12 text-blue-500"
          >
            {/* Replace with your actual app logo SVG path */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8-8H4"
            />
          </svg>
        </div>

        {/* Image 4 */}
        <div className="relative">
          <img
            src="https://placehold.co/300x300/EFEFEF/888888" // Replace with your actual image URL
            alt="Patient Consultation"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            20
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-100 py-4 px-6 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">5</p>
          <p className="text-gray-600 text-sm">Healthcare Partners</p>
        </div>
        <div>
          <p className="text-2xl font-bold">10k</p>
          <p className="text-gray-600 text-sm">Users</p>
        </div>
        <div>
          <p className="text-2xl font-bold">4.8</p>
          <p className="text-gray-600 text-sm">Rating</p>
        </div>

        </div>
      </div>
    </div>

    </>
  )
}

export default AboutComponent