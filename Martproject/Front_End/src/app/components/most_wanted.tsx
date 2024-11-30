import Image from 'next/image';



interface Flash_Sale_Types {
    id:number;
    image: string;
    dis: string; 
}

export default function Most_Wanted() {
const top_category:Flash_Sale_Types[] =[{
    id:0,
    dis:"Lorem ipsum dolor sit.",
    image:"/most wanted/mobiles.jpg"
},

{
    id:1,
    dis:"Lorem ipsum dolor sit.",
    image:"/most wanted/refegrator.jpg"
},
{
    id:2,
    dis:"Lorem ipsum dolor sit.",
    image:"/most wanted/laptops.jpg"
},

{
    id:3,
    dis:"Lorem ipsum dolor sit.",
    image:"/most wanted/LCD-Television.jpg"
},

]

  return (
    <>
{top_category.map((items:Flash_Sale_Types)=>(
<div key={items.id} className='w-[260px] border shadow-2xl'>
<div className='w-full flex justify-center h-[200px] rounded bg-slate-50'>
    <div className='flex justify-center'>
        <Image className='w-full' src={items.image} width={170} height={100} alt=''/>
        </div>
    </div>   
    <div className=' text-center font-bold'>{items.dis}</div>
</div>
    
))}
    </>
  )
}

