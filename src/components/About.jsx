import React from "react";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <section className="bg-gray-100  text-center  text-gray-800 py-24 px-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About TrustRaise
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Revolutionizing crowdfunding with secure, transparent blockchain
            technology.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600">
                TrustRaise is designed to empower startups and backers by
                offering a decentralized, transparent, and secure platform for
                crowdfunding. We aim to eliminate the traditional challenges of
                centralization, fraud, and high fees, making fundraising
                accessible to all.
              </p>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Why Blockchain?
              </h3>
              <p className="mt-4 text-gray-600">
                By utilizing blockchain, TrustRaise guarantees immutability and
                security in every transaction. Our platform automates processes
                through smart contracts, ensuring transparency, reducing manual
                intervention, and building trust among users.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  Secure & Transparent
                </h4>
                <p className="mt-2 text-gray-600">
                  All transactions are verified on a public ledger, ensuring
                  transparency and preventing fraud.
                </p>
              </div>

              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  Decentralized Funding
                </h4>
                <p className="mt-2 text-gray-600">
                  TrustRaise operates on blockchain, removing intermediaries and
                  giving users full control over their funds.
                </p>
              </div>

              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  Global Accessibility
                </h4>
                <p className="mt-2 text-gray-600">
                  Our platform is open to users worldwide, ensuring inclusivity
                  and diverse participation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <button
            className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700 text-center mt-8  ">
            Go to Main Section
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;