import Image from 'next/image';
import React from 'react';
import Bg from '@/assets/bg.png'

const Background: React.FC = () => {
  return (
    <Image src={Bg} alt='background' className='flex z-0 absolute bottom-0 object-cover left-0 w-screen h-screen' />
  );
}

export default Background;