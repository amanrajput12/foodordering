import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { Component } from "react";



class About extends Component {
    constructor(props){
        super(props)
      
    }
    componentDidMount(){
       
        
        
    }
  render() {
    
    return (
      <div className="about">
        <h1 className="knowme bg-violet-600 text-white">About us page</h1>
      
          
            
          
        
        <h3 className="text-3xl text-center ">Know about us........</h3>
        <Profile />
     
   
      </div>
    );
  }
}


export default About;

