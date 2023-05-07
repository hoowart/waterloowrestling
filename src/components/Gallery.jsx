import React from 'react'
import Navbar from '../components/Navbar'
import podium from './images/podium.jpg'
import podium2 from './images/podium2.jpg'
import three from './images/3.jpg'
import four from './images/4.jpg'
import five from './images/5.jpg'
import six from './images/6.jpg'
import seven from './images/7.jpg'

const Gallery = () => {
  return (
    <>
        <Navbar />
        <div className="m-auto flex-col max-w-[900px] justify-center items-center">
          <div className="flex-col justify-center items-center p-10 pb-4">
            <div className="p-7">
              <h1 className="tracking-wider text-3xl lg:text-4xl pb-7 pt-4 flex justify-center"> 
                GALLERY
              </h1>
            </div>
            
          </div>
          <div className="hidden lg:flex max-w-[300px] bg-center bg-cover bg-no-repeat">
                <img src={podium} className="p-4" alt="" />
                <img src={podium2} className="p-4" alt="" />
                <img src={three} className="p-4" alt="" />
            </div>
          <div className="hidden lg:flex max-w-[300px] bg-center bg-cover bg-no-repeat">
              <img src={five} className="p-4" alt="" />
              <img src={six} className="p-4" alt="" />
              <img src={seven} className="p-4" alt="" />
          </div>
          <div className="lg:hidden">
              <img src={podium} className="p-4" alt="" />
              <img src={podium2} className="p-4" alt="" />
              <img src={three} className="p-4" alt="" />
              <img src={five} className="p-4" alt="" />
              <img src={six} className="p-4" alt="" />
              <img src={seven} className="p-4" alt="" />
  
            </div>
          <div>
            <img src={four} className="p-4" alt="" />
          </div>
        </div>

    </>
  )
}

export default Gallery