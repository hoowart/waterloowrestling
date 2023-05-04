import React from 'react'
import Navbar from '../components/Navbar'
import {ImCheckboxChecked} from 'react-icons/im'


const Register = () => {
  return (
    <>
        <Navbar />
        <div className="m-auto flex-col max-w-[900px] justify-center items-center">
          <div className="flex justify-center items-center p-10 pb-4">
            <div className="p-7 rounded-md">
              <h1 className="tracking-wider text-3xl lg:text-4xl pb-7 pt-4 flex justify-center"> 
                PRICING PLAN
              </h1>
              <div className="flex items-center justify-center">
                <div>$</div>
                <h2 className="flex justify-center font-bold text-5xl p-2 tracking-wide">
                  44.99
                </h2>
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
                  3 Weekly Sessions
              </div>

              <div className="flex items-center pb-3">
                <div className="pr-2">
                  <ImCheckboxChecked /> 
                </div>
                  Supportive community
              </div>

              <div className="flex items-center pb-3">
                <div className="pr-2">
                  <ImCheckboxChecked /> 
                </div>
                  Sauna and wrestling weights
              </div>

            </div>
          </div>
        </div>

    </>
    
  )
}

export default Register