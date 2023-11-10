import { useState,useEffect } from "react"
import { swiggy_menu_api_URL ,RESTAURANT_TYPE_KEY,MENU_ITEM_TYPE_KEY} from "../Components/Constants";

const useRestaurant =(id,setLoading)=>{
const [restaurant,setRestaurant]= useState([])
useEffect(()=>{
    getRestaurantInfo()
 },[])

 const getRestaurantInfo=async()=>{
    try {
         const data = await fetch(`${swiggy_menu_api_URL}${id}`,{
            method:"GET"
         })
         const json = await data.json()
         console.log(json);

         const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                        groupedCard?.cardGroupMap?.REGULAR?.
                        cards?.map(x => x.card?.card)?.
                        filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                        map(x=> x.itemCards).flat().map(x=> x.card?.info)         
            
                     // Filter for items with imageId using .find()
                        const menuItemsWithImageId = json?.data?.cards.find(x => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?.filter(x => x['@type'] === MENU_ITEM_TYPE_KEY && x.itemCards.find(item => item.card?.info?.imageId)).map(x => x.itemCards).flat().map(x => x.card?.info); 

// console.log('Filtered data with imageId:', menuItemsWithImageId);
console.log('after check');
 

setRestaurant(menuItemsWithImageId)
  setLoading(false)      
    } catch (error) {
        console.log(error);
    }
 }
return restaurant
}
export default useRestaurant