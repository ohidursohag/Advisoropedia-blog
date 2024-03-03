const Skeleton = () => {
   return (
      <div className="w-[400px] md:w-[350px]  bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse">
      {/* Card Image Skeleton */}
      <div className="w-full h-[190px] bg-gray-400 rounded-2xl"/> 
      {/* Card Heading and Rating Skeleton */}
      <div className="space-y-2">
        <div className="h-6 w-2/3 rounded bg-gray-300"/>
        <div className="flex gap-1">
          <div className="h-4 w-4 rounded bg-gray-300"/>
          <div className="h-4 w-4 rounded bg-gray-300"/>
          <div className="h-4 w-4 rounded bg-gray-300"/>
          <div className="h-4 w-4 rounded bg-gray-300"/>
          <div className="h-4 w-4 rounded bg-gray-300"/>
        </div>
      </div>
      {/* Price and Add to Cart Button Skeleton */}
      <div className="mt-5 flex justify-between items-center font-medium">
        <div className="h-6 w-1/4 rounded bg-gray-300"></div>
        <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
      </div>
    </div>    
   );
 };
 
 export default Skeleton;