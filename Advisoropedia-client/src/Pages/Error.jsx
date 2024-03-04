import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[100vh] flex flex-col items-center justify-center gap-5 w-screen text-black bg-teal-50 ">
      <h1 className="text-5xl">404</h1>

      <p className="text-3xl">Page Not Found</p>
      <button
        className="hover:bg-black  bg-gray-500 duration-500 text-white px-3 py-2 rounded-lg"
        onClick={() => {
          navigate("/");
        }}>
        Go Back to Home
      </button>
    </div>
  );
};

export default Error;
