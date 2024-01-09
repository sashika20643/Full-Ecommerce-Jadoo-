import React from 'react'

export default function CartItem({item,addQty,minQty}) {
const{name,description,price,imageUrl,quantity}=item;
  return (
    <div className='flex mt-3' >
        <div className='w-1/3'>
            <img src={imageUrl} className='w-32 h-32' alt="" />
        </div>
        <div className='text-left ml-2 h-full flex flex-col justify-even content-between text-sm  w-1/3'>
            <h3 className='font-bold'>
{name}
            </h3>
            <p className='text-xs mt-1'>
{description}
            </p>
            <div className='mt-2 border-2 border-gray-400 w-fit p-1 px-3 flex font-bold '>
<div className='p-1 pr-2 cursor-pointer' onClick={()=>minQty(item._id)} >-</div>
<div className='p-1 pr-2'>{quantity}</div>
<div className='p-1 cursor-pointer' onClick={()=>addQty(item)}>+</div>
            </div>
        </div>
<div className='w-1/3'>
    <h3>${quantity*price}</h3>
</div>
    </div>
  )
}
