
import React, { useState,useEffect } from "react";
import RestuarantCard from "./Restuarantcard";
import Simmer from "./Simmer";
import { swiggy_api_URL } from "./Constants";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
  
const Body = () => {
const [searchtext,setSearchtext]=useState() /* return array */
const [resturent,setResturent] = useState([])
const [data,setData]= useState([])
const [loading, setLoading] = useState(true);


useEffect(() => {
console.log("usefeect called");
getRestaurants()
},[])



async function getRestaurants() {
  // handle the error using try... catch
  try {
    const response = await fetch(swiggy_api_URL);
    const json = await response.json();

    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);
 console.log('check json',json.data.cards.length);
    // update the state variable restaurants with Swiggy API data
    setResturent(resData);
    setData(resData);
    setLoading(false)
  } catch (error) {
    console.log(error);
  }
}

console.log('data',resturent);
// console.log('check api data ',data[3]?.card?.card?.gridElements?.infoWithStyle.restaurants);

const offline = useOnline()
if(!offline){ 
return <h2>offline please check your internet connection</h2>
}

 const cardclick=()=>{
  console.log('clicked in the card');
 }

    return(
      <>    
      <div className='absolute top-18 left-20  mb-10  sm:relative  gap-4'>
        <input onChange={(e)=>setSearchtext(e.target.value)} type="text" className="search-input" placeholder=" Search for restaurants....." value={searchtext}  / >
        <button className="p-[2px] sm:p-2 bg-lime-600 rounded-md" onClick={()=>{
          // need to filter the data
          // update the state
         const searchval =  filterData(searchtext,resturent)
         setData(searchval)
        }}>Search</button>
  
   
      </div>
      {
        loading ? <Simmer/> :
        <div className="flex flex-wrap justify-around w-full" >
  
        {data.map((card) => (
          <RestuarantCard
            id={card.info.feeDetails.restaurantId}
           key={card.info.id}
            rating={card.info.avgRating}
         img={card.info.cloudinaryImageId}
         cuisines={card.info.cuisines}
         areaName={card.info.areaName}
         distance={card.info.sla.lastMileTravelString}
         cost={card.info.costForTwo}
            name={card.info.name}
            locality={card.info.locality}
          />
        ))}
      
      
     
    
      </div>
     }
      </>

    )


  };



  
  export default Body


