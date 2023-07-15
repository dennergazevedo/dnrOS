'use client'
import React, { Fragment } from 'react';
import { IoClose } from 'react-icons/io5'

const BackgroundConfig: React.FC<IBackgroundConfig> = ({ toggle }: IBackgroundConfig) => {
  return (
    <Fragment>
      <div className='z-10 flex flex-col justify-center items-center h-screen w-screen absolute left-0 top-0 bg-black/60'/>
      <div className='flex flex-col z-20 absolute top-1/2 left-1/2 rounded overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-slate-800 w-9/12'>
        <div className='flex flex-row justify-between p-2 pr-4 pl-4 bg-zinc-900'>
          <span className='text-sm cursor-default'>
            Settings
          </span>
          <button className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer' onClick={toggle}>
            <IoClose size={16} color="#333"/>
          </button>
        </div>
        <div className='flex justify-center items-center h-full w-full p-8'>
          <div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BackgroundConfig;