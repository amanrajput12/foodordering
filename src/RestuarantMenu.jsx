import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Menucart from "./Menucart";
// import { swiggy_menu_api_URL ,RESTAURANT_TYPE_KEY,MENU_ITEM_TYPE_KEY} from "./constants";
import {RESTURENT_MENU_API_URL,ODERING_TYPE} from './Constants'
import Simmer from "./Simmer";
import Menucart from "./Menucart";
// import useRestaurant from "../utils/useRestuarant";
const RestuarantMenu =()=>{
  
    const [restaurant, setRestaurant] = useState([]);

   const [loading,setLoading]= useState(true)
    const {slug}= useParams()
    // const restaurant = useRestaurant(id,setLoading)
  console.log(slug);
useEffect(()=>{
getRestuarentMenu()
},[])
useEffect(() => {
    console.log('restuarent usestate', restaurant);
  }, [restaurant]);

  async function getRestuarentMenu() {
    try {
        const data = await fetch(RESTURENT_MENU_API_URL + slug + ODERING_TYPE);
        const json = await data.json();
        console.log('menu of rest', json.items);
        const arrayData = Object.values(json.items);
        setRestaurant(arrayData); // Set the menu items to the state
        setLoading(false)
    } catch (error) {
        console.log(error);
    }
}

    return(
    
        <div className="">
            {
                loading? <Simmer/> :
              <div >
         <h1 className="bg-blue-800 text-white font-bold flex justify-center p-4 rounded-3xl">Restauarant menu</h1>
         {restaurant.map((items) => (
             <Menucart  menu={items}  />
        ))}

     </div>
}
     </div>
    )
}
export default RestuarantMenu