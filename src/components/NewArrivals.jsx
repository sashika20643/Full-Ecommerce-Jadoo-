import React, { useEffect,useState } from 'react'
import ButtonLink from './ButtonLink'
import ProductCard from './ProductCard';

export default function NewArrivals() {




    const [productlist,setProductList]=useState([]);
    useEffect(() => {
        async function fetchproduct() {
          try {
            const response = await fetch("http://localhost:3000/api/products");
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const data = await response.json();
            console.log(data)
            setProductList(data.slice(0, 4))
           
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        }
      
        fetchproduct();
      }, []);

  return (
    <div className='w-full mt-20'>
        
       <div id="toprow" className='flex justify-between'>
       <h1 className='text-2xl font-bold'>
        New Arrivals
            </h1>
           <ButtonLink url="www.google.com">
           More Products
           </ButtonLink>
       </div>
       <div className='flex justify-between overflow-x mt-5 ' style={{ overflowY: 'hidden', scrollbarWidth: 'none' }} id="row" >


   
            {productlist.map((product,index)=>(
<  ProductCard key={index} productdet={product}/>
            ))}
                </div>
            </div>
  )
}
