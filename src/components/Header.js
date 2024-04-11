import { useState,useContext } from "react";
import { CON_LOG } from "../utills/constants";
import { Link } from "react-router-dom";
import useOnline from "../utills/useOnlinestatus";
import UserContext from "../utills/UserContext";

const Header=()=>{
  let [btnevent,setbtnevent]=useState("Login")
  const onlinestatus=useOnline()
  const data=useContext(UserContext)
  console.log(onlinestatus)


  return (
    <div className="flex justify-between shadow-lg mb-2">
      <div className="logo">
        <img src={CON_LOG} alt="" width={150} />

      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-3 gap-5 ">
          <li className="">Online status: {onlinestatus?"✅":"⚫"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>cart</li>
          <li>{data.loggedin}</li>
          {/* <li>Login</li> */}
          <button className="login-btn" onClick={()=>{
            if (btnevent=="Login"){
                setbtnevent(btnevent="logout")
              }
            else{
              setbtnevent(btnevent="Login")
            }
          console.log(btnevent)
          }
          
        
            
          
         
          
          }>{btnevent}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header;
