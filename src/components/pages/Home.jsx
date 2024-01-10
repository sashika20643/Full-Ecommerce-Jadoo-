import React from 'react'
import Slider from '../slider'
import Catogey from '../Catogey'
import NewArrivals from '../NewArrivals'
import ServicesSection from '../ServicesSection'
import Banner from '../banner'
import ArticleSection from '../ArticleSection'


export default function Home() {
  return (
   <>
   <Slider/>
   <div className='px-10'>
   <Catogey/>
   <NewArrivals/>
   <div className='bg-gray-300 w-screen h-1'>
   <div className='mt-20 w-1/2 h-1 bg-black' />
   </div>
  
   <ServicesSection/>
   </div>


   <Banner/>
   <div className='px-10'>
<ArticleSection/>

    </div>
   </>
  )
}
