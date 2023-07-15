'use client'
import React, { Fragment, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Image from 'next/image';

import { backgroundImageList } from './constants';

const BackgroundConfig: React.FC<IBackgroundConfig> = ({ toggle }: IBackgroundConfig) => {
  const [selectedBg, setSelectedBg] = useState<number>(0);

  const handleSelectBg = (index: number) => {
    setSelectedBg(index);
    localStorage.setItem('@dnr:osbg', `${index}`);
    window.postMessage({eventName: '@dnr:bgchange', value: index}, '*')
  }

  useEffect(() => {
    const savedBg = localStorage.getItem('@dnr:osbg');
    if(savedBg) setSelectedBg(Number(savedBg))
  }, [])

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
        <div className='flex flex-col justify-center items-center h-full w-full p-8'>
          <div className='flex flex-col justify-center items-center w-56 h-full'>
            <Image src={backgroundImageList[selectedBg]} alt="settings-background-selected" className='w-56 h-36 object-cover'/>
            <span className='text-sm mt-4 text-slate-500'>Selected background</span>
          </div>
          <hr className='border-b border-t-0 flex w-full border-slate-500 m-8'/>
          <div className='flex w-full'>
            <ul className='flex flex-row items-center flex-wrap gap-4 max-h-60 overflow-auto'>
              {
                backgroundImageList.map((item, index) => (
                  <div 
                    key={`bg-item--${index}`} 
                    className='flex flex-col justify-center items-center w-56 h-36 overflow-hidden object-cover relative cursor-pointer'
                    onClick={() => handleSelectBg(index)}
                  >
                    <Image src={item} alt="settings-background-selected" className='w-56 h-36 object-cover' />
                    {
                      selectedBg === index ?
                      <AiOutlineCheckCircle size={16} color="#FFF" className='absolute bottom-1 right-1'/> 
                      : ''
                    }
                  </div>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BackgroundConfig;