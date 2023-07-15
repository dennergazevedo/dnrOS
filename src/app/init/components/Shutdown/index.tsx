'use client'
import React, { Fragment, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa6';
import Window from '../Window';

const Shutdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <FaPowerOff className='cursor-pointer' size={16} color={"#FFF"} onClick={toggle}/>
      { isOpen && <Window toggle={toggle} /> }
    </Fragment>
  );
}

export default Shutdown;