import React from 'react'
import CommonCards from './CommonCards'
import { cardsData } from './CardsData';

export default function CardsWrapper() {
  if (!Array.isArray(cardsData) || cardsData.length === 0) return null;

  return (
    <div className='d__top__cards_wrapper'>
      <div className='d__top__cards_wrapper_in flex flex-wrap lg:bg-white lg:mt-8 mt-8 lg:p-8 lg:gap-0 gap-3  rounded-xl'>
        {
          cardsData.map((data, index) => (
            <CommonCards key={index} data={data} />
          ))
        }
      </div>
    </div>
  )
}
