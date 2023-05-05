import React from 'react'
import {AnimatePresence, motion} from "framer-motion"

const Success = () => {
  return (
    <>
        <div className="flex justify-center items-center h-screen">
        <AnimatePresence>
            <motion.div 
                animate={{ opacity: 1}}
                initial={{ opacity: 0}} 
                transition={{ delay: 0.5 }}
                >
                <div className="flex-col">
                    <div className="flex justify-center items-center pb-10">
                        <img src="./public/waterloowrestling.webp" alt="" className="max-h-24 md:max-h-40"/> 
                    </div>
                    
                    <div>
                        <h1 className="md:text-2xl flex">
                            Your message has been sent to our inbox
                        </h1>
                        <p className="text-sm md:text-xl flex justify-center">
                            We will get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="justify-center flex pt-4">
                        <a href="/about" className="flex p-6 m-4 border hover:bg-white hover:text-black duration-500">
                            <button className="">RETURN</button>
                        </a>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
        </div>
    </>

    
  )
}

export default Success