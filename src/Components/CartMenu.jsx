import React from 'react'
import {ITEM_IMG_CDN_URL} from "./Constants"
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/Cartslice';

const CartMenu = ({menu}) => {
  // const cartIems =useSelector((state)=>state.cart.items)
  console.log('on cart usinf selector is',menu);
   const dispatch = useDispatch()
  const handleIncrease =(menu)=>{
     dispatch(addItem(menu))
  }
  const handleDecrease =()=>{
    dispatch(removeItem(menu))
  }
  return (
     <div className="flex justify-around items-center rounded-2xl m-9  shadow-lg mb-10 " >
   
    <div className="w-2/3">
    <h2>{menu.name}</h2>
    <p>{menu.description}</p>
    <h3>{`₹ 
 ${menu.totalPrice/100}`}</h3>
    </div>
    <div className=" flex flex-col p-2 justify-center items-center">
    <img className="w-40 h-30 mb-3 rounded-lg" src={ITEM_IMG_CDN_URL + menu.image} alt="image" />
    <div className='flex gap-6'>
    <button  onClick={()=>handleDecrease(menu)} className="bg-slate-400 p-1 rounded-sm text-white hover:bg-gray-600">-</button>
    <span>{menu.quantity}</span>
    <button  onClick={()=>handleIncrease(menu)} className="bg-slate-400 p-1 rounded-sm text-white hover:bg-gray-600">+</button>
    </div>
</div>

    </div>
  )
}

export default CartMenu