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

setstatus({loading:false,error:false})
}
)


 


}
useEffect(()=>{

loadProducts()
},[])

return {products,status}
}
interface IShop{
AddItem:any
removeItem:any
cartProducts:Product[]
}
export default function Shop({cartProducts,AddItem,removeItem}:IShop) {

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
{
status.loading? <p>loading</p>:status.error? <p>Something went wrong</p>:<ShopItems Products={products as Product[]} AddItem={AddItem} removeItem={removeItem} cartProducts={cartProducts}/>
}

</div>
  )
}
interface IShopItems{
Products:Product[];
AddItem:any
removeItem:any
cartProducts:Product[]
}
export const ShopItems = ({AddItem,removeItem,cartProducts,Products}:IShopItems)=> {
console.log(Products)
  return (
    <div className='grid-cols-4 grid grid-rows-5 gap-2 p-2'>
{Products?.map((item:Product)=><ProductCard product={item} cartProducts={cartProducts} removeItem={removeItem} AddItems={AddItem}  />)} 
    </div>
  )
}
export class Product {
id:number;
title:string;
price:number;
category:string;
description:string;
image:string;
numberOfitemsincart:number=1;
  constructor(id:number,title:string,price:number,category:string,description:string,image:string) {
this.image=image;
this.id=id;
this.title=title;
this.price=price;
this.category=category;
this.description=description;
  }
alreadyincart(products:Product[]){
for (let index = 0; index < products?.length; index++) {
 if(products[index]===this) 
{
return {incart:true,position:index}
}
}
return {incart:false,position:0}
}
Addquantinty(){
this.numberOfitemsincart++;

}
removenumberofitemsfromcart(){
if(this.numberOfitemsincart!=1){
this.numberOfitemsincart--;
}
}
}

interface IProduct{
product:Product
AddItems:any
removeItem:any
cartProducts:Product[]
}
export const ProductCard = ({AddItems,removeItem,cartProducts,product}:IProduct) => {
const [incart,setincart]=useState(product.alreadyincart(cartProducts).incart)
function ManageProduct() {
 setincart(!incart) 
if(!product.alreadyincart(cartProducts)?.incart)
{
AddItems(product)
return
}
removeItem(product)
}
  return (
    <div className='bg-[#d6f5cd] p-4 rounded gap-2'>
     <div>
<header>
                                
<img className='h-20' src={getImgUrl(product.image)} alt="stuff"/>
</header>
</div> 
<div className='flex flex-col justify-center items-start gap-1 px-2'>
<p className='font-bold text-[#416f15] text-lg '>{product.title}</p>
<p className='font-bold'>{product.price.toString()+"$"}</p>

<button onClick={
ManageProduct
} className='bg-[#416f15] text-white rounded-md px-4 w-full py-2 '>{incart?"Remove from cart":"Add to cart"}</button>
</div>
    </div>
  )
}
export function getImgUrl(name:string) {
   return new URL(`${name}`, import.meta.url).href
}
async function GetAllProducts() {
 let product=await fetch('https://fakestoreapi.com/products');
return product.json()


}

