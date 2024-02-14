import profile from "../assets/profile.png";
import dashboard from "../assets/dashboard.png";
import tmsn from "../assets/tmsn.png";
import wordle from "../assets/wordle.png";
import tcp from "../assets/tcp.png";
import { motion, AnimatePresence } from "framer-motion";

import { useState, useId } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaWindowClose,
  FaChevronDown,
} from "react-icons/fa";
const Work = () => {
  const [activeFilter, setActiveFilter] = useState([]);
  const id = useId();
  const toggleFilter = (filter) => {
    if (activeFilter.includes(filter)) {
      setActiveFilter(activeFilter.filter((item) => item !== filter));
    } else {
      setActiveFilter([...activeFilter, filter]);
    }
  };

  let tech = [
    "React",
    "Next",
    "Node",
    "Express",
    "Typescript",
    "Python",
    "Django",
    "PHP",
    "CMS",
    "MySQL",
    "NoSQL",
    "Git",
    "ASP.Net",
    "API",
  ];
  let projects = [
    {
      name: "The Movie Social Network",
      description:
        "This project is a social network for movie lovers. It allows users to create accounts, add movies to their watchlist, and review movies. It also allows users to follow other users and see their reviews. It used a REST API to retrieve data from The Movie Database. It was bundled with Vite using React and TailwindCSS on the frontend and Node, Express, and MongoDB on the backend. It is hosted on Vercel and Railways. It was built as a portfolio project in collaboration with two other developers",
      image: tmsn,
      link: "https://ifefrost-tmsn.vercel.app",
      github: "ifefrost/tmsn",
      tech: [
        "React",
        "Tailwind",
        "Node",
        "Express",
        "NoSQL",
        "Vite",
        "Git",
        "API",
        "JavaScript",
      ],
    },
    {
      name: "Wordle Clone",
      description:
        "This is a simple wordle clone web app that allows users to guess a 5 letter word. It was built using React and CSS and is hosted onVercel. I built this as part of a challenge by Josh Comeau",
      image: wordle,
      link: "https://wordle-ifeladipo.vercel.app/",
      github: "ifefrost/project-wordle",
      tech: ["React", "CSS", "HTML", "JavaScript", "Git"],
    },
    {
      name: "Dashboard",
      description:
        "This is a simple dashboard built with React, Tremor and TailwindCSS to dispaly dummy data. It was built as a portfolio project to showcase my skills with Data Visualization",
      image: dashboard,
      link: "https://dashboard-tawny-beta.vercel.app/",
      github: "ifefrost/dashboard",
      tech: ["React", "Tailwind", "Node", "Tremor", "Git", "JavaScript"],
    },
    {
      name: "TCP IVF Clinic",
      description:
        "This is a website for a fertility clinic. It was built using Wordpress and Elementor. I built this as a freelance project for a client",
      image: tcp,
      link: "https://thecomfortersplace.com/",
      tech: ["Wordpress", "Elementor", "PHP", "JavaScript", "CMS"],
    },
  ];
  if (activeFilter.length > 0) {
    projects = projects.filter((project) =>
      project.tech.some((tech) => activeFilter.includes(tech))
    );
  }
  return (
    <div className='mx-auto px-2 md:px-8 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-screen-xs max-w-sm'>
      <div className='bg-[#96999B] rounded-b-[32px] h-[40rem] gap-8 items-center py-10 px-10 lg:px-18 xl:px-24 overflow-hidden'>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex gap-5 items-center mb-5'
        >
          <div className='rounded-full bg-[#E0B589] lg:mt-auto overflow-hidden md:block w-24'>
            <img src={profile} alt='side profile of ife' className='' />
          </div>
          <p className='text-white text-lg'>Hello, I'm Ife John Ladipo</p>
        </motion.div>
        <div className='flex-1 flex flex-col gap-5 lg:px-40 md:px-20 px-5'>
          <h3 className='lg:text-[3rem] md:text-[2rem] text-[1.75rem] leading-none font-bold text-white text-center'>
            A <em>versatile</em> software engineer with a{" "}
            <em>keen eye for detail</em> and a <em>dedication</em> to{" "}
            <em>clean, efficient code</em>.
          </h3>
          <div className='flex flex-col gap-10 py-4 items-start'>
            <a
              href='https://www.linkedin.com/in/johnladipo/'
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
          <a href='#tech' className='text-white hover:text-[#9D915A] font-semibold'>
            <FaChevronDown className='mx-auto animate-bounce text-xl' />
          </a>
        </div>
      </div>
      <div id='tech'>
        <h3 className='font-bold sm:text-[1.75rem] text-[1.25rem] dark:text-white mt-24 mb-12'>
          Tech, Tools & Projects
        </h3>
        <div className='flex mx-auto flex-wrap justify-center gap-x-3 gap-y-2 lg:gap-x-4 lg:gap-y-3'>
          {tech.map((t) => (
            <button
              key={`${id}-${t}`}
              onClick={() => toggleFilter(t)}
              className='h-min px-[1rem] py-[0.3rem] shadow rounded-2xl hover:bg-[#332E16] disabled:bg-[#6B6752] bg-[#E0B589] text-black hover:text-white'
            >
              {activeFilter.includes(t) ? (
                <span className='flex gap-2 items-center'>
                  {t}
                  <FaWindowClose className='h-5 w-5' />
                </span>
              ) : (
                t
              )}
            </button>
          ))}
        </div>
      </div>
      <div className='my-24 flex flex-wrap lg:flex-col justify-center gap-8'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <a
              href={project.link}
              key={project.name}
              target='_blank'
              rel='noreferrer'
              className='text-gray-700 dark:text-gray-200 hover:text-[#E0B589]'
            >
              <div
                className='flex flex-col items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow md:flex-row md:mx-24 dark:border-gray-700 dark:bg-gray-800 group hoverlight'
                key={project.name}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  className='object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none  grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out'
                />
                <div className='flex flex-col justify-between p-4 leading-normal'>
                  <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-[#E0B589]'>
                    {project.name}
                  </h4>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {project.description}
                  </p>
                  <div className='flex justify-between'>
                    <p className='flex flex-wrap gap-x-1 gap-y-1'>
                      {project.tech.map((t) => (
                        <span
                          key={`${project.name}-${t}`}
                          className='inline-block px-3 py-1 mr-2  text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200'
                        >
                          {t}
                        </span>
                      ))}
                    </p>
                    {/* <div className='flex gap-5'>
                      {project.github && (
                        <a
                          href={`https://github.com/${project.github}`}
                          target='_blank'
                          rel='noreferrer'
                          className='text-gray-700 dark:text-gray-200 hover:text-[#332E16] z-10'
                        >
                          <FaGithub className='h-5 w-5' />
                        </a>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </a>
          ))
        ) : (
          <p className='text-center text-2xl dark:text-white'>
            No projects match any of the selected filters
          </p>
        )}
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className=' md:order-2'>
            <img
              src={tmsn}
              alt='Screenshot of the movie social network website'
              className='rounded-xl object-cover h-[25rem] w-[34rem] lg:mx-0 border-gray-200 border-2'
            />
          </div>
          <div className='p-10 dark:text-white md:order-1'>
            <h4 className='text-2xl mb-2'>The Movie Social Network</h4>
            <p className='text-gray-400'>
              This project is a social network for movie lovers. It allows users
              to create accounts, add movies to their watchlist, and review
              movies. It also allows users to follow other users and see their
              reviews. It was bundled with Vite using React and TailwindCSS on
              the frontend and Node, Express, and MongoDB on the backend. It is
              hosted on Vercel and Railways. It was built as a portfolio project
              in collaboration with two other developers:{" "}
              <a
                href='https://collinkavaner.com'
                target='_blank'
                rel='noreferrer'
                className='italic text-rose-700 border-b-2 border-b-rose-700 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in'
              >
                Collin Kavaner
              </a>{" "}
              and{" "}
              <a
                href='https://github.com/kwinfia'
                target='_blank'
                rel='noreferrer'
                className='italic text-rose-700 border-b-2 border-b-rose-700 border-opacity-0 hover:border-opacity-100 transition duration-300 ease-in'
              >
                Kwinnie Mae Fianza
              </a>
            </p>
            <button
              className='bg-rose-700 text-white rounded-xl mt-5 shadow-md px-5 p-2 hover:bg-red-900 transition duration-300'
              onClick={() => window.open("https://ifefrost-tmsn.vercel.app")}
            >
              Check it out
            </button>
          </div>
          <div className='relative md:order-3'>
            <img
              src={wordle}
              alt='screenshots of the wordle clone web app'
              className='rounded-xl object-cover h-[25rem] w-[34rem] lg:mx-0 border-gray-200 border-2'
            />
          </div>
          <div className='p-10 dark:text-white md:order-4'>
            <h4 className='text-2xl mb-2'>Wordle Clone</h4>
            <p className='text-gray-400'>
              This is a simple wordle clone web app that allows users to guess a
              5 letter word. It was built using React and CSS and is hosted on
              Vercel. I built this as part of a challenge by{" "}
              <a
                href='https://www.joshwcomeau.com/'
                target='_blank'
                rel='noreferrer'
                className='italic text-rose-700 border-b-2 border-b-rose-700 border-opacity-0 hover:border-opacity-100 transition duration-300 ease-in'
              >
                Josh Comeau
              </a>
              .
            </p>
            <button
              className='bg-rose-700 text-white rounded-xl shadow-md mt-5 px-5 p-2 hover:bg-rose-900'
              onClick={() =>
                window.open("https://wordle-ifeladipo.vercel.app/")
              }
            >
              Check it out
            </button>
          </div>
          <div className='relative md:order-6'>
            <img
              src={placeholder}
              alt='placeholder project screenshot'
              className='rounded-xl object-cover h-[25rem] w-[34rem] lg:mx-0 border-gray-200 border-2'
            />
          </div>
          <div className='p-10 dark:text-white md:order-5'>
            <h4 className='text-2xl mb-2'>Project 3</h4>
            <p className='text-gray-400'>
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
        </div> */}
      </div>
      <div className='mt-24 mb-12'>
        {/* <h3 className='font-bold sm:text-[1.75rem] text-[1.25rem] dark:text-white mt-24 mb-12'>
          Testimonials
        </h3> */}
      </div>
    </div>
  );
};
export default Work;
