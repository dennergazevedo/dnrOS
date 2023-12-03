import React, { Fragment } from 'react';
import Backdrop from '../Backdrop';

const Options: React.FC<IOptions> = ({ toggle, label, toggleOption }: IOptions) => {
  return (
    <Fragment>
      <div className='h-screen w-screen absolute' onClick={toggleOption}/>
      <div className="left-24 absolute bg-zinc-900 w-72 p-1">
        <span onClick={toggle} className='w-full h-full flex justify-center items-center cursor-pointer hover:bg-zinc-800'>
          { label }
        </span>
      </div>
    </Fragment>
  )
}

export default Options;