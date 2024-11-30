import Image from 'next/image';
import { CiHeart } from "react-icons/ci";


interface Flash_Sale_Types {
    id:number;
    image: string;
    price: string;
    del_price: string;
    dis: string; 
    percentage?:string
}

export default function Mens_Womens() {
const top_category:Flash_Sale_Types[] =[{
    id:0,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/Mens and wmoens/bag1.png",
},

{
    id:1,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/Mens and wmoens/Shorts-PNG.png"
},
{
    id:2,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/Mens and wmoens/T-Shirt-.png",
},

{
    id:3,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/Mens and wmoens/Women-Bag-2.png"
},
{
    id:4,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/Mens and wmoens/T-Shirts Lot.png",
    
}

]

  return (
    <>
{top_category.map((items:Flash_Sale_Types)=>(
<div key={items.id} className='w-[205px]'>

<div className='w-[205px] h-[170px] rounded bg-slate-50'>
    <div className='flex flex-row relative'>
    {items.percentage && (
        <div className='w-[70px] text-center text-white h-[30px] bg-gold text-[15px]'>{items.percentage}</div> )}
       <div className='absolute top-0 right-0'><CiHeart /></div>
    </div>
    
    <div className='flex justify-center'>
        <Image className='h-[130px]' src={items.image} width={130} height={100} alt=''/>
        </div>
    
    </div>
    <div>   
        <div className='flex justify-between items-center'><p className='text-[12px] font-semibold'>{items.dis}</p></div>
        <div className='flex'><del>{items.del_price}</del><p>{items.price}</p></div>
        <div><button className='bg-red-50 rounded-lg border w-[90px] border-t-black shadow-2xl '>Add to Cart</button></div>
    </div>
    
</div>
    
))}
    </>
  )
}
