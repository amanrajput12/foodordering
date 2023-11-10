import React, { useEffect, useState } from "react";

const useOnline =()=>{
const [isonline,setIsonline ]= useState(true)
useEffect(()=>{
        
    const hanleOnline =()=>{
  setIsonline(true)
    }
    const handleOffline =()=>{
        setIsonline(false)

    }
window.addEventListener('online',hanleOnline)
window.addEventListener('offline',handleOffline)

return()=>{
window.removeEventListener('online',hanleOnline)
window.removeEventListener('offline',handleOffline)
 
}
},[])
return isonline   
}
export default useOnline;