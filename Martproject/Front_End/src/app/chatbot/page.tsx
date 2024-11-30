import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import BotLogo from "../assets/icons/Bot-Logo.gif";
import Sendiconn from "../assets/icons/send-iconnn.png";


export default function ChatBot() {
  return (

<>

{/* Main COntainer ==================================================================== */}
<div className=' w-full m-10 p-10 '>


{/* Chatbot ------------------------------------------------------------  */}
<div className=' bg-white shadow-black shadow-2xl rounded-lg max-w-md ' >


{/* Header  ------------------------------------------------------------  */}
<div  className=' border-b-2 px-2 py-4 '>
  <div className=' inline-flex items-center ' >

    <Image src={BotLogo}   alt="Logo" className=' w-20 ' />
    <span className='ml-4 '>ChatBot</span>

  </div>
</div>
{/* Body  ------------------------------------------------------------  */}
<div className=' border-t-2 flex items-center px-2 py-4 '>

<div className=' h-80 flex flex-col max-w-md px-2 mb-2 mt-2 space-y-4 '>

{/* Text ---------------------- */}
<div className=' flex flex-col items-start ' >
  <span className=' text-white bg-blue-500 px-2 py-2 rounded-b-xl rounded-tl-xl mb-2 mt-2'>
    How may i Help you?
  </span>
</div>

</div>

{/* user ------------------ */}
<div className='flex flex-col items-end '>
  <span className=' text-white bg-gray-500 rounded-b-xl rounded-tr-xl px-4 py-2 mb-2 mt-2 '>
  help me find a coffee cup? </span>
</div>




</div>

{/* Footer  ------------------------------------------------------------  */}
<div className=' border-t-2 flex items-center px-2 py-4  '>

<input type="text" placeholder='Type Here ......' className=' flex-1 rounded-lg px-4 py-2 border-2 mr-2 ' />
<button type='submit' className='relative right-16'>
<Image src={Sendiconn}   alt="Logo" className=' w-8 ' />
</button>
</div>





</div>

</div>  

</>

  )
}
