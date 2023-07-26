import React from 'react';

function Navbar() {
  return (
    <div className='bg-bgNav text-white text-xs sm:text-base'>
      <ul className='flex px-1 justify-evenly py-2'>
        <li className='hover:opacity-60 hover:cursor-pointer'>Home</li>
        <li className='hover:opacity-60 hover:cursor-pointer'>All Tasks</li>
        <li className='hover:opacity-60 hover:cursor-pointer'>Uncompleted</li>
        <li className='hover:opacity-60 hover:cursor-pointer'>Completed</li>
      </ul>
    </div>
  );
}

export default Navbar;
