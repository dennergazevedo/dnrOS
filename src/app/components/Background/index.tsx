'use client'
import Image from 'next/image';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import { backgroundImageList } from '../BackgroundConfig/constants';

const Background: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSelect = useCallback((event: any) => {
    if(event.data.eventName === '@dnnr:bgchange'){
      setSelected(Number(event.data.value))
    }
  }, [])

  useEffect(() => {
    const savedBg = localStorage.getItem('@dnnr:osbg');
    if(savedBg) setSelected(Number(savedBg))
    window.addEventListener('message', handleSelect)
    setLoading(false);
  }, [handleSelect])

  if(loading) return (
    <ImSpinner2 size={48} color={'#FFF5'} className='animate-spin flex z-0 absolute bottom-2/4 left-2/4'/>
  )

  return (
    <Image src={backgroundImageList[selected]} alt='background' className='flex z-0 absolute bottom-0 object-cover left-0 w-screen h-screen' />
  );
}

export default Background;