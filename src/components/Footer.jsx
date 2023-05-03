import React from 'react'
import waterloowrestlinglogo from './images/waterloowrestling.webp'

const Footer = () => {
  return (
    <>
        <div className="bg-yellow-50">
            <div className="bg-yellow-50 max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black">
                <img className=" h-20 m-4 flex" src={waterloowrestlinglogo}></img>
            
            
            </div>

        </div>
    </>
  )
}

export default Footer