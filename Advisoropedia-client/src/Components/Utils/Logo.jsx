import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/">
      <div className=" sm:text-[35px  leading-[36px] lg:leading-[55px]  font-bold">
            <span className=" text-[25px] sm:text-[30px] xl:text-[40px]">A<span className="text-[20px] sm:text-[25px] xl:text-[30px]">dvisoro</span></span>
            <span className=" text-[25px] sm:text-[30px] xl:text-[40px]">P<span className="text-[20px] sm:text-[25px] xl:text-[30px]">edia</span></span>
          </div>
      </Link>
    </>
  );
};
export default Logo;
