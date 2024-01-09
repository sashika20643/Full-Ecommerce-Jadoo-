import React, { useContext } from 'react'
import wishlist from '../assets/images/wishlist.png'
import StarFill from '../assets/images/StarFill.png'
import CartContext from './Store/CartContext';

export default function ProductCard({productdet}) {
    const cartCtx=useContext(CartContext);
    function handleAddItemToCart(){
cartCtx.addItem(productdet);
    }


    const {name,description,price,countInStock,imageUrl,rating}=productdet;

   
    const starArray = new Array(rating).fill(null);
  return (
    <div>
        <div id="upp" style={{backgroundImage:`url(${imageUrl})`} } className='bg-center bg-cover w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 group relative p-4 border border-gray-300 transition-all duration-300 hover:border-blue-500' >

   <div className='absolute top-2 left-2'>
    <div className='bg-white py-1 px-2 text-black text-sm rounded font-bold'> New</div>
    <div className=' bg-green-500 py-1 px-2 text-white text-sm mt-1 font-bold'>-50%</div>
   </div>

   <div className='absolute top-2 right-2 duration-500 opacity-0 group-hover:opacity-100'>
  <img src={wishlist} alt="" />
   </div>
          <button onClick={handleAddItemToCart} className=" hidden bottom-5 left-1/2 -translate-x-1/2 absolute w-2/3 bg-black text-white p-2 rounded-md transition-all duration-500 opacity-0 group-hover:block group-hover:opacity-100 font-bold" >
        Add to Cart
    </button>
    </div>
    <div id="pbottom " className='pt-3 bg-white text-left'>
        <div className='flex pb-1'>
        {starArray.map(
(image,index)=>(<img key={index} src={StarFill}  className='mr-1' alt=""/>
)

        )}
        </div>
        <h3 className='font-bold text-sm pb-1'>{name}</h3>
        <h3 className='font-bold text-sm'>${price}</h3>

    </div>
    </div>
  )
}
