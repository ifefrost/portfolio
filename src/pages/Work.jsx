import profile from "../assets/profile.png";
import placeholder from "../assets/placeholder.jpg";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
const Work = () => {
  return (
    <div className='mx-auto px-2 md:px-8 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-screen-xs max-w-sm'>
      <div className='bg-rose-700 rounded-b-[32px] h-[40rem] gap-8 items-center py-10 px-10 lg:px-18 xl:px-24 overflow-hidden'>
        <div className='flex gap-5 items-center mb-5'>
          <div className='rounded-full bg-[#fdb813] lg:mt-auto overflow-hidden md:block w-24'>
            <img src={profile} alt='side profile of ife' className='' />
          </div>
          <p className='text-white text-lg'>Hello, I'm Ife John Ladipo</p>
        </div>
        <div className='flex-1 flex flex-col gap-5 lg:px-40 md:px-20 px-5'>
          <h3 className='lg:text-[3rem] md:text-[2rem] text-[1.75rem] leading-none font-bold text-white text-center'>
            A <em>versatile</em> software engineer with a{" "}
            <em>keen eye for detail</em> and a <em>dedication</em> to{" "}
            <em>clean, efficient code</em>.
          </h3>
          <div className='flex flex-col gap-10 py-4'>
            <a
              href='https://www.linkedin.com/in/ifeoluwaladipo/'
              target='_blank'
              rel='noreferrer'
              className='text-white hover:text-[#0077B5] font-semibold flex gap-5 items-center'
            >
              <FaLinkedinIn className='text-3xl' />
              Visit my LinkedIn
            </a>
            <a
              href='https://twitter.com/ifeladipo'
              target='_blank'
              rel='noreferrer'
              className='text-white hover:text-[#1DA1F2] font-semibold flex gap-5 items-center'
            >
              <FaTwitter className='text-3xl' />
              Follow my Twitter
            </a>
            <a
              href='https://github.com/ifefrost'
              target='_blank'
              rel='noreferrer'
              className='text-white hover:text-black font-semibold flex gap-5 items-center'
            >
              <FaGithub className='text-3xl' />
              Browse my GitHub
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 className='font-bold sm:text-[1.75rem] text-[1.25rem] dark:text-white mt-24 mb-12'>
          Languages and technologies I'm currently using
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
          <div className='bg-white rounded-xl shadow-md p-5'>
            <h4 className='text-2xl mb-2'>Javascript</h4>
            <p className='text-gray-600'>
              React, Next, Angular, Node, Express, Typescript
            </p>
          </div>
          <div className='bg-white rounded-xl shadow-md p-5'>
            <h4 className='text-2xl mb-2'>Python</h4>
            <p className='text-gray-600'>Django, Flask, Scrapy, Pandas</p>
          </div>
          <div className='bg-white rounded-xl shadow-md p-5'>
            <h4 className='text-2xl mb-2'>PHP</h4>
            <p className='text-gray-600'>Laravel, CodeIgniter, Wordpress</p>
          </div>
          <div className='bg-white rounded-xl shadow-md p-5'>
            <h4 className='text-2xl mb-2'>Databases</h4>
            <p className='text-gray-600'>MySQL, PostgreSQL, MongoDB</p>
          </div>
          <div className='bg-white rounded-xl shadow-md p-5'>
            <h4 className='text-2xl mb-2'>Other</h4>
            <p className='text-gray-600'>TailwindCSS, Bootstrap, Git</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className='font-bold sm:text-[1.75rem] text-[1.25rem] dark:text-white mt-24 mb-12'>
          Selected projects
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className=' md:order-2'>
            <img
              src={placeholder}
              alt='placeholder project screenshot'
              className='rounded-xl object-cover h-[25rem] w-[34rem] lg:mx-0'
            />
          </div>
          <div className='p-10 dark:text-white md:order-1'>
            <h4 className='text-2xl mb-2'>Project 1</h4>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptatum, doloribus, asperiores, quas quibusdam velit voluptates
              unde nostrum magni labore tempora! Quas, itaque voluptatem.
              Quisquam, iure. Accusamus quas sapiente officiis voluptatum,
              voluptatem deleniti voluptas laboriosam sint exercitationem,
              nostrum, porro magni. Quos, illo.
            </p>
            <button className='bg-rose-700 text-white rounded-xl shadow-md mt-5 px-5 p-2'>
              check it out
            </button>
          </div>
          <div className='relative md:order-3'>
          <img
              src={placeholder}
              alt='placeholder project screenshot'
              className='rounded-xl object-cover h-[25rem] w-[34rem] lg:mx-0'
            />
          </div>
          <div className='p-10 dark:text-white md:order-4'>
            <h4 className='text-2xl mb-2'>Project 2</h4>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptatum, doloribus, asperiores, quas quibusdam velit voluptates
              unde nostrum magni labore tempora! Quas, itaque voluptatem.
              Quisquam, iure. Accusamus quas sapiente officiis voluptatum,
              voluptatem deleniti voluptas laboriosam sint exercitationem,
              nostrum, porro magni. Quos, illo.
            </p>
            <button className='bg-rose-700 text-white rounded-xl shadow-md mt-5 px-5 p-2'>
              check it out
            </button>
          </div>
          <div className='relative md:order-6'>
          <img
              src={placeholder}
              alt='placeholder project screenshot'
              className='rounded-xl object-cover h-[25rem] w-[34rem] lg:mx-0'
            />
          </div>
          <div className='p-10 dark:text-white md:order-5'>
            <h4 className='text-2xl mb-2'>Project 3</h4>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptatum, doloribus, asperiores, quas quibusdam velit voluptates
              unde nostrum magni labore tempora! Quas, itaque voluptatem.
              Quisquam, iure. Accusamus quas sapiente officiis voluptatum,
              voluptatem deleniti voluptas laboriosam sint exercitationem,
              nostrum, porro magni. Quos, illo.
            </p>
            <button className='bg-rose-700 text-white rounded-xl shadow-md mt-5 px-5 p-2'>
              check it out
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className='font-bold sm:text-[1.75rem] text-[1.25rem] dark:text-white mt-24 mb-12'>
          Testimonials
        </h3>
      </div>
    </div>
  );
};
export default Work;
