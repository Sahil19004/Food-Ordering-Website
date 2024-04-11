const ItemsMenu=({items})=>{
return(
  <div>
    
    {items.map((item)=>(
      <div key={item.card.info.id} className="border-black border-b-2 shadow-lg text-left p-3">
        <div >
          <span>{item.card.info.name}</span>
          <span> -  ₹{item.card.info.price? item.card.info.price/100:item.card.info.defaultPrice/100}</span>
        </div>
        <p>{item.card.info.description}</p>
      <divv>
        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Add+</button>
      </divv>
      </div>
    ))}
  </div>
)

};

export default ItemsMenu;