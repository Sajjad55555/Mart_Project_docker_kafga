import Link from 'next/link'
import React from 'react'



export default function Cart() {
  return (
    <>
    
    {/* Cart Start ========================================================== */}

    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Subtitle</p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
            </div>
          </div>
          <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">

          </div>
        </>

     
        <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Your cart is empty!</h1>
          
          <Link href={"/"}>
            <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black">
              go to shopping
            </button>
          </Link>
       
        </div>
      
      
    </div>

    {/* Cart Ends ========================================================== */}

    </>
  )
}


// for Products Section we use 
// (SSR for data fetching from Next js https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)  

// export const getServerSideProps = async () => {
//   // offline Api for products  
//   const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
//   const productData = await res.json();
//   return { props: { productData } };
// };
