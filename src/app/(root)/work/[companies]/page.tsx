'use client'

import React from 'react'
import { UseRevealer } from '@/hooks/useRevealer'
import Image from 'next/image';
const page = () => {
  UseRevealer();

  return (
    <>
    <div className='revealer flex flex-col justify-center items-center'>
        
    </div>

<div className="flex flex-col  justify-center h-full items-end">
<div className="flex flex-col justify-center w-3/4 h-full items-center"
 style={{
  padding: '12vw 3vw 0 5vw',
  
  fontSize: 'clamp(3.4rem, 6vw, 100rem)',
  lineHeight: '0.85',
}}
  >
    <h1 className='druk-super relative z-10  text-right text-transparent uppercase'
       style={{
        WebkitTextStroke: 'clamp(0.005rem, 0.15vw, 1rem) #000000',
    }}
    >Repixelx Studio</h1>

</div>

<div className="flex w-full  -translate-y-[7vw] h-full"

>
  <Image src={'/work/rpx/main.svg'} alt='repixelx' width={1000} height={1000} className='w-full object-cover' />
</div>
</div>

    </>

  )
}

export default page
