import { useCallback } from "react";
import { FaRegFileLines } from "react-icons/fa6";

const Download: React.FC<DownloadFC> = ({ label, path }: DownloadFC) => {

  return (
    <a download href={path} className='flex justify-center items-center pt-6 pb-2 pr-4 pl-4 w-20 rounded focus:bg-slate-300/10'>
      <div className='flex flex-col justify-center items-center relative w-16 h-auto'>
        <FaRegFileLines size={48} color="#FFF"/>
        <span className='text-sm mt-2'>
          {label}
        </span>
      </div>
    </a>
  );
}

export default Download;