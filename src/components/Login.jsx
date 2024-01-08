import React from 'react'
import Loginimg from '../assets/images/loginimage.png'

export default function Login({handleLogScreen}) {
  return (
    <div className='w-screen h-screen flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 lg:py-5 overflow-scroll z-10'  >

        <div className='w-screen h-screen bg-black opacity-50 absolute z-10 '> 
        

         </div>
         <div id="logcont" className='bg-white rounded-lg w-full  lg:flex relative z-20 '>
         <div id="logleft" className='lg:w-1/2 w-screen h-screen flex justify-center align-center lg:block lg:p-0 pt-5 bg-cover' style={{ backgroundImage: `url(${Loginimg})`, backgroundPosition:"center center"}}>
            </div>
            <div className='lg:w-2/3 w-100 pr-3 P-5 flex flex-col items-center justify-center text-left' id="logright">
<h1 className='text-right w-100 font-bold text-2xl P-5 absolute top-2 right-5 z-20 ' > <span className='cursor-pointer' onClick={handleLogScreen}>X</span>  </h1>
<div>



<h3 className='text-2xl font-bold mb-5'>Sign In</h3>
<p>Don’t have an accout yet? <span style={{color:"#38CB89"}}>  Sign Up </span> </p>
<form action="" className='w-100'>
    <div className="InputGroup mt-5 w-100">
    <input type="text" className='w-full border-gray-300 border-2 rounded-md p-3' id='name' name='password' placeholder='Your usernam or email ' />

    </div>
    <div id="inputGroup" className='mt-5 w-100'>
    <input type="password" className=' border-2 border-gray-300 rounded-md p-3 w-full' name="password" id="password" placeholder='Password' />

    </div>

<div className='flex justify-between mt-5'>
    <div>
        <input type="checkbox" name="remeber" id="" /> <label  className="text-sm" >Remember me</label>
        </div>
        <div className='font-bold text-md'>
            Frogot Password
        </div>
</div>

<button className='bg-black text-white w-full mt-5 rounded-lg py-2'>Sign In</button>
</form>



</div>

            </div>
         </div>
    </div>
  )
}
