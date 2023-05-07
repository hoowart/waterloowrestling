import React from 'react'
import Navbar from '../components/Navbar'
import hero from './images/kylerobinson.jpg'
import history from './images/history.webp'
import natassyalu from './images/natassyalu.webp'
import kylerobinsonsolo from './images/kylerobinsonsolo.webp'
import Footer from '../components/Footer'


const About = () => {
  return (
    <>
      <Navbar />
  


        {/* Hero */}
        <div style={{ 
          backgroundImage: `url(${hero})`,
          }} className="flex justify-center items-center h-[1000px] w-lg bg-center bg-cover bg-no-repeat right-0">
          <div>
              <div className="p-10 backdrop-blur-md rounded items-center justify-center flex-col">
                <div className="justify-center flex text-4xl xsm:text-3xl md:text-5xl font-bold p-2 md:tracking-wider">WATERLOO WRESTLING</div>
                <div className="justify-center flex">We believe a warrior exists within every one of us.</div>
                <div className="xsm:justify-center xsm:flex">Become an inspiration.</div>
              </div>
              <div className="flex justify-center pt-16">
                <a href="/register" className="flex">
                  <button className="bg-yellow-50 text-black w-[200px] rounded-md px-6 py-3 font-medium hover:bg-yellow-100 shadow-xl shadow-black">Get Started</button>
                </a>
              </div>

          </div>
        </div>


        {/* Who we are */}
        <div className="max-w-[1240px] mx-auto flex top-0 right-0 left-0 relative pt-36 pb-36 justify-center items-center">
          <div className="lg:flex justify-center items-center">
            <div className="flex justify-center items-center p-4">
              <img src={history} className=" rounded-md shadow-lg shadow-sky-50 lg:max-w-lg"/>
            </div>
            

            
            <div className="">
              <div className="text-4xl p-7 flex justify-center pt-12 lg:pt-0">WHO WE ARE</div>
              <div className="p-7 pt-0">The University of Waterloo's wrestling team was once a powerhouse in Canadian wrestling, with multiple Provincial and National champions, as well as National team members and Olympians. <br /><br />
Kurt Boese was a 3x OUAA gold medallist for Waterloo and competed at the 1960 Olympics. He went on to coach the 1972 Olympic team where he coached 3 Waterloo Warrior athletes - Egon Beiler, Pat Bolger, and George Saunders (all members of Waterloo's Hall of Fame!). Egon Beiler himself is considered to be one of Canada's best all-time wrestlers, with an impressive list of accomplishments, including 2 Commonwealth Gold medals, a Pan-American Games Gold, and 11 National Championships. <br /><br />
Unfortunately, Waterloo Wrestling ended its reign in the late 1980s without a coach to run the program... and now, we're bringing wrestling back to the Waterloo Region!</div>
            </div>
          </div>
        </div>
  



        {/* Meet your coaches */}
        <div className="max-w-[1240px] mx-auto top-0 right-0 left-0 pb-36">
          <div className="text-3xl text-white flex justify-center items-center pb-10 sm:text-4xl">
          MEET YOUR COACHES
          </div>

            <div className="grid md:flex relative justify-evenly items-center">

              <div className="relative mb-40 md:mb-0">
                <img src={natassyalu} alt="" className="relative rounded-lg drop-shadow-sm object-cover object-center h-80 w-80 transform -scale-x-100"/>
                <div className="bg-white absolute h-[50%] w-[90%] top-[80%] left-[5%] rounded-lg shadow-md shadow-gray-500 p-4">
                  <div className="flex justify-center text-black">
                    Natassya Lu
                  </div>
                  <div className="pt-4 text-gray-500 text-sm">
                    Pan American Silver & Bronze
                    <br />
                    World Championship Team Member
                    <br />
                    National & Provincial Gold
                    <br />
                    2x OUA Gold
                  </div>

                </div>
              </div>

              <div className="relative">
                <img src={kylerobinsonsolo} alt="" className="relative rounded-lg drop-shadow-sm object-cover object-center h-80 w-80 "/>
                <div className="bg-white absolute h-[50%] w-[90%] top-[80%] left-[5%] rounded-lg shadow-md shadow-gray-500 p-4">
                  <div className="flex justify-center text-black">
                    Kyle Robinson
                  </div>
                  <div className="pt-4 text-gray-500 text-sm">
                    USport National Gold
                    <br />
                    OFSAA Gold
                    <br />
                    National & Provincial Gold
                    <br />
                    OUA Gold
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Tournament */}
        <div className="max-w-[1240px] mx-auto top-0 right-0 left-0 pt-36 pb-36">
            <div className="text-white flex justify-center items-center pb-10 text-4xl">
            TOURNAMENTS
            </div>
            <div className="flex justify-center">
              All tournament information are found here
            </div>
            <div className="justify-center flex pt-4">
              <a href="https://www.oawa.ca/events" target="_blank" className="flex p-6 m-4 border hover:bg-white hover:text-black duration-500">
                <button className="">OAWA TOURNAMENTS</button>
              </a>
            </div>
        </div>
        

      <Footer />
    </>
    
  )
}

export default About