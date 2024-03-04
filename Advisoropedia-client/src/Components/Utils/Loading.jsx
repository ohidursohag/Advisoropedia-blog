const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-20 h-20  border-l-2 border-black rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
      <div className="w-16 h-16  border-b-2 border-black rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
        <div className="w-10 h-10  border-r-2  border-black rounded-full animate-[spin_1.8s_linear_infinite]"></div>
      </div>
    </div>
    </div>
  );
};

export default Loading;
