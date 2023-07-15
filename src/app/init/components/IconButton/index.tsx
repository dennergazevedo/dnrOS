import Link from 'next/link';
import React from 'react';

const IconButton: React.FC<IconButton> = ({ Icon, link, name }: IconButton) => {
  return (
    <Link 
      href={link} 
      target='_blank' 
      aria-label={name}
      className={`flex linear-bg-white shadow-white rounded-md transition-all p-2 cursor-pointer hover:bg-slate-300/10`}
    >
      <Icon size={24} color={"#FFF"}/>
    </Link>
  )
}

export default IconButton;