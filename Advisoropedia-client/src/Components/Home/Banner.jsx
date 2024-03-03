import bannerAnimation from "../../assets/lottie/banner.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center  text-center md:text-left md:h-[400px] lg:h-[550px] mt-20 max-w-[1200px] mx-auto">
      <div className=" md:w-1/2 px-4 md:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 md:mb-5">
          Dive deep <br className="hidden md:block" /> into thought <br /> Learn more <br className="hidden md:block"/> achieve more
        </h1>
        <p className="opacity-70">
          Find Your Sanctuary, Lease Your Lifestyle. Home Hoppers - Where
          Comfort Meets Convenience.
        </p>
      </div>
      <div className="sm:w-[300px] lg:w-[400px] xl:w-[400px]">
        <Lottie animationData={bannerAnimation} width={300} loop={true} />
      </div>
    </div>
  );
};

export default Banner;
