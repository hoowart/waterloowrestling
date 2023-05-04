import React from 'react'
import Navbar from '../components/Navbar'
const Gallery = () => {
  return (
    <>
        <Navbar />
        <div className="m-auto flex-col max-w-[900px] justify-center items-center">
          <div className="flex justify-center items-center p-10 pb-4">
            <div className="p-7">
              <h1 className="tracking-wider text-3xl lg:text-4xl pb-7 pt-4 flex justify-center"> 
                GALLERY
              </h1>
            </div>
          </div>
        </div>

    </>
  )
}

export default Gallery