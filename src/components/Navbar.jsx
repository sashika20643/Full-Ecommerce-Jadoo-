
import React, { useState,useEffect, useContext } from 'react';
import searchIco from '../assets/images/search02.png'
import profileIco from '../assets/images/Vector.png'
import cartIco from '../assets/images/cart.png'
import { Link } from 'react-router-dom';
import Login from './Login';
import CartContext from './Store/CartContext';
import Cartdialogbox from './Cartdialogbox';


export default function Navbar({handleLogScreen,toggleCart}) {

  const cartCtx = useContext(CartContext);
  
  const totalCartItems= cartCtx.items.reduce((total,item)=>{
return total+item.quantity; 
  },0)
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveIcon] = useState("Home");
 

    const toggleMenu = () => {
        console.log(isOpen);
      setIsOpen(!isOpen);
    };
    

  return (
    <nav className={`p-2 py-5  left-0 right-0 top-0 z-20 bg-white fixed mb-10 `}>
    <div className="container mx-auto flex items-center justify-between lg:justify-between">
      <Link to="/" className="font-bold text-2xl">3Elegant</Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 items-center">
        <Link to="/" onClick={()=>setActiveIcon("Home")} className={`${activeItem==="Home"? "font-bold":""}`}><span className={`${activeItem==="Home"? "font-bold":""}`}>Home</span> </Link>
        <Link to="/shop" onClick={()=>setActiveIcon("Shop")} className={`${activeItem==="Shop"? "font-bold":"text-gray-500"}`}>Shop</Link>
        <Link to="/Product" onClick={()=>setActiveIcon("Product")} className={`${activeItem==="Product"? "font-bold":"text-gray-500"}`}>Product</Link>
        <Link to="/contact"onClick={()=>setActiveIcon("Contact")} className={`${activeItem==="Contact"? "font-bold":"text-gray-500"}`}>Contact</Link>
      


      </div>
    
      <div className="hidden md:flex space-x-5 items-center">
        <img src={searchIco} alt="" />
        <img src={profileIco} onClick={handleLogScreen} alt="" />
        <div className='flex cursor-pointer' onClick={ toggleCart}> 
        <img src={cartIco} alt=""  />
        <div className=' flex bg-black rounded-full text-white w-6 h-6 justify-center items-center '><p>{totalCartItems}</p></div>

        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-8  right-0 left-1/2 bg-white mt-5   p-4 rounded h-2/3 text-left flex flex-col  z-10">
          <div className='flex space-x-2'>
          <input type="text" className='border-black border-2 rounded-md' />
<img src={searchIco} alt="" />
          </div>
          <Link to="/" onClick={()=>setActiveIcon("Home")} className={`${activeItem==="Home"? "font-bold":""}`}><span className={`${activeItem==="Home"? "font-bold":""} block py-2`}>Home</span> </Link>
        <Link to="/shop" onClick={()=>setActiveIcon("Shop")} className={`${activeItem==="Shop"? "font-bold":"text-gray-500"} block py-2`}>Shop</Link>
        <Link to="/Product" onClick={()=>setActiveIcon("Product")} className={`${activeItem==="Product"? "font-bold":"text-gray-500"} block py-2`}>Product</Link>
        <Link to="/contact"onClick={()=>setActiveIcon("Contact")} className={`${activeItem==="Contact"? "font-bold":"text-gray-500"} block py-2`}>Contact</Link>
          <div>
            
        <div className="flex justify-between self-end mt-10">
        
            
              <div className='text-left'>Cart</div>
              <div className='text-right'>  <div className='flex cursor-pointer' onClick={toggleCart}> 
        <img src={cartIco} alt="" />
        <div className=' flex bg-black rounded-full text-white w-6 h-6 justify-center items-center '><p>3</p></div>

        </div></div>
    
        </div>
        <div className="flex justify-between self-end mt-3" onClick={handleLogScreen} >
        
            
        <div className='text-left'>Login</div>
        <div className='text-right'>  <div className='flex'> 
  <img src={profileIco} alt="" />


  </div></div>

  </div>
          </div>
       
        </div>
      )}
    </div>


  </nav>
);
}
