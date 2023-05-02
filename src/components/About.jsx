import React from 'react'
import Navbar from '../components/Navbar'
import hero from './images/kylerobinson.jpg'
import history from './images/history.webp'
import natassyalu from './images/natassyalu.webp'
import kylerobinsonsolo from './images/kylerobinsonsolo.webp'


const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <div style={{ 
          backgroundImage: `url(${hero})`,
          }} className="flex justify-center items-center max-w-[2000px] h-[1000px] w-lg bg-center bg-cover bg-no-repeat right-0">
          <div>
              <div className="p-10 backdrop-blur-md rounded items-center justify-center flex-col">
                <div className="justify-center flex text-5xl font-bold p-2">WATERLOO WRESTLING</div>
                <div className="justify-center flex">We believe a warrior exists within every one of us.</div>
                <div className="justify-center flex">Become an inspiration.</div>
              </div>

              <a href="/pricing" className="flex p-6">
                <button className="bg-yellow-50 text-black w-[200px] rounded-md my-6 mx-auto px-6 py-3 font-medium hover:bg-yellow-100 shadow-xl shadow-black">Get Started</button>
              </a>

          </div>
        </div>
        <div className="max-w-[1240px] mx-auto flex top-0 right-0 left-0 relative pt-36 pb-36 justify-center items-center">
          <div className="blur-sm flex"></div>
            <div className="lg:flex justify-center items-center p-10">
              <img src={history} className="rounded-md shadow-lg shadow-sky-50"/>
              <div className="">
                <div className="text-4xl p-7">WHO WE ARE</div>
                <div className="p-7 pt-0">The University of Waterloo's wrestling team was once a powerhouse in Canadian wrestling, with multiple Provincial and National champions, as well as National team members and Olympians.
  Kurt Boese was a 3x OUAA gold medallist for Waterloo and competed at the 1960 Olympics. He went on to coach the 1972 Olympic team where he coached 3 Waterloo Warrior athletes - Egon Beiler, Pat Bolger, and George Saunders (all members of Waterloo's Hall of Fame!). Egon Beiler himself is considered to be one of Canada's best all-time wrestlers, with an impressive list of accomplishments, including 2 Commonwealth Gold medals, a Pan-American Games Gold, and 11 National Championships.
  Unfortunately, Waterloo Wrestling ended its reign in the late 1980s without a coach to run the program... and now, we're bringing wrestling back to the Waterloo Region!</div>
              </div>
            </div>
        </div>
  
        <div className="max-w-[1240px] mx-auto bg-sky-50 top-0 right-0 left-0 pt-36 pb-36 rounded-md">
          <div className="text-black flex justify-center items-center pb-10">
          MEET YOUR COACHES
          </div>

          <div className="justify-evenly items-center flex">
            <div>
              <div className="relative p-10">
                <img src={natassyalu} alt="" className="transform -scale-x-100 rounded-lg shadow-md shadow-black object-cover object-fit h-64 w-64"/>
                  <div className="border border-black shadow-sm shadow-black w-auto p-4 rounded-md flex mt-4 bg-yellow-50 text-black">
                    Pan American Silver & Bronze
                    <br/>
                    World Championship Team Member
                    <br/>
                    National & Provincial Gold
                    <br/>
                    2x OUA Gold
                  </div>
              </div>
            </div>

            <div>
              <div className="relative p-10">
                <img src={kylerobinsonsolo} alt="" className="rounded-lg shadow-md object-cover object-fit h-64 w-64"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
    
  )
}

export default About