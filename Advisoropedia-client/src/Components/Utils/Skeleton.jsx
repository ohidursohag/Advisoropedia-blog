const Skeleton = () => {
   return (
      <div className='group max-w-[450px] cursor-pointer border-b-4 border-gray-300 rounded-3xl animate-pulse'>
      <div className='rounded-3xl bg-gray-300 overflow-hidden mb-3 w-full relative h-[200px]'/>
      
      <div className='p-2'>
       {/* content */}
       <div className='flex items-center justify-between gap-2 '>
         <div className='px-3 py-2 w-20 h-6 bg-gray-300  text-white rounded-lg inline-block'/>
         <div className='flex items-center gap-2'>
           <div className='size-8 bg-gray-300 rounded-xl overflow-hidden'/>
           <div className='flex items-center gap-2'>
           <p className='bg-gray-300 rounded-xl font-bold h-6 w-20'/>
           <span>|</span>
           <div className='bg-gray-300 rounded-xl h-6 w-20'/>
           </div>
         </div>
       </div>
       {/* title & description */}
       <div className='my-3'>
         <div className=' bg-gray-300 rounded-xl mb-2 w-full h-10'/>
         <div className=' bg-gray-300 rounded-xl w-full h-[100px]'/>
       </div>
      </div>
   </div>  
   );
 };
 
 export default Skeleton;