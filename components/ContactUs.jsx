import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const [sendMessage, setSendMessage] = useState(false);




    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_r7wxp9n', form.current, 'YrY1aAkSfM3Ep6RB9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='mx-5 lg:mx-auto shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8  mt-36  lg:w-96'>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-6">
          <label className=' block mb-2 text-sm font-medium text-gray-900'>İsim</label>
          <input className=' shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' type="text" placeholder='Adınızı girin...' name="fullName" />
          </div>
        <div>
        <label for="email-address-icon" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="text" id="email-address-icon" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mail adresinizi girin..." />
          </div>
        </div>
        <div>
        <label for="message" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> Mesaj</label>
        <textarea name='message' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bir şeyler yazın..."></textarea>
        <input className='btn-grad transition duration-500 transform hover:-translate-y-1   cursor-pointer text-lg font-medium rounded-md  px-6 py-3 mt-5' type="submit" value="Gönder" onClick={(e) => setSendMessage(true)} />  
        </div>
      </form>

      {
        sendMessage ?
        <div id="alert-1" className="flex p-4 mb-4 text-green-700 bg-green-100 rounded-lg dark:bg-blue-200" role="alert">
        <svg className="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div className="ml-3 text-sm font-medium text-green-700 bg-green-100">
          Mesajını aldım. Teşekkür ederim
        </div>
        <button onClick={() => setSendMessage(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 text-green-700 bg-green-100 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-green-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      : null
        
      }
      
    </div>
  );
};
