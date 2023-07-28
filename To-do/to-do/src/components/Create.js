import React from 'react';

function Create() {
  return (
    <div className='mx-5 my-10  md:mx-20 lg:mx-2 lgl:w-3/4 lgl:h-full'>
      <h1 className='text-xl text-white underline text-center'>Create Task</h1>
      <div className='bg-white p-4 rounded-sm shadow-navbarShadow mt-3'>
        <form className='flex flex-col gap-2'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            required
            className='rounded-md md:p-1 focus:border-green-600'
          />
          <textarea
            name='description'
            placeholder='Description'
            required
            className='rounded-md md:p-1 focus:border-green-600 h-28'
          />
          <input
            type='text'
            name='date'
            placeholder='Enter task deadline'
            required
            className='rounded-md md:p-1 focus:border-green-600'
          />
          <button className='bg-green-600 rounded hover:opacity-70 active:bg-green-600 text-white'>Save</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
