'use client'
import React, { Fragment, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa6';
import Window from '../Window';
import Loading from '../Loading';

const Shutdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [config, setConfig] = useState<string>('');

  function handleConfig(type: string){
    setConfig(type);
  }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <FaPowerOff className='cursor-pointer' size={16} color={"#FFF"} onClick={toggle}/>
      { isOpen && <Window toggle={toggle} handleConfig={handleConfig}/> }
      { config.length ? <Loading type={config} /> : '' }
    </Fragment>
  );
}

export default Shutdown;