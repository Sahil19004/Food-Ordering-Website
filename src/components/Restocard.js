let restlist=[{
  name:"kfc",
  ratings:4,
  area:"rdc",

},{
  name:"domino",
  ratings:3,
  area:"rdc",

},{
  name:"mcd",
  ratings:2,
  area:"rdc",

},{
  name:"starbuks",
  ratings:4,
  area:"rdc",

}]
const Restocard=(props)=>{
  const {resdata}=props;
  const{ name,ratings,area}=resdata;
  
  
  return (
<div className="m-4 p-4 w-[250px] h-[350px] bg-slate-200 hover:bg-slate-400" >
  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resdata.info.cloudinaryImageId} alt="" className="h-[250px] rounded-lg"/>
  <h3 className="bold">
    {/* {name} */}
    {props.resdata.info.name}
   

  </h3>
  {/* <div>Rating:{props.resdata.ratings}</div> */}
  <div>Rating:{props.resdata.info.avgRating}</div> 
</div>
  )

}

export default Restocard;