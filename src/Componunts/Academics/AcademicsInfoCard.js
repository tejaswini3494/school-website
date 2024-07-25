import React from 'react'

export default function AcademicsInfoCard({heading,descriptions}) {
  return (
    <>
    <div className='text-black text-2xl'>{heading}</div>
    
    {descriptions.map((item)=>{
        return(
            <>
            <p>{item.description}</p>
          
            </>
        )
    })}
    </>
  )
}
