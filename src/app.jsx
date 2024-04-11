import React, { useEffect } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Restocard from "./components/Restocard";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { useState } from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Restaurantmenu from "./components/Restaurantmenu";
import { Link } from "react-router-dom";
import { Provider} from "react-redux";
import appstore from "./utills/appstore";
import { UseSelector } from "react-redux";


// let restlist=[{
//   name:"kfc", 
//   ratings:4,
//   area:"rdc",

// },{
//   name:"domino",
//   ratings:3,
//   area:"rdc",

// },{
//   name:"mcd",
//   ratings:2,
//   area:"rdc",

// },{
//   name:"starbuks",
//   ratings:4,
//   area:"rdc",

// }]

const Body=()=>{

  const [restlist,setrestlist]=useState([]);
  const [uurestlist,setuurestlist]=useState([])
  const [searchtext,setsearchtext]=useState("")

useEffect(()=>{
  console.log("heiefiehi")
  fetchData();
},[]);
const fetchData=async ()=>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6741058&lng=77.4433373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json=await data.json();
  console.log(json)
  setrestlist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  setuurestlist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  console.log()
    
};
{if(restlist.length==0){
  return <h1>Loading....</h1>
} }

  return ( <div className="">
    <div className="search-filter flex">
      <div className="search">
        <input type="text" className="border border-solid border-black" value={searchtext} onChange={(e)=>{
          setsearchtext(e.target.value)
          // console.log(e.target.value)
        }}/>
        <button onClick={()=>{
          //filter the restrauant cards and update the UI
          const uurestlist=restlist.filter((res)=>{
           return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            console.log(res.info.name.includes(searchtext))
          
          });
        
          setuurestlist(uurestlist)
          
          
       

        }} className="bg-slate-600 m-4 px-4 py-0.9 ">search</button>
      </div>
      <button className="bg-slate-400 m-4 px-4 py-0.9 rounded-lg" onClick={()=>{
        const urestlist=uurestlist.filter((res)=> res.info.avgRating>=4.2);
        setuurestlist(urestlist)
        console.log(restlist)

        console.log("button clicked")
        console.log(urestlist)
      }}>Top rated resto</button>
    </div>
    <br />  
    
    <div className="flex flex-wrap justify-center ">
      {uurestlist.map((he,index)=>{
           return <Link to={"/restaurants/"+he.info.id}> <Restocard key={index} resdata={he} /></Link>
             {console.log(he)}
      })}
 
   
        
    </div>
 
  </div>)
};
const AppLayout=()=>{
  return (   
    <Provider store={appstore}>
    <div className="app">
      <Header/>
      
      <br />
      <Outlet/>
    </div>
    </Provider>
  )
}
const approuter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
        
      },
      {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/restaurants/:restId",
      element:<Restaurantmenu/>
    }
  
  ],
    errorElement:<Error/>
  },
  
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={approuter}/>) 

//outlet have the childrens in the approuter