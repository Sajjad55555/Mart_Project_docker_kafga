import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";


interface Top_Trending_Types {
    id:number;
    title:string;
    image: string;
    title_para: string;
    dis_2: string;
    dis: string; 
}

export default function Top_Trending_Card() {
const top_category:Top_Trending_Types[] =[{
    id:0,
    title:"Cauliflower",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/Phool-Gobi-Cauliflower-.png"
},

{
    id:1,
    title:"Ketchup",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/Ketchup.png"
},
{
    id:2,
    title:"Shoes",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/shoes.png"
},
{
    id:3,
    title:"Lays",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/Lays-Chips.png"
},
{
    id:4,
    title:"Cherry",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/cherry.png"
},
{
    id:5,
    title:"Baby Milk",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/Baby-Milk.png"
},
{
    id:6,
    title:"Shirts",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/T-Shirt.png"
},
{
    id:7,
    title:"Watches",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/watches.png"
},
{
    id:8,
    title:"All Oils",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/oil.png"
},
{
    id:9,
    title:"Cleaners",
    title_para:"150cfa",
    dis:"Lorem ipsum dolor sit.",
    dis_2:"14%",
    image:"/trending items/cleaners.png"
},

]

  return (
    <>
    {top_category.map((items:Top_Trending_Types)=>(
    <div key={items.id} className='w-[205px]'>
        
        <div className='w-[205px] h-[160px] rounded bg-slate-50'>
            <div className='flex justify-end py-2 mr-2 text-xl'><CiHeart /></div>
            <div className='flex justify-center'>
                <Image src={items.image} width={130} height={100} alt=''/>
                </div>
            
            </div>
            <div>
                <div className='flex justify-between font-bold'><p>{items.title}</p><p className=' uppercase'>{items.title_para}</p></div>
                <div className='flex justify-between items-center'><p className='text-[12px]'>{items.dis}</p><p className='flex items-center text-gold'><span><FaStar /></span>{items.dis_2}</p></div>
                <div><button className='bg-red-50 rounded-lg border w-[90px] border-t-black shadow-2xl '>Add to Cart</button></div>
            </div>
        
    </div>
    
))}
    </>
  )
}
