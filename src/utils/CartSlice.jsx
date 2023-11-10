import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        cartTotal:0,


    },
    reducers:{
        addItem:(state,action)=>{
            // state.items.push(action.payload)
           const newItem = action.payload
        //    to check if item is already exist or not
        
         const existingItem = state.items.find((item)=>item.id===newItem.id)
         if(existingItem){
            existingItem.quantity++
            existingItem.totalPrice +=newItem.price
            if(newItem.price){
            state.cartTotal += newItem.price
            }
         }
         else{
            state.items.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.name,
                image:newItem.image,
                description:newItem.description
               
            })
            state.totalQuantity++
            if(newItem.price){
            state.cartTotal += newItem.price
            }
         }
        },
        removeItem:(state,action)=>{
           const {id} = action.payload
           const existingItem =state.items.find((item)=>item.id ===id)
           if(existingItem.quantity===1){
            state.items = state.items.filter((item)=>item.id !==id)
            state.cartTotal -= existingItem.price
           }
           else{
            existingItem.quantity--
            existingItem.totalPrice -=existingItem.price
            state.cartTotal -=existingItem.price
           }
        },
        clearCart:(state)=>{
            state.items =[]
            state.cartTotal=0
        }
    }
})

export const {addItem,removeItem,clearCart}= cartSlice.actions 

export default cartSlice.reducer