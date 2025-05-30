"use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'  
import { useState } from 'react'

const handleCopy = () => {
  const email = "thomastran1911@gmail.com"
  navigator.clipboard.writeText(email)
    .then(() => {
      toast.success('Email copied to clipboard', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    })
    .catch(err => {
      console.error("Failed to copy email: ", err)
    })
}

const page = () => {
  return (
    <>
      <NavBar />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1>
        <p className="text-white bg-gray-800 p-4 rounded-lg">
          If you would like to get in touch, please feel free to reach out via:
        </p>
        <div className='flex justify-center items-center mt-4'>
          <a href="https://www.linkedin.com/in/le-nhat-minh-thomas-tran-994402216/">
            <img src="/linkedin-logo.svg" alt="LinkedIn" className="w-8 h-8 inline-block mr-2" />
          </a>
          <img 
            src="/gmail-icon.svg" 
            alt="Gmail" 
            className="w-8 h-8 inline-block mr-2 cursor-pointer" 
            id="gmail" 
            onClick={handleCopy} 
            
          />
          <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
          />
        </div>
      </div>
    </>
  )
}



export default page