import React, { useContext } from 'react'
import CartContext from './Store/CartContext';
import CartItem from './CartItem';


export default function Cartdialogbox( {toggleCart}) {
const cartCtx=useContext(CartContext)

const total= cartCtx.items.reduce((total,item)=>{
    return total+(item.quantity*item.price); 
      },0)
  return (
    <div className='fixed p-4 top-0 bottom-0 right-0 lg:left-1/2 md:left-1/2 left-0 bg-white z-20 overflow-scroll animate-slide-in-left '>
<div className="text-left font-bold text-2xl cursor-pointer " onClick={toggleCart}>X</div>
<div>
<h1 className='font-bold text-xl'>
    Cart
</h1>
{cartCtx.items.map(
    (item,index)=>(
        <CartItem key={index} item={item} addQty={cartCtx.addItem} minQty={cartCtx.removeItem} />
    )
)}
</div>
<div className='mt-10'>
    <div className="flex justify-between p-5  bg-white font-bold">
<h1>Total</h1>
<h1>${total}</h1>
    </div>
    <button className='bg-black text-white px-3 py-1 rounded w-full'>Check Out</button>
    <p className='mt-1 underline text-sm'>View Cart</p>
</div>
    </div>
  )
}
