import React, { useEffect, useState } from 'react'
import cat1img from "../assets/images/cat1.png"
import cat1img2 from "../assets/images/cat2.png"
import loginimg from "../assets/images/loginimage.png"
import arrowright from "../assets/images/arrow-right.png"
import { Link } from 'react-router-dom';
import ButtonLink from './ButtonLink'



export default function Catogey() {

  return (
    <div className='mt-10'>
<div id="uptext" className='flex flex-col lg:flex-row justify-center items-center'>
    <div id="left " className='lg:w-1/2'>
<h1 className='font-bold text-5xl leading-normal'>
Simply Unique <span className=' text-gray-600'>/ </span>
Simply Better.
</h1>
    </div>
    <div id="right" className='lg:w-1/2'>
<p className='text-md px-3'>
<span className='font-bold '>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
</p>
    </div>

    </div>
    <div id="catogories  " className='flex flex-col lg:flex-row w-full h-screen mt-24'>
<div id="left" className=' h-full lg:w-1/2 w-full mb-2 bg-cover bg-center mr-2 relative pb-2' style={{backgroundImage:`url(${loginimg})`}}>
  <div className='absolute top-2 left-4'>
  <h1 className='text-2xl mt-3 font-bold '>Living Room</h1>
<ButtonLink url="www.google.com" >
Shop Now
</ButtonLink>

  </div>
</div>
<div id="right" className='h-full lg:w-1/2 w-full p-0 mt-0 flex lg:flex-col'>
    <div  className=' h-full lg:h-1/2 w-1/2 lg:w-full bg-cover lg:bg-top bg-right mr-2  relative mb-2 p-0' style={{backgroundImage:`url(${cat1img})`}}>
    <div className='absolute bottom-2 left-4'>
  <h1 className='text-2xl mt-3 font-bold '>Bedroom</h1>
  <ButtonLink url="www.google.com" >
Shop Now
</ButtonLink>

  </div>
    </div>
    
    <div  className=' h-full lg:h-1/2 w-1/2 lg:w-full bg-cover p-2 lg:bg-top bg-right  relative' style={{backgroundImage:`url(${cat1img2})`}}>
    <div className='absolute bottom-2 left-4'>
  <h1 className='text-2xl mt-3 font-bold '>Kitchen</h1>
  <ButtonLink url="www.google.com" >
Shop Now
</ButtonLink>

  </div>

    </div>


</div>
    </div>





    </div>
  )
}
