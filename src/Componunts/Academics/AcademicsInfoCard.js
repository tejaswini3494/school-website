import React from 'react'

export default function AcademicsInfoCard({heading,skills}) {
  return (
    <>
    <div className='text-black text-2xl'>{heading}</div>
    
    {skills.map((item)=>{
        return(
            <>
            <p>{item.skill}</p>
          
            </>
        )
    })}
    </>
  )
}
