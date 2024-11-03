import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
<div className=' text-black h-screen w-screen'  >

  <nav className='sm:flex sm:justify-between sm:px-4 bg-gray-200 rounded-b'>
   <div className='flex p-4'>
   <button><Link to="/">Jewdisha</Link></button>

</div>
   <div className='flex justify-evenly list-none items-center gap-44'>

<li><Link to="/">Home</Link></li>
<li><button><Link to="shop">Shop</Link></button></li>
<li><button><Link to="cart">github</Link></button></li>
</div>
   <div className='items-center list-none justify-center flex p-4'>
<li><button><Link to="cart">cart</Link></button></li>
</div>

</nav>

<Outlet/>
</div>
  )
}

