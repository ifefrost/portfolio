import { Link, useNavigate } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
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
          <div className='flex space-x-4'>
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
              {theme ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
