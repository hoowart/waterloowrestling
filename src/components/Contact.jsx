import React from 'react'
import Navbar from '../components/Navbar'
import {useFormik} from "formik";
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },

    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .required("Message is required")
        .min(150, "Must be more than 150 characters")
        .max(1500, "Must be less than 1500 characters")
    }),

    //Submit Form

    onSubmit: (values) => {
      navigate("/success")
    }
  });

  return (
    <>
      <Navbar />
      <div className="m-auto flex-col max-w-[900px] justify-center items-center">
        <div className="flex-col justify-center items-center pt-16">
          <h1 className="tracking-wider text-3xl lg:text-4xl pb-7 pt-4 flex justify-center">
            CONTACT US
          </h1>
          <div className="pt-4 flex-col justify-center">
            <div className="justify-center flex">
              420 Weber St N Unit 1
            </div>
            <div className="justify-center flex">
              Waterloo, ON
            </div>
            <div className="justify-center flex">
              R6G 7J8
            </div>
            <div className="justify-center flex">
              (343) - 889 - 4853
            </div>
            <div className="justify-center flex">
            wloowrestling@gmail.com
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
            onSubmit={formik.handleSubmit} 
            className="bg-white xl:flex rounded-sm xl:w-1/2 text-black">
              <div className="flex-1 text-gray-700 p-20 pb-32">
                <h1 className="text-3xl pb-2 tracking-wide">INQUIRY</h1>
                <p className="text-xl text-gray-500">
                  Send any questions, concerns, or suggestions to our inbox.
                </p>
                <div className="mt-6">

                  <div className="pb-4">
                    <label className={`block pb-2 ${formik.touched.name && formik.errors.name ? "text-red-400 font-bold": "" }`} htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                    <input className="border-2 border-gray-500 round-md focus:border-yellow-500 focus:ring-yellow-500 w-full md:w-1/2" 
                    type="text" 
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your name"/>
                  </div>

                  <div className="pb-4">
                    <label className={`block pb-2 ${formik.touched.email && formik.errors.email ? "text-red-400 font-bold": "" }`} htmlFor="name">{formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}</label>
                    <input className="border-2 border-gray-500 round-md focus:border-yellow-500 focus:ring-yellow-500 w-full md:w-1/2" 
                    type="text" 
                    name="email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email"/>
                  </div>

                  <div className="pb-4">
                    <label className={`block pb-2 ${formik.touched.message && formik.errors.message ? "text-red-400 font-bold": "" }`} htmlFor="name">{formik.touched.message && formik.errors.message ? formik.errors.message : "Message"}</label>
                    <textarea className="border-2 border-gray-500 round-md focus:border-yellow-500 focus:ring-yellow-500 w-full min-h-[240px]" 
                    type="text" 
                    name="message" 
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your message"/>
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