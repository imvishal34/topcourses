import React from 'react'
import "./Spinner.css"

export const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className="custom-loader"></div>
        <p className='text-lg font-semibold text-orange-500'>Loading...</p>
    </div>
  )
}
