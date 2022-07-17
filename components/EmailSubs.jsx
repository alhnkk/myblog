import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { AiFillAccountBook, AiFillAndroid , AiOutlineMail} from "react-icons/ai";

const EmailSubs = () => {
 
  return (
    <div className='border border-blue-500 shadow-sm rounded-md p-8 mb-8 pb-12 '>
      <h2>
      <AiOutlineMail/>
      </h2>
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

export default EmailSubs