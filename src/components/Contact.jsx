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
  console.log(formik.errors)
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
              59 Persia Road
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
      <div className="m-auto flex-col lg:max-w-[900px] lg:justify-center lg:items-center"></div>
        <div className="lg:flex justify-center items-center pt-10 lg:pb-10">
            <form 
            onSubmit={formik.handleSubmit} 
            className="bg-white lg:flex rounded-sm lg:w-1/2 text-black">
              <div className="flex-1 text-gray-700 p-20 pb-32">
                <h1 className="text-3xl pb-2 tracking-wide">INQUIRY</h1>
                <p className="text-lg text-gray-500">
                  Send any questions, concerns, or suggestions to our inbox.
                </p>
                <div className="mt-6">

                  <div className="pb-4">
                    <label className={`block pb-2 ${formik.touched.name && formik.errors.name ? "text-red-400 font-bold": "" }`} htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                    <input className="border-2 border-gray-500 round-md focus:border-yellow-500 focus:ring-yellow-500 lg:w-1/2" 
                    type="text" 
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your name"/>
                  </div>

                  <div className="pb-4">
                    <label className={`block pb-2 ${formik.touched.email && formik.errors.email ? "text-red-400 font-bold": "" }`} htmlFor="name">{formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}</label>
                    <input className="border-2 border-gray-500 round-md focus:border-yellow-500 focus:ring-yellow-500 lg:w-1/2" 
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