import { Link, useNavigate } from "react-router-dom";
import { MdLightMode, MdDarkMode, MdMenu } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <nav className='sticky top-0 z-10 shadow-md bg-white'>
      <div className='mx-auto 2xl:max-w-screen-xl p-2 sm:px-6 lg:px-8'>
        <div className='flex justify-between'>
          <Link
            to='/'
            className='text-3xl no-underline gwendolyn hover:text-rose-700'
          >
            IfeLadipo
          </Link>
          <button
            type='button'
            className={`focus:outline-none ${
              navOpen
                ? "bg-rose-700 text-white"
                : "text-gray-300 hover:bg-rose-900 hover:text-white"
            } sm:hidden order-last cursor-pointer relative 
                  px-3 py-2 rounded-md text-sm font-medium `}
            onClick={() => setNavOpen(!navOpen)}
          >
            <MdMenu className='h-8 w-8' />
          </button>
          <div
            className={`${navOpen ? "block" : "hidden"} sm:flex sm:space-x-4`}
          >
            <div className='flex flex-col sm:flex-row sm:space-x-4 absolute sm:static right-2 top-11 mt-5 sm:mt-0 bg-rose-900 sm:bg-inherit px-1 py-2 items-center sm:gap-0 rounded-b-xl w-max'>
              <Link
                to='/work'
                className='text-center w-full text-black hover:bg-gray-100 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium'
              >
                Work
              </Link>
              <Link
                to='/about'
                className='text-center w-full text-black hover:bg-gray-100 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium'
              >
                About
              </Link>
              <h1 className='text-center w-full text-black hover:bg-gray-100 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium'>
                Resume
              </h1>
              <h1 className='text-center w-full text-black hover:bg-gray-100 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium'>
                Connect
              </h1>
              <button
                onClick={toggleTheme}
                className='text-center w-full text-black hover:bg-gray-100 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium'
              >
                {theme ? (
                  <div className="flex gap-2 items-center">
                    <span className='sm:sr-only'>Set Light Mode</span>
                    <MdLightMode />
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <span className='sm:sr-only'>Set Dark Mode</span>
                    <MdDarkMode />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
