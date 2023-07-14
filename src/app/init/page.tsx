import React from 'react';
import { Ubuntu } from 'next/font/google'

import Background from './components/Background';
import TopBar from './components/TopBar';
import Dock from './components/Dock';

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
    </section>
  );
}

export default DnrOS;