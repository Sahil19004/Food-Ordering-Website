import { useState } from "react";
import ItemsMenu from "./ItemsMenu";
const RestaurantCategory=({data,showitem,setshowindex})=>{
  // const [showitem,setshowitem]=useState(showitem)
const Handle=()=>{
  // setshowitem(!showitem)
  setshowindex()


};
  
return (
  <div>
    <div className="w-6/12 m-auto bg-gray-200 my-4 p-4 shadow-lg " >
      <div className="flex justify-between cursor-pointer" onClick={Handle}>
      <span>{data.title} ({data.itemCards.length})</span>
      <span> ↓ </span>
      </div>
      <div>{showitem && <ItemsMenu items={data.itemCards}/>}</div>
    </div>
  </div>
)
};
export default RestaurantCategory;