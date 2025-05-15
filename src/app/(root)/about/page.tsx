'use client'

import React from 'react'
import { UseRevealer } from '@/hooks/useRevealer'
const page = () => {

  UseRevealer();
  return (
    <>
    <div className='revealer'>
    </div>

    <div className="flex"></div>
    </>
  )
}

export default page
