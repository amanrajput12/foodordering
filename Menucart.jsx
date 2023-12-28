import React, { useEffect, useState } from "react"


import {ITEM_IMG_CDN_URL} from "./Constants"
import { addItem } from "../utils/Cartslice"
import { useDispatch } from "react-redux"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menucart =({menu})=>{

     
    console.log('in menu cart ',menu.id);

const dispatch = useDispatch()
    const hanldeAddItem =(menu)=>{
    
        console.log('menu value on cart add',menu);
        dispatch(addItem({
            name:menu.name,
            id:menu.id,
            price:menu.display_item_price,
           
            description:menu.description


        }))
      toast.success("Item added to cart ",{
        position: "bottom-left",
        autoClose: 1000,
        pauseOnHover: true,
      })
    }
 
return(
    <div className="flex justify-around items-center rounded-2xl m-9  shadow-lg mb-10 " >
  
    <div className="w-2/3">
    
     <h2>{menu.name}</h2>
    <p className=" sm:flex">{menu.description}</p>
    <h3>{`₹ 
 ${menu.display_item_price}`}</h3>
    </div>
    <div className=" flex flex-col p-2 justify-center items-center"> 
    {/* <img className="w-20 h-20 sm:w-40 sm:h-40 mb-3 rounded-lg" src={ITEM_IMG_CDN_URL + menu.imageId} alt="image" /> */}
    <button onClick={()=>hanldeAddItem(menu)} className="bg-cyan-700 p-[2px] rounded-md sm:p-2 sm:rounded-lg text-white hover:bg-green-700">Add to Cart</button>
</div>
<ToastContainer/>
    </div>
)
}
export default Menucart