import React from 'react'

const FooterBottom = () => {
  return (

    <>

<div className="flex flex-col justify-center items-center  py-2  bg-[#131a22] bg-opacity-100">
  <div>
    <ul className="text-gray-300 text-sm gap-4 py-2 flex">
      <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Conditions of Use</li>
      <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Privacy Notice</li>
      <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Your Ads Privacy Choices</li>
    </ul>
  </div>
  <div>
    <p className="font-normal text-[12px] text-[#DDD] leading-3">© 1996-2022, xyz.com, Inc. or its affiliates</p>
  </div>
</div>
   
    </>
  )
}

export default FooterBottom