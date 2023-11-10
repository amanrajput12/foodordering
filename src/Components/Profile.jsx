import React, { useEffect, useState } from "react";

const Profile =(props)=>{
    const [count] = useState(0)
    useEffect(()=>{
        // api call
        // console.log('useeffect');
      const timer=  setInterval(() => {
            console.log('namaste react op functional');
        }, 1000);
        return ()=>{
            console.log('useeffect return');
            clearInterval(timer)
        }
    },[count])

    //  console.log('render of funtion')
    return(
        <div>
            <h2>Profile page </h2>
            <h3>Count : {count}</h3>
        </div>
    )
}
export default Profile