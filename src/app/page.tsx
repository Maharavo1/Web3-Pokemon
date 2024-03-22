import React from 'react';

const CircleBackground = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center' style={{ background: 'linear-gradient(to right, #FF5733, #FFBD33, #33FF57)' }}>
      <div className='flex flex-col items-center justify-between text-center'>
        <div className='mb-10 flex justify-between gap-5'>
          <h1 className='ml-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-center text-7xl font-semibold text-transparent'>
           POKEMON
          </h1>
        </div>
        <div className='mt-10 flex justify-between gap-5'>
          <a
            href='/server'
            className='rounded-lg bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-400 hover:via-green-500 hover:to-blue-500'
            style={{ transitionDuration: '0.3s' }} 
          >
            Server
          </a>
          <a
            href='/client'
            className='rounded-lg bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-400 hover:via-green-500 hover:to-blue-500'
            style={{ transitionDuration: '0.3s' }} 
          >
            Client
          </a>
        </div>
      </div>
    </div>
  );
};

export default CircleBackground;
