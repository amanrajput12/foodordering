
import React, { useState,useEffect } from "react";
import RestuarantCard from "./Restuarantcard";
import Simmer from "./Simmer";
import { RESTURENT_API_URL } from "./Constants";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
//  import Data from "../utils/foododeringapp-restaurent.json.json"
// import { data, info } from "autoprefixer";
const Body = () => {
const [searchtext,setSearchtext]=useState() /* return array */
const [resturent,setResturent] = useState([])
const [resdata,setResData]= useState([])
const [loading, setLoading] = useState(true);


useEffect(() => {
console.log("usefeect called");

// getRestaurants()
getRestaurantsData()
// const fetchData =Data[0].data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants

// setResData(fetchData)
//  console.log('set rest',resdata);
},[])
 
async function getRestaurantsData(){
  try {
     const data = await fetch(RESTURENT_API_URL)
     const json = await data.json()

     console.log('json rest data is 0',json.merchants);
     setResData(json.merchants)
     setResturent(json.merchants)
     console.log(resdata,resturent);
     setLoading(false)
  } catch (error) {
     console.log(error);
  }
}
 



const offline = useOnline()
if(!offline){ 
return <h2>offline please check your internet connection</h2>
}



    return(
      <>  
    
      <div className='absolute top-18 left-20  mb-10  sm:relative  gap-4'>
        <input onChange={(e)=>setSearchtext(e.target.value)} type="text" className="search-input" placeholder=" Search for restaurants....." value={searchtext}  / >
        <button className="p-[2px] sm:p-2 bg-lime-600 rounded-md" onClick={()=>{
          // need to filter the data
          // update the state
         const searchval =  filterData(searchtext,resturent)
         setResData(searchval)
        }}>Search</button>
  
   
      </div>
      <div className="flex " >
     {loading ? <Simmer/>  : <div className="flex flex-wrap justify-around">  
        {resdata.map((card,i) => (
          <RestuarantCard
            
           key={card.i}
            slug={card.slug}
         img={card.logo_url}
         cuisines={card.available_cuisines}
         areaName={card.location}
         distance={card.distance}
        
            name={card.name}
           
          />
        ))}
      </div>
        }
      
     
    
      </div>
     
      </>

    )


  };



  
  export default Body


