'use client';
import React, { useState, useEffect } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [tasks, setTasks] = useState([]);

  //captures the values typed in the input title
  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  //captures the values typed in the input description
  const handleDescChange = e => {
    setDesc(e.target.value);
  };

  //captures the values typed in the input date
  const handleDateChange = e => {
    setDate(e.target.value);
  };

  const handleSave = () => {
    if (title && desc && date) {
      // Create a new task object
      const newTask = {
        title: title,
        desc: desc,
        date: date,
      };

      setTasks(prevTask => [...prevTask, newTask]); // Add the new task to the tasks array

      // Clear the input fields
      setTitle('');
      setDesc('');
      setDate('');
    }
  };

  useEffect(() => {
    console.log('Updated Tasks:', tasks);
  }, [tasks]);

  const deleteTask = index => {
    //any tasks clicked, check for the key, and remove that task from the tasks array.
    const tasksList = [...tasks];
    tasksList.splice(index, 1);
    setTasks(tasksList);
  };

  const completeTask = () => {};

  return (
    <div className='flex xs:flex-col lgl:flex-row lgl:mt-10'>
      <div className='mx-5 my-10 md:mx-20 lg:mx-8 lgl:w-1/2 lgl:h-full'>
        <h1 className='text-xl text-white underline text-center'>Create Task</h1>
        <div className='bg-white p-4 rounded-sm shadow-navbarShadow mt-3'>
          <form className='flex flex-col gap-2'>
            <input
              type='text'
              name='title'
              placeholder='Title'
              required
              value={title}
              onChange={handleTitleChange}
              className='rounded-md md:p-1 focus:border-green-600'
            />
            <textarea
              name='description'
              placeholder='Description'
              required
              value={desc}
              onChange={handleDescChange}
              className='rounded-md md:p-1 focus:border-green-600 h-28'
            />
            <input
              type='text'
              name='date'
              placeholder='Enter task deadline'
              required
              value={date}
              onChange={handleDateChange}
              className='rounded-md md:p-1 focus:border-green-600'
            />
            <button
              className='bg-green-600 rounded hover:opacity-70 active:bg-green-600 text-white'
              onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      </div>
      <div className='lgl:w-1/2'>
        <h1 className='text-xl text-white underline text-center'>Tasks</h1>
        {tasks.map((task, index) => (
          <div className='relative group my-5 '>
            <div
              key={index}
              className='bg-white mx-5 rounded-md flex flex-col p-2 group-hover:opacity-85 transition-opacity shadow-navbarShadow'>
              <h3 className=''>
                {task.title} | <span className='text-sm font-light'>{task.date}</span>
              </h3>
              <p className='mt-3'>{task.desc}</p>
              <div className='hidden absolute rounded-md group-hover:flex inset-0 bg-white bg-opacity-75 mx-5 items-center justify-center transition-opacity gap-5'>
                <button
                  onClick={completeTask}
                  className='bg-gray-300 rounded-md p-1 active:bg-opacity-60'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'>
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button
                  onClick={deleteTask}
                  className='bg-gray-300 rounded-md p-1 active:bg-opacity-60'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'>
                    <path
                      fillRule='evenodd'
                      d='M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Create;
