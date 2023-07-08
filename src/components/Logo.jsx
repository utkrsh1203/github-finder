import React from "react";
import { BsGithub } from "react-icons/bs";

const Logo = () => {
  return (
    <div className='flex border-b border-gray-500 p-2 justify-between items-center'>
      <div>
        <a href='/' className='flex flex-row items-center justify-center'>
          <img
            src='https://cdn3.iconfinder.com/data/icons/inficons/512/github.png'
            className='w-24 rounded-full'
          />
          <h1 className='text-2xl px-2 first-letter:text-5xl'>GitHub Users</h1>
        </a>
      </div>
      <ul className='text-2xl px-4 flex flex-row items-center justify-center'>
        <a className='px-3' href=''>
          <BsGithub />
        </a>
      </ul>
    </div>
  );
};

export default Logo;
