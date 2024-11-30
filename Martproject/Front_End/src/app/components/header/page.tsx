import React from 'react'
import Image from "next/image";
import logo from "../../assets/icons/home-page-46-512.png";

import CartIcon from "../../assets/icons/cartIcon.png";

import Link from 'next/link';
import BottomofHeader from '../bottomHeader/page';



function Header() {
  return (
    <>

<div  className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50 mb-12" >
    <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4" >

{/* logo Start ======================================================================= */}
<div>
        
        <Link
          href={"/"} 
          className="px-2 border border-transparent hover:border-white cursor-pointer 
          duration-300 flex items-center justify-center h-[70%]">

          <Image className="w-14 object-cover mt-1" src={logo} alt="Logo" />
        </Link>

 </div>
{/* logo Ends ======================================================================= */}

{/* Delivery to Start ======================================================================= */}
 
 <Link href={"./delivery"}>
 <div className="px-2 border border-transparent hover:border-white cursor-pointer 
        duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">

          {/* <SlLocationPin /> */}
          {/* <Image className="w-8 object-cover mt-1" src={pin} alt="Pin" /> */}
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"></path></svg>


          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
  </Link>
{/* Delivery to Ends ======================================================================= */}

 {/* Search Bar Start ======================================================================= */}

 <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
        
        {/* input ------------------------------------------------- */}
            <input type="text" placeholder='Search Here ............' 
            className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black 
            border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow' />
            
            <span className="w-12 h-full bg-amazon_yellow text-black text-2xl 
            flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
                {/* <HiOutlineSearch/> */}
          {/* <Image className="w-8 object-cover mt-1" src={search1} alt="Search-icon" /> */}
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

            </span>
            
    </div>
    
{/* Search Bar Ends ======================================================================= */}
            
 {/* Signin /Auth in Start  ========================================================================= */}

 <div  
    // onClick={() => signIn()}
    // onClick={() => Login2()}

    className="text-xs text-gray-100 flex flex-col justify-center px-2 
    border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] ">
        {/* <p>Hello, Sign in</p> */}
        
         <Link href='/login'  >
            Hello, Sign in 
        </Link>
        

        <p className="text-white font-bold flex items-center">
            Account & Lists

        {/* <Image className="w-6 object-cover mt-1" src={down1} alt="Search-icon" /> */}
        {/* <span><BiCaretDown/></span> */}

        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 17 7-8h-14z"></path></svg>

        </p>
    </div>

    {/* Sign in Ends  ========================================================================= */}

{/* Favorite Start  ======================================================================= */}
 <Link href={'./favorite'}>
 <div className="text-xs text-gray-100 flex flex-col justify-center px-2 
    border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] ">
        <p> Marked </p>
        <p className="text-white font-bold flex items-center">
        & Favorite</p>
    </div>
  </Link>
{/* Favorite Ends  ======================================================================= */}


{/* cart Starts ============================================================================= */}
    {/* relative= because we have text for it */}
    <Link href={'./cart'} 
    className="flex items-center px-2 border border-transparent hover:border-white
     cursor-pointer duration-300 h-[70%] relative">

    <Image className="w-8 object-cover mt-1" src={CartIcon} alt="Search-icon" />

    <p className='text-xs text-white font-bold mt-3'>Cart</p>
    <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
        {/* {productData ? productData.length:0 } */}
    </span>

    </Link>
{/* cart Ends  ============================================================================= */}



    </div> 
    
<BottomofHeader/>

</div>    


    </>
  )
}

export default Header