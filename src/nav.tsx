import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
<>

  <nav className='flex '>
   <div>
   <button><Link to="/">Jewdisha</Link></button>

</div>
   <div>

<li><Link to="/">Home</Link></li>
<li><button><Link to="shop">Shop</Link></button></li>
<li><button><Link to="cart">cart</Link></button></li>
</div>
   <div>
<li><button><Link to="cart">Github</Link></button></li>
</div>

</nav>

<Outlet/>
</>
  )
}

