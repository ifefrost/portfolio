import { Link, useNavigate } from "react-router-dom";
import { MdLightMode, MdDarkMode, MdMenu } from "react-icons/md";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import pdf from "../assets/resume.pdf";

const Nav = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };

  useEffect(() => {
    switch (theme) {
      case true:
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case false:
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <nav className='sticky top-0 z-10 shadow-md bg-[#E0B589] dark:bg-slate-900 dark:text-white duration-100'>
      <div className='mx-auto 2xl:max-w-screen-xl p-2 sm:px-6 lg:px-8'>
        <div className='flex justify-between'>
          <Link
            to='/'
            className='text-3xl no-underline gwendolyn hover:text-rose-700items-center'
          >
            IfeLadipo
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                type='button'
                className={`focus:outline-none ${
                  navOpen
                    ? "bg-[#332E16] text-white"
                    : "text-black dark:text-gray-200 hover:bg-[#332E16] hover:text-white"
                } md:hidden order-last cursor-pointer relative 
                  px-3 py-2 rounded-md text-sm font-medium `}
                onClick={() => setNavOpen(!navOpen)}
              >
                <MdMenu className='h-8 w-8' />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal
              className={`${navOpen ? "block" : "hidden"} md:flex md:space-x-4`}
            >
              <DropdownMenu.Content
                className='flex flex-col md:flex-row md:space-x-4 right-2 bg-[#E0B589] dark:bg-slate-900 md:bg-inherit px-1 py-2 items-center md:gap-0 rounded-b-xl w-max'
                sideOffset={5}
              >
                <DropdownMenu.Item className='DropdownMenuItem'>
                  <Link
                    to='/work'
                    className='text-center w-full text-black dark:text-white dark:hover:text-[#332E16] hover:bg-gray-100 hover:text-#332E16 px-3  py-2 rounded-md text-sm font-medium'
                  >
                    Work
                  </Link>
                </DropdownMenu.Item>
                {/* <DropdownMenu.Item>
                  <Link
                    to='/about'
                    className='text-center w-full text-black dark:text-white dark:hover:text-rose-700 hover:bg-gray-100 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    About
                  </Link>
                </DropdownMenu.Item> */}
                <DropdownMenu.Item className='DropdownMenuItem'>
                  <a href={pdf} target="_blank" className='text-center w-full text-black dark:text-white dark:hover:text-[#332E16] hover:bg-gray-100 hover:text-#332E16 px-3 py-2 rounded-md text-sm font-medium'>
                    Resume
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className='DropdownMenuItem'>
                  <Link
                    to='#'
                    className='text-center w-full text-black dark:text-white dark:hover:text-[#332E16] hover:bg-gray-100 hover:text-#332E16 px-3 py-2 rounded-md text-sm font-medium'
                    onClick={() =>
                      (window.location = "mailto:john.ladipo@hotmail.com")
                    }
                  >
                    Connect
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className='bg-white' />
                <DropdownMenu.Item className='DropdownMenuItem'>
                  <button
                    onClick={toggleTheme}
                    className='text-center w-full text-black dark:text-white dark:hover:text-[#332E16] hover:bg-gray-100 hover:text-#332E16 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    {theme ? (
                      <div className='flex gap-2 items-center'>
                        <span className='md:sr-only'>Set Light Mode</span>
                        <MdLightMode />
                      </div>
                    ) : (
                      <div className='flex gap-2 items-center'>
                        <span className='md:sr-only'>Set Dark Mode</span>
                        <MdDarkMode />
                      </div>
                    )}
                  </button>
                </DropdownMenu.Item>

                <DropdownMenu.Arrow className='bg-[#332E16] z-10' />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <div
            className={`${navOpen ? "block" : "hidden"} md:flex md:space-x-4`}
          >
            <div className='flex flex-col md:flex-row md:space-x-4 absolute md:static right-2 top-11 mt-5 md:mt-0 bg-[#332E16] md:bg-inherit px-1 py-2 items-center md:gap-0 rounded-b-xl w-max'>
              <Link
                to='/work'
                className='text-center w-full text-black dark:text-white dark:hover:text-[#332E16] hover:bg-gray-100 hover:text-[#332E16] px-3  py-2 rounded-md text-sm font-medium'
              >
                Work
              </Link>
              {/* <Link
                to='/about'
                className='text-center w-full text-black dark:text-white dark:hover:text-rose-700 hover:bg-gray-100 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium'
              >
                About
              </Link> */}
              <a href={pdf} target="_blank" className='text-center w-full text-black dark:text-white dark:hover:text-[#332E16] hover:bg-gray-100 hover:text-[#332E16] px-3 py-2 rounded-md text-sm font-medium'>
                Resume
              </a>
              <Link
                to='#'
                className='text-center w-full text-black dark:text-white dark:hover:text-[#332E16] hover:bg-gray-100 hover:text-[#332E16] px-3 py-2 rounded-md text-sm font-medium'
                onClick={() =>
                  (window.location = "mailto:john.ladipo@hotmail.com")
                }
              >
                Connect
              </Link>
              <button
                onClick={toggleTheme}
                className='text-center w-full text-black dark:text-white dark:hover:text-[#332E16] hover:bg-gray-100 hover:text-[#332E16] px-3 py-2 rounded-md text-sm font-medium'
              >
                {theme ? (
                  <div className='flex gap-2 items-center'>
                    <span className='md:sr-only'>Set Light Mode</span>
                    <MdLightMode />
                  </div>
                ) : (
                  <div className='flex gap-2 items-center'>
                    <span className='md:sr-only'>Set Dark Mode</span>
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
