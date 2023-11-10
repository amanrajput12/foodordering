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
  return (
    <div>
    <button onClick={()=>hanldeClearcart()} className='bg-cyan-800 p-2 rounded-md m-3 text-cyan-50 hover:bg-cyan-950'>Clear cart</button>
    {
        cartItems.map((items)=>
        <CartMenu key={items.id} menu={items}/>
        )
    }
      <p>Card Total {cartTotal/100}</p>
      <ToastContainer/>
    </div>
    
  )
}

export default Cart