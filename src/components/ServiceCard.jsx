import React from 'react'

export default function ServiceCard({service}) {
  const {name,desc,img}=service;
  return (
    <div className='bg-gray-200 w-52 h-52 lg:w-56 lg:h-56 mt-10 flex flex-col justify-center  '>
<div className='p-2 text-left pl-5'>
  <img src={img} className='mb-2' alt="" />
  <h1 className='font-bold mb-2'>{name}</h1>
  <p className='text-xs'>
    {desc}
  </p>
</div>

    </div>
  )
}
