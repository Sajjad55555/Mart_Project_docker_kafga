"use client"

import Link from 'next/link'
import React from 'react'


export default function SignOut() {
  return (
    <>

 {/* Basic Statement --------------------------------- */}

    {/* <div classNameName=" text-8xl text-center"> 
    Sign out Page <br /> 
    <Link href={"/"}>Home Page </Link>    
    </div> <br /> */}

{/* Signout Start ========================================================== */}

<div className="max-w-[1305px] max-h-[780px] my-2 mx-auto   flex flex-wrap rounded-lg justify-between items-center">
  
  {/* Left Section ------------------------- */}
  <div className=" bg-[#CBE4E8] flex items-center shadow-md rounded-lg overflow-hidden justify-center w-[20rem] mx-6 md:w-auto my-4 basis-[50%]">
    
    <div className=" text-muted hidden md:flex justify-center items-center flex-col h-dvh w-dvh">
      
    </div>

  </div>

  {/* Right Section ----------------------- */}
  <div className="px-4 py-4 my-4 mx-4 md:w-1/2 w-[20rem] bg-white rounded-lg h-dvh basis-[40%]">
    <h3 className="text-center text-2xl font-semibold">Create an Account</h3>

    {/* Social Media Sign Up Buttons ---------- */}
    <div className="flex justify-center items-center my-3">
      <button className="rounded-full h-[2.5rem] w-[2.5rem] p-0 mx-2 border-zinc-400">
        {/*  Google Icon Here ------------------ */}
      </button>
      <button className="rounded-full h-[2.5rem] w-[2.5rem] p-0 mx-2 border-zinc-400">
        {/* Facebook Icon Here -------------------- */}
      </button>
    </div>

    <p className="text-center">Enter your details below</p>

    {/* Signup Form ------------------------------ */}
    {/* onsubmit="onSubmitHandler" */}
    <form >
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input type="text" placeholder="Enter your name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input type="email" placeholder="Email or Phone Number" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Password</label>
        <input type="password" placeholder="Password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Confirm Password</label>
        <input type="password" placeholder="Confirm your password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>

      <button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
        Create Account
      </button>

      <button type="submit" className="w-full mt-4 bg-blue-200 hover:bg-blue-500 text-black font-semibold py-2 px-4 rounded">
        Sign up with Google 
      </button>
      <br /><br />


      <div  className="w-full text-1xl font-semibold ">
      {/* <div className=" text-muted hidden md:flex justify-center items-center flex-col "> */}
      Already have an account?
      <a href="/login"  className=" text-black hover:text-zinc-600 transition-colors tracking-wide " >
        Login
      </a>
      </div>
        


    </form>
  </div>
</div>


    
{/* Signout Ends  =========================================================== */}


    </>
  )
}
