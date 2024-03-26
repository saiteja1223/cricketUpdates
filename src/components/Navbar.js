import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
     <div className='w-full bg-black 10 h-[50px] flex  text-white	items-center justify-between p-5 sticky top-0 ' >
        <div className='text-2xl' >Cricket </div>
        <div className='flex gap-4 align-middle'>
          <Link to={'/'}><div>Home</div></Link>  
          <Link to={'/ranking/mens/team'}><div>Ranking</div></Link>  
            <div>Dark</div>
        </div>
     </div>
  )
}

export default Navbar