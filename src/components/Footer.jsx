import React from 'react'
import ImageFotter from '../assets/images/ImageFotter.png'
import emailimg from '../assets/images/email.png'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import youtube from '../assets/images/youtube.png'

import { Link } from 'react-router-dom'
export default function Footer() {
  return (

    <div>

        <div className='h-80  w-full flex justify-center items-center mt-10' style={{backgroundImage:`url(${ImageFotter})`}}>
 <div className='text-center'>
<div>
<h1 className='font-bold text-3xl '>
Join Our Newsletter
</h1>
<p className='mt-5 mb-5'>
Sign up for deals, new products and promotions
</p>
</div>



    <div className="flex w-full text-center items-center justify-center mt-5 border-b-2 ">

<img src={emailimg} alt="" />
    <input type="text" className=' bg-transparent  focus:border-none focus:outline-none w-2/3 ' placeholder='Email address' />
    <button type="button" className=" inset-y-0 right-0 flex items-center px-4 bg-transparent w-28 text-black rounded-full ">Sign Up</button>
    </div>


 </div>
        </div>

        <div className='bg-black text-white px-10 py-10'>
<div className="flex lg:justify-between justify-center  flex-col lg:flex-row">
    <div id="left" className='flex items-center justify-center mb-5 lg:mb-0'>
        <h1 className='font-bold text-2xl border-r-2 pr-3 mr-3'>3legant.
</h1>

<p>
Gift & Decoration Store
</p>

    </div>

    <div id="links" className='flex gap-4 justify-center'>
        
<Link>Home</Link>
<Link>Shop</Link>
<Link>Product</Link>
<Link>Blog</Link>
<Link>Contact Us</Link>
    </div>
</div>
<hr className='mt-10 mb-10 text-gray-300' />
<div className="flex justify-between lg:flex-row flex-col">
<div className="flex gap-4 text-xs justify-center">
    <p>Copyright © 2023 3legant. All rights reserved</p>
    <p>Privacy Policy</p>
    <p>Terms of Use</p>
</div>
<div className="flex mt-5 lg:mt-0 gap-10 justify-center">
    <img src={instagram} alt="" />
    <img src={youtube} alt="" />
    <img src={facebook} alt="" />
</div>
</div>
        </div>

    </div>
  )
}
