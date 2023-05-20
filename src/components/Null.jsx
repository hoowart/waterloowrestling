import React from 'react'
import waterloowrestlinglogo from './images/waterloowrestling.webp'

const Null = () => {
  return (
    <>
        <div className="flex justify-center items-center h-screen">
          <div className="flex-col">
              <div className="flex justify-center items-center pb-10">
                  <img src={waterloowrestlinglogo} alt="" className="max-h-24 md:max-h-40"/> 
              </div>
              
              <div>
                  <h1 className="md:text-2xl flex">
                      The requested page does not exist
                  </h1>
                  <p className="text-sm md:text-xl flex justify-center">
                      404
                  </p>
              </div>
              <div className="justify-center flex pt-4">
                  <a href="/about" className="flex p-6 m-4 border hover:bg-white hover:text-black duration-500">
                      <button className="">RETURN</button>
                  </a>
              </div>

          </div>
        </div>
    </>

    
  )
}

export default Null