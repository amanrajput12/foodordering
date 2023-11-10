import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom";
const rootval = document.getElementById("root");
import * as obj from "./Components/Header"; 
const  HeaderComp = obj.HeaderComp;
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestuarantMenu from "./Components/RestuarantMenu";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import ProfileClass from "./Components/ProfileClass";
import Simmer from "./Components/Simmer";
import './index.css'
import UserContext from "./utils/UserContext";
// import Instamart from "./Components/Instamart";
import { Provider } from "react-redux";
import Store from "./utils/store";
import Cart from "./Components/Cart";

// on demand loading=>supsend loading so used supsense 
// never doing lazy loading inside components
const Instamart = lazy(()=>import('./Components/Instamart'))
// chunking
// code spliting  
// dynamic bundling
// lazy loading 
// on demand loading
const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Aman Rajput",
    email:"support@aman.com"
  })
  return (
    <Provider store={Store}>
    <UserContext.Provider value={{user:user}}>
      <HeaderComp />
     <Outlet/>
      <Footer />
    </UserContext.Provider> 
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>,
        children:[
          {
            path:'profile',/* if the /profile route it give the absolute path in childen localhost:1234/profile not the localhost:1234/about/profile */ 
            element:<ProfileClass name={"Aman"}/>   
          }
        ]
       
      },
      {
        path:'/contact',
        element:<Contact/>
      },{
        path:'/restaurant/:id',
        element:<RestuarantMenu/>
      },
      {
        path:'instamart',
        element:(
          <Suspense fallback={<Simmer/>}>
            <Instamart/>
          </Suspense>
        )
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  },
  
 
])

const root = ReactDOM.createRoot(rootval);

root.render(<RouterProvider router={approuter} />);

// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))
