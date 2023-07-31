import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='bg-bgNav text-white text-xs sm:text-base'>
      <ul className='flex px-1 justify-evenly py-2'>
        <li className='hover:opacity-60 hover:cursor-pointer'>
          <Link href='./Create'>Home</Link>
        </li>
        <li className='hover:opacity-60 hover:cursor-pointer'>
          <Link href='./Alltasks'>All Tasks</Link>
        </li>
        <li className='hover:opacity-60 hover:cursor-pointer'>
          <Link href='./Uncompleted'>Uncompleted</Link>
        </li>
        <li className='hover:opacity-60 hover:cursor-pointer'>
          <Link href='./Completed'>Completed</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
