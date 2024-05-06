'use client'
import React from 'react';
import { Ubuntu } from 'next/font/google'

import { AiOutlineGlobal } from 'react-icons/ai';
import { IoMdFolderOpen } from "react-icons/io";

import Background from '../components/Background';
import TopBar from '../components/TopBar';
import Dock from '../components/Dock';
import Shortcut from '../components/Shortcut';
import Folder from '../components/Folder';
import Download from '../components/Download';

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ['latin'],
  preload: true
})

const DnnrOS: React.FC = () => {
  return (
    <section className={`${ubuntu.className} flex flex-col w-screen h-screen max-h-screen overflow-hidden`}>
      <Background />
      <TopBar />
      <Dock />
      <div className='flex flex-col p-4 w-auto z-10'>
        <Shortcut Icon={AiOutlineGlobal} label="Portfolio"/>
        <Folder Icon={IoMdFolderOpen} label="Explorar"/>
        <Download label="Currículo.pdf" path='/Currículo.pdf'/>
      </div>
    </section>
  );
}

export default DnnrOS;