'use client'
import React, { useState } from 'react';

import { IoArrowRedoSharp } from 'react-icons/io5';
import Options from '../Options';

const Shortcut: React.FC<IShortcut> = ({ Icon, label }: IShortcut) => {

  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const toggleOptions = () => setIsOpenOptions(!isOpenOptions);

  function handleOpenOptions(event: any){
    event.preventDefault();
    if(event.button == 2) toggleOptions();
  }

  function handleClick(event: any){
    if(event.detail === 2){
      redirect();
    }
  }

  function redirect(){
    window.open('https://dnnr.dev/', '_ blank')
  }

  function leftOpen(){
    redirect();
    toggleOptions();
  }

  return (
    <button onClick={handleClick} onContextMenu={handleOpenOptions} className='flex justify-center items-center pt-2 pb-2 pr-4 pl-4 w-20 rounded focus:bg-slate-300/10'>
      {isOpenOptions && <Options toggle={(leftOpen)} label="Abrir" toggleOption={toggleOptions}/>}
      <div className='flex flex-col justify-center items-center relative w-16 h-auto'>
        <Icon size={48} color="#FFF"/>
        <div className='flex justify-center items-center absolute left-1 top-9 bg-white rounded w-3 h-3'>
          <IoArrowRedoSharp size={10} color="#000" />
        </div>
        <span className='text-sm mt-2'>
          {label}
        </span>
      </div>
    </button>
  );
}

export default Shortcut;