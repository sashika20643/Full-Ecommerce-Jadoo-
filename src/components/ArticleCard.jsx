import React from 'react'
import ButtonLink from './ButtonLink'

export default function ArticleCard({article}) {
    const {name,image, link}=article;
  return (
    <div>
        <div className=" w-80 h-80" style={{backgroundImage:`url(${image})`}}>

        </div>
        <h1 className='text-left mt-5 font-bold text-xl'>{name}</h1>
        <ButtonLink url={link}>
            Read More
        </ButtonLink>
    </div>
  )
}
