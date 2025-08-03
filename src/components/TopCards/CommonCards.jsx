import React from 'react'

export default function CommonCards({ data }) {
    const {
        title,
        Icon,
        figure,
        profit,
        colors
    } = data;
    return (
        <div className='lg:border-r lg:border-b-0 border-gray-300 lg:flex-1/4 w-[48%] last:border-0 lg:pl-8 lg:p-0 rounded py-2 px-3 lg:bg-transparent bg-white'>
            <div className='flex lg:gap-x-5 gap-x-3 lg:items-start items-center'>
                {Icon}
                <div className='content__div'>
                    <span className='lg:text-sm text-[12px] font-medium text-gray-500 capitalize'>{title}</span>
                    <p className='flex items-end lg:gap-x-3 gap-x-2 lg:pt-3 pt-1'>
                        <b className="font-medium lg:text-2xl text-[14px] text-gray-600">{figure}</b>
                        <span className={`block text-[10px] font-medium rounded-xl lg:px-3 px-2 py-[1px] lg:mb-1
                        ${colors === "pink" ? 'bg-pink-50 text-pink-600' : 'bg-green-100 text-green-800'}
                        `}>{profit}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
