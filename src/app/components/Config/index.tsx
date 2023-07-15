'use client'
import React, { Fragment, useState } from 'react';
import { FaGear } from 'react-icons/fa6';
import BackgroundConfig from '../BackgroundConfig';

const Config: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <FaGear className='cursor-pointer mr-3' size={16} color={"#FFF"} onClick={toggle}/>
      { isOpen ? <BackgroundConfig toggle={toggle} /> : '' }
    </Fragment>
  );
}

export default Config;