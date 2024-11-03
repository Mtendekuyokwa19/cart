import React, { useEffect, useState } from 'react'
function useGetProducts() {
 const[products,setproducts]=useState<Product[]>() 
const [status,setstatus]=useState({loading:true,error:false})
function loadProducts() {
 let unresolvedProducts=GetAllProducts();
let resolvedProductsHolder:Product[]=[];
unresolvedProducts.then((results)=>{
results.forEach((item:{id:number,image:string,description:string,title:string,category:string,price:number})=>{
let newProduct:Product=new Product(item.id,item.title,item.price,item.category,item.description,item.image)
resolvedProductsHolder.push(newProduct)
})

setproducts(()=>resolvedProductsHolder)

}).catch(()=>{

setstatus({...status,error:true})
}
).finally(()=>{

setstatus({...status,loading:false})
}
)


 


}
useEffect(()=>{

loadProducts()
},[])

return {products,status}
}

export default function Shop() {

const {products,status}=useGetProducts()
const [loading,setloading]=useState<boolean>()
const [allProducts,setallProducts]=useState<Product[]>();
const [error,seterror]=useState<boolean>();
useEffect(()=>{
setallProducts(products)
setloading(status.loading)
seterror(status.error)
},[])
  return (
<div>
<ShopItems Products={products as Product[]}/>

</div>
  )
}
interface IShopItems{
Products:Product[];
}
export const ShopItems = ({Products}:IShopItems)=> {
console.log(Products)
  return (
    <div className='grid-cols-4 grid grid-rows-5 gap-2 p-2'>
{Products.map((item:Product)=><ProductCard product={item}  />)} 
    </div>
  )
}
class Product {
id:number;
title:string;
price:number;
category:string;
description:string;
image:string;
  constructor(id:number,title:string,price:number,category:string,description:string,image:string) {
this.image=image;
this.id=id;
this.title=title;
this.price=price;
this.category=category;
this.description=description;
  }
}

interface IProduct{
product:Product
}
export const ProductCard = ({product}:IProduct) => {
  return (
    <div className='bg-[#d6f5cd] p-4 rounded gap-2'>
     <div>
<header>
                                
<img className='' src={getImgUrl(product.image)} alt="stuff"/>
</header>
</div> 
<div className='flex flex-col justify-center items-start gap-1 px-2'>
<p className='font-bold text-[#416f15] text-lg '>{product.title}</p>
<p className='font-bold'>{product.price.toString()+"$"}</p>

<button className='bg-[#416f15] text-white rounded-md px-4 w-full py-2 '>Add to Cart</button>
</div>
    </div>
  )
}
function getImgUrl(name:string) {
   return new URL(`${name}`, import.meta.url).href
}
async function GetAllProducts() {
 let product=await fetch('https://fakestoreapi.com/products');
return product.json()


}

