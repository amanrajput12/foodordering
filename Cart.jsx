import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartMenu from './CartMenu';
import { clearCart } from '../utils/Cartslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const cartItems = useSelector((store) =>store.cart.items)
    const cartTotal = useSelector((store) =>store.cart.cartTotal)
console.log(cartItems);
const dispatch = useDispatch()
    // const store = useSelector((store)=>store)  it leads to preformance issue
    const hanldeClearcart =()=>{
      dispatch(clearCart())
toast.error("Clear cart")
    }
  const handleorder =()=>{
    toast.success("your order is placed  ")
  }

  return (
    <div>
    <button onClick={()=>hanldeClearcart()} className='bg-cyan-800 p-2 rounded-md m-3 text-cyan-50 hover:bg-cyan-950'>Clear cart</button>
    {
        cartItems.map((items)=>
        <CartMenu key={items.id} menu={items}/>
        )
    }
      <p className='text-center p-2'> Total Bill you have to pay <span className='bg-neutral-700 opacity-50 text-yellow-100 rounded-md p-2'>₹ { cartTotal}</span></p>
      {
        cartItems.length && 
        <div className='flex justify-end mr-3 mt-3'>
        <button className='bg-emerald-500 p-3  rounded-lg text-white ' onClick={handleorder}>Procedd to pay</button>
        </div>
      }
      <ToastContainer/>
    </div>
    
  )
}

export default Cart