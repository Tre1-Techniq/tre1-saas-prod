import React from 'react'

export default function UserItem() {
  return (
    <div className="flex items center justify-center gap-4 border rounded-[8px] border-neutral-700 px-6 py-3 mb-8">
        <div className='avatar rounded-full min-h-14 min-w-14 bg-[#16d7d6] flex items-center justify-center text-[#292929] mr-2'>
            <p className='text-2xl font-bold'>TT</p>
        </div>
        <div className='grow'>
            <p className='text-xl font-bold'>Tre1 Techniq</p>
            <p className='text-sm font-[#414141]'>info@tre1techniq.com</p>
        </div>
    </div>
    
  )
}