import React from 'react';

function Create() {
  return (
    <div className='bg-white mx-5 my-10 p-4 rounded-sm'>
      <form className='flex flex-col  gap-2'>
        <input
          name='title'
          placeholder='Title'
          required
          className='rounded-md focus:border-green-600'
        />
        <textarea
          name='description'
          placeholder='Description'
          required
          className='rounded-md focus:border-green-600 h-28'
        />
        <button className='bg-green-600 rounded hover:opacity-70 active:bg-green-600 text-white'>Save</button>
      </form>
    </div>
  );
}

export default Create;
