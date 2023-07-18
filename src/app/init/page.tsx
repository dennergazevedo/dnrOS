'use client'
import React from 'react';
import { Ubuntu } from 'next/font/google'

import { AiOutlineGlobal } from 'react-icons/ai';

import Background from '../components/Background';
import TopBar from '../components/TopBar';
import Dock from '../components/Dock';
import Shortcut from '../components/Shortcut';

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ['latin'],
  preload: true
})

const DnrOS: React.FC = () => {
  return (
    <section className={`${ubuntu.className} flex flex-col w-screen h-screen max-h-screen overflow-hidden`}>
      <Background />
      <TopBar />
      <Dock />
      <div className='flex flex-col z-30 p-4 w-auto'>
        <Shortcut Icon={AiOutlineGlobal} label="Portfolio" short={true}/>
      </div>
    </section>
  );
}

export default DnrOS;