'use client';
import React, { useEffect, useState } from 'react';
import { RiInstagramLine, RiLinkedinFill, RiGithubLine } from 'react-icons/ri'

import IconButton from '../IconButton';

const Dock: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => setShow(!show);

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 640) setIsMobile(true)
      else setIsMobile(false)
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      className='flex z-10 justify-center items-center h-20 p-2 w-full absolute left-0 bottom-0 overflow-hidden'
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <div className={`flex flex-row justify-center items-center pr-8 pl-8 border border-slate-300/20 bg-slate-800/50 h-full max-w-4xl rounded-2xl ${show || isMobile ? 'dock-show' : 'dock-hide'}`}>
        <ul className='flex flex-row'>
          <li className='mr-8'>
            <IconButton link='https://github.com/dennergazevedo' Icon={RiGithubLine} name="Github"/>
          </li>
          <li className='mr-8'>
            <IconButton link='https://www.linkedin.com/in/dnnr/' Icon={RiLinkedinFill} name="LinkedIn"/>
          </li>
          <li>
            <IconButton link='https://www.instagram.com/dnnraz/' Icon={RiInstagramLine} name="Instagram"/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Dock;