import React from 'react'
import hero from './images/kylerobinson.jpg'


const About = () => {
  return (
    <div>
      <div style={{ 
        backgroundImage: `url(${hero})`,
        }} className="flex justify-center items-center max-w-[2000px] h-[1000px] w-lg bg-center bg-cover bg-no-repeat right-0">
        <div>
          <div className="justify-center flex text-5xl font-bold p-4 ">WATERLOO WRESTLING</div>
            <div className="p-10 backdrop-blur-md rounded items-center justify-center flex-col">
              <div className="justify-center flex">We believe a warrior exists inside of every human.</div>
              <div className="justify-center flex">Grow with us.</div>
            </div>
            <div className="flex p-6">
              <button className="bg-yellow-50 text-black w-[200px] rounded-md my-6 mx-auto px-6 py-3 font-medium">Get Started</button>
            </div>
        </div>
        
      </div>
    </div>

    
  )
}

export default About