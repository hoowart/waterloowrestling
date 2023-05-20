import React from 'react'
import Navbar from '../components/Navbar'
import {AiFillInstagram} from 'react-icons/ai'

const Contact = () => {

  return (
    <>
      <Navbar />
      
      <div className="m-auto flex-col max-w-[900px] justify-center items-center">
        <div className="flex-col justify-center items-center pt-16">
          <h1 className="tracking-wider text-3xl lg:text-4xl py-7 flex justify-center">
            CONTACT US
          </h1>
          <div className="pb-8 pt-0 flex-col justify-center">
            <div className="justify-center flex">
              420 Weber St N Unit 1
            </div>
            <div className="justify-center flex">
              Waterloo, ON
            </div>
            <div className="justify-center flex">
              N2L 4E7
            </div>
            <div className="justify-center flex">
              (647) 229-1696
            </div>
            <div className="justify-center flex">
            wloowrestling@gmail.com
            </div>
            <div className="flex justify-center">
              <a target="_blank" href="https://www.instagram.com/wloowrestling/" className="items-center flex">
              <AiFillInstagram />
              @wloowrestling
              </a>
            </div>
          </div>
          <div className="tracking-wider text-3xl lg:text-4xl pt-4 flex justify-center">
            CLASSES
          </div>
          <div className="py-10 flex justify-evenly">
            <div className="flex-col">
              <p>Sunday</p>
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
            </div>
            <div>
              <p className="flex justify-center">CLOSED</p>
              <p className="flex justify-center">8PM - 9:30PM</p>
              <p className="flex justify-center">CLOSED</p>
              <p className="flex justify-center">8PM - 9:30PM</p>
              <p className="flex justify-center">8PM - 9:30PM</p>
              <p className="flex justify-center">CLOSED</p>
              <p className="flex justify-center">CLOSED</p>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center p-10">
        <div className="md:p-20 bg-white rounded-sm lg:w-1/2">
          <h1 className="hidden md:block md:text-3xl pb-2 tracking-wide text-black ">OUR LOCATION</h1>
          <p className="hidden md:block md:text-lg text-gray-500 pb-6">Find us in Waterloo</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.799986300576!2d-80.53097462858887!3d43.48564434158516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3ee42609793%3A0x19703dcd13e5f094!2s420%20Weber%20St%20N%20%231%2C%20Waterloo%2C%20ON%20N2L%204E7!5e0!3m2!1sen!2sca!4v1683339343755!5m2!1sen!2sca"  
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          className="flex rounded border-2 border-gray-500 h-[450px] w-full"></iframe>
        </div>
        
      </div>


      <div className="m-auto flex-col xl:max-w-[900px] xl:justify-center xl:items-center"></div>
        <div className="xl:flex justify-center items-center pt-10 xl:pb-10">
            <form 
            className="bg-white xl:flex rounded-sm xl:w-1/2 text-black"
            action="https://formspree.io/f/xayzvarw"
            method="POST">
              
              <div className="flex-1 text-gray-700 p-20 pb-32">
                <h1 className="text-3xl pb-2 tracking-wide">INQUIRY</h1>
                <p className="text-xl text-gray-500">
                  Send any questions, concerns, or suggestions to our inbox.
                </p>
                <div className="mt-6">

                  <div className="pb-4">
                    <label className="block pb-2" htmlFor="name">Name</label>
                    <input className="border-2 border-gray-500 round-md focus:border-yellow-500 focus:ring-yellow-500 w-full md:w-1/2"
                    type="text" 
                    name="name"
                    placeholder="Enter your name"
                    required/>
                  </div>

                  <div className="pb-4">
                    <label className="block pb-2" htmlFor="name">Email</label>
                    <input className="border-2 border-gray-500 round-md focus:border-yellow-500 focus:ring-yellow-500 w-full md:w-1/2" 
                    type="text" 
                    name="email" 
                    placeholder="Enter your email"
                    required/>
                  </div>

                  <div className="pb-4">
                    <label className="block pb-2" htmlFor="name">Message</label>
                    <textarea className="border-2 border-gray-500 round-md focus:border-yellow-500 focus:ring-yellow-500 w-full min-h-[240px]" 
                    type="text" 
                    name="message" 
                    placeholder="Enter your message"
                    required/>
                  </div>
                  <div className="pt-4 float-right">
                    <button type="submit" className="flex p-4 px-6 border-2 border-gray-500 hover:bg-black hover:text-white hover:border-black duration-500">SUBMIT</button>
                  </div>
                  
                </div>
              </div>
            </form>
          </div>
        

</>
  )
}

export default Contact