// import TodaysDeal from '@/app/todayDeal/page'
import React from 'react'

import Link from 'next/link';
// import { useRouter } from 'next/router';


export default function BottomofHeader() {
  return (
    <>
      
<div  className=" w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">

<p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
  {/* <LuMenu  className="text-xl" /> All  */}
  </p>
  <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
  <Link href={"/todayDeal"}>Todays Deals</Link>
</p>
<p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
  <Link href={"/customerService"}>Customer Service</Link>
</p>
<p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
  <Link href={"/registry"}>Registry</Link>
</p>
<p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
  <Link href={"/giftCard"}>Gift Cards</Link>
</p>
<p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
<Link href={"/sell"}>Sell</Link>
</p>  

<p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
<Link href={"/wishlist"}>WishList</Link>
</p>  

<p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
<Link href={"/chatbot"}>ChatBot</Link>
</p>  

<p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 
hover:text-red-400 text-amazon_yellow cursor-pointer duration-300">
  
<Link href={"/signout"}>Sign out</Link>

</p>  


</div>
        
    </>
  )
}
