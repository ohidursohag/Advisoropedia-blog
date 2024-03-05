import { useEffect, useState } from "react";
import Container from "../Components/Utils/Container";
import SignUpForm from "../Components/Authenticate/SignUpForm";
import LoginForm from "../Components/Authenticate/LoginForm";
import { useLocation } from "react-router-dom";

const Authentication = () => {
  const [register, setRegister] = useState(false);


  let { state } = useLocation();
  useEffect(() => {
    if (state==='signup') {
      setRegister(true);   
    } else if (state==='login') {
      setRegister(false);      
    }
  }, [state]);
  return (
    <Container className={"flex justify-center items-center min-h-screen font-kodo-mono"}>
      <div className="w-[340px] sm:w-[500px] md:w-[750px] lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl rounded-lg ">
        {/* register form  */}
        <SignUpForm register={register} setRegister={setRegister} />
        {/* Sliding image part */}
        <div
          className={`absolute w-2/5 z-50 top-0 hidden h-full duration-500 items-center justify-center bg-gray-500 md:flex 
        ${register ? "translate-x-[150%]  duration-500" : ""}
        `}>
          <div
            className={`absolute -bottom-2 h-16 w-16 rounded-full bg-gradient-to-br duration-500  from-white via-gray-500 to-black ${
              register ? "-translate-x-[100%]" : "translate-x-[100%] "
            }`}
          />
          <div
            className={`absolute -top-2 h-16 w-16 rounded-full bg-gradient-to-br duration-500  from-white via-gray-500 to-black ${
              register ? "-translate-x-[100%]" : "translate-x-[100%] "
            }`}
          />
          <div
            className={`absolute  h-14 w-14 top-[50%] -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-gray-500 to-black transition-all duration-500 ${
              register ? "-translate-x-[275%]" : "translate-x-[275%] "
            }`}
          />
          <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-gray-500 to-black" />
          <div className="absolute left-[50%] bottom-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-gray-500 to-black" />
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-medium text-white/80 ">
              {register ? "Join with us" : "Wellcome Back"}
            </h2>
            <p className="animate-pulse text-sm text-white/60">
              Please Enter You Information
            </p>
          </div>
        </div>
        {/* login form */}
        <LoginForm register={register} setRegister={setRegister} />
      </div>
    </Container>
  );
};

export default Authentication;
