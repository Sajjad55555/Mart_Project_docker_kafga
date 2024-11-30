import Image from 'next/image';
import { CiHeart } from "react-icons/ci";


interface Flash_Sale_Types {
    id:number;
    image: string;
    price: string;
    del_price: string;
    dis: string; 
}

export default function Flash_Sales() {
const top_category:Flash_Sale_Types[] =[{
    id:0,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/flash sale/Airpod.png"
},

{
    id:1,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/flash sale/fruit-juicer.png"
},
{
    id:2,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/trending items/shoes.png"
},

{
    id:3,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/trending items/T-Shirt.png"
},
{
    id:4,
    price:"500$",
    del_price:"250$",
    dis:"Lorem ipsum dolor sit.",
    image:"/trending items/watches.png"
}

]

  return (
    <>
    {top_category.map((items:Flash_Sale_Types)=>(
    <div key={items.id} className='w-[205px]'>
        
        <div className='w-[205px] h-[170px] rounded bg-slate-50'>
            <div className='flex justify-between py-2 mr-2 text-xl'><span className='w-[70px] text-center text-white h-[30px] bg-gold text-[15px]'>50% off</span><CiHeart /></div>
            <div className='flex justify-center'>
                <Image src={items.image} width={130} height={100} alt=''/>
                </div>
            
            </div>
            <div>   
                <div className='flex justify-between items-center'><p className='text-[12px]'>{items.dis}</p></div>
                <div className='flex'><del>{items.del_price}</del><p>{items.price}</p></div>
                <div><button className='bg-red-50 rounded-lg border w-[90px] border-t-black shadow-2xl '>Add to Cart</button></div>
            </div>
        
    </div>
    
))}
    </>
  )
}
