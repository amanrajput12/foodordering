

import React, { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import logo from '../../food.png'
import {  useSelector } from "react-redux";
import Store from "../utils/store";
import {AiOutlineMenuUnfold } from 'react-icons/ai';

const Title = () => {

    return (
      <img
        className="h-28 hidden sm:flex"
        src={logo}
        alt=" food villa"
      />
    );
  };

 
  const HeaderComp = () =>  {
 const status = useOnline()
    const [islogin,setIslogin]= useState(false)
    const {user} = useContext(UserContext)
    const [menu,setmenu] =useState(false)

    const cartItems = useSelector(Store =>Store.cart.items)
    useEffect(()=>{
    console.log('useeffect');
    },[])
    console.log("rendear");
const handlemenu =()=>{
  setmenu(!menu)
}
   
  return(
    
    <div className="flex justify-between items-center ml-2 mr-2 ">
      <Title />


      <div >
        <ul className="hidden sm:flex  items-center w-96 justify-around flex-wrap ">
 
       
        <li ><Link to='/'>Home</Link></li>
        <li > <Link to='/about'> About </Link> </li>
        <li  > <Link to='/contact'> Contact </Link> </li>
          
          <li><Link to='/instamart'>InstaMart</Link></li>
          <li> <Link to='/cart'> Cart <span>{cartItems.length}</span> </Link> </li>
        </ul>

        <ul className="sm:hidden ">
<AiOutlineMenuUnfold onClick={handlemenu} className="m-3 text-2xl "/>
       {menu && <li>
        <li ><Link to='/'>Home</Link></li>
        <li > <Link to='/about'> About </Link> </li>
        <li  > <Link to='/contact'> Contact </Link> </li>
          
          <li><Link to='/instamart'>InstaMart</Link></li>
          <li> <Link to='/cart'> Cart <span>{cartItems.length}</span> </Link> </li>
          </li>
       }
       

        </ul>
      
      </div>
  
  
      {
        islogin ? <button onClick={()=>setIslogin(false)}>Logout</button>:
        <button className="bg-lime-600 rounded-md p-2" onClick={()=>setIslogin(true)} >Login</button>
        
      }
       
    </div>
  )
  }
  export  {HeaderComp,Title}