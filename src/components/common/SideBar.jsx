"use client"

import React, { useState } from 'react'
import { FaChartPie, FaFileInvoice } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdClose } from "react-icons/io";


const menuItems = [
    {
        name: 'Home',
        icon: <IoIosHome className='text-xl' />,
        href: '/'
    },
    {
        name: 'Invoice',
        icon: <FaFileInvoice className='text-xl' />,
        href: '#'
    },
    {
        name: 'Product',
        icon: <AiOutlineProduct className='text-xl' />,
        href: '#'
    }
];

export default function SideBar() {

    const [show, setShow] = useState(false);

    return (
        <div className='d__sidebar__in lg:p-8  h-full'>
            <div className='grid gap-[70px] capitalize'>
                <div className='flex items-center justify-between p-4'>
                    <Link
                        to="/"
                        className='flex items-center gap-x-2'
                    >
                        <FaChartPie className='primary__blue lg:text-4xl text-3xl' />
                        <span className='font-bold text-xl unde'>MsonDev.</span>
                    </Link>

                    <div className='md:block lg:hidden cursor-pointer'
                        onClick={() => setShow(prev => !prev)}>
                        {
                            show ? <IoMdClose className='text-2xl' /> : <RiMenu3Fill className='text-2xl' />
                        }
                    </div>
                </div>

                <ul className={`lg:grid gap-y-5 lg:relative fixed z-[99] transition-transform duration-300 ease-in-out  ${show ?
                    'top-0 left-0 h-full w-[80%] bg-white z-[50] p-4 translate-x-0 space-y-3' :
                    'lg:translate-0 -translate-x-full'}
                        `}>
                    {menuItems.map((item) => {

                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className={`flex gap-x-2 items-center py-3 px-3 text-sm rounded font-medium transition-all duration-200 text-gray-700 bg-blue-100 hover:bg-blue-200 hover:text-white}`}
                                >{item.icon} {item.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
