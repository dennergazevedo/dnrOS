'use client'
import React from 'react';

import { IoArrowRedoSharp } from 'react-icons/io5';

const Shortcut: React.FC<IShortcut> = ({ Icon, label, short }: IShortcut) => {

  function handleClick(event: any){
    if(event.detail === 2){
      window.open('https://dnnr.dev/', '_ blank')
    }
  }

  return (
    <button onClick={handleClick} className='flex p-2 pr-4 pl-4 w-20 rounded focus:bg-slate-300/10'>
      <div className='flex flex-col justify-center items-center relative w-16 h-auto'>
        <Icon size={48} color="#FFF"/>
        {
          short ? 
          <div className='flex justify-center items-center absolute left-1 top-9 bg-white rounded w-3 h-3'>
            <IoArrowRedoSharp size={10} color="#000" />
          </div>
          : ''
        }
        <span className='text-sm mt-2'>
          {label}
        </span>
      </div>
    </button>
  );
}

export default Shortcut;