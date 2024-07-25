import React, { useState } from 'react'

export default function Contactform() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
 

  const Handleform = (e) => {
    e.target.name ==="Username"
      ? setName(e.target.value)
      : setEmail(e.target.value)
  };
  return (
    
        <form className='flex flex-col gap-4 '>
            <input type="text" name="Username" placeholder="Enter Your Name "value={username} onChange={Handleform} className='py-2 px-4 w-full' />
          
          <input type="text" name="Email" placeholder="Email"  value={email} onChange={Handleform} className='py-2 px-4 w-full'  />
          <textarea type="text" name="message" placeholder="Message" rows={3}className='py-2 px-4 w-full' />
          <button className='text-white bg-black w-16 py-2 px-4 font-bold  hover:bg-blue-800'>Send</button>
        
        </form>
    
  )
}
