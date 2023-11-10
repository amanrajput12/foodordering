import { createContext } from "react";

const UserContext =createContext({
    user:{
    name:"Dummy name",
    email:"dummy@gmail.com"
    }
})

export default UserContext