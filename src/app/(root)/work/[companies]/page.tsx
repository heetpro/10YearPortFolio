'use client'

import React from 'react'
import { UseRevealer } from '@/hooks/useRevealer'
// import { useParams } from 'next/navigation';
const page = () => {
  UseRevealer();

  // const { companies } = useParams();
  return (
    <>
    <div className='revealer flex flex-col justify-center items-center'>
        {/* <h1 className='druk text-black uppercXase'>{companies}</h1> */}
    </div>
    </>

  )
}

export default page
