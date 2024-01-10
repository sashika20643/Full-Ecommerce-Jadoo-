import React from 'react'
import bannerimg from '../assets/images/banner.png'
import ButtonLink from './ButtonLink'

export default function Banner() {
  return (
    <div className='lg:flex block mt-20'>
<div className='lg:w-1/2 bg-cover w-full h-96' id="bleft" style={{backgroundImage:`url(${bannerimg})`}}>

</div>
<div id="bright" className='flex w-full justify-start text-left item-center pl-10 flex-col lg:w-1/2 py-5 lg:py-20'>
<p className=' text-blue-600 font-bold mb-3'>
SALE UP TO 35% OFF
</p>
<h1 className=' text-4xl font-bold mb-5'>
HUNDREDS of 
<br />
New lower prices!
</h1>
<p className='mb-5'>
It’s more affordable than ever to give every room in your home a stylish makeover
</p>

<ButtonLink url={"www.google.com"}>
    Shop Now
</ButtonLink>
</div>


    </div>
  )
}
