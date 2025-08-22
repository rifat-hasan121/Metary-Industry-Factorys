import React from 'react';

const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center  mb-4">
              <div>
                <img
                  src="/logo.png"
                  alt=""
                  className='w-12 rounded mr-2"'
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">METARY SPECIALISTS</h3>
              </div>
            </div>
            <p className="text-sm mb-4">
              We have 14+ years experience. Helping you overcome technology
              challenges. We are dedicated to provides the best solutions to our
              valued customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <div className="flex gap-18 items-center">
                <div>
                  {" "}
                  <li>
                    <a href="#" className="hover:text-orange-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-500">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-500">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-500">
                      Our Projects
                    </a>
                  </li>
                </div>
                <div>
                  <li>
                    <a href="#" className="hover:text-orange-500">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-500">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-500">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-500">
                      Contacts
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Subscribe with us"
                className="w-full p-2 rounded-l bg-gray-800 text-white border-none focus:outline-none"
              />
              <button className="bg-gray-700 p-2 rounded-r flex items-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Metary Powered by Website Layout</p>
          <p className="mt-2">
            <a href="#" className="hover:text-orange-500">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-orange-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    );
};

export default Footer;