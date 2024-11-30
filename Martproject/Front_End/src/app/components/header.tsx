"use client"
import React from 'react'
import Slider from "react-slick";
import Slide from './slide';

interface slideitem  {
  id:number;
  image:string;
  title:string;
  maintitle:string;
  price:string;

}

export default function Header2() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
        autoplay:true
      };
      const slideData: slideitem[] =[ {
        id:0,
        image:"/header_images/header1.webp",
        title:"Sale Now",
        maintitle:"New Fashion Summer Sale" ,
        price:" 234$"},
        {
        id:1,
        image:"/header_images/header2.webp",
        title:"Trending Items",
        maintitle:"WoMEN Latest Fashion Sale" ,
        price:"234$"},
        {
        id:2,
        image:"/header_images/header3.jpg",
        title:"Trending Items",
        maintitle:"WoMEN Latest Fashion Sale" ,
        price:"234$"
        }
        ] 
       
  return (
   
    <>
    
        
            
            <Slider {...settings}>    
            {slideData.map((items: any) => (
              <Slide 
              key={items.id}
              image={items.image}/>
))}

          </Slider>
            
            
        
    </>
  )
}
