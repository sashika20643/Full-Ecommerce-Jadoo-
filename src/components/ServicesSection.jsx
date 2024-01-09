import React from 'react'
import deliveryimg from '../assets/images/delivery.png'

import moneyimg from '../assets/images/money.png'
import lockimg from '../assets/images/lock.png'
import ServiceCard from './ServiceCard'
import callimg from '../assets/images/call.png'
export default function ServicesSection() {
  const services=[{name:"Free Shipping" ,desc:"Order above $200",img:deliveryimg},
  {name:"Money-back" ,desc:"30 days guarantee",img:moneyimg},
  {name:"Secure Payments" ,desc:"Secured by Stripe",img:lockimg},
  {name:"24/7 Support" ,desc:"Phone and Email support",img:callimg}]
  return (
    <div className='flex flex-wrap gap-2 lg:justify-between justify-between'>
{services.map(
  ((service,index)=>(
<ServiceCard key={index} service={service} />
  ))
)}

    </div>
  )
}
