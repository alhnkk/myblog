import React, {useEffect, useState} from 'react'
import { getCategories } from '../services'
import Link from 'next/link'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      getCategories()
        .then((newCategories)=> setCategories(newCategories))
  }, [])
  return (
    <div className='border bg-white shadow-sm rounded-md p-8 mb-8 pb-12'>
        <h3 className='text-xl mb-8 font-medium text-blue-900  pb-1'> 
          Kategoriler
        </h3>
        {categories.map((category) => (
          <ul>
            <li className='border-b border-gray-2'>
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className="cursor-pointer block pb-3 mb-3 text-gray-700">
                {category.name}
              </span>
            </Link>
            </li>
          </ul>
        ))}      
    </div>
  )
}

export default Categories