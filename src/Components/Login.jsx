import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login =()=>{
    const handlelogin =()=>{
        toast.success("Login sucess",{
            position:"bottom-right"
        })
    }
    return(
        <div className="w-screen h-screen  flex flex-col items-center ">
            <div className="flex flex-col items-center mt-10 shadow-xl w-3/4 h-1/2 sm:w-1/4 rounded-lg">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />

                <input className="border border-slate-600 w-40 sm:w-72" type="text" placeholder="email" defaultValue="test@gmail.com" />
                <input className="border border-slate-600 w-40 sm:w-72 mt-2" type="password" placeholder="password" defaultValue="12345678" />
                <button onClick={handlelogin} className="bg-cyan-700 mt-2 p-2 rounded-md text-yellow-50">
                  <Link to='/'>  Login </Link>
                  </button>
                </div>
                <ToastContainer/>
        </div>
    )
}
export default Login