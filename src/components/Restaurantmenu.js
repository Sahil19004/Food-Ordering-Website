import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Menu_Api } from "../utills/constants";
import useRestaurant from "../utills/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
const Restaurantmenu=()=>{
  const [showindex,setshowindex]=useState()


const {restId}=useParams();

console.log(restId)
const restinfo=useRestaurant(restId)

  if(restinfo==null){
    return <h1>loading....</h1>
  }


 

const infos=restinfo.cards[0].card.card.info;
const {itemCards}=restinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
const category=restinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log("category",category)






return (<div className="text-center">
  <h1 className="font-bold my-6 text-2xl">{infos.name}</h1>
  <h3 className="font-bold text-lg">{infos.city}-{infos.costForTwoMessage
}</h3>
  <h3></h3>
  <h1>Menu</h1>
{/* <ul>{itemCards.map((item,key)=> ( <li key={key}>{item.card.info.name} Rs.{item.card.info.price}</li>) )}

  <li></li>
  <li></li>

</ul> */}
{/* {category accordian} */}
{
category.map((category,index)=>(
  <RestaurantCategory data={category?.card.card} showitem={index==showindex?true:false} setshowindex={()=>setshowindex(index)} />
  ))
}

</div>)




  
  
}

export default Restaurantmenu;