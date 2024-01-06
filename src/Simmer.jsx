import React from 'react';

const Simmer = () => {
  const mapped = Array.from({ length: 15 }).map((val, index) => {
    return (
      <div key={index} className="w-screen  mb-8  h-80 sm:w-1/2 md:w-1/4 p-2  rounded-3xl  shadow-xl m-2">
      <h1 className=' shadow-xl m-4 h-10 '></h1>
      <h1 className=' shadow-xl m-4 h-10 '></h1>
      <h1 className=' shadow-xl m-4 h-10 '></h1>
      <h1 className=' shadow-xl m-4 h-10 '></h1>
      
       </div>
    );
  });

  return (
    <div className='flex flex-wrap mb-10 justify-between '>
      {mapped}
    </div>
  );
};

export default Simmer;
