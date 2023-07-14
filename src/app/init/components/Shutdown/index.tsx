import React from 'react';
import { FaPowerOff } from 'react-icons/fa6';

const Shutdown: React.FC = () => {
  return (
    <FaPowerOff className='cursor-pointer' size={16} color={"#FFF"}/>
  );
}

export default Shutdown;