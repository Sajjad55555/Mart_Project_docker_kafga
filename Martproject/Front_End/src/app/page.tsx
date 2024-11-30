
import { IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from "react-icons/io";
import Image from 'next/image';
import Header2 from './components/header'

import Top_Trending_Card from "./components/top_trending_card";
import Flash_Sales from "./components/flash_sale";
import Most_Wanted from "./components/most_wanted";
import Mobile_Tablet from "./components/phone_tablet";
import Mobile_Accesries from "./components/phone_accesries";
import Mens_Womens from "./components/mens_womens";
import Brand_Card from "./components/brand_card";
import Shipping_Card from "./components/shiping_cards";
import Top_Catagory_Card from "./components/top_catagory_card";



export default function Home() {

  return (
    // Main div
    <div className='h-full w-full'>
  {/* Header div  */}
  <div>
      <Header2/>
  </div>
  {/* catgory div start*/}
  <div className='w-full h-auto mt-10 flex flex-wrap justify-center'>
    <div className='w-full max-w-[1100px] h-auto'>
      <div className='flex justify-between mt-3'>
        <div className="uppercase font-extrabold text-xl">Top Categories</div>
        <div className="text-gold text-2xl flex gap-2">
          <div><IoIosArrowDropleftCircle /></div>
          <div><IoIosArrowDroprightCircle /></div>
        </div>
      </div>
      <div className=" flex flex-wrap mt-5 justify-center gap-6">
        <Top_Catagory_Card/>
      </div>
          </div>
            </div>
            {/* catgory div End*/}
  {/* Trending product div start*/}
  <div className="w-full mt-4 h-auto flex flex-wrap justify-center">
        <div className="w-full max-w-[1100px]">
          <div className="flex justify-between">
            <div className="uppercase font-extrabold text-xl">top trendin</div>
            <div className="uppercase text-gold font-semibold">view more</div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Top_Trending_Card/></div>
              
          </div>
  </div>
    {/* Trending product div End*/}
    {/* Big sale div start*/}
    <div className="w-full h-auto mt-3 flex flex-wrap justify-center">
    <div className="w-full max-w-[1100px] flex flex-col items-center md:flex-row h-[400px] gap-2 mt-5">
      <div className="h-full w-[48%]"><Image className="w-full h-full" src={"/big sale/bigsale_2.jpg"} width={400} height={200} alt=""/></div>
      <div className="h-full w-[48%]"><Image className="w-full h-full" src={"/big sale/bigsale_1.jpg"} width={400} height={200} alt=""/></div>
    </div>
    </div>
    {/* Big sale div End*/}
    {/* Flash sale div start*/}
    <div className="w-full mt-4 h-auto flex flex-wrap justify-center">
        <div className="w-full max-w-[1100px]">
          <div className="flex">
            <div className="uppercase font-extrabold text-xl">flash sales</div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Flash_Sales/></div>
              
          </div>
  </div>
    {/* Flash sale div End*/}
  {/* Most_Wanted div start*/}
  <div className="w-full mt-4 h-auto flex flex-wrap justify-center">
  <div className="w-full max-w-[1100px]">
    <div className="flex">
      <div className="uppercase font-extrabold text-xl">flash sales</div>
    </div>
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      <Most_Wanted/></div>
        
    </div>
  </div>
  {/* Most_Wanted div End*/}
{/* Big sale div start*/}
<div className="w-full h-auto mt-3 flex flex-wrap justify-center">
    <div className="w-full max-w-[1100px] flex flex-col items-center md:flex-row h-[400px] gap-2 mt-5">
      <div className="h-full w-[48%]"><Image className="w-full h-full" src={"/big sale/mega_sale_1.jpg"} width={400} height={200} alt=""/></div>
      <div className="h-full w-[48%]"><Image className="w-full h-full" src={"/big sale/Mega-Sale-.jpg"} width={400} height={200} alt=""/></div>
    </div>
    </div>
    {/* Big sale div End*/}
    {/* Smart Phones div start*/}
    <div className='w-full h-auto mt-10 flex flex-wrap justify-center'>
    <div className='w-full max-w-[1100px] h-auto'>
      <div className='flex justify-between mt-3'>
        <div className="uppercase font-extrabold text-xl">smartphone & tablets</div>
        <div className="text-gold text-2xl flex gap-2">
          <div><IoIosArrowDropleftCircle /></div>
          <div><IoIosArrowDroprightCircle /></div>
        </div>
      </div>
      <div className=" flex flex-wrap mt-5 justify-center gap-2">
        <Mobile_Tablet/>
      </div>
          </div>
            </div>
    {/* Smart Phones div End*/}
    {/* Phone Accecries div start*/}
    <div className='w-full h-auto mt-10 flex flex-wrap justify-center'>
    <div className='w-full max-w-[1100px] h-auto'>
      <div className='flex justify-between mt-3'>
        <div className="uppercase font-extrabold text-xl">telephone accessories</div>
        <div className="text-gold text-2xl flex gap-2">
          <div><IoIosArrowDropleftCircle /></div>
          <div><IoIosArrowDroprightCircle /></div>
        </div>
      </div>
      <div className=" flex flex-wrap mt-5 justify-center gap-2">
        <Mobile_Accesries/>
      </div>
          </div>
            </div>
    {/* Phone Accecries*/}
 {/* sale banner div start*/}
<div className="w-full h-auto mt-3 flex flex-wrap justify-center">
    <div className="w-full max-w-[1100px] flex flex-col items-center md:flex-row h-[300px] gap-2 mt-5">
      <div className="h-full w-[100%]"><Image className="w-full h-full" src={"/big sale/mega-diwali.avif"} width={600} height={300} alt=""/></div>
    </div>
    </div>
    {/* sale banner div End*/} 
    {/* mens and womens fashion div start*/}
    <div className='w-full h-auto mt-10 flex flex-wrap justify-center'>
    <div className='w-full max-w-[1100px] h-auto'>
      <div className='flex justify-between mt-3'>
        <div className="uppercase font-extrabold text-xl">mens and womens fashion</div>
        <div className="text-gold text-2xl flex gap-2">
          <div><IoIosArrowDropleftCircle /></div>
          <div><IoIosArrowDroprightCircle /></div>
        </div>
      </div>
      <div className=" flex flex-wrap mt-5 justify-center gap-2">
        <Mens_Womens/>
      </div>
          </div>
            </div>
    {/* mens and womens fashion div end*/} 
    {/* Trending product div start*/}
  <div className="w-full mt-4 h-auto flex flex-wrap justify-center">
        <div className="w-full max-w-[1100px]">
          <div className="flex justify-between">
            <div className="uppercase font-extrabold text-xl">recommended for you</div>
            <div className="text-gold text-2xl flex gap-2">
          <div><IoIosArrowDropleftCircle /></div>
          <div><IoIosArrowDroprightCircle /></div>
        </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Top_Trending_Card/></div>
              
          </div>
  </div>
    {/* Trending product div End*/}
    {/* patner div start  */}
    <div className="w-full h-[500px] flex justify-center">
    <div className="w-full max-w-[1100px] flex flex-col items-center py-10">
      <div className="text-2xl font-bold uppercase">our partners</div>
      <div className="py-10 flex flex-wrap gap-2 justify-center"><Brand_Card/></div>
      <div className="w-full h-[100px] flex flex-wrap px-6 bg-slate-200 items-center justify-between"><Shipping_Card/></div>
      
    </div>
    </div>
     {/* patner div end */}
         
           
    </div>
  )
}

