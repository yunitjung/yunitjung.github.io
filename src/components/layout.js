import * as React from 'react'
import { Link } from 'gatsby'
import "../styles/global.css"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Layout = ({pageTitle, children}) => {
    return (
        <div className="bg-indigo-500 min-h-screen max-w-screen">
            {/* className="bg-yellow-50 bg-opacity-25" */}
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/"
                      className="text-white hover:text-indigo-800 ease-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Intro
                    </Link>
  
                    <Link to="/about" className="text-white hover:text-indigo-800 ease-300 px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </Link>
                    <Link to="/work" className="text-white hover:text-indigo-800 ease-300 px-3 py-2 rounded-md text-sm font-medium">
                      Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="bg-yellow-50 bg-opacity-25 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
  
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-Linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
  
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to ="/"
                className="text-gray-700 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Intro
              </Link>
  
              <Link
                to="/about"
                className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
  
              <Link
                to="/projects"
                className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Link>
            </div>
          </div>
        </nav>
        <main>
            <title>{pageTitle}</title>
            <div className="container pl-32 pr-32 px-10 mt-20">
                <h1 className="font-bold w-full text-6xl pl-20 mb-10 text-white">{pageTitle}</h1>
                {children}
            </div>
        </main>
        <div className="fixed bottom-36 left-10 justify-center transform">
          <ul className="space-y-3">
            <li> 
              <button  className="rounded-full bg-indigo-800 hover:bg-red-300 hover:text-indigo-800 p-2 items-center text-indigo-400 ease-300">
                <a href="https://twitter.com/tjungyuni"><FaTwitter/></a>
              </button>
            </li>
            <li>
              <button className="rounded-full bg-indigo-800 hover:bg-red-300 hover:text-indigo-800 p-2 items-center text-indigo-400 ease-300">
                <a href="https://github.com/yunitjung"><FaGithub/></a>
              </button>
            </li>
            <li> 
              <button className="rounded-full bg-indigo-800 hover:bg-red-300 hover:text-indigo-800 p-2 items-center text-indigo-400 ease-300">
                <a href="https://www.linkedin.com/in/yuni-tjung-142544156/"><FaLinkedinIn/></a>
              </button>
            </li>
          </ul>
        </div>
        </div>
    )
}

export default Layout