import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./nav";
import Home from "./home/home";
import Shop from "./shop/shop";
import Cart from "./cart/cart";
import { Product } from "./shop/shop";
import { useState } from "react";
const router=(trolley:Product[],AddItem:any,removeItem:any)=>createBrowserRouter([
  {
    path:"/",
    element:<Nav/>,
    children:[
    {
        index:true,element:<Home/>


    }
,{ path:"shop",element:<Shop cartProducts={trolley} AddItem={AddItem} removeItem={removeItem}/>
} ,
 {
path:"cart",element:<Cart trolley={trolley} removeItem={removeItem} />
}   ]
  }
])


export const RouteSet = () => {
const [trolley,settrolley]=useState<Product[]>();
function AddItem(item:Product ){
let trolleykeeper=trolley;
trolleykeeper?.push(item)
settrolley(trolleykeeper)

}

function removeItem(item:Product) {
 let itemAnalysis=item.alreadyincart(trolley as Product[]) 
if(!itemAnalysis.incart){
return
}
let trolleykeeper=trolley;
trolleykeeper?.splice(itemAnalysis.position,1)
}
  return (
  <RouterProvider router={router(trolley as Product[],AddItem,removeItem)}/>
  )

}
