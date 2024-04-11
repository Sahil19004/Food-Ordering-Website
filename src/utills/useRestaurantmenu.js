import { useState,useEffect } from "react";
import { Menu_Api } from "../utills/constants";
const useRestaurant=(restId)=>{
  const [restinfo,setrestinfo]=useState(null);
  useEffect((()=>{
    fetchmenu();
  }),[]);


  const fetchmenu=async ()=>{
    const data=await fetch(Menu_Api+restId+"&catalog_qa=undefined&submitAction=ENTER");

    const json=await data.json();
    console.log(json)
    console.log(json.data)
    setrestinfo(json.data)
    console.info("restinfo",restinfo)


  };
  return restinfo;
};
export default useRestaurant;