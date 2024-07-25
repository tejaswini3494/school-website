import React from 'react'

export default function Contactcard({ text,icon }) {
  return (
    <div className=''>
      <div className="icon">
        <img src={icon} />
      </div>
      <p className='text-blue-800 font-semibold'>{text}</p>
    </div>
  )
}
