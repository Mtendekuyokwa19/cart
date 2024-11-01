import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import home from './home.jpg'
import { Carticon } from '../svg'
export default function Home() {
  return (
<div style={{
background:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${home})`

}} className='text-white flex justify-center items-center  h-full'>
<div className='flex gap-3 flex-col items-center px-24 '>

<h1 className='text-9xl font-bold font-serif'>BUILIDING CULTURE</h1>

<p className='text-base'>Fashion in Africa is a vivid and dynamic expression of the continent's rich cultural tapestry. It reflects a deep connection to heritage, with traditional garments such as kente cloth from Ghana, shweshwe fabric from South Africa, and the boubou from West Africa showcasing unique identities and histories.</p>
<div className=' flex gap-4'>
<Link to={"shop"}>

<button className='px-6 py-4 shadow-black flex gap-2 bg-lime-700 hover:bg-lime-600 justify-center items-center rounded'>
<Carticon/>
<p>Visit Shop</p>

</button>

</Link>
<Link to={"www.github.com"}>
<button>

<p className='px-6 py-4 flex gap-2 outline outline-2 w-40 justify-center items-center rounded' >Github</p>
</button>

</Link>
</div>
</div>
</div>
  )
}

