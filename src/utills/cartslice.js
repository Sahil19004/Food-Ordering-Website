import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice(
  {
    name:"cart",
    initialState:{
      item:[]
    },
    reducers:{
      addItem:(state,action)=>{
        // mutating the state here 
        state.item.push(action.payload);
      },
      removeItem:(state,action)=>{
        state.item.pop()

      },
      clearCart:(state,action)=>{
        state.item.length=0;
      }
    }
  }
)
const {addItem,removeItem,clearCart}=cartslice.actions;
export default cartslice.reducer;