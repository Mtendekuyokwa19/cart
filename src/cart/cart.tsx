import React from 'react'
import { Product, ProductCard } from '../shop/shop'
import { useState } from 'react';
interface Icart{
trolley:Product[]
removeItem:any
}
export default function Cart({trolley,removeItem}:Icart) {



  return (
    <div>cart</div>)
}

