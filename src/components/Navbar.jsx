import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className=' flex bg-neutral-800 items-center justify-between'>
        <div>
          <img src="Logo.png" alt="" className='h-17 ml-10'/>
        </div>
        <ul className='flex gap-25 text-white mr-10'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
