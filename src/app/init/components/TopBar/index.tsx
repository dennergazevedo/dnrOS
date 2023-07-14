'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { parseMonth } from '@/utils/date';

import Config from '../Config';
import Shutdown from '../Shutdown';

const SECOND = 1000;
const MINUTE = 60 * SECOND;

const TopBar: React.FC = () => {

  const [hours, setHours] = useState<string>('')
  const [date, setDate] = useState<string>('')

  const getHours = useCallback(() => {
    const hour = ("0000" + new Date().getHours()).slice(-2)
    const minutes = ("0000" + new Date().getMinutes()).slice(-2)
    setHours(`${hour}:${minutes}`);
    setTimeout(() => {
      getHours();
    }, SECOND)
  }, [])

  const getDate = useCallback(() => {
    const today = new Date();
    const month = parseMonth[today.getMonth()]
    setDate(`${month} ${("00" + new Date().getDate()).slice(-2)}`)

    setTimeout(() => {
      getDate()
    }, MINUTE)
  }, [])

  useEffect(() => {
    getHours();
    getDate();
  }, [getDate, getHours])

  return (
    <section className="flex flex-row z-10 justify-between text-sm pt-1 pb-1 pr-4 pl-4 bg-zinc-900">
      <div />
      <div className="flex flex-row items-center cursor-default">
        <span className="mr-2">{ date }</span>
        <span>{ hours }</span>
      </div>
      <div className='flex flex-row items-center'>
        <Config />
        <Shutdown />
      </div>
    </section>
  );
}

export default TopBar;