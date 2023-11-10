import React, { useState } from "react";
const Section =({title,description,isVisible,setIsVisible})=>{
    
    return(
        <div>
            <h1>{title}</h1>
          {isVisible?( <button  onClick={()=>setIsVisible(false) } className="bg-lime-900 m-2 p-2 rounded-lg">Hide</button>):
         (  <button onClick={()=>setIsVisible(true)}  className="bg-lime-900 m-2 p-2 rounded-lg">show</button>) }
           {isVisible && <h5 className="   duration-20 ease-in ">{description}</h5>}
        </div>
    )
}
const Instamart =()=>{
    const [visibleSection,setVisibleSection] = useState("about")
  
return(
    <div className="bg-slate-800 text-gray-50  
    e5p-2  m-2 font-bold">
       <Section 
       title={"About Instmart"}
       description={"This is all about insta mart"}
       isVisible={visibleSection === "about"}
       
       setIsVisible={()=>setVisibleSection(
            "about"  )}
       />
       <Section 
       title={"Team Instmart"}
       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde reiciendis cum tempora saepe, aliquid animi laboriosam dolores. Natus, cum. Enim!"}
       isVisible={visibleSection=== "team"}
       setIsVisible={()=>{
         setVisibleSection("team")
      

       }}
       />
       
  
    </div>
)
}
export default Instamart;