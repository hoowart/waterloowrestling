import React from 'react'
import Navbar from '../components/Navbar'
import {ImCheckboxChecked} from 'react-icons/im'
import { AnimatePresence, motion } from 'framer-motion'


const Register = () => {
  return (
    <>
        <Navbar />
        <AnimatePresence>
          <motion.div 
            animate={{ opacity: 1}}
            initial={{ opacity: 0}} 
            transition={{ delay: 0.2 }}
            className="m-auto flex-col max-w-[900px] justify-center items-center">
            <div className="flex justify-center items-center p-10 pb-4">
              <div className="py-7">
                <h1 className="tracking-wider text-3xl lg:text-4xl pb-7 pt-4 flex justify-center"> 
                  PRICING PLAN
                </h1>
                <div className="flex items-center justify-center">
                  <div>$</div>
                  <h2 className="flex justify-center font-bold text-5xl p-2 tracking-wide">
                    44
                  </h2>
                  <div>.99</div>
                </div>
                
                <h3 className="flex justify-center text-sm">
                  MONTHLY
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center bottom-0 left-0 right-0">
              <div className="flex-col ">

                <div className="flex items-center pb-3">
                  <div className="pr-2">
                    <ImCheckboxChecked /> 
                  </div>
                    Multiple weekly sessions
                </div>

                <div className="flex items-center pb-3">
                  <div className="pr-2">
                    <ImCheckboxChecked /> 
                  </div>
                    Sauna and wrestling weights
                </div>

                <div className="flex items-center pb-3">
                  <div className="pr-2">
                    <ImCheckboxChecked /> 
                  </div>
                  Professional coaching
                </div>


                <div className="flex items-center pb-3">
                  <div className="pr-2">
                    <ImCheckboxChecked /> 
                  </div>
                  Supportive community
                </div>
                
                <div className="flex items-center justify-center pt-3">
                  Must be 15+
                </div>
                <div className="flex items-center justify-center pt-1">
                  Register at our gym
                </div>
            
              </div>
            </div>
            <div className="justify-center flex pt-4">
                <a href="/contact" className="flex p-6 m-4 border hover:bg-white hover:text-black duration-500">
                  <button className="">OUR LOCATION</button>
                </a>
              </div>
          </motion.div>
        </AnimatePresence>

    </>
    
  )
}

export default Register