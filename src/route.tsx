import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./nav";
import Home from "./home/home";
import Shop from "./shop/shop";
import Cart from "./cart/cart";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Nav/>,
    children:[
    {
        index:true,element:<Home/>


    }
,{ path:"shop",element:<Shop/>
} ,
 {
path:"cart",element:<Cart/>
}   ]
  }
])


export const RouteSet = () => {
  return (
  <RouterProvider router={router}/>
  )

}
