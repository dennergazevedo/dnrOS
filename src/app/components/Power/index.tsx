'use client'
import React, { Fragment, useState } from 'react';
import { IoClose } from 'react-icons/io5'
import { FaPowerOff } from 'react-icons/fa6';
import { RxReload } from 'react-icons/rx';

const Window: React.FC<IWindow> = ({ toggle, handleConfig }: IWindow) => {
  return (
    <Fragment>
      <div className='z-10 flex flex-col justify-center items-center h-screen w-screen absolute left-0 top-0 bg-black/60'/>
      <div className='flex flex-col z-20 absolute top-1/2 left-1/2 rounded overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-zinc-300 w-72 md:w-96'>
        <div className='flex flex-row justify-between p-2 pr-4 pl-4 bg-zinc-900'>
          <span className='text-sm cursor-default'>
            Turn off the dnrOS?
          </span>
          <button className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer' onClick={toggle}>
            <IoClose size={16} color="#333"/>
          </button>
        </div>
        <div className='flex justify-center items-center h-40 w-full'>
          <ul className='flex flex-row items-center justify-around p-4 pr-8 pl-8 w-full'>
            <li className='flex justify-center items-center w-14 h-14 bg-zinc-900 rounded cursor-pointer' onClick={() => handleConfig('shutdown')}>
              <FaPowerOff size={24} color={"#FFF"}/>
            </li>
            <li className='flex justify-center items-center w-14 h-14 bg-zinc-900 rounded cursor-pointer' onClick={() => handleConfig('reload')}>
              <RxReload size={24} color={"#FFF"}/>
            </li>
            <li className='flex justify-center items-center w-14 h-14 bg-zinc-900 rounded cursor-pointer' onClick={toggle}>
              <IoClose size={32} color={"#FFF"}/>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Window;