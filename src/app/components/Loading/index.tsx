import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ImSpinner2 } from 'react-icons/im';

const END_LOADING = 3000;

const Loading: React.FC<ILoading> = ({ type }: ILoading) => {
  const router = useRouter()

  useEffect(() => {
    console.log("type", type);
    if(type === 'reload'){
      setTimeout(() => { router.push('/') }, END_LOADING)
    }else if (type === 'shutdown'){
      setTimeout(() => { router.push('/shutdown') }, END_LOADING)
    }
  }, [router, type])

  return (
    <div className='z-20 flex flex-col justify-center items-center h-screen w-screen absolute left-0 top-0 bg-black/60'>
      <ImSpinner2 size={48} color={'#FFF'} className='z-30 animate-spin'/>
    </div>
  );
}

export default Loading;