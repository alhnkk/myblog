import React, {useState, useEffect, useRef} from 'react'
import { submitComment } from '../services';

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMesage, setShowSuccessMesage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])
  

  const handleCommentSubmission = () => {
    setError(false);
    const {value: comment } = commentEl.current
    const {value: name } = nameEl.current
    const {value: email } = emailEl.current
    const {checked: storeData } = storeDataEl.current
    if(!comment || !name || !email) {
      setError(true)
      return;
    }
    const commentObj = {name, email, comment, slug}

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email)
    }else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('name', name);
    }
    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMesage(true);
        setTimeout(() => {
          setShowSuccessMesage(false)
        }, 3000);
      })
  };
  return (
    <div className='bg-white rounded-lg p-8 pb-12 mb-8'>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Gönderiyi Yorumlayın
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
        <textarea 
        ref={commentEl}
        type="text" 
        className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
        name="comment"
        placeholder="Bir şeyler yazın" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
        ref={nameEl}
        type="text"
        className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
        placeholder='Adınızı Girin'
        name='name'
        />

<input
        ref={emailEl}
        type="text"
        className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
        placeholder='Mail Adresinizi Girin'
        name='email'
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input type="checkbox" id='storeData' name='storeData' ref={storeDataEl} value="true" />
          <label className='text-gray-500 cursor-pointer ml-2'  htmlFor='storeData'>Sonraki yorumlarım için adımı ve mailimi kaydet</label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>Tüm alanları doldurmalısınız.</p>}


      <div className="mt-8">
        <button
        type='button' 
        onClick={handleCommentSubmission}
        className='transition duration-500 ease hover:bg-indigo-900 inline-block rounded-full bg-sky-400 text-lg  text-white px-8 py-3 cursor-pointer'
        >Gönder</button>
        {showSuccessMesage && <span className='text-xl float-right font-semibold mt-3 text-green-500 '>Yorumunuz onaylandıktan sonra yayınlanacak.</span>}
      </div>
    
    </div>
  )
}

export default CommentsForm