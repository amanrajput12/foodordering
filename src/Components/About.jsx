import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { Component } from "react";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";
/*
parent constructor
parent render 
  first child constructor
  first child render
  second child constructor
  second child render
  // compente mounti also commit phase
  fist child  compenetdid mount
  second child compenetdid mount
parent compentnetdidmount  
*/
class About extends Component {
    constructor(props){
        super(props)
      
        console.log('parent constructor');
    }
    componentDidMount(){
        console.log('parent compeonetdid..............................................................................................................................................................................................................................................................................................................');
        
        
    }
  render() {
    console.log('parent render');
    return (
      <div className="about">
        <h1 className="knowme bg-violet-600 text-white">About us page</h1>
        <UserContext.Consumer>
          {({user})=><h4 className="p-2 hover:bg-slate-500 hover:text-gray-50">{user.email}</h4>
            
          }
        </UserContext.Consumer>
        <h3 className="text-3xl ">Know about us........</h3>
        <Profile />
     <ProfileClass name={"first child"} xyz="abc"/>
   
      </div>
    );
  }
}
/*
when api data is load
parent constcutor
parent render
   children constructor
   children render
parent commpoentdidmount

children compoent didmount
   chldren json data log because of async
   log children comoent mounting
   children render because of state change
         //  this whole phase is known as updating
*/

export default About;
// const About = () => {
//     return(
//         <div>
// <h1>About us page</h1>
// <h3>Know about us........</h3>
// <Profile/>
// <Outlet/>
//         </div>
//     )
// }
// export default About;
