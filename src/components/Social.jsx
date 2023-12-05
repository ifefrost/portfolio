import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
const Social = () => {
  return (
    <div className='flex gap-10 py-4'>
      <a
        href='https://www.linkedin.com/in/ifeoluwaladipo/'
        target='_blank'
        rel='noreferrer'
        className='dark:text-white hover:text-[#0077B5]'
      >
        <FaLinkedinIn className='text-3xl' />
      </a>
      <a
        href='https://twitter.com/ifeladipo'
        target='_blank'
        rel='noreferrer'
        className='dark:text-white hover:text-[#1DA1F2]'
      >
        <FaTwitter className='text-3xl' />
      </a>
      <a
        href='https://github.com/ifefrost'
        target='_blank'
        rel='noreferrer'
        className='dark:text-white hover:text-black'
      >
        <FaGithub className='text-3xl' />
      </a>
    </div>
  );
};

export default Social;
