import React from 'react'

type Props = {
    value: number,
}

function ProgressBar({value}: Props) {
  return (
    <div className='w-full bg-secondary rounded-full h-2.5'>
        <div 
            className='bg-teal-500 rounded-md h-2.5'
            style={{
                width: `${value}%`
            }}
        ></div>
    </div>
  )
}

export default ProgressBar