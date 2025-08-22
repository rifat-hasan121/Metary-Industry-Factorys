import React from 'react'
import { RotateLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50'>
      <RotateLoader />
    </div>
  )
}
