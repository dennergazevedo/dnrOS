import React, { Fragment } from 'react';
import { IoClose } from 'react-icons/io5';
import Backdrop from '../../Backdrop';

const FolderModal: React.FC<IFolderModal> = ({ children, toggle, title, isOpen }: IFolderModal) => {

  if(!isOpen) return <Fragment />

  return (
    <Fragment>
      <div className='flex max-h-96 flex-col z-20 absolute top-1/2 left-1/2 rounded -translate-x-1/2 -translate-y-1/2 bg-slate-800 w-9/12'>
        <div className='flex flex-row justify-between p-2 pr-4 pl-4 bg-zinc-900'>
          <span className='text-sm cursor-default'>
            { title }
          </span>
          <button className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer' onClick={toggle}>
            <IoClose size={16} color="#333"/>
          </button>
        </div>
        <div className='flex flex-row h-full w-full max-h-96 overflow-hidden'>
          { children }
        </div>
      </div>
      <Backdrop />
    </Fragment>
  )
}

export default FolderModal;