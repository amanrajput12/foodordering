import React from "react";
// import{IMG_CDN_URL} from './constants'
// import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const RestuarantCard = ({ locality,img, name,areaName,distance,cuisines,slug }) => {
  // console.log(name,locality,img,rating);
  console.log(areaName);
  // console.timeEnd('hello on the card');
  const cardclick =()=>{
    console.log('clicked card',);

  }
  return (
   <Link to={"restaurant/"+slug}>   
    <div   className="flex flex-col m-6 shadow-xl rounded-lg  items-center justify-center  w-72 hover:-skew-x-12 transition-all delay-300 hover:shadow-2xl h-96">
  
  <img className="w-56 h-56 rounded-md" src={img} alt='image' />
  <p>{name}</p>
  <h5 className="max-w-xs max-h-11 overflow-hidden">{cuisines}</h5>
  <h5>{areaName}</h5>
  <div className="">
      <p className="flex gap-5">{distance }Km</p> 
   
  </div>
  </div>
  </Link>
 
   
  );
};
export default RestuarantCard;