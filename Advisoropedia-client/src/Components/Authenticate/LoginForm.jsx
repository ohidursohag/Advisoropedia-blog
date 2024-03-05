import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from 'react-hot-toast';
import { userLogin } from '../../api/auth';
import useAuth from '../../hooks/useAuth';
// validation Schema
const loginFromValidation = yup.object({
  email: yup
  .string()
  .required("email is required")
  .email("invalid email format"),
  password: yup
    .string()
    .required("password is required")
})
const LoginForm = ({register:signup, setRegister}) => {
  const [showPass, setShowPass] = useState(false);
  const {currentUser,googleLogin} = useAuth()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm({ resolver: yupResolver(loginFromValidation) });
  // hnadle submit login info
  const onSubmit = async (data) => {
    // console.log(data);
    const toastId = toast.loading("Login in progress...");
    const userLoginData = {
      email: data.email,
      password: data.password,
    };
    
    try {
      const loginResponse = await userLogin(userLoginData);
      console.log(loginResponse)
      if (loginResponse.success) {
        toast.success("Successfully Logged In", { id: toastId });     
        currentUser(loginResponse.token);
        navigate("/", { replace: true });
      } else {
        toast.error("Something Went wrong", { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: toastId });
    }

  };
  return (
    <>
      <form id='login'
      onSubmit={handleSubmit(onSubmit)}
          className={`p-4 lg:p-8 w-[100%] mr-0 ml-auto duration-500 ${
            signup ? "translate-x-full hidden md:block" : ""
          }`}>
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4 text-center font-medium">Login</h1>
          <div className="space-y-5">
           {/* email */}
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder={errors.email ? errors.email?.message : "your email"}
              className={`px-3 py-2 block w-full outline-none border rounded-md  ${
                errors.email
                  ? "border-red-600 placeholder:text-red-600 placeholder:text-sm"
                  : "border-black placeholder:text-black"
              }`}
            />
            {errors.email?.type !== "required" ? (
              <p className="text-red-600 text-sm">{errors.email?.message}</p>
            ) : (
              ""
            )}
          </div>
            {/* Password */}    
          <div className="relative">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type={`${showPass ? "text" : "password"}`}
              {...register("password")}
              placeholder={
                errors.password ? errors.password?.message : "your password"
              }
              className={`px-3 py-2 block w-full outline-none border rounded-md  ${
                errors.password
                  ? "border-red-600 placeholder:text-red-600 placeholder:text-sm"
                  : "border-black placeholder:text-black"
              }`}
            />
            {errors.password?.type !== "required" ? (
              <p className="text-red-600 text-sm">{errors.password?.message}</p>
            ) : (
              ""
            )}
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute top-8 right-2 cursor-pointer text-gray-600">
              {!showPass ? (
                <IoMdEye size={25} />
              ) : (
                <IoMdEyeOff size={25} color="red" />
              )}
            </div>
          </div>
          </div>
          
          <button
            type="submit"
            className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">
            Submit
          </button>
          <p className="mb-3 text-center">
            Don&apos;t have an account?
            <button
            type='button'
              onClick={() => {
                setRegister(!signup);
                reset()
              }}
              className="underline font-semibold pl-1">
              Signup
            </button>
          </p>
          <hr />
          <button
          onClick={()=>googleLogin()}
            type="button"
            className="group py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black hover:shadow-2xl duration-500">
            <svg
              viewBox="-0.5 0 48 48"
              version="1.1"
              className="w-6 inline-block mr-3 group-hover:scale-110 duration-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000">
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>Google-color</title> <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)">
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)">
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Continue with Google
          </button>
        </form>
    </>
  )
};

LoginForm.propTypes = {
   register: PropTypes.bool,
   setRegister: PropTypes.func,
};

export default LoginForm;
