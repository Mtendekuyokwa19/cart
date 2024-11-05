import React from 'react'
import { getImgUrl, Product, ProductCard } from '../shop/shop'
import { useState } from 'react';
interface Icart{
trolley:Product[]
removeItem:any
}
export default function Cart({trolley,removeItem}:Icart) {



  return (
    <div>

<Managetrolley removefromtrolley={removeItem} trolley={trolley}/>
</div>)
}
interface ImanageTrolley{
trolley:Product[]
removefromtrolley:any

}
function Managetrolley({trolley,removefromtrolley}:ImanageTrolley
){



return(
<div>
{trolley.map((item)=><CartCards item={item} removefromtrolley={removefromtrolley} />)}
</div>
)
}

interface ICartcards{
item:Product
removefromtrolley:any
}
export const CartCards = ({item,removefromtrolley}:ICartcards)=> {
const [step,setstep]=useState(item.numberOfitemsincart)
function Additem(){
setstep(()=>step+1)
item.Addquantinty()
}
function removeItem(){
setstep(step!=1?()=>step-1:1)
item.removenumberofitemsfromcart()
}
  return (
    <div className='flex gap-4 bg-sky-100 p-3'>
     <div>
    <img src={getImgUrl(item.image)} alt="" className='h-40 rounded-md'/>
</div>     
<div>
<div className='flex items-center justify-start gap-4'>

<h1 className='font-bold text-lg'>{item.title}</h1>
<p className='font-bold'>{"$"+item.price}</p>


</div>
<div>
{item.description.split("").splice(0,120).join("")+"..."}
</div>
<div className='flex'>

<div><button onClick={Additem}>+</button><p>{step}</p><button onClick={removeItem}>-</button></div>
</div>
<div>
<button onClick={()=>removefromtrolley(item)}>remove</button>

</div>
</div>
    </div>
  )
}

