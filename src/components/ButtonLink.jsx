import React from 'react'
import { Link } from 'react-router-dom';
import arrowright from "../assets/images/arrow-right.png"


export default function ButtonLink( {children,url}) {
  return (
    <div className='flex '>
    <Link className=" underline text-xs font-bold w-fit" to={url}>{children}</Link>
      <img src={arrowright} alt="" />
    </div>
  )
}
