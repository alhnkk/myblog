import React, {useEffect, useState} from 'react'
import Link from 'next/link'

const Categories = () => {
 
  return (
    <div className='border border-blue-500 shadow-lg rounded-lg p-8 mb-8 pb-12 '>
<svg className='flex w-10 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#222" d="M53.42,53.32H10.58a8.51,8.51,0,0,1-8.5-8.5V19.18a8.51,8.51,0,0,1,8.5-8.5H53.42a8.51,8.51,0,0,1,8.5,8.5V44.82A8.51,8.51,0,0,1,53.42,53.32ZM10.58,13.68a5.5,5.5,0,0,0-5.5,5.5V44.82a5.5,5.5,0,0,0,5.5,5.5H53.42a5.5,5.5,0,0,0,5.5-5.5V19.18a5.5,5.5,0,0,0-5.5-5.5Z"/><path fill="#222" d="M32,38.08a8.51,8.51,0,0,1-5.13-1.71L3.52,18.71a1.5,1.5,0,1,1,1.81-2.39L28.68,34a5.55,5.55,0,0,0,6.64,0L58.67,16.32a1.5,1.5,0,1,1,1.81,2.39L37.13,36.37A8.51,8.51,0,0,1,32,38.08Z"/><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62L21.57 30.11a1.5 1.5 0 0 1 2 2.24L5.17 48.76A1.46 1.46 0 0 1 4.17 49.14zM59.83 49.14a1.46 1.46 0 0 1-1-.38L40.43 32.35a1.5 1.5 0 1 1 2-2.24L60.82 46.52a1.5 1.5 0 0 1-1 2.62z"/></svg>

        <h3 className='text-xl ml-2 mb-3'> 
          Yeni gönderiler hakkında mail almak ister misiniz?
        </h3>
        <div className='ml-2'>
        <input type="text" placeholder='Mail adresiniz' className='rounded-lg border-none bg-3 mb-2 placeholder:text-center placeholder:text-slate-400' />
        
        <span className="flex mx-auto w-32 justify-center btn-grad px-5 transition duration-500 transform hover:-translate-y-1 mt-2  cursor-pointer text-lg font-medium rounded-md  ">
            Abone Ol
        </span>
        
        <span className='flex underline decoration-wavy justify-center mt-2'>Spam Gönderilmez.</span>
        </div>
    </div>
  )
}

export default Categories