import React from 'react'

export default function AcademicsCard({title,isActive ,onClick}) {
  return (
    <div className='${isActive ? " active" :""}  ' onClick={()=>onClick()}>
     
        <h2 className=' text-lg font-semibold hover:cursor-pointer hover:text-blue-700 hover:bg-black bg-blue-100 text-black p-2'>⁕ {title}</h2>
        
        
    </div>
  )
}
