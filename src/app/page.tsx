'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const STEP_SIZE = 1500;
const END_LOADING = 10000;

export default function Home() {
  const router = useRouter()
  
  const [control, setControl] = useState({
    boot: false,
    author: false,
    notice: false,
    name: false,
    loading: false
  })

  useEffect(() => {
    setControl(prev => ({
      ...prev,
      boot: true
    }))

    setTimeout(() => {
      router.push('/init')
    }, END_LOADING)

  }, [router])

  useEffect(() => {
    const { boot, author, loading, name, notice } = control;
    if(!boot || (boot && author && loading && name && notice)) return

    setTimeout(() => {
      setControl(prev => ({
        boot: true,
        author: prev.boot ? true : false,
        notice: prev.author ? true : false,
        name: prev.notice ? true : false,
        loading: prev.notice ? true : false
      }))
    }, STEP_SIZE)
  }, [control])

  return (
    <main className="flex min-h-screen flex-col p-4 bg-black md:p-24">
      {
        control.boot &&
        <p className="w-fit text-xs os-typewriter mb-2">
          BOOTING OS.DNNR - v1.0.13
        </p>
      }
      {
        control.author &&
        <p className="w-fit text-xs os-typewriter mb-20">
          DEVELOPED BY DNNR - 2023
        </p>
      }
      {
        control.notice &&
        <p className="w-fit text-xs os-typewriter mb-2">
          A EXPERIMENTAL OS:
        </p>
      }
      {
        control.name &&
        <h1 className="w-fit os-typewriter mb-12 logo text-4xl md:text-6xl">
          OS.dnnr
        </h1>
      }
      {
        control.loading &&
        <p className="w-fit text-xs os-typewriter">
          PLEASE WAIT<span className="font-blink">_</span>
        </p>
      }
    </main>
  )
}
