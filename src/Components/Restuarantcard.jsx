import React from "react";
import{IMG_CDN_URL} from './constants'
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const RestuarantCard = ({ locality, name,img,id,rating,cuisines,areaName,distance,cost }) => {
  console.log(name,locality,img,rating);
  console.timeEnd('hello on the card');
  const cardclick =()=>{
    console.log('clicked card',id);

  }
  return (
   <Link to={`/restaurant/${id}`}> 
   
     <div   className="flex flex-col m-6 shadow-xl rounded-lg  items-center justify-center  w-72 hover:-skew-x-12 transition-all delay-300 hover:shadow-2xl h-96">
  
  <img className="w-56 rounded-md" src={IMG_CDN_URL+img} alt='image' />
  <p>{name}</p>
  <h5 className="max-w-xs">{cuisines.join(", ")}</h5>
  <h5>{areaName}</h5>
  <div className="">
      <p className="flex gap-5"> <AiFillStar/> {rating}</p>
 <p>{distance}</p>
  <h4>{cost}</h4>
  </div>
  </div>
    
    </Link>
  );
};
export default RestuarantCard;