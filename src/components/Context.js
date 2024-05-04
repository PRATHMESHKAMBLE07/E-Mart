import React, { children,createContext, useContext, useReducer } from 'react'
import { cartReducer, productReducer } from './reducers'
const Items=createContext()
function Context({children}) {
   
    const products=[
    {
      id:1,
      name:"Smart watch",
      price:39.90,
      Image:"./images/clock1.png",
      stock:299   
    },
    {
      id:2,
      name:"Digital Watch",
      price:28.03,
      Image:"./images/clock2.png",
      stock:23 
    },
    {
        id:3,
        name:"Analogue Watch",
        price:22.74,
        Image:"./images/clock3.png",
        stock:9
      },
      {
        id:4,
        name:"Wall Clock",
        price:23.94,
        Image:"./images/clock4.png",
        stock:10
      },
      {
        id:5,
        name:"Alarm Clock",
        price:11.97,
        Image:"./images/clock5.png",
        stock:0 
      },
      {
        id:6,
        name:"OnePlus 9",
        price:348.96,
        Image:"./images/Phone1.png",
        stock:233
      },
      {
        id:7,
        name:"Vivo T2",
        price:191.47,
        Image:"./images/Phone2.jpg",
        stock:565 
      },
      {
        id:8,
        name:"Redmi Note 12 Pro 5G",
        price:299.08,
        Image:"./images/Phone3.jpg",
        stock:56 
      },
      {
        id:9,
        name:"POCO M2 Pro",
        price:149.59,
        Image:"./images/Phone4.png",
        stock:35 
      },
      {
        id:10,
        name:"Iphone 15 Pro Max",
        price:1843.04,
        Image:"./images/Phone5.png",
        stock:345 
      },
      {
        id:11,
        name:"Lenovo Yoga ",
        price:887.89,
        Image:"./images/Laptop1.png",
        stock:233
      },
      {
        id:12,
        name:"MacBook Pro",
        price:1961.40,
        Image:"./images/Laptop2.png",
        stock:64
      },
      {
        id:13,
        name:"Asus ROG",
        price:299.08,
        Image:"./images/Laptop3.png",
        stock:23 
      },
      {
        id:14,
        name:"Dell G16",
        price:941.27,
        Image:"./images/Laptop4.jpg",
        stock:0 
      },
      {
        id:15,
        name:"HP Pavilion",
        price:673.79,
        Image:"./images/Laptop5.jpg",
        stock:65
      },
      {
        id:16,
        name:"LG LH5100",
        price:394.94,
        Image:"./images/Tv1.png",
        stock:111
      },
      {
        id:17,
        name:"Panasonic",
        price:622.33,
        Image:"./images/Tv2.png",
        stock:233
      },
      {
        id:18,
        name:"Xiaomi Mi LED",
        price:598.38,
        Image:"./images/Tv3.png",
        stock:45
      },
      {
        id:19,
        name:"Micromax LCD",
        price:167.43,
        Image:"./images/Tv4.jpg",
        stock:344
      },
      {
        id:20,
        name:"Samsung",
        price:597.19,
        Image:"./images/Tv5.jpg",
        stock:233
      },
      

    ]
    const[state,dispatch]=useReducer(cartReducer,{
            products:products,
            cart:[]
    })

    const [productstate,productdispatch]=useReducer(productReducer,{
      stock:false,
      searchQuery:""
    })
  return (
    <Items.Provider value={{state,dispatch,productstate,productdispatch}}>
     {children}
     </Items.Provider>
  )
}

export default Context
export const CartState=()=>{
    return useContext(Items)
}
