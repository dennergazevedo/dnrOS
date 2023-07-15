'use client'
import { useRouter } from 'next/navigation';
import { FaPowerOff } from 'react-icons/fa6';
export default function Shutdown() {
  const router = useRouter()
  
  function handlePowerOn(){
    router.push('/')
  }

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-4 bg-black md:p-24">
      <div onClick={handlePowerOn} className='cursor-pointer relative'>
        <div className='animate-ping w-8 h-8 bg-white/20 rounded-full'/>
        <FaPowerOff className='absolute left-0 bottom-0' size={32} color={"#ccc"}/>
      </div>
      <span className='text-xs mt-8 text-slate-400 white-shadow'>
        Power
      </span>
    </main>
  )
}
