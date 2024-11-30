
import React from 'react'
import Image from "next/image";

import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import "../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import  styles  from "../banner/carousel.css";
// import  styles  from "../banner/carousel.min.css";

// Link Images -------------------------------------------------
import sliderImg_1 from "../../assets/images/slider/sliderImg_1.jpg";
import sliderImg_2 from "../../assets/images/slider/sliderImg_2.jpg";
import sliderImg_3 from "../../assets/images/slider/sliderImg_3.jpg";
// import sliderImg_4 from "../../assets/images/slider/sliderImg_4.jpg";

function Banner() {
  return (
    
<main className="block isolate max-w-screen-2xl mx-auto relative outline-none">

    <div className="w-full relative m-0 overflow-hidden  transition-height duration-150 ease-in box-border" >

 

<ul className=" transform transition-all duration-[350ms] ease-in-out flex m-0 p-0 relative list-none w-full ">

<li className="list-item isolate min-w-full m-0 relative text-center flex-col">
     <div className="block isolate">
       {/* priority of 1st image -------------------- */}
     <Image priority src={sliderImg_1} alt="sliderImg" className="text-transparent w-full align-top border-0 inline-block pointer-events-none max-w-full h-auto" />
     </div>
</li>

<li className="list-item isolate min-w-full m-0 relative text-center flex-col">

     <div className="block isolate">
       <Image src={sliderImg_2} alt="sliderImg" className="text-transparent w-full align-top border-0 inline-block pointer-events-none max-w-full h-auto" />
     </div>

</li>

<li className="list-item isolate min-w-full m-0 relative text-center flex-col">

     <div className="block isolate">
       <Image src={sliderImg_3} alt="sliderImg" className="text-transparent w-full align-top border-0 inline-block pointer-events-none max-w-full h-auto" />
     </div>
</li>

 {/* </Carousel> */}
 
 {/* it will provide sligt shade at bottom of Banner section  ======================================== */}
 <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>

 </ul>
    

</div>
</main>

  )
}

export default Banner