import { X, Menu } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [hamburgur, sethamburgur] = useState(false)
  return (
    <div>
      <nav className=' flex bg-neutral-800 items-center justify-between'>
        <div>
          <img src="Logo.png" alt="" className='h-17 ml-10' />
        </div>
        <ul className='hidden gap-25 text-white mr-10  md:flex items-center space-x-6'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div>
          <button onClick={()=>sethamburgur(!hamburgur)} className='text-amber-50 '>
            {hamburgur?(<X/>):(<Menu/>)}
          </button>
          </div>
          {hamburgur && (
        <div id="mobile-menu" class=" md:hidden bg-white px-4 pb-4">
          <a href="#" class="block py-2 hover:text-blue-500">Home</a>
          <a href="#" class="block py-2 hover:text-blue-500">About</a>
          <a href="#" class="block py-2 hover:text-blue-500">Projects</a>
          <a href="#" class="block py-2 hover:text-blue-500">Contact</a>
        </div>
          )}
      </nav>
    </div>
  )
}

export default Navbar
