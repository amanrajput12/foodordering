import React, { useEffect, useState } from "react";

const Profile = (props)=>{
    const [data,setdata]= useState([])
async function  profileData(){
    const data = await fetch('https://api.github.com/users/amanrajput12')
    const json = await data.json()
    console.log('api data',json);
    setdata(json)
}
    useEffect(()=>{
       profileData()
     
    },[])

    console.log(data);
    return(
        <div className="flex flex-col items-center">
            <h2>Profile page </h2>
           <h3>{data.name}</h3>
           <img className="rounded-full w-1/4" src="https://th.bing.com/th/id/OIP.zrxzA5ujpqbaPQiZMs1uZgHaHW?rs=1&pid=ImgDetMain" alt="" />
        </div>
    )
}
export default Profile
