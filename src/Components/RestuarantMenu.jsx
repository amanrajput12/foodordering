import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menucart from "./Menucart";
import { swiggy_menu_api_URL ,RESTAURANT_TYPE_KEY,MENU_ITEM_TYPE_KEY} from "./constants";
import Simmer from "./Simmer";
import useRestaurant from "../utils/useRestuarant";
const RestuarantMenu =()=>{
  
   const [loading,setLoading]= useState(true)
    const {id}= useParams()
    const restaurant = useRestaurant(id,setLoading)
  

    return(

        <div className="">
            {loading? <Simmer/>:
        <div >
         <h1 className="bg-blue-800 text-white font-bold flex justify-center p-4 rounded-3xl">Restauarant menu</h1>
        {restaurant.map((items)=>
            <Menucart key={items.id} menu={items}/>
        )}
     </div>
      }
     </div>
    )
}
export default RestuarantMenu