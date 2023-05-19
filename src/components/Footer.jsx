import Social from "./social";

const Footer = () => {
  return (
    <footer className=' bg-rose-900 py-10 text-white text-center w-full mt-auto'>
      <div className='mx-auto 2xl:max-w-screen-xl px-2 sm:px-6 lg:px-8 flex flex-col items-center'>
        <p className='font-bold text-lg'>Connect with me:</p>
        <Social />
        <p className='italic text-sm'>Designed and built by Ifeoluwa John Temilade Ladipo</p>
      </div>
    </footer>
  );
};
export default Footer;
