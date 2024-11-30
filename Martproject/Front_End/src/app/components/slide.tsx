import React from 'react';
import Image from 'next/image';

interface PropsType {
  image: string;
  
}

const Slide: React.FC<PropsType> = ({ image }:PropsType) => {
  return (
    <div className='w-full h-auto relative'>
      {/* Image container */}
      <div className='w-full h-[400px]'>
        <Image src={image} height={0} width={1000} alt=''
        className='h-full w-full'></Image>
      </div>
    </div>
  );
};

export default Slide;