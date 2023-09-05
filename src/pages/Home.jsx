import profile from "../assets/profile.png";
import Social from "../components/Social";
const Home = () => {
  return (
    <div className='mx-auto px-2 md:px-8 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-screen-xs max-w-sm'>
      <div className='bg-rose-700 rounded-b-[32px] h-[40rem] flex gap-8 items-center px-24 overflow-hidden'>
        <div className='flex-1 flex flex-col gap-5'>
          <p className='text-white text-lg'>Hello, I'm Ife John Ladipo</p>
          <h3 className='lg:text-[3rem] md:text-[2rem] text-[1.75rem] leading-none font-bold text-white'>
            A <em>versatile</em> software engineer with a{" "}
            <em>keen eye for detail</em> and a <em>dedication</em> to{" "}
            <em>clean, efficient code</em>.
          </h3>
          <Social />
          <div className='flex flex-col lg:flex-row gap-5 sm:gap-5 j'>
            <a className='cursor-pointer border-white border-2 hover:bg-white hover:text-black text-white text-center font-bold p-2 md:py-3 md:px-8 rounded-xl lg:rounded-3xl hover:shadow' href="./work">
              My Work Info
            </a>
            {/* <a className='cursor-pointer border-white border-2 hover:bg-white hover:text-black text-white text-center p-2 font-bold md:py-3 md:px-8 rounded-xl lg:rounded-3xl hover:shadow'>
              More About Me
            </a> */}
          </div>
        </div>
        <div className='rounded-full bg-[#fdb813] flex-1 lg:mt-auto hidden md:block'>
          <img src={profile} alt='side profile of ife' className='' />
        </div>
      </div>
    </div>
  );
};
export default Home;
