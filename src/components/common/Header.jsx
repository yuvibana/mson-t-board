import React from 'react'
import { FaSearch } from "react-icons/fa";


export default function Header() {
  return (
    <header className='d__header'>
      <div className='d_header__inner flex justify-between'>
        <div className='left__side relative md:w-[60%] flex items-center bg-gray-50 px-2 rounded'>
          <div className='absolute text-gray-600'>
            <FaSearch />
          </div>
          <input
            className='md:px-2 md:py-2 lg:pl-[45px] pl-[30px] w-full outline-0'
            placeholder='Search Here...' />
        </div>
        <div className='flex items-center gap-x-4'>
          <img
            src={"/assets/images/user.png"}
            width={35}
            height={35}
            className='rounded-full'
            alt='admin'
          />
          <div className='card cursor-pointer'>
            <span className='block text-sm font-medium'>David</span>
            <span className='bloc text-gray-600 text-xs'>Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}
