'use client'
import React, { useState } from 'react';
import Image from 'next/image';

import FolderModal from './components/FolderModal';

import { IoImagesOutline } from "react-icons/io5";
import { backgroundImageList } from '../BackgroundConfig/constants';
import Options from '../Options';

const Folder: React.FC<IFolder> = ({ Icon, label }: IFolder) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleOptions = () => setIsOpenOptions(!isOpenOptions);

  function handleOpen(event: any){
    if(event.detail === 2) toggle();
  }

  function handleOpenOptions(event: any){
    event.preventDefault();
    if(event.button === 2 && !isOpen) toggleOptions();
  }

  function leftOpen(){
    toggle();
    toggleOptions();
  }

  return (
    <button onClick={handleOpen} onContextMenu={handleOpenOptions} className='flex justify-center items-center pt-2 pb-2 pr-4 pl-4 w-20 rounded focus:bg-slate-300/10'>
      <div className='flex flex-col justify-center items-center relative w-16 h-auto'>
        <Icon size={48} color="#FFF"/>
        <span className='text-sm mt-2'>
          {label}
        </span>
      </div>
      {isOpenOptions && <Options toggle={leftOpen} label="Abrir" toggleOption={toggleOptions}/>}
      <FolderModal toggle={toggle} title={label} isOpen={isOpen}>
        <div className='flex flex-col bg-slate-900 w-80'>
          <div className="flex flex-row items-center p-4 cursor-pointer bg-slate-800">
            <IoImagesOutline />
            <span className='flex ml-4'>Images</span>
          </div>
        </div>
        <div className='flex flex-row flex-wrap pd4 gap-4 p-8 overflow-auto'>
          {backgroundImageList.map((image, index) => (
            <div 
            key={`bg-item--${index}`} 
            className='flex flex-col justify-center items-center w-56 h-36 overflow-hidden object-cover relative cursor-pointer'
          >
            <Image src={image} alt="settings-background-selected" className='w-56 h-36 object-cover' />
          </div>
          ))
          }
        </div>
      </FolderModal>
    </button>
  );
}

export default Folder;