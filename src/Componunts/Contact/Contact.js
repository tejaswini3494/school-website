import React from 'react'
import Contactcard from './Contactcard'
import Contactform from './Contactform'
// import Phone from 'Images/phone.webp'
// import Emain from '/Images/phone.webp'



export default function Contact() {
  return (
    <section className=" h-screen">
        <h5 className='text-center text-2xl font-bold py-10'>Contact Us</h5>
        <div className='md:flex  w-5/6 mx-auto gap-10  '>
            <div className='flex-1  flex flex-col gap-6 '>

                <Contactcard text="+1 (123) 456-7890" />
                <Contactcard text="info@springdale.edu" />
                <Contactcard text="Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code" />
            </div>
          
                
                <div className='flex-1'>
            <Contactform/>
            </div>
            
            
        </div>
    </section>
  )
}
